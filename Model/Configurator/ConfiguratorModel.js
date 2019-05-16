class ConfiguratorModel {


    getMonsterTypes() {
        return ["water", "fire", "earth", "wind"];
    }

    getMonsterOptions(monsterType) {
        switch (monsterType) {
            case "water":
                this.newMonster = new WaterMonsterModel();
                return this.newMonster
            case "fire":
                this.newMonster = new FireMonsterModel();
                return this.newMonster
            case "earth":
                this.newMonster = new EarthMonsterModel();
                return this.newMonster;
            case "wind":
                this.newMonster = new WindMonsterModel();
                return newMonster;
            default:
                return null;
        }
    }

}