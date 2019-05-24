import GridModel from "../Model/Zoo/GridModel"
import GridView from "../View/GridView"

export default class GridController {

    constructor(regionId){
        this.model = new GridModel(regionId);
        this.view = new GridView(this);
    }

    getModel(){
        return this.model;
    }

    changeRegion(regionId){
        this.model.changeRegion(regionId);
    }
}