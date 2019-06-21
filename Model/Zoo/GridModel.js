import WeatherModel from "./WeatherModel"

export default class GridModel {

    constructor(monsterController, regionId){
        this.regionId = regionId;
        this.columns = 10;
        this.rows = 10;
        this.regions = JSON.parse(regionData);
        this.monsterController = monsterController;
        this.loadRegion(regionId);
    }
    
    loadRegion(regionId) {
        this.regionId = regionId;
        let region = this.regions[regionId];
        this.columns = region.grid[0].Columns.length;
        this.rows = region.grid.length;

        this.weatherModel = new WeatherModel(this.monsterController, region["reference city"]);
    }

    isPlacableTile(tileId){
        let region = this.getCurrentRegion();
        let x = tileId % this.columns;
        let y = Math.floor(tileId / this.columns);
        return region.grid[y].Columns[x] == 1 ? false : true;
    }

    getCurrentRegion(){
        return this.regions[this.regionId];
    }

    getNonWalkableImage(){
        return this.getCurrentRegion()["non-walkable-image"];
    }
  
    changeRegion(regionId){
        this.loadRegion(regionId);
    }

    getRegionId(){
        return this.regionId;
    }

    getRegions(){
        return this.regions;
    }
}