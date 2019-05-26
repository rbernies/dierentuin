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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorController; });\n/* harmony import */ var _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/ConfiguratorView */ \"./View/ConfiguratorView.js\");\n\n\n\nclass ConfiguratorController {\n\n    constructor(monsterController) {\n        this.monsterController = monsterController;\n        this.view = new _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.monsterController.monsterTypes);\n    }\n\n    startMonsterCreation(monsterType) {\n        this.monsterController.createNewMonster(monsterType);\n        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions, monsterType);\n    }\n\n    updateMonster(selector) {\n        this.monsterController.updateMonster(selector.id, selector.value);\n        this.view.drawNextInputField(selector.id);\n    }\n\n    saveMonster() {\n        this.monsterController.saveMonster();\n        this.view.resetMonsterCreator();\n    }\n}\n\n//# sourceURL=webpack:///./Controller/ConfiguratorController.js?");

/***/ }),

/***/ "./Controller/DragAndDropController.js":
/*!*********************************************!*\
  !*** ./Controller/DragAndDropController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DragAndDropController; });\n/* harmony import */ var _Model_Zoo_TileModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/TileModel.js */ \"./Model/Zoo/TileModel.js\");\n/* harmony import */ var _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Monsters/MonsterModel.js */ \"./Model/Monsters/MonsterModel.js\");\n\n\n\nclass DragAndDropController {\n    \n    constructor(gridModel, gridView){\n        this.gridModel = gridModel;\n        this.gridView = gridView;\n        this.canvas = document.querySelector(\"canvas\");\n        this.monsterPreview = document.getElementById(\"monsterPreview\");\n        this.monster = document.getElementById(\"monster\");\n        this.canvas.addEventListener(\"drop\", (event) => { this.drop(event); });\n        this.canvas.addEventListener(\"dragover\", (event) => { this.allowDrop(event); });\n        this.canvas.addEventListener(\"mousedown\", (event) => { this.mouseDown(event); });\n        this.monsterPreview.addEventListener(\"drop\", (event) => { this.drop(event); });\n        this.monsterPreview.addEventListener(\"dragover\", (event) => { this.allowDrop(event); });\n        this.monster.addEventListener(\"dragstart\", (event) => { this.drag(event, new _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()); });\n\n        let tileSize = _Model_Zoo_TileModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize;\n        this.monster.style.width = tileSize * this.gridModel.scale + \"px\";\n        this.monster.style.height = tileSize * this.gridModel.scale + \"px\";\n    }\n\n    allowDrop(ev){\n        ev.preventDefault();\n    }\n\n    drag(ev, monster){\n        console.log(\"DRAG - SETDATA: \" + ev.target.id);\n        ev.dataTransfer.setData(\"text\", ev.target.id);\n        ev.dataTransfer.setData(\"monster\", monster.getJson());\n    }\n\n    mouseDown(ev){\n        console.log(\"MOUSEDOWN\");\n        let rect = this.canvas.getBoundingClientRect();\n        let tile = this.gridModel.getTile(ev.clientX - rect.left, ev.clientY - rect.top);\n        let monster = tile.getMonster();\n        if(monster){\n            let tileSize = _Model_Zoo_TileModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize;\n            let y = Math.floor(tile.id / this.gridModel.columns) * tileSize * this.gridModel.scale + rect.top;\n            let x = (tile.id % this.gridModel.columns) * tileSize * this.gridModel.scale + rect.left;\n            let img = new Image();\n            img.style.position = \"absolute\";\n            img.style.left = x + \"px\";\n            img.style.top = y + \"px\";\n            img.style.width = tileSize * this.gridModel.scale + \"px\";\n            img.style.height = tileSize * this.gridModel.scale + \"px\";\n            img.draggable = true;\n            img.zIndex = 10;\n            img.id = \"monsterImage\";\n            img.addEventListener(\"dragstart\", (event) => { this.drag(event, monster); }, false);\n            let self = this;\n            this.dragEndListener = this.dragEnd(event, self, tile, monster);\n            img.addEventListener(\"dragend\", this.dragEndListener);\n            img.src = monster.getImage();\n            this.gridModel.grid[tile.id].removeMonster();\n            document.body.appendChild(img);\n            this.gridView.resize();\n        }\n    }\n\n    dragEnd(ev, self, tile, monster){\n        console.log(\"DRAGEND - REMOVE monsterImage\");\n        let mmonster = _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMonsterFromJson(monster);\n        tile.placeMonster(mmonster);\n        self.gridView.resize();\n    }\n\n    drop(ev){\n        console.log(\"DROP\");\n        let mi = document.getElementById(\"monsterImage\");\n        if(mi) {\n            console.log(\"remove event listener\");\n            mi.removeEventListener(\"dragend\", this.dragEndListener);\n        }\n        let elem = document.getElementById(ev.dataTransfer.getData(\"text\"));\n        let monster = _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMonsterFromJson(ev.dataTransfer.getData(\"monster\"));\n\n        if(ev.target.nodeName == \"CANVAS\"){\n            let rect = this.canvas.getBoundingClientRect();\n            let x = ev.clientX - rect.left;\n            let y = ev.clientY - rect.top;\n            x /= this.gridModel.scale;\n            y /= this.gridModel.scale;\n            if(x <= rect.right && y <= rect.bottom){\n                let dropped = this.gridModel.drop(x, y, monster);\n                if(dropped) this.gridView.resize();\n            }\n        }else if(!(elem.id == \"monster\" && ev.target.id == \"monsterPreview\")){\n            this.monster.src = elem.src;\n        }\n        if(elem && elem.id != \"monster\") elem.remove();\n    }\n}\n\n//# sourceURL=webpack:///./Controller/DragAndDropController.js?");

/***/ }),

/***/ "./Controller/GridController.js":
/*!**************************************!*\
  !*** ./Controller/GridController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridController; });\n/* harmony import */ var _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/GridModel */ \"./Model/Zoo/GridModel.js\");\n/* harmony import */ var _View_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/GridView */ \"./View/GridView.js\");\n/* harmony import */ var _Controller_DragAndDropController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller/DragAndDropController.js */ \"./Controller/DragAndDropController.js\");\n\n\n\n\nclass GridController {\n\n    constructor(regionId){\n        this.model = new _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](regionId);\n        this.view = new _View_GridView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.model);\n        this.dragAndDropController = new _Controller_DragAndDropController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.model, this.view);\n    }\n}\n\n//# sourceURL=webpack:///./Controller/GridController.js?");

/***/ }),

/***/ "./Controller/Main.js":
/*!****************************!*\
  !*** ./Controller/Main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfiguratorController */ \"./Controller/ConfiguratorController.js\");\n/* harmony import */ var _GridController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridController */ \"./Controller/GridController.js\");\n/* harmony import */ var _MonsterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonsterController */ \"./Controller/MonsterController.js\");\n\n\n\n\nconst monsterController = new _MonsterController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst configuratorController = new _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](monsterController);\nconst gridController = new _GridController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0);\n\n//# sourceURL=webpack:///./Controller/Main.js?");

/***/ }),

/***/ "./Controller/MonsterController.js":
/*!*****************************************!*\
  !*** ./Controller/MonsterController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterController; });\n/* harmony import */ var _Model_Monsters_MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Monsters/MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n/* harmony import */ var _Model_Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Monsters/WaterMonsterModel */ \"./Model/Monsters/WaterMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Monsters/FireMonsterModel */ \"./Model/Monsters/FireMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Monsters/EarthMonsterModel */ \"./Model/Monsters/EarthMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Monsters/WindMonsterModel */ \"./Model/Monsters/WindMonsterModel.js\");\n\n\n\n\n\n\nclass MonsterController {\n\n    constructor() {\n        this.monsters = [];\n        this.monsterTypes = [\"Water\", \"Fire\", \"Earth\", \"Wind\"];\n    }\n\n    createNewMonster(monsterType) {\n        switch (monsterType) {\n            case \"Water\":\n                this.newMonster = new _Model_Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n                break;\n            case \"Fire\":\n                this.newMonster = new _Model_Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n                break;\n            case \"Earth\":\n                this.newMonster = new _Model_Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n                break;\n            case \"Wind\":\n                this.newMonster = new _Model_Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n                break;\n            default: return;\n        }\n    }\n\n    updateMonster(option, value) {\n        this.newMonster.updateMonster(option, value);\n    }\n\n    saveMonster() {\n        this.monsters.push(new _Model_Monsters_MonsterModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.newMonster));\n        console.log(this.monsters);\n    }\n}\n\n//# sourceURL=webpack:///./Controller/MonsterController.js?");

/***/ }),

/***/ "./Model/Monsters/EarthMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/EarthMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EarthMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\n\nclass EarthMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super();\n        this.monsterOptions = [];\n        this.monsterOptions.push({ \"Amount of Legs\": [2, 4, 6] });\n        this.monsterOptions.push({ \"Type of Fur\": [\"hair\", \"scales\", \"slime\"] });\n        this.monsterOptions.push({ \"Color\": [\"purple\", \"orange\", \"white\"] });\n\n        this.monsterType = \"Earth\";\n        this.armAmount = 2;\n        this.armType = \"claws\";\n        this.eyeAmount = 2;\n    }\n\n    updateMonster(option, value) {\n        switch (option) {\n            case \"monsterName\":\n                this.monsterName = value;\n                break;\n            case \"Amount of Legs\":\n                this.legAmount = value;\n                break;\n            case \"Type of Fur\":\n                this.furType = value;\n                break;\n            case \"Color\":\n                this.color = value;\n                break;\n            case \"monsterImage\":\n                this.image = value;\n                break;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/EarthMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/FireMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/FireMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FireMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\n\nclass FireMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super();\n        this.monsterOptions = [];\n        this.monsterOptions.push({ \"Amount of Arms\": [1, 2, 3, 4, 5, 6] });\n        this.monsterOptions.push({ \"Type of Arms\": [\"tentacles\", \"claws\", \"claw-wings\"] });\n        this.monsterOptions.push({ \"Amount of Eyes\": [1, 2, 3, 4] });\n        this.monsterOptions.push({ \"Type of Fur\": [\"scales\", \"feathers\"] });\n        this.monsterOptions.push({ \"Color\": [\"red\", \"orange\", \"brown\"] });\n\n        this.monsterType = \"Fire\";\n    }\n\n    updateMonster(option, value) {\n        switch (option) {\n            case \"monsterName\":\n                this.monsterName = value;\n                break;\n            case \"Amount of Arms\":\n                this.armAmount = value;\n                if (value > 2) {\n                    this.legAmount = 0;\n                } else {\n                    this.legAmount = 2;\n                }\n                break;\n            case \"Type of Arms\":\n                this.armType = value;\n                break;\n            case \"Amount of Eyes\":\n                this.eyeAmount = value;\n                break;\n            case \"Type of Fur\":\n                if (value === \"feathers\") {\n                    this.canFly = true;\n                } else {\n                    this.canFly = false;\n                }\n                this.furType = value;\n                break;\n            case \"Color\":\n                this.color = value;\n                break;\n            case \"monsterImage\":\n                this.image = value;\n                break;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/FireMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterModel.js":
/*!****************************************!*\
  !*** ./Model/Monsters/MonsterModel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterModel; });\nclass MonsterModel {\n\n    constructor(monster) {\n        this.monsterType = monster.monsterType;\n        this.monsterName = monster.monsterName;\n        this.armAmount = monster.armAmount;\n        this.armType = monster.armType;\n        this.legAmount = monster.legAmount;\n        this.eyeAmount = monster.eyeAmount;\n        this.furType = monster.furType;\n        this.canFly = monster.canFly;\n        this.canSwim = monster.canSwim;\n        this.color = monster.color;\n        this.image = monster.image;\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterProperties.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/MonsterProperties.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterProperties; });\nclass MonsterProperties{\n\n    constructor(){\n        this.monsterType = \"\";\n        this.monsterName = \"\";\n        this.armAmount = 0;\n        this.armType = \"\";\n        this.legAmount = 0;\n        this.eyeAmount = 0;\n        this.furType = \"\";\n        this.canFly = false;\n        this.canSwim = false;\n        this.color = \"\";\n        this.image = \"\";\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterProperties.js?");

/***/ }),

/***/ "./Model/Monsters/WaterMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/WaterMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaterMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\n\nclass WaterMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super();\n        this.monsterOptions = [];\n        this.monsterOptions.push({ \"Amount of Arms\": [1, 2, 3, 4, 5, 6, 7, 8] });\n        this.monsterOptions.push({ \"Type of Arms\": [\"tentacles\", \"fangs\"] });\n        this.monsterOptions.push({ \"Amount of Legs\": [1, 2, 3, 4] });\n        this.monsterOptions.push({ \"Amount of Eyes\": [1, 2, 3, 4, 5, 6, 7, 8] });\n        this.monsterOptions.push({ \"Type of Fur\": [\"scales\", \"slime\"] });\n        this.monsterOptions.push({ \"Color\": [\"blue\", \"red\", \"green\"] });\n\n        this.monsterType = \"Water\";\n        this.canSwim = true;\n    }\n\n\n    updateMonster(option, value) {\n        switch (option) {\n            case \"monsterName\":\n                this.monsterName = value;\n                break;\n            case \"Amount of Arms\":\n                this.armAmount = value;\n                if (value > 4) {\n                    this.legAmount = 0;\n                }\n                break;\n            case \"Type of Arms\":\n                this.armType = value;\n                break;\n            case \"Amount of Legs\":\n                this.legAmount = value;\n                break;\n            case \"Amount of Eyes\":\n                this.eyeAmount = value;\n                break;\n            case \"Type of Fur\":\n                this.furType = value;\n                break;\n            case \"Color\":\n                this.color = value;\n                break;\n            case \"monsterImage\":\n                this.image = value;\n                break;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WaterMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/WindMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/WindMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\n\nclass WindMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    constructor() {\n        super();\n        this.monsterOptions = [];\n        this.monsterOptions.push({ \"Type of Arms\": [\"wings\", \"claw-wings\"] });\n        this.monsterOptions.push({ \"Amount of Legs\": [0, 2] });\n        this.monsterOptions.push({ \"Type of Fur\": [\"feather\", \"hair\", \"scales\"] });\n        this.monsterOptions.push({ \"Color\": [\"white\", \"blue\", \"purple\"] });\n\n        this.monsterType = \"Wind\";\n        this.armAmount = 2;\n        this.eyeAmount = 2;\n        this.canFly = true;\n    }\n\n    updateMonster(option, value) {\n        switch (option) {\n            case \"monsterName\":\n                this.monsterName = value;\n                break;\n            case \"Type of Arms\":\n                this.armType = value;\n                break;\n            case \"Amount of Legs\":\n                this.legAmount = value;\n                break;\n            case \"Type of Fur\":\n                if (value === \"feathers\") {\n                    this.canSwim = false;\n                } else {\n                    this.canFly = true;\n                }\n                this.furType = value;\n                break;\n            case \"Color\":\n                this.color = value;\n                break;\n            case \"monsterImage\":\n                this.image = value;\n                break;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WindMonsterModel.js?");

/***/ }),

/***/ "./Model/Zoo/GridModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/GridModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridModel; });\n/* harmony import */ var _WeatherModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherModel */ \"./Model/Zoo/WeatherModel.js\");\n/* harmony import */ var _TileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileModel */ \"./Model/Zoo/TileModel.js\");\n\n\n\nclass GridModel {\n    \n    constructor(regionId){\n        this.regionId = regionId;\n        this.columns = 10;\n        this.rows = 10;\n        this.grid = [];\n        this.regions = JSON.parse(regionData);\n        this.scale = 0;\n        this.loadRegion(regionId);\n    }\n    \n    loadRegion(regionId) {\n        this.regionId = regionId;\n        let region = this.regions[regionId];\n        this.columns = region.grid[0].Columns.length;\n        this.rows = region.grid.length;\n        for(let y = 0; y < this.rows; y++){\n            for(let x = 0; x < this.columns; x++){\n                this.grid[y * this.columns + x] = new _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](y * this.columns + x, region.grid[y].Columns[x]);\n            }\n        }\n\n        this.weatherModel = new _WeatherModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](region[\"reference city\"]);\n    }\n\n    calculateTileSize(){\n        let w = (window.innerWidth * 0.6) / this.columns;\n        let h = (window.innerHeight * 0.8) / this.rows;\n        let tileSize = h;\n        if(tileSize > w) tileSize = w;\n        tileSize = Math.floor(tileSize);\n        _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize = tileSize;\n    }\n\n    getCurrentRegion(){\n        return this.regions[this.regionId];\n    }\n\n    drop(x, y, monster){\n        let tileSize = _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize;\n        let tileX = Math.floor(x / tileSize);\n        let tileY = Math.floor(y /  tileSize);\n        if(tileX >= 0 && tileX < this.columns && tileY >= 0 && tileY < this.rows){\n            this.grid[tileY * this.columns + tileX].placeMonster(monster);\n            return true;\n        }\n        return false;\n    }\n\n    getTile(x, y){\n        let tileSize = _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize;\n        let tileX = Math.floor(x / tileSize);\n        let tileY = Math.floor(y /  tileSize);\n        return this.grid[tileY * this.columns + tileX];\n    }\n\n    getNonWalkableImage(){\n        return this.getCurrentRegion()[\"non-walkable-image\"];\n    }\n  \n    changeRegion(regionId){\n        this.regionId = regionId;\n        this.loadRegion();\n    }\n\n    getRegions(){\n        return this.regions;\n    }\n}\n\n//# sourceURL=webpack:///./Model/Zoo/GridModel.js?");

/***/ }),

/***/ "./Model/Zoo/TileModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/TileModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TileModel; });\nlet tileSize;\n\nclass TileModel {\n\n    constructor(id, walkable){\n        this.id = id;\n        this.walkable = walkable;\n        this.monster = null;\n    }\n\n    static get tileSize(){ return tileSize; }\n    static set tileSize(n){ tileSize = n; }\n\n    placeMonster(monster){\n        this.monster = monster;\n    }\n\n    getMonster(){\n        return this.monster;\n    }\n\n    removeMonster(){\n        this.monster = null;\n        console.log(\"remove monster \" + this.id);\n    }\n\n    isWalkable(){\n        return this.walkable;\n    }\n\n}\n\n//# sourceURL=webpack:///./Model/Zoo/TileModel.js?");

/***/ }),

/***/ "./Model/Zoo/WeatherModel.js":
/*!***********************************!*\
  !*** ./Model/Zoo/WeatherModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WeatherModel; });\nclass WeatherModel {\n\n    constructor(country) {\n        const APPID = \"5ce98ff491403bc50cc78dc29975e9e4\";\n        fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\" + country + \"&APPID=\" + APPID)\n        .then(function(response){\n            return response.json();\n        })\n        .then(function(json){\n            //process json results\n            console.log(json);\n        });\n    }\n}\n\n//# sourceURL=webpack:///./Model/Zoo/WeatherModel.js?");

/***/ }),

/***/ "./View/ConfiguratorView.js":
/*!**********************************!*\
  !*** ./View/ConfiguratorView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorView; });\nclass ConfiguratorView {\n\n    constructor(controller, monsterTypes) {\n        this.fileChooserVisible = false;\n        this.saveMonsterButtonVisible = false;\n        this.controller = controller;\n        this.monsterTypes = monsterTypes;\n        this.monsterTypeSelectArea = document.getElementById(\"monsterTypeArea\");\n        this.configuratorDiv = document.getElementById(\"configuratorArea\");\n        this.imageChooserDiv = document.getElementById(\"imageChooser\");\n        this.drawnElements = [];\n        this.createNewDropDown(\"Type of Monster\", monsterTypes);\n    }\n\n    loadMonsterOptions(monsterOptions, monsterType) {\n        this.resetMonsterCreator();\n        this.monsterType = monsterType;\n        this.monsterOptions = monsterOptions;\n        this.createNameField();\n    }\n\n    createNameField() {\n        let inputField = document.createElement(\"input\");\n        inputField.className = \"form-control\";\n        inputField.setAttribute(\"id\", \"monsterName\");\n        let nameLabel = document.createElement(\"Label\");\n        nameLabel.setAttribute(\"for\", inputField);\n        nameLabel.innerHTML = \"Name your new monster\";\n        inputField.addEventListener(\"keyup\", event => this.updateMonsterOnEnter(event, inputField));\n        this.configuratorDiv.appendChild(nameLabel);\n        this.configuratorDiv.appendChild(inputField);\n    }\n\n    updateMonsterOnEnter(event, inputField){\n        if (event.key === \"Enter\") {\n            this.controller.updateMonster(inputField);\n        }\n    }\n\n    drawNextInputField(selectorid) {\n        //check if next input field of element has not already been drawn\n        for(let id in this.drawnElements){\n            if(this.drawnElements[id] == selectorid){\n                return;\n            }\n        }\n\n        let last = false;\n        if (this.monsterOptions.length == 1) {\n            last = true;\n        }\n        if (this.monsterOptions.length != 0) {\n            let element = this.monsterOptions.shift();\n            let key = Object.keys(element);\n            let value = element[key];\n            this.createNewDropDown(key.toString(), value, last);\n        }\n        this.drawnElements.push(selectorid);\n    }\n\n    createMonsterImageUploader(selector) {\n        this.controller.updateMonster(selector);\n\n        if (!this.fileChooserVisible) {\n            let monsterImage = document.createElement(\"input\");\n            monsterImage.setAttribute(\"id\", \"monsterImage\");\n            monsterImage.setAttribute(\"type\", \"file\");\n            let nameLabel = document.createElement(\"Label\");\n            nameLabel.setAttribute(\"for\", monsterImage);\n            nameLabel.innerHTML = \"Upload your Monster\";\n            monsterImage.onchange = () => this.drawSaveMonsterButton(monsterImage);\n            this.imageChooserDiv.appendChild(nameLabel);\n            this.imageChooserDiv.appendChild(monsterImage);\n            this.fileChooserVisible = true;\n        }\n    }\n\n    drawSaveMonsterButton(monsterImage) {\n        this.controller.updateMonster(monsterImage);\n        if (!this.saveMonsterButtonVisible) {\n            let button = document.createElement(\"button\");\n            button.type = \"button\";\n            button.className = \"btn btn-primary\";\n            button.appendChild(document.createTextNode(\"Make my Beast!\"));\n            button.onclick = () => this.controller.saveMonster();\n            this.imageChooserDiv.appendChild(button);\n            this.saveMonsterButtonVisible = true;\n        }\n    }\n\n    createNewDropDown(label, value, lastElement) {\n        if (value != null) {\n            let selector = document.createElement(\"SELECT\");\n            selector.className = \"form-control\";\n            selector.setAttribute(\"id\", label);\n\n            let nameLabel = document.createElement(\"Label\");\n            nameLabel.setAttribute(\"for\", selector);\n            nameLabel.setAttribute(\"id\", label + \"Label\");\n            nameLabel.innerHTML = label;\n\n            if (label === \"Type of Monster\") {\n                this.monsterTypeSelectArea.appendChild(nameLabel);\n                this.monsterTypeSelectArea.appendChild(selector);\n            } else {\n                this.configuratorDiv.appendChild(nameLabel);\n                this.configuratorDiv.appendChild(selector);\n            }\n\n            for (let i = 0; i < value.length; i++) {\n                let list = document.createElement(\"option\")\n                let option = document.createTextNode(value[i]);\n                list.appendChild(option);\n                selector.appendChild(list);\n            }\n            if (lastElement) {\n                selector.onchange = () => this.createMonsterImageUploader(selector);;\n            }\n            else if (label === \"Type of Monster\") {\n                selector.onchange = () => this.controller.startMonsterCreation(selector.value);\n            }\n            else if(label === \"Amount of Arms\" && this.monsterType === \"Water\") {\n                  selector.onchange = () => this.adjustLegSelector(selector);\n                } \n            else if (label != \"Type of Monster\") {\n                selector.onchange = () => this.controller.updateMonster(selector);\n            }\n            selector.value = \"\";\n        }\n    }\n\n    adjustLegSelector(selector) {\n        let legSelector = document.getElementById(\"Amount of Legs\");\n        if(legSelector == null){\n            legSelector = this.monsterOptions.find(x => \"Amount of Legs\");\n            console.log(this.monsterOptions.find(x => \"Amount of Legs\"))\n        }\n        \n        if(selector.value > 4){\n            console.log(\" check\");\n        } \n        this.controller.updateMonster(selector);\n    }\n\n    resetMonsterCreator() {\n        this.drawnElements = [];\n        this.fileChooserVisible = false;\n        this.saveMonsterButtonVisible = false;\n        while (this.configuratorDiv.firstChild) {\n            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);\n        }\n        while (this.imageChooserDiv.firstChild) {\n            this.imageChooserDiv.removeChild(this.imageChooserDiv.firstChild);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./View/ConfiguratorView.js?");

/***/ }),

/***/ "./View/GridView.js":
/*!**************************!*\
  !*** ./View/GridView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridView; });\n/* harmony import */ var _Model_Zoo_TileModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/TileModel */ \"./Model/Zoo/TileModel.js\");\n\n\nclass GridView {\n\n    constructor(model){\n        this.model = model;\n\n        this.canvas = document.querySelector('canvas');\n        this.g = this.canvas.getContext('2d');\n\n        const debounce = (func) => {\n            let timer\n            return (event) => {\n              if (timer) { clearTimeout(timer) }\n              timer = setTimeout(func, 100, event)\n            }\n        }\n          \n        window.addEventListener('resize', debounce(() => {\n            this.resize();\n        }))\n\n        this.resize();\n\n        this.addRegionOptions();\n    }\n\n    addRegionOptions(){\n        let sRegion = document.getElementById(\"region-select\");\n        let regions = this.model.getRegions();\n\n        for(let i = 0; i < regions.length; i++){\n            let option = document.createElement(\"option\");\n            option.setAttribute(\"value\", i);\n            let text = document.createTextNode(regions[i].name);\n            option.appendChild(text);\n            sRegion.appendChild(option);\n        }\n\n        sRegion.onchange = () => { \n            this.model.changeRegion(sRegion.selectedIndex);\n            this.resize();\n        };\n    }\n\n    resize() {\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n\n        this.model.calculateTileSize();\n        let tileSize = _Model_Zoo_TileModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize;\n\n        this.canvas.width = this.model.columns *  tileSize;\n        this.canvas.height = this.model.rows * tileSize;\n\n        let grid = this.model.grid;\n        let image = this.model.getNonWalkableImage();\n\n        this.g.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n        for(let y = 0; y < this.model.rows; y++){\n            for(let x = 0; x < this.model.columns; x++){\n                this.g.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);\n                \n                if(grid[y * this.model.columns + x].isWalkable() > 0){\n                    let img = new Image();\n                    img.onload = () => {\n                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);\n                    }\n                    img.src = image;\n                }\n\n                let monster = grid[y * this.model.columns + x].getMonster();\n                if(monster){\n                    let img = new Image();\n                    img.onload = () => {\n                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);\n                    }\n                    img.src = monster.getImage();\n                }\n            }\n        }\n        \n        this.model.scale = this.canvas.clientWidth / this.canvas.width;\n    }\n}\n\n//# sourceURL=webpack:///./View/GridView.js?");

/***/ })

/******/ });