export default class MonsterOptions{

    constructor(){
        this.monsterTypes = ["Water", "Fire", "Earth", "Wind"];
    }

    setMonsterOptions(monsterType){
        switch(monsterType){
            case "Water": 
            this.setWaterMonsterOptions();
            case "Fire": 
            this.getFireMonsterOptions();
            case "Earth": 
            this.getEarthMonsterOptions();
            case "Wind": 
            this.getWindMonsterOptions();
        }
    }

    setWaterMonsterOptions(){

        this.armAmountOption = [1,2,3,4,5,6,7,8];
        this.armTypeOption = ["tentacles", "fangs"];
        this.legAmountOption = [1,2,3,4];
        this.eyeAmountOption = [1,2,3,4,5,6,7,8];
        this.furOption = ["scales", "slime"];
        this.colorOption = ["blue", "red", "green"];

        // let waterMonsterOptions = [];
        // waterMonsterOptions.push({armAmountOption: [1,2,3,4,5,6,7,8]});
        // waterMonsterOptions.push({armTypeOption: ["tentacles", "fangs"]});
        // waterMonsterOptions.push({legAmountOption: [1,2,3,4]});
        // waterMonsterOptions.push({eyeAmountOption: [1,2,3,4,5,6,7,8]});
        // waterMonsterOptions.push({furOption: ["scales", "slime"]});
        // waterMonsterOptions.push({colorOption: ["blue", "red", "green"]});
        // return waterMonsterOptions;
    }

    getFireMonsterOptions(){
        let fireMonsterOptions = [];
        fireMonsterOptions.push("armAmountOption", [1,2,3,4,5,6]);
        fireMonsterOptions.push("armTypeOption", ["tentacles", "claws", "claw-wings"]);
        fireMonsterOptions.push("eyeAmountOption", [1,2,3,4]);
        fireMonsterOptions.push("furOption", ["scales", "feathers"]);
        fireMonsterOptions.push("colorOption", ["red", "orange", "brown"]);
        return fireMonsterOptions;
    }

    getEarthMonsterOptions(){
        let earthMonsterOptions = [];
        earthMonsterOptions.push("legAmountOption", [2,4,6]);
        earthMonsterOptions.push("furOption", ["hair", "scales", "slime"]);
        earthMonsterOptions.push("colorOption", ["purple", "orange", "white"]);
        return earthMonsterOptions;
    }

    getWindMonsterOptions(){
        let windMonsterOptions = [];
        windMonsterOptions.push("armTypeOption", ["wings", "claw-wings"]);
        windMonsterOptions.push("legAmountOption", [0,2]);
        windMonsterOptions.push("furOption", ["feather", "hair", "scales"]);
        windMonsterOptions.push("colorOption", ["white", "blue", "purple"]);
        return windMonsterOptions;
    }
}