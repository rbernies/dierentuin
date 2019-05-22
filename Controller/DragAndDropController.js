import TileModel from "../Model/Zoo/TileModel.js"
import MonsterModel from "../Model/Monsters/MonsterModel.js"

export default class DragAndDropController {
    
    constructor(gridModel, gridView){
        this.gridModel = gridModel;
        this.gridView = gridView;
        this.canvas = document.querySelector("canvas");
        this.monsterPreview = document.getElementById("monsterPreview");
        this.monster = document.getElementById("monster");
        this.canvas.addEventListener("drop", (event) => { this.drop(event); });
        this.canvas.addEventListener("dragover", (event) => { this.allowDrop(event); });
        this.canvas.addEventListener("mousedown", (event) => { this.mouseDown(event); });
        this.monsterPreview.addEventListener("drop", (event) => { this.drop(event); });
        this.monsterPreview.addEventListener("dragover", (event) => { this.allowDrop(event); });
        this.monster.addEventListener("dragstart", (event) => { this.drag(event, new MonsterModel()); });

        this.idCount = 0;

        let tileSize = TileModel.tileSize;
        this.monster.style.width = tileSize * this.gridModel.scale + "px";
        this.monster.style.height = tileSize * this.gridModel.scale + "px";
    }

    allowDrop(ev){
        ev.preventDefault();
    }

    drag(ev, monster){
        console.log("DRAG - SETDATA: " + ev.target.id);
        ev.dataTransfer.setData("text", ev.target.id);
        ev.dataTransfer.setData("monster", monster.getJson());
    }

    mouseDown(ev){
        console.log("MOUSEDOWN");
        let rect = this.canvas.getBoundingClientRect();
        let tile = this.gridModel.getTile(ev.clientX - rect.left, ev.clientY - rect.top);
        let monster = tile.getMonster();
        if(monster){
            let tileSize = TileModel.tileSize;
            let y = Math.floor(tile.id / this.gridModel.columns) * tileSize * this.gridModel.scale + rect.top;
            let x = (tile.id % this.gridModel.columns) * tileSize * this.gridModel.scale + rect.left;
            let img = new Image();
            img.style.position = "absolute";
            img.style.left = x + "px";
            img.style.top = y + "px";
            img.style.width = tileSize * this.gridModel.scale + "px";
            img.style.height = tileSize * this.gridModel.scale + "px";
            img.draggable = true;
            img.zIndex = 10;
            img.id = "monsterImage";
            img.addEventListener("dragstart", (event) => { this.drag(event, monster); }, false);
            img.addEventListener("dragend", (event) => { this.dragEnd(event, tile, monster); });
            img.src = monster.getImage();
            document.body.appendChild(img);
            tile.removeMonster();
            this.gridView.resize();
        }
    }

    dragEnd(ev, tile, monster){
        console.log("DRAGEND - REMOVE monsterImage");
        let elem = document.getElementById("monsterImage");
        let mmonster = MonsterModel.createMonsterFromJson(monster);
        if(elem) elem.remove();
        tile.placeMonster(mmonster);
        this.gridView.resize();
    }

    drop(ev){
        console.log("DROP");
        let elem = document.getElementById(ev.dataTransfer.getData("text"));
        let monster = MonsterModel.createMonsterFromJson(ev.dataTransfer.getData("monster"));

        if(ev.target.nodeName == "CANVAS"){
            let rect = this.canvas.getBoundingClientRect();
            let x = ev.clientX - rect.left;
            let y = ev.clientY - rect.top;
            x /= this.gridModel.scale;
            y /= this.gridModel.scale;
            if(x <= rect.right && y <= rect.bottom){
                let dropped = this.gridModel.drop(x, y, monster);
                if(dropped) this.gridView.resize();
            }
        }else if(!(elem.id == "monster" && ev.target.id == "monsterPreview")){
            this.monster.src = elem.src;
            if(elem) elem.remove();
        }
    }
}