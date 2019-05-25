import ConfiguratorView from "../View/ConfiguratorView"


export default class ConfiguratorController {

    constructor(monsterController) {
        this.monsterController = monsterController;
        this.view = new ConfiguratorView(this, this.monsterController.monsterTypes);
    }

    startMonsterCreation(monsterType) {
        this.monsterController.createNewMonster(monsterType);
        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions);
    }

    updateMonster(selector) {
        this.monsterController.updateMonster(selector.id, selector.value);
        this.view.drawNextInputField();
    }

    saveMonster() {
        this.monsterController.saveMonster();
    }
}