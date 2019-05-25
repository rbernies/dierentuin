export default class MonsterModel {

    constructor(monster) {
        this.monsterType = monster.monsterType;
        this.monsterName = monster.monsterName;
        this.armAmount = monster.armAmount;
        this.armType = monster.armType;
        this.legAmount = monster.legAmount;
        this.eyeAmount = monster.eyeAmount;
        this.furType = monster.furType;
        this.canFly = monster.canFly;
        this.canSwim = monster.canSwim;
        this.color = monster.color;
        this.image = monster.image;
    }
}