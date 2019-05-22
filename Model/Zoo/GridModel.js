import WeatherModel from "./WeatherModel"
import TileModel from "./TileModel"

export default class GridModel {
    
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
                this.grid[y * this.columns + x] = new TileModel(region.grid[y].Columns[x]);
            }
        }

        this.weatherModel = new WeatherModel(region["reference city"]);
    }

    calculateTileSize(){
        let w = (window.innerWidth * 0.6) / this.columns;
        let h = (window.innerHeight * 0.8) / this.rows;
        let tileSize = h;
        if(tileSize > w) tileSize = w;
        tileSize = Math.floor(tileSize);
        TileModel.tileSize = tileSize;
    }

    getCurrentRegion(){
        return this.regions[this.regionId];
    }

    drop(x, y, monster){
        let tileX = Math.floor(x / TileModel.tileSize);
        let tileY = Math.floor(y /  TileModel.tileSize);
        if(tileX >= 0 && tileX < this.columns && tileY >= 0 && tileY < this.rows){
            this.grid[tileY * this.columns + tileX].placeMonster(monster);
            return true;
        }
        return false;
    }

    getNonWalkableImage(){
        return this.getCurrentRegion()["non-walkable-image"];
    }

}

