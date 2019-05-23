import ConfiguratorModel  from "../Model/Configurator/ConfiguratorModel"
import ConfiguratorView from "../View/ConfiguratorView"


export default class ConfiguratorController {

    constructor() {
        this.model = new ConfiguratorModel();
        this.view = new ConfiguratorView(this, this.model.getMonsterTypes());
        this.startMonsterCreation("water");
    }

    startMonsterCreation(monsterType) {
        this.view.startMonsterCreator(this.model.getMonsterOptions(monsterType));
    }

    updateMonster(selector){
        console.log(selector.value);
        this.model.newMonster.updateMonster(selector.id, selector.value);
        this.view.updateConfigurator(this.model.newMonster, selector);
    }
}