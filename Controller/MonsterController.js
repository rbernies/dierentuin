import MonsterModel from "../Model/Monsters/MonsterModel"
import MonsterOptions from "../Model/Monsters/MonsterOptions";

export default class MonsterController {

    constructor() {
        this.monsterOptions = new MonsterOptions();
        this.monsters = [];
    }

    createNewMonster(monsterType) {
        this.newMonster = new MonsterModel(monsterType);
      
    }

    updateMonster(option, value) {
        this.newMonster.updateMonster(option, value);
    }
}