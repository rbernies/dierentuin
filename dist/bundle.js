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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorController; });\n/* harmony import */ var _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/ConfiguratorView */ \"./View/ConfiguratorView.js\");\n\r\n\r\n\r\nclass ConfiguratorController {\r\n\r\n    constructor(monsterController) {\r\n        this.monsterController = monsterController;\r\n        this.view = new _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.monsterController.monsterOptions.monsterTypes);\r\n    }\r\n\r\n    startMonsterCreation(monsterType) {\r\n         this.view.loadMonsterOptions(this.monsterController.monsterOptions.getMonsterOptions(monsterType));\r\n         this.monsterController.createNewMonster(monsterType);\r\n    }\r\n\r\n    updateMonster(selector){\r\n        this.monsterController.updateMonster(selector.id, selector.value);\r\n        this.view.drawNextInputField();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/ConfiguratorController.js?");

/***/ }),

/***/ "./Controller/DragAndDropController.js":
/*!*********************************************!*\
  !*** ./Controller/DragAndDropController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DragAndDropController; });\n/* harmony import */ var _Model_Zoo_TileModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/TileModel.js */ \"./Model/Zoo/TileModel.js\");\n/* harmony import */ var _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Monsters/MonsterModel.js */ \"./Model/Monsters/MonsterModel.js\");\n\r\n\r\n\r\nclass DragAndDropController {\r\n    \r\n    constructor(gridModel, gridView){\r\n        this.gridModel = gridModel;\r\n        this.gridView = gridView;\r\n        this.canvas = document.querySelector(\"canvas\");\r\n        this.monsterPreview = document.getElementById(\"monsterPreview\");\r\n        this.monster = document.getElementById(\"monster\");\r\n        this.canvas.addEventListener(\"drop\", (event) => { this.drop(event); });\r\n        this.canvas.addEventListener(\"dragover\", (event) => { this.allowDrop(event); });\r\n        this.canvas.addEventListener(\"mousedown\", (event) => { this.mouseDown(event); });\r\n        this.monsterPreview.addEventListener(\"drop\", (event) => { this.drop(event); });\r\n        this.monsterPreview.addEventListener(\"dragover\", (event) => { this.allowDrop(event); });\r\n        this.monster.addEventListener(\"dragstart\", (event) => { this.drag(event, new _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()); });\r\n\r\n        let tileSize = _Model_Zoo_TileModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize;\r\n        this.monster.style.width = tileSize * this.gridModel.scale + \"px\";\r\n        this.monster.style.height = tileSize * this.gridModel.scale + \"px\";\r\n    }\r\n\r\n    allowDrop(ev){\r\n        ev.preventDefault();\r\n    }\r\n\r\n    drag(ev, monster){\r\n        console.log(\"DRAG - SETDATA: \" + ev.target.id);\r\n        ev.dataTransfer.setData(\"text\", ev.target.id);\r\n        ev.dataTransfer.setData(\"monster\", monster.getJson());\r\n    }\r\n\r\n    mouseDown(ev){\r\n        console.log(\"MOUSEDOWN\");\r\n        let rect = this.canvas.getBoundingClientRect();\r\n        let tile = this.gridModel.getTile(ev.clientX - rect.left, ev.clientY - rect.top);\r\n        let monster = tile.getMonster();\r\n        if(monster){\r\n            let tileSize = _Model_Zoo_TileModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize;\r\n            let y = Math.floor(tile.id / this.gridModel.columns) * tileSize * this.gridModel.scale + rect.top;\r\n            let x = (tile.id % this.gridModel.columns) * tileSize * this.gridModel.scale + rect.left;\r\n            let img = new Image();\r\n            img.style.position = \"absolute\";\r\n            img.style.left = x + \"px\";\r\n            img.style.top = y + \"px\";\r\n            img.style.width = tileSize * this.gridModel.scale + \"px\";\r\n            img.style.height = tileSize * this.gridModel.scale + \"px\";\r\n            img.draggable = true;\r\n            img.zIndex = 10;\r\n            img.id = \"monsterImage\";\r\n            img.addEventListener(\"dragstart\", (event) => { this.drag(event, monster); }, false);\r\n            let self = this;\r\n            this.dragEndListener = this.dragEnd(event, self, tile, monster);\r\n            img.addEventListener(\"dragend\", this.dragEndListener);\r\n            img.src = monster.getImage();\r\n            this.gridModel.grid[tile.id].removeMonster();\r\n            document.body.appendChild(img);\r\n            this.gridView.resize();\r\n        }\r\n    }\r\n\r\n    dragEnd(ev, self, tile, monster){\r\n        console.log(\"DRAGEND - REMOVE monsterImage\");\r\n        let mmonster = _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMonsterFromJson(monster);\r\n        tile.placeMonster(mmonster);\r\n        self.gridView.resize();\r\n    }\r\n\r\n    drop(ev){\r\n        console.log(\"DROP\");\r\n        let mi = document.getElementById(\"monsterImage\");\r\n        if(mi) {\r\n            console.log(\"remove event listener\");\r\n            mi.removeEventListener(\"dragend\", this.dragEndListener);\r\n        }\r\n        let elem = document.getElementById(ev.dataTransfer.getData(\"text\"));\r\n        let monster = _Model_Monsters_MonsterModel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMonsterFromJson(ev.dataTransfer.getData(\"monster\"));\r\n\r\n        if(ev.target.nodeName == \"CANVAS\"){\r\n            let rect = this.canvas.getBoundingClientRect();\r\n            let x = ev.clientX - rect.left;\r\n            let y = ev.clientY - rect.top;\r\n            x /= this.gridModel.scale;\r\n            y /= this.gridModel.scale;\r\n            if(x <= rect.right && y <= rect.bottom){\r\n                let dropped = this.gridModel.drop(x, y, monster);\r\n                if(dropped) this.gridView.resize();\r\n            }\r\n        }else if(!(elem.id == \"monster\" && ev.target.id == \"monsterPreview\")){\r\n            this.monster.src = elem.src;\r\n        }\r\n        if(elem && elem.id != \"monster\") elem.remove();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/DragAndDropController.js?");

/***/ }),

/***/ "./Controller/GridController.js":
/*!**************************************!*\
  !*** ./Controller/GridController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridController; });\n/* harmony import */ var _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/GridModel */ \"./Model/Zoo/GridModel.js\");\n/* harmony import */ var _View_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/GridView */ \"./View/GridView.js\");\n/* harmony import */ var _Controller_DragAndDropController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controller/DragAndDropController.js */ \"./Controller/DragAndDropController.js\");\n\r\n\r\n\r\n\r\nclass GridController {\r\n\r\n    constructor(regionId){\r\n        this.model = new _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](regionId);\r\n        this.view = new _View_GridView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.model);\r\n        this.dragAndDropController = new _Controller_DragAndDropController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.model, this.view);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/GridController.js?");

/***/ }),

/***/ "./Controller/Main.js":
/*!****************************!*\
  !*** ./Controller/Main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfiguratorController */ \"./Controller/ConfiguratorController.js\");\n/* harmony import */ var _GridController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridController */ \"./Controller/GridController.js\");\n/* harmony import */ var _MonsterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonsterController */ \"./Controller/MonsterController.js\");\n\r\n\r\n\r\n\r\nconst monsterController = new _MonsterController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst configuratorController = new _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](monsterController);\r\nconst gridController = new _GridController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0);\n\n//# sourceURL=webpack:///./Controller/Main.js?");

/***/ }),

/***/ "./Controller/MonsterController.js":
/*!*****************************************!*\
  !*** ./Controller/MonsterController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterController; });\n/* harmony import */ var _Model_Monsters_MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Monsters/MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n/* harmony import */ var _Model_Monsters_MonsterOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Monsters/MonsterOptions */ \"./Model/Monsters/MonsterOptions.js\");\n\r\n\r\n\r\nclass MonsterController {\r\n\r\n    constructor() {\r\n        this.monsterOptions = new _Model_Monsters_MonsterOptions__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.monsters = [];\r\n    }\r\n\r\n    createNewMonster(monsterType) {\r\n        this.newMonster = new _Model_Monsters_MonsterModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](monsterType);\r\n      \r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        this.newMonster.updateMonster(option, value);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/MonsterController.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterModel.js":
/*!****************************************!*\
  !*** ./Model/Monsters/MonsterModel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterModel; });\nclass MonsterModel {\r\n\r\n    constructor(monsterType){\r\n        this.monsterType = monsterType;\r\n        this.setDefaultValues();\r\n        this.monsterName = \"\";\r\n        this.armAmount = 0;\r\n        this.armType = \"\";\r\n        this.legAmount = 0;\r\n        this.eyeAmount = 0;\r\n        this.furType = \"\";\r\n        this.canFly = false;\r\n        this.canSwim = false;\r\n        this.color = \"\";  \r\n        this.image = \"\";\r\n    }\r\n\r\n    setDefaultValues(){\r\n        switch (this.monsterType) {\r\n            case \"Water\":\r\n                this.canSwim = true;\r\n            case \"Earth\":\r\n                this.armAmount = 2;\r\n                this.armType = \"claws\";\r\n                this.eyeAmount = 2;\r\n            case \"Wind\":\r\n                this.armAmount = 2;\r\n                this.eyeAmount = 2;\r\n                this.canFly = true;\r\n        }\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        console.log(option)\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n            case \"Amount of Arms\":\r\n                this.armAmount = value;\r\n                if(this.monsterType === \"Water\" && value > 4){\r\n                    this.legAmount = 0;\r\n                }\r\n                if(this.monsterType === \"Fire\" && value <= 2){\r\n                    this.legAmount = 2;\r\n                }\r\n                else if(this.monsterType === \"Fire\"){\r\n                    this.legAmount = 0;\r\n                }\r\n            case \"Type of Arms\":\r\n                this.armType = value;\r\n            case \"Amount of Legs\":\r\n                this.legAmount = value;\r\n            case \"Amount of Eyes\":\r\n                this.eyeAmount = value;\r\n            case \"Type of Fur\":\r\n                if(this.monsterType === \"Fire\" && value === \"feathers\"){\r\n                    this.canFly = true;\r\n                } else if(this.monsterType === \"Fire\"){\r\n                    this.canFly = false;\r\n                }\r\n\r\n                if(this.monsterType === \"Wind\" && value === \"feathers\"){\r\n                    this.canSwim = false;\r\n                } else if(this.monsterType === \"Wind\"){\r\n                    this.canSwim = true;\r\n                }\r\n                this.furType = value;\r\n            case \"Color\":\r\n                this.color = value;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterOptions.js":
/*!******************************************!*\
  !*** ./Model/Monsters/MonsterOptions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterOptions; });\nclass MonsterOptions{\r\n\r\n    constructor(){\r\n        this.monsterTypes = [\"Water\", \"Fire\", \"Earth\", \"Wind\"];\r\n    }\r\n\r\n    getMonsterOptions(monsterType){\r\n        switch(monsterType){\r\n            case \"Water\": \r\n            return this.getWaterMonsterOptions();\r\n            case \"Fire\": \r\n            return this.getFireMonsterOptions();\r\n            case \"Earth\": \r\n            return this.getEarthMonsterOptions();\r\n            case \"Wind\": \r\n            return this.getWindMonsterOptions();\r\n        }\r\n    }\r\n\r\n    getWaterMonsterOptions(){\r\n        let waterMonsterOptions = [];\r\n        waterMonsterOptions.push({\"Amount of Arms\": [1,2,3,4,5,6,7,8]});\r\n        waterMonsterOptions.push({\"Type of Arms\": [\"tentacles\", \"fangs\"]});\r\n        waterMonsterOptions.push({\"Amount of Legs\": [1,2,3,4]});\r\n        waterMonsterOptions.push({\"Amount of Eyes\": [1,2,3,4,5,6,7,8]});\r\n        waterMonsterOptions.push({\"Type of Fur\": [\"scales\", \"slime\"]});\r\n        waterMonsterOptions.push({\"Color\": [\"blue\", \"red\", \"green\"]});\r\n        return waterMonsterOptions;\r\n    }\r\n\r\n    getFireMonsterOptions(){\r\n        let fireMonsterOptions = [];\r\n        fireMonsterOptions.push({\"Amount of Arms\": [1,2,3,4,5,6]});\r\n        fireMonsterOptions.push({\"Type of Arms\": [\"tentacles\", \"claws\", \"claw-wings\"]});\r\n        fireMonsterOptions.push({\"Amount of Eyes\": [1,2,3,4]});\r\n        fireMonsterOptions.push({\"Type of Fur\": [\"scales\", \"feathers\"]});\r\n        fireMonsterOptions.push({\"Color\": [\"red\", \"orange\", \"brown\"]});\r\n        return fireMonsterOptions;\r\n    }\r\n\r\n    getEarthMonsterOptions(){\r\n        let earthMonsterOptions = [];\r\n        earthMonsterOptions.push({\"Amount of Legs\": [2,4,6]});\r\n        earthMonsterOptions.push({\"Type of Fur\": [\"hair\", \"scales\", \"slime\"]});\r\n        earthMonsterOptions.push({\"Color\": [\"purple\", \"orange\", \"white\"]});\r\n        return earthMonsterOptions;\r\n    }\r\n\r\n    getWindMonsterOptions(){\r\n        let windMonsterOptions = [];\r\n        windMonsterOptions.push({\"Type of Arms\": [\"wings\", \"claw-wings\"]});\r\n        windMonsterOptions.push({\"Amount of Legs\": [0,2]});\r\n        windMonsterOptions.push({\"Type of Fur\": [\"feather\", \"hair\", \"scales\"]});\r\n        windMonsterOptions.push({\"Color\": [\"white\", \"blue\", \"purple\"]});\r\n        return windMonsterOptions;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterOptions.js?");

/***/ }),

/***/ "./Model/Zoo/GridModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/GridModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridModel; });\n/* harmony import */ var _WeatherModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherModel */ \"./Model/Zoo/WeatherModel.js\");\n/* harmony import */ var _TileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileModel */ \"./Model/Zoo/TileModel.js\");\n\r\n\r\n\r\nclass GridModel {\r\n    \r\n    constructor(regionId){\r\n        this.regionId = regionId;\r\n        this.columns = 10;\r\n        this.rows = 10;\r\n        this.grid = [];\r\n        this.regions = JSON.parse(regionData);\r\n        this.scale = 0;\r\n        this.loadRegion(regionId);\r\n    }\r\n    \r\n    loadRegion(regionId) {\r\n        this.regionId = regionId;\r\n        let region = this.regions[regionId];\r\n        this.columns = region.grid[0].Columns.length;\r\n        this.rows = region.grid.length;\r\n        for(let y = 0; y < this.rows; y++){\r\n            for(let x = 0; x < this.columns; x++){\r\n                this.grid[y * this.columns + x] = new _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](y * this.columns + x, region.grid[y].Columns[x]);\r\n            }\r\n        }\r\n\r\n        this.weatherModel = new _WeatherModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](region[\"reference city\"]);\r\n    }\r\n\r\n    calculateTileSize(){\r\n        let w = (window.innerWidth * 0.6) / this.columns;\r\n        let h = (window.innerHeight * 0.8) / this.rows;\r\n        let tileSize = h;\r\n        if(tileSize > w) tileSize = w;\r\n        tileSize = Math.floor(tileSize);\r\n        _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize = tileSize;\r\n    }\r\n\r\n    getCurrentRegion(){\r\n        return this.regions[this.regionId];\r\n    }\r\n\r\n    drop(x, y, monster){\r\n        let tileSize = _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize;\r\n        let tileX = Math.floor(x / tileSize);\r\n        let tileY = Math.floor(y /  tileSize);\r\n        if(tileX >= 0 && tileX < this.columns && tileY >= 0 && tileY < this.rows){\r\n            this.grid[tileY * this.columns + tileX].placeMonster(monster);\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    getTile(x, y){\r\n        let tileSize = _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize;\r\n        let tileX = Math.floor(x / tileSize);\r\n        let tileY = Math.floor(y /  tileSize);\r\n        return this.grid[tileY * this.columns + tileX];\r\n    }\r\n\r\n    getNonWalkableImage(){\r\n        return this.getCurrentRegion()[\"non-walkable-image\"];\r\n    }\r\n  \r\n    changeRegion(regionId){\r\n        this.regionId = regionId;\r\n        this.loadRegion();\r\n    }\r\n\r\n    getRegions(){\r\n        return this.regions;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Zoo/GridModel.js?");

/***/ }),

/***/ "./Model/Zoo/TileModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/TileModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TileModel; });\nlet tileSize;\r\n\r\nclass TileModel {\r\n\r\n    constructor(id, walkable){\r\n        this.id = id;\r\n        this.walkable = walkable;\r\n        this.monster = null;\r\n    }\r\n\r\n    static get tileSize(){ return tileSize; }\r\n    static set tileSize(n){ tileSize = n; }\r\n\r\n    placeMonster(monster){\r\n        this.monster = monster;\r\n    }\r\n\r\n    getMonster(){\r\n        return this.monster;\r\n    }\r\n\r\n    removeMonster(){\r\n        this.monster = null;\r\n        console.log(\"remove monster \" + this.id);\r\n    }\r\n\r\n    isWalkable(){\r\n        return this.walkable;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./Model/Zoo/TileModel.js?");

/***/ }),

/***/ "./Model/Zoo/WeatherModel.js":
/*!***********************************!*\
  !*** ./Model/Zoo/WeatherModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WeatherModel; });\nclass WeatherModel {\r\n\r\n    constructor(country) {\r\n        const APPID = \"5ce98ff491403bc50cc78dc29975e9e4\";\r\n        fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\" + country + \"&APPID=\" + APPID)\r\n        .then(function(response){\r\n            return response.json();\r\n        })\r\n        .then(function(json){\r\n            //process json results\r\n            console.log(json);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Zoo/WeatherModel.js?");

/***/ }),

/***/ "./View/ConfiguratorView.js":
/*!**********************************!*\
  !*** ./View/ConfiguratorView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorView; });\nclass ConfiguratorView {\r\n\r\n    constructor(controller, monsterTypes) {\r\n        this.controller = controller;\r\n        this.monsterTypes = monsterTypes;\r\n        this.configuratorDiv = document.getElementById(\"configuratorArea\");\r\n        this.monsterTypeSelectArea = document.getElementById(\"monsterTypeArea\");\r\n        this.monsterPreview = document.getElementById(\"monsterPreview\");\r\n        this.createNewDropDown(\"Type of Monster\", monsterTypes);\r\n        this.createMonsterImageUploader();\r\n    }\r\n\r\n    createNameField() {\r\n        let inputField = document.createElement(\"input\");\r\n        inputField.className = \"form-control\";\r\n        inputField.setAttribute(\"id\", \"monsterName\");\r\n        let nameLabel = document.createElement(\"Label\");\r\n        nameLabel.setAttribute(\"for\", inputField);\r\n        nameLabel.innerHTML = \"Name your new monster\";\r\n        inputField.onchange= () => this.controller.updateMonster(inputField);\r\n        this.configuratorDiv.appendChild(nameLabel);\r\n        this.configuratorDiv.appendChild(inputField);    \r\n    }\r\n\r\n    drawNextInputField(){\r\n        if(this.monsterOptions.length != 0){\r\n        let element = this.monsterOptions.shift();\r\n        let key = Object.keys(element);\r\n        let value = element[key];\r\n        this.createNewDropDown(key.toString(), value);\r\n        }\r\n    }\r\n\r\n    loadMonsterOptions(monsterOptions) {\r\n        this.resetMonsterCreator();\r\n        this.monsterOptions = monsterOptions;\r\n        this.createNameField();\r\n    }\r\n\r\n    createNewDropDown(label, value) {\r\n        if (value != null) {\r\n            let selector = document.createElement(\"SELECT\");\r\n            selector.className = \"form-control\";\r\n            selector.setAttribute(\"id\", label);\r\n            \r\n            let nameLabel = document.createElement(\"Label\");\r\n            nameLabel.setAttribute(\"for\", selector);\r\n            nameLabel.setAttribute(\"id\", label+\"Label\");\r\n            nameLabel.innerHTML = label;\r\n\r\n            if (label === \"Type of Monster\") {\r\n                this.monsterTypeSelectArea.appendChild(nameLabel);\r\n                this.monsterTypeSelectArea.appendChild(selector);\r\n            } else {\r\n                this.configuratorDiv.appendChild(nameLabel);\r\n                this.configuratorDiv.appendChild(selector);\r\n            }\r\n\r\n            for (let i = 0; i < value.length; i++) {\r\n                let list = document.createElement(\"option\")\r\n                let option = document.createTextNode(value[i]);\r\n                list.appendChild(option);\r\n                selector.appendChild(list);\r\n            }\r\n              \r\n            if (label === \"Type of Monster\") {\r\n                selector.onchange = () => this.controller.startMonsterCreation(selector.value);}\r\n            //  else if(label ===\"Amount of Arms\" && this.monsterType === \"Water\") {\r\n            //     selector.onchange = () => this.adjustLegSelector(selector);} \r\n                else if(label != \"Type of Monster\") {\r\n                 selector.onchange = () => this.controller.updateMonster(selector);\r\n            }\r\n            selector.value = \"\";\r\n        }\r\n    }\r\n    \r\n   \r\n    adjustLegSelector(selector) {\r\n    // if(selector.value > 4){\r\n    //     document.getElementById(\"Amount of Legs\").style.visibility = \"hidden\";\r\n    //     document.getElementById(\"Amount of LegsLabel\").style.visibility = \"hidden\";\r\n\r\n    // } else {\r\n    //     document.getElementById(\"Amount of LegsLabel\").style.visibility = \"visible\";\r\n    //     document.getElementById(\"Amount of Legs\").style.visibility = \"visible\";\r\n    // }\r\n    }\r\n\r\n\r\n    resetMonsterCreator() {\r\n        while (this.configuratorDiv.firstChild) {\r\n            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    createMonsterImageUploader(){\r\n        let monsterImage = document.createElement(\"input\");\r\n        monsterImage.setAttribute(\"id\", \"monsterImage\");\r\n        monsterImage.setAttribute(\"type\", \"file\");\r\n        let nameLabel = document.createElement(\"Label\");\r\n        nameLabel.setAttribute(\"for\", monsterImage);\r\n        nameLabel.innerHTML = \"Upload your Monster\";\r\n        monsterImage.onchange = () => this.controller.updateMonster(monsterImage);\r\n        this.monsterPreview.appendChild(nameLabel);\r\n        this.monsterPreview.appendChild(monsterImage);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/ConfiguratorView.js?");

/***/ }),

/***/ "./View/GridView.js":
/*!**************************!*\
  !*** ./View/GridView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridView; });\n/* harmony import */ var _Model_Zoo_TileModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/TileModel */ \"./Model/Zoo/TileModel.js\");\n\r\n\r\nclass GridView {\r\n\r\n    constructor(model){\r\n        this.model = model;\r\n\r\n        this.canvas = document.querySelector('canvas');\r\n        this.g = this.canvas.getContext('2d');\r\n\r\n        const debounce = (func) => {\r\n            let timer\r\n            return (event) => {\r\n              if (timer) { clearTimeout(timer) }\r\n              timer = setTimeout(func, 100, event)\r\n            }\r\n        }\r\n          \r\n        window.addEventListener('resize', debounce(() => {\r\n            this.resize();\r\n        }))\r\n\r\n        this.resize();\r\n\r\n        this.addRegionOptions();\r\n    }\r\n\r\n    addRegionOptions(){\r\n        let sRegion = document.getElementById(\"region-select\");\r\n        let regions = this.model.getRegions();\r\n\r\n        for(let i = 0; i < regions.length; i++){\r\n            let option = document.createElement(\"option\");\r\n            option.setAttribute(\"value\", i);\r\n            let text = document.createTextNode(regions[i].name);\r\n            option.appendChild(text);\r\n            sRegion.appendChild(option);\r\n        }\r\n\r\n        sRegion.onchange = () => { \r\n            this.model.changeRegion(sRegion.selectedIndex);\r\n            this.resize();\r\n        };\r\n    }\r\n\r\n    resize() {\r\n        this.canvas.width = window.innerWidth;\r\n        this.canvas.height = window.innerHeight;\r\n\r\n        this.model.calculateTileSize();\r\n        let tileSize = _Model_Zoo_TileModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize;\r\n\r\n        this.canvas.width = this.model.columns *  tileSize;\r\n        this.canvas.height = this.model.rows * tileSize;\r\n\r\n        let grid = this.model.grid;\r\n        let image = this.model.getNonWalkableImage();\r\n\r\n        this.g.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n\r\n        for(let y = 0; y < this.model.rows; y++){\r\n            for(let x = 0; x < this.model.columns; x++){\r\n                this.g.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);\r\n                \r\n                if(grid[y * this.model.columns + x].isWalkable() > 0){\r\n                    let img = new Image();\r\n                    img.onload = () => {\r\n                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);\r\n                    }\r\n                    img.src = image;\r\n                }\r\n\r\n                let monster = grid[y * this.model.columns + x].getMonster();\r\n                if(monster){\r\n                    let img = new Image();\r\n                    img.onload = () => {\r\n                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);\r\n                    }\r\n                    img.src = monster.getImage();\r\n                }\r\n            }\r\n        }\r\n        \r\n        this.model.scale = this.canvas.clientWidth / this.canvas.width;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/GridView.js?");

/***/ })

/******/ });