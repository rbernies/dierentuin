import GridModel from "../Model/Zoo/GridModel"
import GridView from "../View/GridView"

export default class GridController {

    constructor(regionId){
        this.model = new GridModel(regionId);
        this.view = new GridView(this, this.model.columns, this.model.rows);
    }

    changeRegion(regionId){
        this.model = new GridModel(regionId);
    }

    getRegions(){
        return this.model.regions;
    }

    getCurrentRegion(){
        return this.model.getCurrentRegion();
    }
}