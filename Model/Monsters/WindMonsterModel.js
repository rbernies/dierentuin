import MonsterModel from "./MonsterModel"

export default class WindMonsterModel {

    constructor() {
        this.armTypeOption = ["wings", "claw-wings"];
        this.legAmountOption = [0, 2];
        this.furOption = ["feathers", "hair", "scales"];
        this.colorOption = ["white", "blue", "purple"];

        this.monsterName = "";
        this.monsterType = "Wind Monster";
        this.armAmount = 2;
        this.eyeAmount = 2;
        this.canFly = true;
        this.canSwim = true;
    }

    updateMonster(id, value) {
        switch (id) {
            case "monsterName":
                this.monsterName = value;
            case "armType":
                this.armType = value;
            case "legAmount":
                this.legAmount = value;
            case "furType":
                if (value === "feathers") {
                    this.canSwim = false;
                } else {
                    this.canFly = true;
                }
                this.fur = value;
            case "color":
                this.color = value;
            case "monsterImage":
                this.monsterImage = value;
            default:
                return null;
        }
    }
}