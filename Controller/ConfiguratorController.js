class ConfiguratorController {

    constructor() {
        this.model = new ConfiguratorModel();
        this.view = new ConfiguratorView(this, this.model.getMonsterTypes());
        this.startMonsterCreation("water");
    }

    startMonsterCreation(monsterType) {
        this.view.startMonsterCreator(this.model.getMonsterOptions(monsterType));
    }

    updateMonster(option){
        this.model.newMonster.updateMonster(option);
    }

}