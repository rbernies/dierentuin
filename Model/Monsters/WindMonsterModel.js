import MonsterProperties from "./MonsterProperties";

export default class WindMonsterModel extends MonsterProperties {

    constructor() {
        super();
        this.monsterOptions = [];
        this.monsterOptions.push({ "Type of Arms": ["wings", "claw-wings"] });
        this.monsterOptions.push({ "Amount of Legs": [0, 2] });
        this.monsterOptions.push({ "Type of Fur": ["feather", "hair", "scales"] });
        this.monsterOptions.push({ "Color": ["white", "blue", "purple"] });

        this.monsterType = "Wind";
        this.armAmount = 2;
        this.eyeAmount = 2;
        this.canFly = true;
        this.audio = "Resources/sounds/WindMonster.wav";
    }

    updateMonster(option, value) {
        switch (option) {
            case "monsterName":
                this.monsterName = value;
                break;
            case "Type of Arms":
                this.armType = value;
                break;
            case "Amount of Legs":
                this.legAmount = value;
                break;
            case "Type of Fur":
                if (value === "feathers") {
                    this.canSwim = false;
                } else {
                    this.canFly = true;
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