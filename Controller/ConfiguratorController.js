import ConfiguratorView from "../View/ConfiguratorView"


export default class ConfiguratorController {

    constructor(monsterController, gridController) {
        this.gridController = gridController;
        this.monsterController = monsterController;
        this.view = new ConfiguratorView(this, this.monsterController.monsterTypes);
    }

    startMonsterCreation(monsterType) {
        this.monsterController.createNewMonster(monsterType);
        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions, monsterType);
    }

    updateMonster(selector) { 
        this.monsterController.updateMonster(selector.id, selector.value);
        this.view.drawNextInputField(selector.id);    
    }

    previewMonster(){
        this.gridController.previewMonster();
    }

    saveMonster() {
        this.monsterController.saveMonster();
        this.view.resetMonsterCreator();
    }
}