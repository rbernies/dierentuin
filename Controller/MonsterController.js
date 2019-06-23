import WaterMonsterModel from "../Model/Monsters/WaterMonsterModel";
import FireMonsterModel from "../Model/Monsters/FireMonsterModel";
import EarthMonsterModel from "../Model/Monsters/EarthMonsterModel";
import WindMonsterModel from "../Model/Monsters/WindMonsterModel";

export default class MonsterController {

    constructor() {
        this.monsters = JSON.parse(localStorage.getItem("monsters"));
        if(!this.monsters) this.monsters = [];
        
        this.monsterTypes = ["Water", "Fire", "Earth", "Wind"];
        this.regionId = 0;
        this.weatherProps = {fireFactor: 1.0, windFactor: 1.0, waterFactor: 1.0, earthFactor: 1.0};
    }

    getWeatherProps(){
        return this.weatherProps;
    }

    setWeatherProps(props){
        this.weatherProps = {fireFactor: 1.0, windFactor: 1.0, waterFactor: 1.0, earthFactor: 1.0};
        if(props.temperature > 25) this.weatherProps.fireFactor = 1.1;
        if(props.wind > 5) this.weatherProps.windFactor = 1.1; 
        if(props.rain) this.weatherProps.waterFactor = 1.1;
        if(props.wind <= 0 && props.temperature >= 30) this.weatherProps.earthFactor = 1.1;
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
        this.newMonster.specialPower = monster.specialPower;
    }

    saveMonster() {
        let monsterId = this.monsters.length;
        this.newMonster.monsterId = monsterId;
        this.newMonster.regionId = this.regionId;
        this.monsters.push(this.newMonster);
        this.saveToLocalStorage();
    }

    removeMonster(id) {
        let div = document.getElementById(this.monsters[id].position);

        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }

        this.monsters.splice(id, 1);
        for(let i = id; i < this.monsters.length; i++){
            this.monsters[i].monsterId = i;
            let img = document.getElementById(parseInt(i+1) + " monster");
            if(img) img.id = i + " monster";
        }
        this.saveToLocalStorage();
    }

    detectMonsters(monsterId, columns, regionId, callbackGreet){
        let x = this.monsters[monsterId].position % columns;
        let y = Math.floor(this.monsters[monsterId].position / columns);
        
        for(let i = 0; i < this.monsters.length; i++){
            if(i == monsterId || this.monsters[i].regionId != regionId) continue;

            let xo = this.monsters[i].position % columns;
            let yo = Math.floor(this.monsters[i].position / columns);
            let xd = Math.abs(xo - x);
            let yd = Math.abs(yo - y);
            let distance = Math.sqrt(xd*xd + yd*yd);

            if(distance <= Math.sqrt(2)){
                callbackGreet(this.monsters[monsterId], this.monsters[i].monsterName);
                callbackGreet(this.monsters[i], this.monsters[monsterId].monsterName);
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