import MonsterModel from "./MonsterModel"

export default class WaterMonsterModel {

  constructor() {
    this.armAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];
    this.armTypeOption = ["tentacle", "fins"];
    this.legAmountOption = [1, 2, 3, 4];
    this.eyeAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];
    this.furOption = ["scales", "slime"];
    this.colorOption = ["blue", "red", "green"];

    this.monsterName = "";
    this.monsterType = "Water Monster";
    this.armAmount = 8;
    this.canFly = false;
    this.canSwim = true;
  }

  updateMonster(id, value) {
    switch (id) {
      case "monsterName":
        this.monsterName = value;
      case "armAmount":
        this.armAmount = value;
        if (value > 4) {
          this.legAmountOption = [0];
          this.legAmount = 0;
        } else {
          this.legAmountOption = [1, 2, 3, 4];
        }
      case "armType":
        this.armType = value;
      case "legAmount":
        this.legAmount = value;
      case "eyeAmount":
        this.eyeAmount = value;
      case "furType":
        this.fur = value;
      case "color":
        this.color = value;
      case "monsterImage":
        this.monsterImage = value;
        console.log(this.monsterImage);
      default:
        return null;
    }
  }
}