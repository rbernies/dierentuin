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

    editMonster(monster){
        this.createNewMonster(monster.monsterType);
        this.newMonster.monsterName = monster.monsterName;
        this.newMonster.armAmount = monster.armAmount;
        this.newMonster.armType = monster.armType;
        this.newMonster.legAmount = monster.legAmount;
        this.newMonster.eyeAmount = monster.eyeAmount;
        this.newMonster.furType = monster.furType;
        this.newMonster.color = monster.color;
        this.newMonster.image = monster.image;
        this.newMonster.canFly = monster.canFly;
        this.newMonster.canSwim = monster.canSwim;
        this.newMonster.position = monster.position;
        this.newMonster.regionId = monster.regionId;
        this.newMonster.monsterId = monster.monsterId;
    }

    saveMonster() {
        let monsterId = this.monsters.length;
        this.newMonster.monsterId = monsterId;
        this.newMonster.regionId = this.regionId;
        this.monsters.push(this.newMonster);
        this.saveToLocalStorage();
    }

    removeMonster(id) {
        let img = document.getElementById(id + " monster");
        img.remove();
        this.monsters.splice(id, 1);
        for(let i = id; i < this.monsters.length; i++){
            this.monsters[i].monsterId = i;
            let img = document.getElementById(parseInt(i+1) + " monster");
            if(img) img.id = i + " monster";
        }
        this.saveToLocalStorage();
    }

    detectMonsters(monsterId, columns){
        let x = this.monsters[monsterId].position % columns;
        let y = this.monsters[monsterId].position / columns;
        
        for(let i = 0; i < this.monsters.length; i++){
            if(i == monsterId) continue;

            let xo = this.monsters[i].position % columns;
            let yo = this.monsters[i].position / columns;
            let xd = Math.abs(xo - x);
            let yd = Math.abs(yo - y);
            let distance = Math.sqrt(xd*xd + yd*yd);

            if(distance <= Math.sqrt(2)){
                
            }
        }
    }

    saveToLocalStorage(){
        try{
            localStorage.setItem("monsters", JSON.stringify(this.monsters));

        } catch(error) {
            return false;
        }
    }
}