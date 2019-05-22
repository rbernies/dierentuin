import MonsterModel from "./MonsterModel"

export default class EarthMonsterModel {

    constructor() {
        this.legAmountOption = [2, 4, 6];
        this.furOption = ["hair", "scales", "slime"];
        this.colorOption = ["purple", "orange", "white"];

        this.armAmount = 2;
        this.armType = "claws";
        this.eyeAmount = 2;
        this.canFly = false;
        this.canSwim = false;
    }

    updateMonster(option, value) {
        switch (option) {
            case "legAmount":
                this.legAmount = value;
            case "furType":
                this.fur = value;
            case "color":
                this.color = value;
            default:
                return null;
        }
    }
}