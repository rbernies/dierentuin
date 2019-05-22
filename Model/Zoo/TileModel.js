let tileSize;

export default class TileModel {

    constructor(id, walkable){
        this.id = id;
        this.walkable = walkable;
        this.monster = null;
    }

    static get tileSize(){ return tileSize; }
    static set tileSize(n){ tileSize = n; }

    placeMonster(monster){
        this.monster = monster;
    }

    getMonster(){
        return this.monster;
    }

    removeMonster(){
        this.monster = null;
    }

    isWalkable(){
        return this.walkable;
    }

}