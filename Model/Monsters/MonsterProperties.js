export default class MonsterProperties{

    constructor(){
        this.monsterType = "";
        this.monsterName = "";
        this.armAmount = 0;
        this.armType = "";
        this.legAmount = 0;
        this.eyeAmount = 0;
        this.furType = "";
        this.canFly = false;
        this.canSwim = false;
        this.color = "";
        this.image = "";

        this.position = 0;
        this.monsterId = 0;
        this.regionId = 0;

        this.specialPower = 4 + Math.floor(Math.random() * 7);
    }
}