let tileSize;

class TileModel {

    constructor(walkable){
        this.walkable = walkable;
        this.monster = null;
    }

    static get tileSize(){ return tileSize; }
    static set tileSize(n){ tileSize = n; }

    placeMonster(monster){
        this.monster = monster;
    }

    getMonster(){
        return monster;
    }

    containsMonster(){
        return (monster != null);
    }

    isWalkable(){
        return this.walkable;
    }

}