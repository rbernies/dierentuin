class GridView {

    constructor(controller, columns, rows){
        this.columns = columns;
        this.rows = rows;
        this.controller = controller;

        this.canvas = document.querySelector('canvas');
        this.g = this.canvas.getContext('2d');

        const debounce = (func) => {
            let timer
            return (event) => {
              if (timer) { clearTimeout(timer) }
              timer = setTimeout(func, 100, event)
            }
        }
          
        window.addEventListener('resize', debounce(() => {
            this.resize();
        }))

        this.resize();

        this.addRegionOptions();
    }

    addRegionOptions(){
        let sRegion = document.getElementById("region-select");
        let regions = this.controller.getRegions();

        for(let i = 0; i < regions.length; i++){
            let option = document.createElement("option");
            option.setAttribute("value", i);
            let text = document.createTextNode(regions[i].name);
            option.appendChild(text);
            sRegion.appendChild(option);
        }

        sRegion.onchange = () => { 
            this.controller.changeRegion(sRegion.selectedIndex);
            this.resize();
        };
    }

    drop(x, y, monster){
        let rect = this.canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        if(x <= rect.right && y <= rect.bottom)
            return this.controller.model.drop(x, y, monster);
        return false;
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.controller.model.calculateTileSize();
        let tileSize = TileModel.tileSize;

        this.canvas.width = this.columns *  tileSize;
        this.canvas.height = this.rows * tileSize;

        let grid = this.controller.model.grid;
        let image = this.controller.model.getNonWalkableImage();

        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                this.g.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
                if(grid[y * this.columns + x].isWalkable() > 0){
                    let img = new Image();
                    img.onload = () => {
                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);
                    }
                    img.src = image;
                }
            }
        }
    }
}