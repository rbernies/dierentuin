/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Controller/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Controller/ConfiguratorController.js":
/*!**********************************************!*\
  !*** ./Controller/ConfiguratorController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorController; });\n/* harmony import */ var _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/ConfiguratorView */ \"./View/ConfiguratorView.js\");\n\r\n\r\n\r\nclass ConfiguratorController {\r\n\r\n    constructor(monsterController) {\r\n        this.monsterController = monsterController;\r\n        this.view = new _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.monsterController.monsterTypes);\r\n    }\r\n\r\n    startMonsterCreation(monsterType) {\r\n        this.monsterController.createNewMonster(monsterType);\r\n        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions, monsterType);\r\n    }\r\n\r\n    showMonsterProperties(event){\r\n        this.view.showMonsterProperties(event);\r\n    }\r\n\r\n    resetConfigurator(){\r\n        this.view.resetMonsterCreator();\r\n    }\r\n\r\n    updateMonster(selector) { \r\n        this.monsterController.updateMonster(selector.id, selector.value);\r\n        this.view.drawNextInputField(selector.id);    \r\n    }\r\n\r\n    editMonster(monster){\r\n        this.monsterController.editMonster(monster);\r\n        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions, monster.monsterType);\r\n    }\r\n\r\n    saveMonster() {\r\n        this.monsterController.saveMonster();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/ConfiguratorController.js?");

/***/ }),

/***/ "./Controller/GridController.js":
/*!**************************************!*\
  !*** ./Controller/GridController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridController; });\n/* harmony import */ var _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/GridModel */ \"./Model/Zoo/GridModel.js\");\n/* harmony import */ var _View_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/GridView */ \"./View/GridView.js\");\n\r\n\r\n\r\nclass GridController {\r\n\r\n    constructor(regionId, monsterController, configuratorController){\r\n        this.configuratorController = configuratorController;\r\n        this.model = new _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](regionId);\r\n        this.view = new _View_GridView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, monsterController);\r\n    }\r\n\r\n    resetConfigurator(){\r\n        this.configuratorController.resetConfigurator();\r\n    }\r\n\r\n    showMonsterProperties(event){\r\n        this.configuratorController.showMonsterProperties(event);\r\n    }\r\n\r\n    previewMonster(){\r\n        this.view.previewFile();\r\n    }\r\n\r\n    getModel(){\r\n        return this.model;\r\n    }\r\n\r\n    changeRegion(regionId){\r\n        this.model.changeRegion(regionId);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/GridController.js?");

/***/ }),

/***/ "./Controller/Main.js":
/*!****************************!*\
  !*** ./Controller/Main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfiguratorController */ \"./Controller/ConfiguratorController.js\");\n/* harmony import */ var _GridController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridController */ \"./Controller/GridController.js\");\n/* harmony import */ var _MonsterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonsterController */ \"./Controller/MonsterController.js\");\n\r\n\r\n\r\n\r\nconst monsterController = new _MonsterController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst configuratorController = new _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](monsterController);\r\nconst gridController = new _GridController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, monsterController, configuratorController);\r\n\n\n//# sourceURL=webpack:///./Controller/Main.js?");

/***/ }),

/***/ "./Controller/MonsterController.js":
/*!*****************************************!*\
  !*** ./Controller/MonsterController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterController; });\n/* harmony import */ var _Model_Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Monsters/WaterMonsterModel */ \"./Model/Monsters/WaterMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Monsters/FireMonsterModel */ \"./Model/Monsters/FireMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Monsters/EarthMonsterModel */ \"./Model/Monsters/EarthMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Monsters/WindMonsterModel */ \"./Model/Monsters/WindMonsterModel.js\");\n\r\n\r\n\r\n\r\n\r\nclass MonsterController {\r\n\r\n    constructor() {\r\n        console.log(JSON.parse(localStorage.getItem(\"monsters\")));\r\n        this.monsters = JSON.parse(localStorage.getItem(\"monsters\"));\r\n        if(!this.monsters) this.monsters = [];\r\n        \r\n        this.monsterTypes = [\"Water\", \"Fire\", \"Earth\", \"Wind\"];\r\n        this.regionId = 0;\r\n    }\r\n\r\n    createNewMonster(monsterType) {\r\n        switch (monsterType) {\r\n            case \"Water\":\r\n                this.newMonster = new _Model_Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n                break;\r\n            case \"Fire\":\r\n                this.newMonster = new _Model_Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n                break;\r\n            case \"Earth\":\r\n                this.newMonster = new _Model_Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n                break;\r\n            case \"Wind\":\r\n                this.newMonster = new _Model_Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n                break;\r\n            default: return;\r\n        }\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        this.newMonster.updateMonster(option, value);\r\n    }\r\n\r\n    editMonster(monster){\r\n        this.createNewMonster(monster.monsterType);\r\n        this.newMonster.monsterName = monster.monsterName;\r\n        this.newMonster.armAmount = monster.armAmount;\r\n        this.newMonster.armType = monster.armType;\r\n        this.newMonster.legAmount = monster.legAmount;\r\n        this.newMonster.eyeAmount = monster.eyeAmount;\r\n        this.newMonster.furType = monster.furType;\r\n        this.newMonster.color = monster.color;\r\n        this.newMonster.image = monster.image;\r\n        this.newMonster.canFly = monster.canFly;\r\n        this.newMonster.canSwim = monster.canSwim;\r\n        this.newMonster.position = monster.position;\r\n        this.newMonster.regionId = monster.regionId;\r\n        this.newMonster.monsterId = monster.monsterId;\r\n    }\r\n\r\n    saveMonster() {\r\n        let monsterId = this.monsters.length;\r\n        this.newMonster.monsterId = monsterId;\r\n        this.newMonster.regionId = this.regionId;\r\n        this.monsters.push(this.newMonster);\r\n        this.saveToLocalStorage();\r\n    }\r\n\r\n    removeMonster(id) {\r\n        let img = document.getElementById(id + \" monster\");\r\n        img.remove();\r\n        this.monsters.splice(id, 1);\r\n        for(let i = id; i < this.monsters.length; i++){\r\n            this.monsters[i].monsterId = i;\r\n            let img = document.getElementById(parseInt(i+1) + \" monster\");\r\n            if(img) img.id = i + \" monster\";\r\n        }\r\n        this.saveToLocalStorage();\r\n    }\r\n\r\n    detectMonsters(monsterId, columns){\r\n        let x = this.monsters[monsterId].position % columns;\r\n        let y = this.monsters[monsterId].position / columns;\r\n        \r\n        for(let i = 0; i < this.monsters.length; i++){\r\n            if(i == monsterId) continue;\r\n\r\n            let xo = this.monsters[i].position % columns;\r\n            let yo = this.monsters[i].position / columns;\r\n            let xd = Math.abs(xo - x);\r\n            let yd = Math.abs(yo - y);\r\n            let distance = Math.sqrt(xd*xd + yd*yd);\r\n\r\n            if(distance <= Math.sqrt(2)){\r\n                \r\n            }\r\n        }\r\n    }\r\n\r\n    saveToLocalStorage(){\r\n        localStorage.setItem(\"monsters\", JSON.stringify(this.monsters));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/MonsterController.js?");

/***/ }),

/***/ "./Model/Monsters/EarthMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/EarthMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EarthMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass EarthMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Amount of Legs\": [2, 4, 6] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"hair\", \"scales\", \"slime\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"purple\", \"orange\", \"white\"] });\r\n\r\n        this.monsterType = \"Earth\";\r\n        this.armAmount = 2;\r\n        this.armType = \"claws\";\r\n        this.eyeAmount = 2;\r\n        this.audio = \"Resources/sounds/EarthMonster.wav\";\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Amount of Legs\":\r\n                this.legAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/EarthMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/FireMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/FireMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FireMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass FireMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Amount of Arms\": [1, 2, 3, 4, 5, 6] });\r\n        this.monsterOptions.push({ \"Type of Arms\": [\"tentacles\", \"claws\", \"claw-wings\"] });\r\n        this.monsterOptions.push({ \"Amount of Eyes\": [1, 2, 3, 4] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"scales\", \"feathers\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"red\", \"orange\", \"brown\"] });\r\n\r\n        this.monsterType = \"Fire\";\r\n        this.audio = \"Resources/sounds/FireMonster.wav\";\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Amount of Arms\":\r\n                this.armAmount = value;\r\n                if (value > 2) {\r\n                    this.legAmount = 0;\r\n                } else {\r\n                    this.legAmount = 2;\r\n                }\r\n                break;\r\n            case \"Type of Arms\":\r\n                this.armType = value;\r\n                break;\r\n            case \"Amount of Eyes\":\r\n                this.eyeAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                if (value === \"feathers\") {\r\n                    this.canFly = true;\r\n                } else {\r\n                    this.canFly = false;\r\n                }\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/FireMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterProperties.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/MonsterProperties.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterProperties; });\nclass MonsterProperties{\r\n\r\n    constructor(){\r\n        this.monsterType = \"\";\r\n        this.monsterName = \"\";\r\n        this.armAmount = 0;\r\n        this.armType = \"\";\r\n        this.legAmount = 0;\r\n        this.eyeAmount = 0;\r\n        this.furType = \"\";\r\n        this.canFly = false;\r\n        this.canSwim = false;\r\n        this.color = \"\";\r\n        this.image = \"\";\r\n\r\n        this.position = 0;\r\n        this.monsterId = 0;\r\n        this.regionId = 0;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterProperties.js?");

/***/ }),

/***/ "./Model/Monsters/WaterMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/WaterMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaterMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass WaterMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Amount of Arms\": [1, 2, 3, 4, 5, 6, 7, 8] });\r\n        this.monsterOptions.push({ \"Type of Arms\": [\"tentacles\", \"fangs\"] });\r\n        this.monsterOptions.push({ \"Amount of Legs\": [1, 2, 3, 4] });\r\n        this.monsterOptions.push({ \"Amount of Eyes\": [1, 2, 3, 4, 5, 6, 7, 8] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"scales\", \"slime\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"blue\", \"red\", \"green\"] });\r\n\r\n        this.monsterType = \"Water\";\r\n        this.canSwim = true;\r\n        this.audio = \"Resources/sounds/WaterMonster.wav\";\r\n    }\r\n\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Amount of Arms\":\r\n                this.armAmount = value;\r\n                if (value > 4) {\r\n                    this.legAmount = 0;\r\n                }\r\n                break;\r\n            case \"Type of Arms\":\r\n                this.armType = value;\r\n                break;\r\n            case \"Amount of Legs\":\r\n                this.legAmount = value;\r\n                break;\r\n            case \"Amount of Eyes\":\r\n                this.eyeAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WaterMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/WindMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/WindMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass WindMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Type of Arms\": [\"wings\", \"claw-wings\"] });\r\n        this.monsterOptions.push({ \"Amount of Legs\": [0, 2] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"feather\", \"hair\", \"scales\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"white\", \"blue\", \"purple\"] });\r\n\r\n        this.monsterType = \"Wind\";\r\n        this.armAmount = 2;\r\n        this.eyeAmount = 2;\r\n        this.canFly = true;\r\n        this.audio = \"Resources/sounds/WindMonster.wav\";\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Type of Arms\":\r\n                this.armType = value;\r\n                break;\r\n            case \"Amount of Legs\":\r\n                this.legAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                if (value === \"feathers\") {\r\n                    this.canSwim = false;\r\n                } else {\r\n                    this.canFly = true;\r\n                }\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WindMonsterModel.js?");

/***/ }),

/***/ "./Model/Zoo/GridModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/GridModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridModel; });\n/* harmony import */ var _WeatherModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherModel */ \"./Model/Zoo/WeatherModel.js\");\n\r\n\r\nclass GridModel {\r\n    \r\n    constructor(regionId){\r\n        this.regionId = regionId;\r\n        this.columns = 10;\r\n        this.rows = 10;\r\n        this.regions = JSON.parse(regionData);\r\n        this.loadRegion(regionId);\r\n    }\r\n    \r\n    loadRegion(regionId) {\r\n        this.regionId = regionId;\r\n        let region = this.regions[regionId];\r\n        this.columns = region.grid[0].Columns.length;\r\n        this.rows = region.grid.length;\r\n\r\n        this.weatherModel = new _WeatherModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](region[\"reference city\"]);\r\n    }\r\n\r\n    getCurrentRegion(){\r\n        return this.regions[this.regionId];\r\n    }\r\n\r\n    getNonWalkableImage(){\r\n        return this.getCurrentRegion()[\"non-walkable-image\"];\r\n    }\r\n  \r\n    changeRegion(regionId){\r\n        this.loadRegion(regionId);\r\n    }\r\n\r\n    getRegionId(){\r\n        return this.regionId;\r\n    }\r\n\r\n    getRegions(){\r\n        return this.regions;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Zoo/GridModel.js?");

/***/ }),

/***/ "./Model/Zoo/WeatherModel.js":
/*!***********************************!*\
  !*** ./Model/Zoo/WeatherModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WeatherModel; });\nclass WeatherModel {\r\n\r\n    constructor(country) {\r\n        const APPID = \"5ce98ff491403bc50cc78dc29975e9e4\";\r\n        fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\" + country + \"&APPID=\" + APPID + \"&units=metric\")\r\n        .then(function(response){\r\n            return response.json();\r\n        })\r\n        .then((json) => {\r\n            this.temperature = json.main.temp;\r\n            this.wind = json.wind.speed;\r\n            this.rain = (json.rain != undefined) ? true : false;\r\n        })\r\n        .catch(err => {\r\n            this.temperature = 0;\r\n            this.wind = 0;\r\n            this.rain = false;\r\n        });\r\n\r\n        let map = {};\r\n        onkeydown = onkeyup = (e) => {\r\n            map[e.keyCode] = e.type == 'keydown';\r\n\r\n            if(map[17] && map[13]){\r\n                map = {};\r\n                this.changeWeather();\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n\r\n    changeWeather(){\r\n        this.temperature = this.validate(\"Temperature: \", this.temperature);\r\n        this.wind = this.validate(\"Wind speed: \", this.wind);\r\n        this.rain = confirm(\"Rain: \", this.rain);\r\n    }\r\n    \r\n    validate(message, defaultVal){\r\n        let text = prompt(message, defaultVal);\r\n        if(text === null) return defaultVal;\r\n        let temp = parseFloat(text);\r\n        while(!temp || temp.toString().length != text.length){\r\n            alert(\"You need to provide a valid (decimal) number, separated with a '.', or click 'Cancel' to skip.\");\r\n            console.log(temp.toString().length + \", \" + text.length);\r\n            text = prompt(message, defaultVal);\r\n            if(text === null) return defaultVal;\r\n            temp = parseFloat(text);\r\n        }\r\n        return temp;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Zoo/WeatherModel.js?");

/***/ }),

/***/ "./View/ConfiguratorView.js":
/*!**********************************!*\
  !*** ./View/ConfiguratorView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorView; });\nclass ConfiguratorView {\r\n\r\n    constructor(controller, monsterTypes) {\r\n        this.fileChooserVisible = false;\r\n        this.saveMonsterButtonVisible = false;\r\n        this.controller = controller;\r\n        this.monsterTypes = monsterTypes;\r\n        this.monsterTypeSelectArea = document.getElementById(\"monsterTypeArea\");\r\n        this.configuratorDiv = document.getElementById(\"configuratorArea\");\r\n        this.imageChooserDiv = document.getElementById(\"imageChooser\");\r\n        this.monsterPreviewDiv = document.getElementById(\"monsterPreview\");\r\n\r\n        this.drawnElements = [];\r\n        this.createNewDropDown(\"Type of Monster\", monsterTypes);\r\n\r\n        this.monsterPreview = document.getElementById(\"monsterPreview\");\r\n        this.monsterPreview.addEventListener(\"drop\", (ev) => { this.drop(ev); });\r\n        this.monsterPreview.addEventListener(\"dragover\", (ev) => { ev.preventDefault(); });\r\n    }\r\n\r\n    drop(ev){\r\n        ev.preventDefault();\r\n        let data = ev.dataTransfer.getData(\"text\");\r\n        let preview = document.getElementById(data);\r\n        let ids = data.split(\" \");\r\n        if(ids.length > 1){\r\n            let monster = this.controller.monsterController.monsters[ids[0]];\r\n            this.controller.editMonster(monster);\r\n            this.editMonster(monster);\r\n            this.controller.monsterController.removeMonster(ids[0]);\r\n            preview.id = this.controller.monsterController.monsters.length + \" monster\";\r\n            ev.target.appendChild(preview);\r\n        }\r\n    }\r\n\r\n    editMonster(monster){\r\n        document.getElementById(\"Type of Monster\").value = monster.monsterType;\r\n        document.getElementById(\"monsterName\").value = monster.monsterName;\r\n        this.drawNextInputField(\"monsterName\");\r\n        if(monster.monsterType == \"Fire\" || monster.monsterType == \"Water\"){\r\n        document.getElementById(\"Amount of Arms\").value = monster.armAmount;\r\n        this.drawNextInputField(\"Amount of Arms\");\r\n        }\r\n        if(monster.monsterType != \"Earth\"){\r\n        document.getElementById(\"Type of Arms\").value = monster.armType;\r\n        this.drawNextInputField(\"Type of Arms\");\r\n        }\r\n        if(monster.monsterType != \"Fire\"){\r\n        document.getElementById(\"Amount of Legs\").value = monster.legAmount;\r\n        this.drawNextInputField(\"Amount of Legs\");\r\n        }\r\n        if(monster.monsterType == \"Water\" || monster.monsterType == \"Fire\"){\r\n        document.getElementById(\"Amount of Eyes\").value = monster.eyeAmount;\r\n        this.drawNextInputField(\"Amount of Eyes\");\r\n        }\r\n        document.getElementById(\"Type of Fur\").value = monster.furType;\r\n        this.drawNextInputField(\"Type of Fur\");\r\n\r\n        let colorSelector = document.getElementById(\"Color\");\r\n        colorSelector.value = monster.color;\r\n        this.createMonsterImageUploader(colorSelector);\r\n    }\r\n\r\n    loadMonsterOptions(monsterOptions, monsterType) {\r\n        this.resetMonsterCreator();\r\n        this.monsterType = monsterType;\r\n        this.monsterOptions = monsterOptions;\r\n        this.createNameField();\r\n    }\r\n\r\n    createNameField() {\r\n        let inputField = document.createElement(\"input\");\r\n        inputField.className = \"form-control\";\r\n        inputField.setAttribute(\"id\", \"monsterName\");\r\n        let nameLabel = document.createElement(\"Label\");\r\n        nameLabel.setAttribute(\"for\", inputField);\r\n        nameLabel.innerHTML = \"Name your new monster\";\r\n        inputField.addEventListener(\"keyup\", event => this.updateMonsterOnEnter(event, inputField));\r\n        this.configuratorDiv.appendChild(nameLabel);\r\n        this.configuratorDiv.appendChild(inputField);\r\n    }\r\n\r\n    updateMonsterOnEnter(event, inputField){\r\n        if (event.key === \"Enter\") {\r\n            this.controller.updateMonster(inputField);\r\n        }\r\n    }\r\n\r\n    drawNextInputField(selectorid) {\r\n        //check if next input field of element has not already been drawn\r\n        for(let id in this.drawnElements){\r\n            if(this.drawnElements[id] == selectorid){\r\n                return;\r\n            }\r\n        }\r\n\r\n        let last = false;\r\n        if (this.monsterOptions.length == 1) {\r\n            last = true;\r\n        }\r\n        if (this.monsterOptions.length != 0) {\r\n            let element = this.monsterOptions.shift();\r\n            let key = Object.keys(element);\r\n            let value = element[key];\r\n            this.createNewDropDown(key.toString(), value, last);\r\n        }\r\n        this.drawnElements.push(selectorid);\r\n    }\r\n\r\n    createMonsterImageUploader(selector) {\r\n        this.controller.updateMonster(selector);\r\n\r\n        if (!this.fileChooserVisible) {\r\n            let monsterImage = document.createElement(\"input\");    \r\n\r\n            monsterImage.setAttribute(\"id\", \"monsterImage\");\r\n            monsterImage.setAttribute(\"type\", \"file\");\r\n            let nameLabel = document.createElement(\"Label\");\r\n            nameLabel.setAttribute(\"for\", monsterImage);\r\n            nameLabel.innerHTML = \"Upload your Monster\";\r\n            monsterImage.onchange = () => this.previewFile();\r\n            this.imageChooserDiv.appendChild(nameLabel);\r\n            this.imageChooserDiv.appendChild(monsterImage);\r\n            this.fileChooserVisible = true;\r\n        }\r\n    }\r\n\r\n    createNewDropDown(label, value, lastElement) {\r\n        if (value != null) {\r\n            let selector = document.createElement(\"SELECT\");\r\n            selector.className = \"form-control\";\r\n            selector.setAttribute(\"id\", label);\r\n\r\n            let nameLabel = document.createElement(\"Label\");\r\n            nameLabel.setAttribute(\"for\", selector);\r\n            nameLabel.setAttribute(\"id\", label + \"Label\");\r\n            nameLabel.innerHTML = label;\r\n\r\n            if (label === \"Type of Monster\") {\r\n                this.monsterTypeSelectArea.appendChild(nameLabel);\r\n                this.monsterTypeSelectArea.appendChild(selector);\r\n            } else {\r\n                this.configuratorDiv.appendChild(nameLabel);\r\n                this.configuratorDiv.appendChild(selector);\r\n            }\r\n\r\n            for (let i = 0; i < value.length; i++) {\r\n                let list = document.createElement(\"option\")\r\n                let option = document.createTextNode(value[i]);\r\n                list.appendChild(option);\r\n                selector.appendChild(list);\r\n            }\r\n            if (lastElement) {\r\n                selector.onchange = () => this.createMonsterImageUploader(selector);\r\n            }\r\n            else if (label === \"Type of Monster\") {\r\n                selector.onchange = () => this.controller.startMonsterCreation(selector.value);\r\n            }\r\n            else if(label === \"Amount of Arms\" && this.monsterType === \"Water\") {\r\n                  selector.onchange = () => this.adjustLegSelector(selector);\r\n                } \r\n            else if (label != \"Type of Monster\") {\r\n                selector.onchange = () => this.controller.updateMonster(selector);\r\n            }\r\n            selector.value = \"\";\r\n        }\r\n    }\r\n\r\n    adjustLegSelector(selector) {\r\n        let legSelector = document.getElementById(\"Amount of Legs\");\r\n        if(legSelector == null && selector.value > 4){         \r\n                for(let element in this.monsterOptions){\r\n                    let key = Object.keys(this.monsterOptions[element]);\r\n                    if(key == \"Amount of Legs\"){\r\n                        this.monsterOptions[element][key] = [0];\r\n                    }                 \r\n                }    \r\n        }      \r\n        else if(legSelector != null){\r\n            if(selector.value > 4){\r\n                this.resetLegSelector(legSelector);\r\n                this.addLegSelectorOptions(legSelector, [0]);\r\n            } else {\r\n                this.resetLegSelector(legSelector);\r\n                this.addLegSelectorOptions(legSelector, [1,2,3,4]);\r\n            }\r\n        }\r\n        this.controller.updateMonster(selector);\r\n    }\r\n\r\n    resetLegSelector(legSelector){\r\n        while(legSelector.firstChild)\r\n        legSelector.removeChild(legSelector.firstChild);\r\n    }\r\n\r\n    addLegSelectorOptions(legSelector, value){\r\n        legSelector.onchange = () => this.controller.updateMonster(legSelector);\r\n\r\n                for(let element in value){\r\n                let list = document.createElement(\"option\")\r\n                let option = document.createTextNode(value[element]);\r\n                list.appendChild(option);\r\n                legSelector.appendChild(list);\r\n                }\r\n    }\r\n\r\n    showMonsterProperties(event) {\r\n        let ids = event.target.id.split(\" \");\r\n        if (ids.length > 1) {\r\n            let monster = this.controller.monsterController.monsters[ids[0]];\r\n            if(monster == null)\r\n            return;\r\n\r\n            let div = document.getElementById(monster.position);\r\n            let monsterInfo = document.querySelector(\".monsterInfo\");\r\n\r\n            this.removeMonsterInfo();\r\n\r\n            if(monsterInfo != div){\r\n            let deleteButton = document.createElement(\"button\");\r\n            deleteButton.innerHTML = \"Delete Monster\";\r\n            deleteButton.addEventListener(\"click\", () => this.controller.monsterController.removeMonster(monster.monsterId));\r\n\r\n            div.className = \"monsterInfo\";\r\n            let span = document.createElement(\"span\");\r\n            span.className = \"monsterInfoText\";\r\n            span.innerHTML = \"Name: \" + monster.monsterName + \"<br>\" + \"<br>\"       \r\n            + \"Type: \" + monster.monsterType + \"<br>\" \r\n            + \"Amount of Arms: \" + monster.armAmount + \"<br>\"\r\n            + \"Type of Arms: \" + monster.armType + \"<br>\"\r\n            + \"Amount of Legs: \" + monster.legAmount + \"<br>\"\r\n            + \"Amount of Eyes: \" + monster.eyeAmount + \"<br>\"\r\n            + \"Type of Fur: \" + monster.furType + \"<br>\"\r\n            + \"Color: \" + monster.color;\r\n            \r\n            span.appendChild(deleteButton);\r\n\r\n            div.appendChild(span);\r\n            let audio = new Audio(monster.audio);\r\n            audio.loop = false;\r\n            audio.play();\r\n            }            \r\n        }\r\n    }\r\n\r\n    removeMonsterInfo() {\r\n        let info = document.querySelector(\".monsterInfo\");\r\n        let span = document.querySelector(\".monsterInfoText\");\r\n        if (info != null) {\r\n            span.parentNode.removeChild(span);\r\n            info.className = \"\";\r\n        }\r\n    }\r\n\r\n    createImageTag() {\r\n        let monsterId = this.controller.monsterController.monsters.length;\r\n        let preview = document.getElementById(monsterId + \" monster\");\r\n        if(preview != null)\r\n        this.monsterPreviewDiv.removeChild(preview);\r\n\r\n        preview = document.createElement(\"IMG\");\r\n        preview.id = monsterId + \" monster\";\r\n        preview.className = \"tile\";\r\n        preview.draggable = true;\r\n        preview.addEventListener(\"dragstart\", this.drag);\r\n        preview.addEventListener(\"click\", event => this.showMonsterProperties(event));\r\n\r\n        return preview;\r\n    }\r\n\r\n    previewFile() {\r\n        let preview = this.createImageTag();\r\n        let file = document.querySelector('input[type=file]').files[0];\r\n        let reader = new FileReader();\r\n\r\n        reader.onloadend = () => {\r\n            preview.src = reader.result;\r\n            this.controller.monsterController.updateMonster(\"monsterImage\", preview.src);\r\n        }\r\n\r\n        if (file) {\r\n            reader.readAsDataURL(file);\r\n        } else {\r\n            preview.src = \"\";\r\n        }\r\n        this.monsterPreviewDiv.appendChild(preview);\r\n    }\r\n\r\n    drag(ev) {\r\n        ev.dataTransfer.setData(\"text\", ev.target.id);\r\n    }\r\n\r\n    resetMonsterCreator() {\r\n        this.drawnElements = [];\r\n        this.fileChooserVisible = false;\r\n        this.saveMonsterButtonVisible = false;\r\n        while (this.configuratorDiv.firstChild) {\r\n            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);\r\n        }\r\n        while (this.imageChooserDiv.firstChild) {\r\n            this.imageChooserDiv.removeChild(this.imageChooserDiv.firstChild);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/ConfiguratorView.js?");

/***/ }),

/***/ "./View/GridView.js":
/*!**************************!*\
  !*** ./View/GridView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridView; });\n\r\nclass GridView {\r\n\r\n    constructor(controller, monsterController) {\r\n        this.controller = controller;\r\n        this.monsterController = monsterController;\r\n        this.addRegionOptions();\r\n        this.addGrid();\r\n    }\r\n\r\n    addRegionOptions() {\r\n        let sRegion = document.getElementById(\"region-select\");\r\n        let regions = this.controller.getModel().getRegions();\r\n\r\n        for (let i = 0; i < regions.length; i++) {\r\n            let option = document.createElement(\"option\");\r\n            option.setAttribute(\"value\", i);\r\n            let text = document.createTextNode(regions[i].name);\r\n            option.appendChild(text);\r\n            sRegion.appendChild(option);\r\n        }\r\n\r\n        sRegion.onchange = () => {\r\n            this.controller.changeRegion(sRegion.selectedIndex);\r\n            this.monsterController.regionId = sRegion.selectedIndex;\r\n            this.addGrid();\r\n        };\r\n    }\r\n\r\n    addGrid() {\r\n        let grid = document.querySelector(\".grid\");\r\n        while (grid.firstChild) {\r\n            grid.removeChild(grid.firstChild);\r\n        }\r\n\r\n        for (let i = 0; i < this.controller.getModel().columns * this.controller.getModel().rows; i++) {\r\n            let y = Math.floor(i / this.controller.getModel().columns);\r\n            let x = Math.floor(i % this.controller.getModel().columns);\r\n\r\n            let div = document.createElement(\"div\");\r\n            div.id = \"\" + i;\r\n            div.addEventListener(\"dragover\", this.allowDrop);\r\n            div.addEventListener(\"drop\", (event) => { this.drop(event); });\r\n\r\n            let region = this.controller.getModel().getCurrentRegion();\r\n            if (region.grid[y].Columns[x] == 1) {\r\n                let img = document.createElement(\"img\");\r\n                img.className = \"tile\";\r\n                img.src = this.controller.getModel().getNonWalkableImage();\r\n                div.appendChild(img);\r\n            }\r\n\r\n            grid.appendChild(div);\r\n        }\r\n\r\n        for (let i = 0; i < this.monsterController.monsters.length; i++) {\r\n            if (this.monsterController.monsters[i].regionId == this.controller.getModel().getRegionId()) {\r\n                let div = document.getElementById(this.monsterController.monsters[i].position);\r\n                let monsterId = this.monsterController.monsters[i].monsterId;\r\n                let img = document.createElement(\"img\");\r\n                img.className = \"tile\";\r\n                img.id = monsterId + \" monster\";\r\n                img.src = this.monsterController.monsters[i].image;\r\n                img.addEventListener(\"dragstart\", this.drag);\r\n                img.addEventListener(\"click\", event => this.controller.showMonsterProperties(event));\r\n                div.appendChild(img);\r\n            }\r\n        }\r\n    }\r\n\r\n    allowDrop(ev) {\r\n        ev.preventDefault();\r\n    }\r\n\r\n    drop(ev) {\r\n        ev.preventDefault();\r\n        let data = ev.dataTransfer.getData(\"text\");\r\n        let monsterImg = document.getElementById(data);\r\n        ev.target.appendChild(monsterImg);\r\n        let ids = data.split(\" \");\r\n        if (ids.length > 1) {\r\n            let monsterId = ids[0];\r\n            if (monsterId >= this.monsterController.monsters.length) {\r\n                this.monsterController.saveMonster();\r\n            }\r\n            this.monsterController.monsters[monsterId].position = ev.target.id;\r\n            this.monsterController.detectMonsters(monsterId, this.controller.getModel().columns);\r\n            this.monsterController.saveToLocalStorage();\r\n            this.controller.resetConfigurator();\r\n        }\r\n    }\r\n\r\n    drag(ev) {\r\n        let info = document.querySelector(\".monsterInfo\");\r\n        let span = document.querySelector(\".monsterInfoText\");\r\n        if (info != null) {\r\n            span.parentNode.removeChild(span);\r\n            info.className = \"\";\r\n        }\r\n        ev.dataTransfer.setData(\"text\", ev.target.id);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/GridView.js?");

/***/ })

/******/ });