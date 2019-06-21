
export default class GridView {

    constructor(controller, monsterController) {
        this.controller = controller;
        this.monsterController = monsterController;
        this.addRegionOptions();
        this.addGrid();
    }

    addRegionOptions() {
        let sRegion = document.getElementById("region-select");
        let regions = this.controller.getModel().getRegions();

        for (let i = 0; i < regions.length; i++) {
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

    addGrid() {
        let grid = document.querySelector(".grid");
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        for (let i = 0; i < this.controller.getModel().columns * this.controller.getModel().rows; i++) {
            let y = Math.floor(i / this.controller.getModel().columns);
            let x = Math.floor(i % this.controller.getModel().columns);

            let div = document.createElement("div");
            div.id = "" + i;
            div.addEventListener("dragover", this.allowDrop);
            div.addEventListener("drop", (event) => { this.drop(event); });

            let region = this.controller.getModel().getCurrentRegion();
            if (region.grid[y].Columns[x] == 1) {
                let img = document.createElement("img");
                img.className = "tile";
                img.src = this.controller.getModel().getNonWalkableImage();
                div.appendChild(img);
            }

            grid.appendChild(div);
        }

        for (let i = 0; i < this.monsterController.monsters.length; i++) {
            if (this.monsterController.monsters[i].regionId == this.controller.getModel().getRegionId()) {
                let div = document.getElementById(this.monsterController.monsters[i].position);
                let monsterId = this.monsterController.monsters[i].monsterId;
                let img = document.createElement("img");
                img.className = "tile";
                img.id = monsterId + " monster";
                img.src = this.monsterController.monsters[i].image;
                img.addEventListener("dragstart", this.drag);
                img.addEventListener("click", event => this.controller.showMonsterProperties(event));
                div.appendChild(img);
            }
        }
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let monsterImg = document.getElementById(data);
        ev.target.appendChild(monsterImg);
        let ids = data.split(" ");
        if (ids.length > 1) {
            let monsterId = ids[0];
            if (monsterId >= this.monsterController.monsters.length) {
                this.monsterController.saveMonster();
            }
            this.monsterController.monsters[monsterId].position = ev.target.id;
            this.monsterController.detectMonsters(monsterId, this.controller.getModel().columns);
            this.monsterController.saveToLocalStorage();
            this.controller.resetConfigurator();
        }
    }

    drag(ev) {
        let info = document.querySelector(".monsterInfo");
        let span = document.querySelector(".monsterInfoText");
        if (info != null) {
            span.parentNode.removeChild(span);
            info.className = "";
        }
        ev.dataTransfer.setData("text", ev.target.id);
    }
}