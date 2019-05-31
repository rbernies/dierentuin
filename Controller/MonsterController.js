import WaterMonsterModel from "../Model/Monsters/WaterMonsterModel";
import FireMonsterModel from "../Model/Monsters/FireMonsterModel";
import EarthMonsterModel from "../Model/Monsters/EarthMonsterModel";
import WindMonsterModel from "../Model/Monsters/WindMonsterModel";

export default class MonsterController {

    constructor() {
        console.log(JSON.parse(localStorage.getItem("monsters")));
        this.monsters = JSON.parse(localStorage.getItem("monsters"));
        if(!this.monsters) this.monsters = [];
        
        this.monsterTypes = ["Water", "Fire", "Earth", "Wind"];
    }

    createNewMonster(monsterType) {
        switch (monsterType) {
            case "Water":
                this.newMonster = new WaterMonsterModel();
                break;
            case "Fire":
                this.newMonster = new FireMonsterModel();
                break;
            case "Earth":
                this.newMonster = new EarthMonsterModel();
                break;
            case "Wind":
                this.newMonster = new WindMonsterModel();
                break;
            default: return;
        }
    }

    updateMonster(option, value) {
        this.newMonster.updateMonster(option, value);
    }

    saveMonster() {
        let monsterId = this.monsters.length;
        this.newMonster.monsterId = monsterId;
        console.log("save monster, length: " + this.monsters.length);
        this.monsters.push(this.newMonster);
        console.log("saved monster, length: " + this.monsters.length);
        this.saveToLocalStorage();
    }

    removeMonster(id) {
        this.monsters.splice(id, 1);
        for(let i = id; i < this.monsters.length; i++){
            this.monsters[i].monsterId = i;
            let img = document.getElementById(parseInt(i+1) + " monster");
            if(img) img.id = i + " monster";
            else console.log("image is null " + parseInt(i+1) + " monster");
        }
        this.saveToLocalStorage();
    }

    saveToLocalStorage(){
        localStorage.setItem("monsters", JSON.stringify(this.monsters));
    }
}