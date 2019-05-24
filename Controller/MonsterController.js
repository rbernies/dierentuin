import MonsterModel from "../Model/Monsters/MonsterModel";

export default class MonsterController {

    constructor(){
        this.monsters = [];
    }

    createMonster(monsterOptions){
        let monster = new MonsterModel();
        this.monster.monsterType = monsterOptions.monsterType;
        this.monster.monsterName = monsterOptions.monsterName;
        this.monster.armAmount = monsterOptions.armAmount;
        this.monster.armType = monsterOptions.armType;
        this.monster.legAmount = monsterOptions.legAmount;
        this.monster.eyeAmount = monsterOptions.eyeAmount;
        this.monster.furType = monsterOptions.furType;
        this.monster.canFly = monsterOptions.canFly;
        this.monster.canSwim = monsterOptions.canSwim;
        this.monster.color = monsterOptions.color;
        this.monster.image = monsterOptions.image;
        this.monsters.push(monster);
    }
}