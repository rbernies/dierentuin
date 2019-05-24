export default class MonsterOptions{

    constructor(){
        this.monsterTypes = ["Water", "Fire", "Earth", "Wind"];
    }

    getMonsterOptions(monsterType){
        switch(monsterType){
            case "Water": 
            return this.getWaterMonsterOptions();
            case "Fire": 
            return this.getFireMonsterOptions();
            case "Earth": 
            return this.getEarthMonsterOptions();
            case "Wind": 
            return this.getWindMonsterOptions();
        }
    }

    getWaterMonsterOptions(){
        let waterMonsterOptions = [];
        waterMonsterOptions.push({"Amount of Arms": [1,2,3,4,5,6,7,8]});
        waterMonsterOptions.push({"Type of Arms": ["tentacles", "fangs"]});
        waterMonsterOptions.push({"Amount of Legs": [1,2,3,4]});
        waterMonsterOptions.push({"Amount of Eyes": [1,2,3,4,5,6,7,8]});
        waterMonsterOptions.push({"Type of Fur": ["scales", "slime"]});
        waterMonsterOptions.push({"Color": ["blue", "red", "green"]});
        return waterMonsterOptions;
    }

    getFireMonsterOptions(){
        let fireMonsterOptions = [];
        fireMonsterOptions.push({"Amount of Arms": [1,2,3,4,5,6]});
        fireMonsterOptions.push({"Type of Arms": ["tentacles", "claws", "claw-wings"]});
        fireMonsterOptions.push({"Amount of Eyes": [1,2,3,4]});
        fireMonsterOptions.push({"Type of Fur": ["scales", "feathers"]});
        fireMonsterOptions.push({"Color": ["red", "orange", "brown"]});
        return fireMonsterOptions;
    }

    getEarthMonsterOptions(){
        let earthMonsterOptions = [];
        earthMonsterOptions.push({"Amount of Legs": [2,4,6]});
        earthMonsterOptions.push({"Type of Fur": ["hair", "scales", "slime"]});
        earthMonsterOptions.push({"Color": ["purple", "orange", "white"]});
        return earthMonsterOptions;
    }

    getWindMonsterOptions(){
        let windMonsterOptions = [];
        windMonsterOptions.push({"Type of Arms": ["wings", "claw-wings"]});
        windMonsterOptions.push({"Amount of Legs": [0,2]});
        windMonsterOptions.push({"Type of Fur": ["feather", "hair", "scales"]});
        windMonsterOptions.push({"Color": ["white", "blue", "purple"]});
        return windMonsterOptions;
    }
}