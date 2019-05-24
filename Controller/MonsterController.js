import MonsterModel from "../Model/Monsters/MonsterModel"
import MonsterOptions from "../Model/Monsters/MonsterOptions";

export default class MonsterController{

    constructor(){
        this.monsterOptions = new MonsterOptions();
        this.monsters = [];
    }

    createNewMonster(monsterOptions){
        let monster = new MonsterModel(monsterOptions);
        this.monsters.push(monster);
    }
}