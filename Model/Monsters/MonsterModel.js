export default class MonsterModel {

    constructor(){
        this.armAmountOption;
        this.armTypeOption;
        this.legAmountOption;
        this.eyeAmountOption;
        this.furOption;
        this.colorOption;
    
        this.armAmount;
        this.armType;
        this.legAmount;
        this.eyeAmount;
        this.furType;
        this.color;
        this.canFly;
        this.canSwim;
    }

    getImage(){
        return "resources/img/cactus.png";
    }

    getJson(){
        return "{}";
    }

    static createMonsterFromJson(){
        return new MonsterModel();
    }
}