
export default class GridView {

    constructor(controller, monsterController){
        this.controller = controller;
        this.monsterController = monsterController;

        this.addRegionOptions();
        this.addGrid();

        //these 2 lines belong in the class where the monster is being created
        let monster = document.getElementById("monster");
        monster.addEventListener("dragstart", this.drag);
    }

    addRegionOptions(){
        let sRegion = document.getElementById("region-select");
        let regions = this.controller.getModel().getRegions();

        for(let i = 0; i < regions.length; i++){
            let option = document.createElement("option");
            option.setAttribute("value", i);
            let text = document.createTextNode(regions[i].name);
            option.appendChild(text);
            sRegion.appendChild(option);
        }

        sRegion.onchange = () => { 
            this.controller.changeRegion(sRegion.selectedIndex);
            this.addGrid();
        };
    }

    addGrid(){
        let grid = document.querySelector(".grid");
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        for(let i = 0; i < this.controller.getModel().columns * this.controller.getModel().rows; i++){
            let y = Math.floor(i / this.controller.getModel().columns);
            let x = Math.floor(i % this.controller.getModel().columns);

            let div = document.createElement("div");
            div.id = "" + i;
            div.addEventListener("dragover", this.allowDrop);
            div.addEventListener("drop", (event) => { this.drop(event); });

            let region = this.controller.getModel().getCurrentRegion();
            if(region.grid[y].Columns[x] == 1){
                let img = document.createElement("img");
                img.className = "tile";
                img.src = this.controller.getModel().getNonWalkableImage();
                div.appendChild(img);
            }

            grid.appendChild(div);
        }

        for(let i = 0; i < this.monsterController.monsters.length; i++){
            let div = document.getElementById(this.monsterController.monsters[i].position);
            let img = document.createElement("img");
            img.className = "tile";
            img.src = this.monsterController.monsters[i].image;
            div.appendChild(img);
        }
    }

    allowDrop(ev){
        ev.preventDefault();
    }

    //this method belongs in the class where the monster is being created
    drop(ev){
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let ids = data.split(" ");
        console.log(data);
        console.log(ids);
        if(ids.length > 1){
            this.monsterController.monsters[ids[0]].position = ev.target.id;
            console.log(this.monsterController.monsters);
            let monsterImg = document.getElementById(data);
            ev.target.appendChild(monsterImg);
        }
    }

    drag(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }
}