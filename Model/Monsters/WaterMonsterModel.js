import MonsterModel from "./MonsterModel"

export default class WaterMonsterModel  {

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

  updateMonster(id, value) {
    console.log(id);
    switch (id) {
      case "armAmount":
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
        break;
      case "eyeAmount":
        this.eyeAmount = value;
        break;
      case "furType":
        this.fur = value;
        break;
      case "color":
        this.color = value;
        break;
      default:
        return null;
    }
  }
}