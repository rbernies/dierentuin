import GridModel from "../Model/Zoo/GridModel"
import GridView from "../View/GridView"

export default class GridController {

    constructor(regionId, monsterController){
        this.model = new GridModel(regionId);
        this.view = new GridView(this, monsterController);
    }

    previewMonster(){
        this.view.previewFile();
    }

    getModel(){
        return this.model;
    }

    showMonsterProperties(monsterId){
        this.view.showMonsterProperties(monsterId);
    }

    changeRegion(regionId){
        this.model.changeRegion(regionId);
    }
}