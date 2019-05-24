export default class MonsterModel {

    constructor(monsterType){
        this.monsterType = monsterType;
        this.setDefaultValues();
        this.monsterName = "";
        this.armAmount = 0;
        this.armType = "";
        this.legAmount = 0;
        this.eyeAmount = 0;
        this.furType = "";
        this.canFly = false;
        this.canSwim = false;
        this.color = "";  
        this.image = "";
    }

    setDefaultValues(){
        switch (this.monsterType) {
            case "Water":
                this.canSwim = true;
            case "Earth":
                this.armAmount = 2;
                this.armType = "claws";
                this.eyeAmount = 2;
            case "Wind":
                this.armAmount = 2;
                this.eyeAmount = 2;
                this.canFly = true;
        }
    }

    updateMonster(option, value) {
        console.log(option)
        switch (option) {
            case "monsterName":
                this.monsterName = value;
            case "Amount of Arms":
                this.armAmount = value;
                if(this.monsterType === "Water" && value > 4){
                    this.legAmount = 0;
                }
                if(this.monsterType === "Fire" && value <= 2){
                    this.legAmount = 2;
                }
                else if(this.monsterType === "Fire"){
                    this.legAmount = 0;
                }
            case "Type of Arms":
                this.armType = value;
            case "Amount of Legs":
                this.legAmount = value;
            case "Amount of Eyes":
                this.eyeAmount = value;
            case "Type of Fur":
                if(this.monsterType === "Fire" && value === "feathers"){
                    this.canFly = true;
                } else if(this.monsterType === "Fire"){
                    this.canFly = false;
                }

                if(this.monsterType === "Wind" && value === "feathers"){
                    this.canSwim = false;
                } else if(this.monsterType === "Wind"){
                    this.canSwim = true;
                }
                this.furType = value;
            case "Color":
                this.color = value;
        }
    }
}