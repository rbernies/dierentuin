class GridView {

    constructor(model){
        this.model = model;

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
        let regions = this.model.getRegions();

        for(let i = 0; i < regions.length; i++){
            let option = document.createElement("option");
            option.setAttribute("value", i);
            let text = document.createTextNode(regions[i].name);
            option.appendChild(text);
            sRegion.appendChild(option);
        }

        sRegion.onchange = () => { 
            this.model.changeRegion(sRegion.selectedIndex);
            this.resize();
        };
    }

    resize() {
        console.log("RESIZE");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.model.calculateTileSize();
        let tileSize = TileModel.tileSize;

        this.canvas.width = this.model.columns *  tileSize;
        this.canvas.height = this.model.rows * tileSize;

        let grid = this.model.grid;
        let image = this.model.getNonWalkableImage();

        this.g.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for(let y = 0; y < this.model.rows; y++){
            for(let x = 0; x < this.model.columns; x++){
                this.g.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
                
                if(grid[y * this.model.columns + x].isWalkable() > 0){
                    let img = new Image();
                    img.onload = () => {
                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);
                    }
                    img.src = image;
                }

                let monster = grid[y * this.model.columns + x].getMonster();
                if(monster){
                    let img = new Image();
                    img.onload = () => {
                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);
                    }
                    img.src = monster.getImage();
                }
            }
        }
        
        this.model.scale = this.canvas.clientWidth / this.canvas.width;
    }
}