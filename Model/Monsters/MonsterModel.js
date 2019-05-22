class MonsterModel {

    constructor(){

    }

    getImage(){
        return "resources/img/cactus.png";
    }

    getJson(){
        return "{}";
    }

    static createMonsterFromJson(){
        return new MonsterModel();
    }
}