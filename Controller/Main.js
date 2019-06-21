import ConfiguratorController from "./ConfiguratorController"
import GridController from "./GridController"
import MonsterController from "./MonsterController";

const monsterController = new MonsterController();
const configuratorController = new ConfiguratorController(monsterController);
const gridController = new GridController(0, monsterController, configuratorController);
