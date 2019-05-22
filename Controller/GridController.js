import GridModel from "../Model/Zoo/GridModel"
import GridView from "../View/GridView"

export default class GridController {

    constructor(regionId){
        this.model = new GridModel(regionId);
        this.view = new GridView(this.model);
        this.dragAndDropController = new DragAndDropController(this.model, this.view);
    }
}