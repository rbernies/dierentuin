class ConfiguratorModel{

    constructor(){
        this.monsterOptions = JSON.parse(monsterData);
    }

    getMonsterTypes(){
        let monsterTypes = [];
        for(let i = 0; i < this.monsterOptions.length; i++){
            monsterTypes[i] = this.monsterOptions[i].type;
        }
        return monsterTypes;
    }

    getMonsterOptions(monsterType){
        let selectedMonster = "";
        for(let i = 0; i < this.monsterOptions.length; i++){
            if(this.monsterOptions[i].type === monsterType){
                selectedMonster = this.monsterOptions[i];
                break;
            }
        }
        return selectedMonster;
    }

}