import ConfiguratorView from "../View/ConfiguratorView"


export default class ConfiguratorController {

    constructor(monsterController) {
        this.monsterController = monsterController;
        this.view = new ConfiguratorView(this, this.monsterController.monsterOptions.monsterTypes);
    }

    startMonsterCreation(monsterType) {
        this.monsterController.monsterOptions.setMonsterOptions(monsterType);
        this.view.startMonsterCreator(this.monsterController.monsterOptions);
    }

    updateMonster(selector){
        this.model.newMonster.updateMonster(selector.id, selector.value);
        this.view.updateConfigurator(this.model.newMonster.monsterOptions, selector);
    }
}