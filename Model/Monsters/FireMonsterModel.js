class FireMonsterModel {

    constructor() {
        this.armAmountOption = [1, 2, 3, 4, 5, 6];
        this.armTypeOption = ["tentacle", "claws", "claw-wings"];
        this.eyeAmountOption = [1, 2, 3, 4];
        this.furOption = ["scales", "feathers"];
        this.colorOption = ["red", "orange", "brown"];

        this.legAmount = 2;
        this.canFly = false;
        this.canSwim = false;
    }

    updateMonster(option, value) {
        switch (option) {
            case "armSelector":
                this.armAmount = value;
                if (value > 2) {                
                    this.legAmount = 0;
                } else {
                    this.legAmount = 2;
                }
                break;
            case "armType":
                this.armType = value;
                break;
            case "eyeAmount":
                this.eyeAmount = value;
            case "furType":
                if (value === "feathers") {
                    this.canFly = true;
                } else {
                    this.canFly = false;
                }
                this.fur = value;
            case "color":
                this.color = value;
            default:
                return null;
        }
    }
}