export default class MonsterModel {

    constructor(monsterOptions){
        this.monsterType = monsterOptions.monsterType;
        this.monsterName = monsterOptions.monsterName;
        this.armAmount = monsterOptions.armAmount;
        this.armType = monsterOptions.armType;
        this.legAmount = monsterOptions.legAmount;
        this.eyeAmount = monsterOptions.eyeAmount;
        this.furType = monsterOptions.furType;
        this.canFly = monsterOptions.canFly;
        this.canSwim = monsterOptions.canSwim;
        this.color = monsterOptions.color;  
        this.image = monsterOptions.image;
    }
}