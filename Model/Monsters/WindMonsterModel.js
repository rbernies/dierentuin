class WindMonsterModel {

    constructor() {
        this.armTypeOption = ["wings", "claw-wings"];
        this.legAmountOption = [0, 2];
        this.furOption = ["feathers", "hair", "scales"];
        this.colorOption = ["white", "blue", "purple"];

        this.armAmount = 2;
        this.eyeAmount = 2;
        this.canFly = true;
        this.canSwim = true;
    }

    updateMonster(option, value) {
        switch (option) {
            case "armType":
                this.armType = value;
                break;
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
            default:
                return null;
        }
    }

}