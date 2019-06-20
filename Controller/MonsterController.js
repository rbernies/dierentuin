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
        this.regionId = 0;
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
        this.newMonster.regionId = this.regionId;
        this.monsters.push(this.newMonster);
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

    detectMonsters(monsterId, columns){
        let x = this.monsters[monsterId].position % columns;
        let y = this.monsters[monsterId].position / columns;
        
        for(let i = 0; i < this.monsters.length; i++){
            let xo = this.monsters[i].position % columns;
            let yo = this.monsters[i].position / columns;
            

            //check length of distance 
        }
    }

    saveToLocalStorage(){
        localStorage.setItem("monsters", JSON.stringify(this.monsters));
    }
}