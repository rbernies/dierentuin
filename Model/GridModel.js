class GridModel {
    
    constructor(){
        this.columns = 10;
        this.rows = 10;
        this.grid = [];
        this.loadRegion(JSON.parse(regionData), 0);
    }

    loadRegion(regions, regionId) {
        let region = regions[regionId];
        this.columns = region.grid[0].Columns.length;
        this.rows = region.grid.length;
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                this.grid[y * this.columns + x] = new GridNodeModel(region.grid[y].Columns[x]);
            }
        }
    }

}