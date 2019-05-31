import WeatherModel from "./WeatherModel"

export default class GridModel {
    
    constructor(regionId){
        this.regionId = regionId;
        this.columns = 10;
        this.rows = 10;
        this.regions = JSON.parse(regionData);
        this.loadRegion(regionId);
    }
    
    loadRegion(regionId) {
        this.regionId = regionId;
        let region = this.regions[regionId];
        this.columns = region.grid[0].Columns.length;
        this.rows = region.grid.length;

        this.weatherModel = new WeatherModel(region["reference city"]);
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