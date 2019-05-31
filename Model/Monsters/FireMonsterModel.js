import MonsterProperties from "./MonsterProperties";

export default class FireMonsterModel extends MonsterProperties {

    constructor() {
        super();
        this.monsterOptions = [];
        this.monsterOptions.push({ "Amount of Arms": [1, 2, 3, 4, 5, 6] });
        this.monsterOptions.push({ "Type of Arms": ["tentacles", "claws", "claw-wings"] });
        this.monsterOptions.push({ "Amount of Eyes": [1, 2, 3, 4] });
        this.monsterOptions.push({ "Type of Fur": ["scales", "feathers"] });
        this.monsterOptions.push({ "Color": ["red", "orange", "brown"] });

        this.monsterType = "Fire";
        this.audio = "Resources/sounds/FireMonster.wav";
    }

    updateMonster(option, value) {
        switch (option) {
            case "monsterName":
                this.monsterName = value;
                break;
            case "Amount of Arms":
                this.armAmount = value;
                if (value > 2) {
                    this.legAmount = 0;
                } else {
                    this.legAmount = 2;
                }
                break;
            case "Type of Arms":
                this.armType = value;
                break;
            case "Amount of Eyes":
                this.eyeAmount = value;
                break;
            case "Type of Fur":
                if (value === "feathers") {
                    this.canFly = true;
                } else {
                    this.canFly = false;
                }
                this.furType = value;
                break;
            case "Color":
                this.color = value;
                break;
            case "monsterImage":
                this.image = value;
                break;
            default:
                return null;
        }
    }
}