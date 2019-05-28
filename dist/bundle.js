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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorController; });\n/* harmony import */ var _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/ConfiguratorView */ \"./View/ConfiguratorView.js\");\n\r\n\r\n\r\nclass ConfiguratorController {\r\n\r\n    constructor(monsterController) {\r\n        this.monsterController = monsterController;\r\n        this.view = new _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.monsterController.monsterTypes);\r\n    }\r\n\r\n    startMonsterCreation(monsterType) {\r\n        this.monsterController.createNewMonster(monsterType);\r\n        this.view.loadMonsterOptions(this.monsterController.newMonster.monsterOptions, monsterType);\r\n    }\r\n\r\n    updateMonster(selector) {\r\n        this.monsterController.updateMonster(selector.id, selector.value);\r\n        this.view.drawNextInputField(selector.id);\r\n    }\r\n\r\n    saveMonster() {\r\n        this.monsterController.saveMonster();\r\n        this.view.resetMonsterCreator();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/ConfiguratorController.js?");

/***/ }),

/***/ "./Controller/GridController.js":
/*!**************************************!*\
  !*** ./Controller/GridController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridController; });\n/* harmony import */ var _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/GridModel */ \"./Model/Zoo/GridModel.js\");\n/* harmony import */ var _View_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/GridView */ \"./View/GridView.js\");\n\r\n\r\n\r\nclass GridController {\r\n\r\n    constructor(regionId, monsterController){\r\n        this.model = new _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](regionId);\r\n        this.view = new _View_GridView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, monsterController);\r\n    }\r\n\r\n    getModel(){\r\n        return this.model;\r\n    }\r\n\r\n    changeRegion(regionId){\r\n        this.model.changeRegion(regionId);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/GridController.js?");

/***/ }),

/***/ "./Controller/Main.js":
/*!****************************!*\
  !*** ./Controller/Main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfiguratorController */ \"./Controller/ConfiguratorController.js\");\n/* harmony import */ var _GridController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridController */ \"./Controller/GridController.js\");\n/* harmony import */ var _MonsterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonsterController */ \"./Controller/MonsterController.js\");\n\r\n\r\n\r\n\r\nconst monsterController = new _MonsterController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst configuratorController = new _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](monsterController);\r\nconst gridController = new _GridController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, monsterController);\n\n//# sourceURL=webpack:///./Controller/Main.js?");

/***/ }),

/***/ "./Controller/MonsterController.js":
/*!*****************************************!*\
  !*** ./Controller/MonsterController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterController; });\n/* harmony import */ var _Model_Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Monsters/WaterMonsterModel */ \"./Model/Monsters/WaterMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Monsters/FireMonsterModel */ \"./Model/Monsters/FireMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Monsters/EarthMonsterModel */ \"./Model/Monsters/EarthMonsterModel.js\");\n/* harmony import */ var _Model_Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Monsters/WindMonsterModel */ \"./Model/Monsters/WindMonsterModel.js\");\n\r\n\r\n\r\n\r\n\r\nclass MonsterController {\r\n\r\n    constructor() {\r\n        this.monsters = [];\r\n        this.monsterTypes = [\"Water\", \"Fire\", \"Earth\", \"Wind\"];\r\n    }\r\n\r\n    createNewMonster(monsterType) {\r\n        switch (monsterType) {\r\n            case \"Water\":\r\n                this.newMonster = new _Model_Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n                break;\r\n            case \"Fire\":\r\n                this.newMonster = new _Model_Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n                break;\r\n            case \"Earth\":\r\n                this.newMonster = new _Model_Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n                break;\r\n            case \"Wind\":\r\n                this.newMonster = new _Model_Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n                break;\r\n            default: return;\r\n        }\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        this.newMonster.updateMonster(option, value);\r\n    }\r\n\r\n    saveMonster() {\r\n        let monsterId = this.monsters.length;\r\n        this.newMonster.monsterId = monsterId;\r\n        this.monsters.push(this.newMonster);\r\n        console.log(this.monsters);\r\n\r\n        //belongs in a view class!!!!\r\n        document.getElementById(\"monster\").id = monsterId + \" monster\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/MonsterController.js?");

/***/ }),

/***/ "./Model/Monsters/EarthMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/EarthMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EarthMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass EarthMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Amount of Legs\": [2, 4, 6] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"hair\", \"scales\", \"slime\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"purple\", \"orange\", \"white\"] });\r\n\r\n        this.monsterType = \"Earth\";\r\n        this.armAmount = 2;\r\n        this.armType = \"claws\";\r\n        this.eyeAmount = 2;\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Amount of Legs\":\r\n                this.legAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/EarthMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/FireMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/FireMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FireMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass FireMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Amount of Arms\": [1, 2, 3, 4, 5, 6] });\r\n        this.monsterOptions.push({ \"Type of Arms\": [\"tentacles\", \"claws\", \"claw-wings\"] });\r\n        this.monsterOptions.push({ \"Amount of Eyes\": [1, 2, 3, 4] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"scales\", \"feathers\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"red\", \"orange\", \"brown\"] });\r\n\r\n        this.monsterType = \"Fire\";\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Amount of Arms\":\r\n                this.armAmount = value;\r\n                if (value > 2) {\r\n                    this.legAmount = 0;\r\n                } else {\r\n                    this.legAmount = 2;\r\n                }\r\n                break;\r\n            case \"Type of Arms\":\r\n                this.armType = value;\r\n                break;\r\n            case \"Amount of Eyes\":\r\n                this.eyeAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                if (value === \"feathers\") {\r\n                    this.canFly = true;\r\n                } else {\r\n                    this.canFly = false;\r\n                }\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/FireMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterProperties.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/MonsterProperties.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterProperties; });\nclass MonsterProperties{\r\n\r\n    constructor(){\r\n        this.monsterType = \"\";\r\n        this.monsterName = \"\";\r\n        this.armAmount = 0;\r\n        this.armType = \"\";\r\n        this.legAmount = 0;\r\n        this.eyeAmount = 0;\r\n        this.furType = \"\";\r\n        this.canFly = false;\r\n        this.canSwim = false;\r\n        this.color = \"\";\r\n        this.image = \"\";\r\n\r\n        this.position = 0;\r\n        this.monsterId = 0;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterProperties.js?");

/***/ }),

/***/ "./Model/Monsters/WaterMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/WaterMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaterMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass WaterMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Amount of Arms\": [1, 2, 3, 4, 5, 6, 7, 8] });\r\n        this.monsterOptions.push({ \"Type of Arms\": [\"tentacles\", \"fangs\"] });\r\n        this.monsterOptions.push({ \"Amount of Legs\": [1, 2, 3, 4] });\r\n        this.monsterOptions.push({ \"Amount of Eyes\": [1, 2, 3, 4, 5, 6, 7, 8] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"scales\", \"slime\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"blue\", \"red\", \"green\"] });\r\n\r\n        this.monsterType = \"Water\";\r\n        this.canSwim = true;\r\n    }\r\n\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Amount of Arms\":\r\n                this.armAmount = value;\r\n                if (value > 4) {\r\n                    this.legAmount = 0;\r\n                }\r\n                break;\r\n            case \"Type of Arms\":\r\n                this.armType = value;\r\n                break;\r\n            case \"Amount of Legs\":\r\n                this.legAmount = value;\r\n                break;\r\n            case \"Amount of Eyes\":\r\n                this.eyeAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WaterMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/WindMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/WindMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindMonsterModel; });\n/* harmony import */ var _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterProperties */ \"./Model/Monsters/MonsterProperties.js\");\n\r\n\r\nclass WindMonsterModel extends _MonsterProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor() {\r\n        super();\r\n        this.monsterOptions = [];\r\n        this.monsterOptions.push({ \"Type of Arms\": [\"wings\", \"claw-wings\"] });\r\n        this.monsterOptions.push({ \"Amount of Legs\": [0, 2] });\r\n        this.monsterOptions.push({ \"Type of Fur\": [\"feather\", \"hair\", \"scales\"] });\r\n        this.monsterOptions.push({ \"Color\": [\"white\", \"blue\", \"purple\"] });\r\n\r\n        this.monsterType = \"Wind\";\r\n        this.armAmount = 2;\r\n        this.eyeAmount = 2;\r\n        this.canFly = true;\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"monsterName\":\r\n                this.monsterName = value;\r\n                break;\r\n            case \"Type of Arms\":\r\n                this.armType = value;\r\n                break;\r\n            case \"Amount of Legs\":\r\n                this.legAmount = value;\r\n                break;\r\n            case \"Type of Fur\":\r\n                if (value === \"feathers\") {\r\n                    this.canSwim = false;\r\n                } else {\r\n                    this.canFly = true;\r\n                }\r\n                this.furType = value;\r\n                break;\r\n            case \"Color\":\r\n                this.color = value;\r\n                break;\r\n            case \"monsterImage\":\r\n                this.image = value;\r\n                break;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WindMonsterModel.js?");

/***/ }),

/***/ "./Model/Zoo/GridModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/GridModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridModel; });\n/* harmony import */ var _WeatherModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherModel */ \"./Model/Zoo/WeatherModel.js\");\n\r\n\r\nclass GridModel {\r\n    \r\n    constructor(regionId){\r\n        this.regionId = regionId;\r\n        this.columns = 10;\r\n        this.rows = 10;\r\n        this.regions = JSON.parse(regionData);\r\n        this.loadRegion(regionId);\r\n    }\r\n    \r\n    loadRegion(regionId) {\r\n        this.regionId = regionId;\r\n        let region = this.regions[regionId];\r\n        this.columns = region.grid[0].Columns.length;\r\n        this.rows = region.grid.length;\r\n\r\n        this.weatherModel = new _WeatherModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](region[\"reference city\"]);\r\n    }\r\n\r\n    getCurrentRegion(){\r\n        return this.regions[this.regionId];\r\n    }\r\n\r\n    getNonWalkableImage(){\r\n        return this.getCurrentRegion()[\"non-walkable-image\"];\r\n    }\r\n  \r\n    changeRegion(regionId){\r\n        this.loadRegion(regionId);\r\n    }\r\n\r\n    getRegions(){\r\n        return this.regions;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Zoo/GridModel.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorView; });\nclass ConfiguratorView {\r\n\r\n    constructor(controller, monsterTypes) {\r\n        this.fileChooserVisible = false;\r\n        this.saveMonsterButtonVisible = false;\r\n        this.controller = controller;\r\n        this.monsterTypes = monsterTypes;\r\n        this.monsterTypeSelectArea = document.getElementById(\"monsterTypeArea\");\r\n        this.configuratorDiv = document.getElementById(\"configuratorArea\");\r\n        this.imageChooserDiv = document.getElementById(\"imageChooser\");\r\n        this.drawnElements = [];\r\n        this.createNewDropDown(\"Type of Monster\", monsterTypes);\r\n    }\r\n\r\n    loadMonsterOptions(monsterOptions, monsterType) {\r\n        this.resetMonsterCreator();\r\n        this.monsterType = monsterType;\r\n        this.monsterOptions = monsterOptions;\r\n        this.createNameField();\r\n    }\r\n\r\n    createNameField() {\r\n        let inputField = document.createElement(\"input\");\r\n        inputField.className = \"form-control\";\r\n        inputField.setAttribute(\"id\", \"monsterName\");\r\n        let nameLabel = document.createElement(\"Label\");\r\n        nameLabel.setAttribute(\"for\", inputField);\r\n        nameLabel.innerHTML = \"Name your new monster\";\r\n        inputField.addEventListener(\"keyup\", event => this.updateMonsterOnEnter(event, inputField));\r\n        this.configuratorDiv.appendChild(nameLabel);\r\n        this.configuratorDiv.appendChild(inputField);\r\n    }\r\n\r\n    updateMonsterOnEnter(event, inputField){\r\n        if (event.key === \"Enter\") {\r\n            this.controller.updateMonster(inputField);\r\n        }\r\n    }\r\n\r\n    drawNextInputField(selectorid) {\r\n        //check if next input field of element has not already been drawn\r\n        for(let id in this.drawnElements){\r\n            if(this.drawnElements[id] == selectorid){\r\n                return;\r\n            }\r\n        }\r\n\r\n        let last = false;\r\n        if (this.monsterOptions.length == 1) {\r\n            last = true;\r\n        }\r\n        if (this.monsterOptions.length != 0) {\r\n            let element = this.monsterOptions.shift();\r\n            let key = Object.keys(element);\r\n            let value = element[key];\r\n            this.createNewDropDown(key.toString(), value, last);\r\n        }\r\n        this.drawnElements.push(selectorid);\r\n    }\r\n\r\n    createMonsterImageUploader(selector) {\r\n        this.controller.updateMonster(selector);\r\n\r\n        if (!this.fileChooserVisible) {\r\n            let monsterImage = document.createElement(\"input\");\r\n            monsterImage.setAttribute(\"id\", \"monsterImage\");\r\n            monsterImage.setAttribute(\"type\", \"file\");\r\n            let nameLabel = document.createElement(\"Label\");\r\n            nameLabel.setAttribute(\"for\", monsterImage);\r\n            nameLabel.innerHTML = \"Upload your Monster\";\r\n            monsterImage.onchange = () => this.drawSaveMonsterButton(monsterImage);\r\n            this.imageChooserDiv.appendChild(nameLabel);\r\n            this.imageChooserDiv.appendChild(monsterImage);\r\n            this.fileChooserVisible = true;\r\n        }\r\n    }\r\n\r\n    drawSaveMonsterButton(monsterImage) {\r\n        this.controller.updateMonster(monsterImage);\r\n        if (!this.saveMonsterButtonVisible) {\r\n            let button = document.createElement(\"button\");\r\n            button.type = \"button\";\r\n            button.className = \"btn btn-primary\";\r\n            button.appendChild(document.createTextNode(\"Make my Beast!\"));\r\n            button.onclick = () => this.controller.saveMonster();\r\n            this.imageChooserDiv.appendChild(button);\r\n            this.saveMonsterButtonVisible = true;\r\n        }\r\n    }\r\n\r\n    createNewDropDown(label, value, lastElement) {\r\n        if (value != null) {\r\n            let selector = document.createElement(\"SELECT\");\r\n            selector.className = \"form-control\";\r\n            selector.setAttribute(\"id\", label);\r\n\r\n            let nameLabel = document.createElement(\"Label\");\r\n            nameLabel.setAttribute(\"for\", selector);\r\n            nameLabel.setAttribute(\"id\", label + \"Label\");\r\n            nameLabel.innerHTML = label;\r\n\r\n            if (label === \"Type of Monster\") {\r\n                this.monsterTypeSelectArea.appendChild(nameLabel);\r\n                this.monsterTypeSelectArea.appendChild(selector);\r\n            } else {\r\n                this.configuratorDiv.appendChild(nameLabel);\r\n                this.configuratorDiv.appendChild(selector);\r\n            }\r\n\r\n            for (let i = 0; i < value.length; i++) {\r\n                let list = document.createElement(\"option\")\r\n                let option = document.createTextNode(value[i]);\r\n                list.appendChild(option);\r\n                selector.appendChild(list);\r\n            }\r\n            if (lastElement) {\r\n                selector.onchange = () => this.createMonsterImageUploader(selector);;\r\n            }\r\n            else if (label === \"Type of Monster\") {\r\n                selector.onchange = () => this.controller.startMonsterCreation(selector.value);\r\n            }\r\n            else if(label === \"Amount of Arms\" && this.monsterType === \"Water\") {\r\n                  selector.onchange = () => this.adjustLegSelector(selector);\r\n                } \r\n            else if (label != \"Type of Monster\") {\r\n                selector.onchange = () => this.controller.updateMonster(selector);\r\n            }\r\n            selector.value = \"\";\r\n        }\r\n    }\r\n\r\n    adjustLegSelector(selector) {\r\n        let legSelector = document.getElementById(\"Amount of Legs\");\r\n        if(legSelector == null && selector.value > 4){         \r\n                for(let element in this.monsterOptions){\r\n                    let key = Object.keys(this.monsterOptions[element]);\r\n                    if(key == \"Amount of Legs\"){\r\n                        this.monsterOptions[element][key] = [0];\r\n                    }                 \r\n                }    \r\n        }      \r\n        else if(legSelector != null){\r\n            if(selector.value > 4){\r\n                this.resetLegSelector(legSelector);\r\n                this.addLegSelectorOptions(legSelector, [0]);\r\n            } else {\r\n                this.resetLegSelector(legSelector);\r\n                this.addLegSelectorOptions(legSelector, [1,2,3,4]);\r\n            }\r\n        }\r\n        this.controller.updateMonster(selector);\r\n    }\r\n\r\n    resetLegSelector(legSelector){\r\n        while(legSelector.firstChild)\r\n        legSelector.removeChild(legSelector.firstChild);\r\n    }\r\n\r\n    addLegSelectorOptions(legSelector, value){\r\n        legSelector.onchange = () => this.controller.updateMonster(legSelector);\r\n\r\n                for(let element in value){\r\n                let list = document.createElement(\"option\")\r\n                let option = document.createTextNode(value[element]);\r\n                list.appendChild(option);\r\n                legSelector.appendChild(list);\r\n                }\r\n    }\r\n\r\n    resetMonsterCreator() {\r\n        this.drawnElements = [];\r\n        this.fileChooserVisible = false;\r\n        this.saveMonsterButtonVisible = false;\r\n        while (this.configuratorDiv.firstChild) {\r\n            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);\r\n        }\r\n        while (this.imageChooserDiv.firstChild) {\r\n            this.imageChooserDiv.removeChild(this.imageChooserDiv.firstChild);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/ConfiguratorView.js?");

/***/ }),

/***/ "./View/GridView.js":
/*!**************************!*\
  !*** ./View/GridView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridView; });\n\r\nclass GridView {\r\n\r\n    constructor(controller, monsterController){\r\n        this.controller = controller;\r\n        this.monsterController = monsterController;\r\n\r\n        this.addRegionOptions();\r\n        this.addGrid();\r\n\r\n        //these 2 lines belong in the class where the monster is being created\r\n        let monster = document.getElementById(\"monster\");\r\n        monster.addEventListener(\"dragstart\", this.drag);\r\n    }\r\n\r\n    addRegionOptions(){\r\n        let sRegion = document.getElementById(\"region-select\");\r\n        let regions = this.controller.getModel().getRegions();\r\n\r\n        for(let i = 0; i < regions.length; i++){\r\n            let option = document.createElement(\"option\");\r\n            option.setAttribute(\"value\", i);\r\n            let text = document.createTextNode(regions[i].name);\r\n            option.appendChild(text);\r\n            sRegion.appendChild(option);\r\n        }\r\n\r\n        sRegion.onchange = () => { \r\n            this.controller.changeRegion(sRegion.selectedIndex);\r\n            this.addGrid();\r\n        };\r\n    }\r\n\r\n    addGrid(){\r\n        let grid = document.querySelector(\".grid\");\r\n        while (grid.firstChild) {\r\n            grid.removeChild(grid.firstChild);\r\n        }\r\n\r\n        for(let i = 0; i < this.controller.getModel().columns * this.controller.getModel().rows; i++){\r\n            let y = Math.floor(i / this.controller.getModel().columns);\r\n            let x = Math.floor(i % this.controller.getModel().columns);\r\n\r\n            let div = document.createElement(\"div\");\r\n            div.id = \"\" + i;\r\n            div.addEventListener(\"dragover\", this.allowDrop);\r\n            div.addEventListener(\"drop\", this.drop);\r\n\r\n            let region = this.controller.getModel().getCurrentRegion();\r\n            if(region.grid[y].Columns[x] == 1){\r\n                let img = document.createElement(\"img\");\r\n                img.className = \"tile\";\r\n                img.src = this.controller.getModel().getNonWalkableImage();\r\n                div.appendChild(img);\r\n            }\r\n\r\n            grid.appendChild(div);\r\n        }\r\n\r\n        for(let i = 0; i < this.monsterController.monsters.length; i++){\r\n            let div = document.getElementById(this.monsterController.monsters[i].position);\r\n            let img = document.createElement(\"img\");\r\n            img.className = \"tile\";\r\n            img.src = this.monsterController.monsters[i].image;\r\n            div.appendChild(img);\r\n        }\r\n    }\r\n\r\n    allowDrop(ev){\r\n        ev.preventDefault();\r\n    }\r\n\r\n    //this method belongs in the class where the monster is being created\r\n    drop(ev){\r\n        ev.preventDefault();\r\n        let data = ev.dataTransfer.getData(\"text\");\r\n        let monster = document.getElementById(data);\r\n        monster.position = ev.target.id;\r\n        ev.target.appendChild(monster);\r\n    }\r\n\r\n    drag(ev){\r\n        ev.dataTransfer.setData(\"text\", ev.target.id);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/GridView.js?");

/***/ })

/******/ });