class FireMonsterModel{
    
    constructor(){
        this.armAmountOption = [1,2,3,4,5,6];
        this.armTypeOption = ["tentacle", "claws", "claw-wings"];
        this.legAmountOtion = [2];
        this.eyeAmountOption = [1,2,3,4];
        this.furOption = ["scales", "feathers"];
        this.colorOption = ["red", "orange", "brown"];

        this.canFly = false;
        this.canSwim = false;
    }

    updateMonster(option, value){
        switch(option) {
            case "armSelector":
            this.armAmount = value;             
            if(value > 2){
              this.legAmountOption = [0];
              this.legAmount = 0;
            } else {
              this.legAmountOption = [2];
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
            if(value === "feathers"){
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