import GridModel from "../Model/Zoo/GridModel"
import GridView from "../View/GridView"

export default class GridController {

    constructor(regionId, monsterController, configuratorController){
        this.configuratorController = configuratorController;
        this.monsterController = monsterController;
        this.model = new GridModel(monsterController, regionId);
        this.view = new GridView(this, monsterController);
    }

    resetConfigurator(){
        this.configuratorController.resetConfigurator();
    }

    showMonsterProperties(event){
        this.configuratorController.showMonsterProperties(event);
    }

    previewMonster(){
        this.view.previewFile();
    }

    getModel(){
        return this.model;
    }

    changeRegion(regionId){
        this.model.changeRegion(regionId);
    }
}