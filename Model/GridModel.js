class GridModel {
    
    constructor(regionId){
        this.regionId = regionId;
        this.columns = 10;
        this.rows = 10;
        this.grid = [];
        this.regions = JSON.parse(regionData);
        this.loadRegion(regionId);
    }
    
    loadRegion(regionId) {
        this.regionId = regionId;
        let region = this.regions[regionId];
        this.columns = region.grid[0].Columns.length;
        this.rows = region.grid.length;
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                this.grid[y * this.columns + x] = new GridNodeModel(region.grid[y].Columns[x]);
            }
        }

        this.weatherModel = new WeatherModel(region["reference city"]);
    }

    calculateNodeSize(){
        let w = (window.innerWidth * 0.6) / this.columns;
        let h = (window.innerHeight * 0.8) / this.rows;
        let nodeSize = h;
        if(nodeSize > w) nodeSize = w;
        nodeSize = Math.floor(nodeSize);
        GridNodeModel.nodeSize = nodeSize
    }

    getCurrentRegion(){
        return this.regions[this.regionId];
    }

    drop(x, y, monster){
        let nodeX = Math.floor(x / GridNodeModel.nodeSize);
        let nodeY = Math.floor(y / GridNodeModel.nodeSize);
        if(nodeX >= 0 && nodeX < this.columns && nodeY >= 0 && nodeY < this.rows){
            this.grid[nodeY * this.columns + nodeX].placeMonster(monster);
            return true;
        }
        return false;
    }

    getNonWalkableImage(){
        return this.getCurrentRegion()["non-walkable-image"];
    }

}