class ConfiguratorController{

    constructor(){
        this.model = new ConfiguratorModel();
        this.view = new ConfiguratorView(this);
        this.view.createMonsterTypeSelector(this.model.getMonsterTypes());
    }

    startMonsterCreation(monsterType){
        this.view.startMonsterCreator(this.model.getMonsterOptions(monsterType));
    }
}