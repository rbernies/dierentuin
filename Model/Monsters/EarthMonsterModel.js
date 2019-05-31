import MonsterProperties from "./MonsterProperties";

export default class EarthMonsterModel extends MonsterProperties {

    constructor() {
        super();
        this.monsterOptions = [];
        this.monsterOptions.push({ "Amount of Legs": [2, 4, 6] });
        this.monsterOptions.push({ "Type of Fur": ["hair", "scales", "slime"] });
        this.monsterOptions.push({ "Color": ["purple", "orange", "white"] });

        this.monsterType = "Earth";
        this.armAmount = 2;
        this.armType = "claws";
        this.eyeAmount = 2;
        this.audio = "Resources/sounds/EarthMonster.wav";
    }

    updateMonster(option, value) {
        switch (option) {
            case "monsterName":
                this.monsterName = value;
                break;
            case "Amount of Legs":
                this.legAmount = value;
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