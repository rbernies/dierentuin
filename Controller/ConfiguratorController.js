import ConfiguratorView from "../View/ConfiguratorView"


export default class ConfiguratorController {

    constructor(monsterController) {
        this.monsterController = monsterController;
        this.view = new ConfiguratorView(this, this.monsterController.monsterTypes);
    }

    startMonsterCreation(monsterType) {
        this.monsterController.createNewMonster(monsterType);
        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions, monsterType);
    }

    showMonsterProperties(event){
        this.view.showMonsterProperties(event);
    }  

    resetConfigurator(){
        this.view.resetMonsterCreator();
    }

    updateMonster(selector) { 
        this.monsterController.updateMonster(selector.id, selector.value);
        this.view.drawNextInputField(selector.id);    
    }

    editMonster(monster){
        this.monsterController.editMonster(monster);
        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions, monster.monsterType);
    }

    saveMonster() {
        this.monsterController.saveMonster();
    }
}