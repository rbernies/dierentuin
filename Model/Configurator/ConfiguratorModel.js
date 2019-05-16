class ConfiguratorModel{

    constructor(){
        this.monsterOptions = JSON.parse(monsterData);
    }

    getMonsterTypes(){
      return ["water", "fire", "earth", "wind"];
    }

    getMonsterOptions(monsterType){
        switch(monsterType) {
            case "water":
              return new WaterMonsterModel();
              case "fire":
              return new FireMonsterModel();
              case "earth":
              return new EarthMonsterModel();
              case "wind":
              return new WindMonsterModel();
            default:
              return null;
          }
    }

    // getMonsterTypes(){
    //     let monsterTypes = [];
    //     for(let i = 0; i < this.monsterOptions.length; i++){
    //         monsterTypes[i] = this.monsterOptions[i].type;
    //     }
    //     return monsterTypes;
    // }

    // getMonsterOptions(monsterType){
    //     let selectedMonster = "";
    //     for(let i = 0; i < this.monsterOptions.length; i++){
    //         if(this.monsterOptions[i].type === monsterType){
    //             selectedMonster = this.monsterOptions[i];
    //             break;
    //         }
    //     }
    //     return selectedMonster;
    // }

}