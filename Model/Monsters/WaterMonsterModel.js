import MonsterProperties from "./MonsterProperties";

export default class WaterMonsterModel extends MonsterProperties {

    constructor() {
        super();
        this.monsterOptions = [];
        this.monsterOptions.push({ "Amount of Arms": [1, 2, 3, 4, 5, 6, 7, 8] });
        this.monsterOptions.push({ "Type of Arms": ["tentacles", "fangs"] });
        this.monsterOptions.push({ "Amount of Legs": [1, 2, 3, 4] });
        this.monsterOptions.push({ "Amount of Eyes": [1, 2, 3, 4, 5, 6, 7, 8] });
        this.monsterOptions.push({ "Type of Fur": ["scales", "slime"] });
        this.monsterOptions.push({ "Color": ["blue", "red", "green"] });

        this.monsterType = "Water";
        this.canSwim = true;
        this.audio = "Resources/sounds/WaterMonster.wav";
    }


    updateMonster(option, value) {
        switch (option) {
            case "monsterName":
                this.monsterName = value;
                break;
            case "Amount of Arms":
                this.armAmount = value;
                if (value > 4) {
                    this.legAmount = 0;
                }
                break;
            case "Type of Arms":
                this.armType = value;
                break;
            case "Amount of Legs":
                this.legAmount = value;
                break;
            case "Amount of Eyes":
                this.eyeAmount = value;
                break;
            case "Type of Fur":
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