
export default class GridView {

    constructor(controller, monsterController){
        this.controller = controller;
        this.monsterController = monsterController;
        this.monsterPreviewDiv = document.getElementById("monsterPreview");

        this.addRegionOptions();
        this.addGrid();
    }

    createImageTag(){
        let preview = document.createElement("IMG");
        let monsterId = this.monsterController.monsters.length;
        preview.id = monsterId + " monster";
        preview.className = "tile";
        preview.draggable = true;
        preview.addEventListener("dragstart", this.drag);
        preview.addEventListener("click", event => this.showMonsterProperties(event));

        return preview;
    }

    previewFile() {
        let preview = this.createImageTag();     
        let file    = document.querySelector('input[type=file]').files[0];
        let reader  = new FileReader();

        reader.onloadend = () => {
          preview.src = reader.result;
          this.monsterController.updateMonster("monsterImage", preview.src);
        }

        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }
        this.monsterPreviewDiv.appendChild(preview);       
      }

    showMonsterProperties(event){
        let ids = event.target.id.split(" ");
        if(ids.length > 1){
            let monster = this.monsterController.monsters[ids[0]];
            let div = document.getElementById(monster.position);
    
            let audio = new Audio(monster.audio);
            audio.loop = false;
            audio.play();
        }
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
            this.monsterController.regionId = sRegion.selectedIndex;
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
            if(this.monsterController.monsters[i].regionId == this.controller.getModel().getRegionId()){
                let div = document.getElementById(this.monsterController.monsters[i].position);
                let monsterId = this.monsterController.monsters[i].monsterId;
                let img = document.createElement("img");
                img.className = "tile";
                img.id = monsterId + " monster";
                img.src = this.monsterController.monsters[i].image;
                img.addEventListener("dragstart", this.drag);
                img.addEventListener("click", event => this.showMonsterProperties(event));
                div.appendChild(img);
            }
        }
    }

    allowDrop(ev){
        ev.preventDefault();
    }

    drop(ev){
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");  
        let monsterImg = document.getElementById(data);
        ev.target.appendChild(monsterImg);
        console.log(data);
        let ids = data.split(" ");
        if(ids.length > 1){
            let monsterId = ids[0];
            if(monsterId >= this.monsterController.monsters.length){
                this.monsterController.saveMonster();
            }
            this.monsterController.monsters[monsterId].position = ev.target.id;
            this.monsterController.detectMonsters(monsterId, this.controller.getModel().columns);
            this.monsterController.saveToLocalStorage();
        }                       
    }

    drag(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }
}