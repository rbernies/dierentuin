class WaterMonsterModel {

  constructor() {
    this.armAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];
    this.armTypeOption = ["tentacle", "fins"];
    this.legAmountOption = [1, 2, 3, 4];
    this.eyeAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];
    this.furOption = ["scales", "slime"];
    this.colorOption = ["blue", "red", "green"];

    this.armAmount = 8;
    this.canFly = false;
    this.canSwim = true;
  }

  updateMonster(option, value) {
    switch (option) {
      case "armSelector":
        this.armAmount = value;
        if (value > 4) {
          this.legAmountOption = [0];
          this.legAmount = 0;
        } else {
          this.legAmountOption = [1, 2, 3, 4];
        }
        break;
      case "armType":
        this.armType = value;
        break;
      case "legAmount":
        this.legAmount = value;
      case "eyeAmount":
        this.eyeAmount = value;
      case "furType":
        this.fur = value;
      case "color":
        this.color = value;
      default:
        return null;
    }
  }
}