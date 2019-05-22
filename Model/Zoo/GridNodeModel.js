let nodeSize;

export default class GridNodeModel {

    constructor(walkable){
        this.walkable = walkable;
        this.monster = null;
    }

    static get nodeSize(){ return nodeSize; }
    static set nodeSize(n){ nodeSize = n; }

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