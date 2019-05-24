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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorController; });\n/* harmony import */ var _Model_Configurator_ConfiguratorModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Configurator/ConfiguratorModel */ \"./Model/Configurator/ConfiguratorModel.js\");\n/* harmony import */ var _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/ConfiguratorView */ \"./View/ConfiguratorView.js\");\n\r\n\r\n\r\n\r\nclass ConfiguratorController {\r\n\r\n    constructor() {\r\n        this.model = new _Model_Configurator_ConfiguratorModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.view = new _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, this.model.getMonsterTypes());\r\n        this.startMonsterCreation(\"water\");\r\n    }\r\n\r\n    startMonsterCreation(monsterType) {\r\n        this.view.startMonsterCreator(this.model.getMonsterOptions(monsterType));\r\n    }\r\n\r\n    updateMonster(option, value){\r\n        this.model.newMonster.updateMonster(option, value);\r\n        this.view.updateConfigurator(this.model.newMonster);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/ConfiguratorController.js?");

/***/ }),

/***/ "./Controller/GridController.js":
/*!**************************************!*\
  !*** ./Controller/GridController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridController; });\n/* harmony import */ var _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/GridModel */ \"./Model/Zoo/GridModel.js\");\n/* harmony import */ var _View_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/GridView */ \"./View/GridView.js\");\n\r\n\r\n\r\nclass GridController {\r\n\r\n    constructor(regionId){\r\n        this.model = new _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](regionId);\r\n        this.view = new _View_GridView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\r\n    }\r\n\r\n    getModel(){\r\n        return this.model;\r\n    }\r\n\r\n    changeRegion(regionId){\r\n        this.model.changeRegion(regionId);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Controller/GridController.js?");

/***/ }),

/***/ "./Controller/Main.js":
/*!****************************!*\
  !*** ./Controller/Main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfiguratorController */ \"./Controller/ConfiguratorController.js\");\n/* harmony import */ var _GridController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridController */ \"./Controller/GridController.js\");\n\r\n\r\n\r\n\r\nconst configuratorController = new _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst gridController = new _GridController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0);\n\n//# sourceURL=webpack:///./Controller/Main.js?");

/***/ }),

/***/ "./Model/Configurator/ConfiguratorModel.js":
/*!*************************************************!*\
  !*** ./Model/Configurator/ConfiguratorModel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorModel; });\n/* harmony import */ var _Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Monsters/WaterMonsterModel */ \"./Model/Monsters/WaterMonsterModel.js\");\n/* harmony import */ var _Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Monsters/FireMonsterModel */ \"./Model/Monsters/FireMonsterModel.js\");\n/* harmony import */ var _Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Monsters/EarthMonsterModel */ \"./Model/Monsters/EarthMonsterModel.js\");\n/* harmony import */ var _Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Monsters/WindMonsterModel */ \"./Model/Monsters/WindMonsterModel.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass ConfiguratorModel {\r\n\r\n\r\n    getMonsterTypes() {\r\n        return [\"water\", \"fire\", \"earth\", \"wind\"];\r\n    }\r\n\r\n    getMonsterOptions(monsterType) {\r\n        switch (monsterType) {\r\n            case \"water\":\r\n                this.newMonster = new _Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n                return this.newMonster\r\n            case \"fire\":\r\n                this.newMonster = new _Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n                return this.newMonster\r\n            case \"earth\":\r\n                this.newMonster = new _Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n                return this.newMonster;\r\n            case \"wind\":\r\n                this.newMonster = new _Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n                return this.newMonster;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Configurator/ConfiguratorModel.js?");

/***/ }),

/***/ "./Model/Monsters/EarthMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/EarthMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EarthMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\r\n\r\nclass EarthMonsterModel {\r\n\r\n    constructor() {\r\n        this.legAmountOption = [2, 4, 6];\r\n        this.furOption = [\"hair\", \"scales\", \"slime\"];\r\n        this.colorOption = [\"purple\", \"orange\", \"white\"];\r\n\r\n        this.armAmount = 2;\r\n        this.armType = \"claws\";\r\n        this.eyeAmount = 2;\r\n        this.canFly = false;\r\n        this.canSwim = false;\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"legAmount\":\r\n                this.legAmount = value;\r\n            case \"furType\":\r\n                this.fur = value;\r\n            case \"color\":\r\n                this.color = value;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/EarthMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/FireMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/FireMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FireMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\r\n\r\nclass FireMonsterModel {\r\n\r\n    constructor() {\r\n        this.armAmountOption = [1, 2, 3, 4, 5, 6];\r\n        this.armTypeOption = [\"tentacle\", \"claws\", \"claw-wings\"];\r\n        this.eyeAmountOption = [1, 2, 3, 4];\r\n        this.furOption = [\"scales\", \"feathers\"];\r\n        this.colorOption = [\"red\", \"orange\", \"brown\"];\r\n\r\n        this.legAmount = 2;\r\n        this.canFly = false;\r\n        this.canSwim = false;\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"armAmount\":\r\n                this.armAmount = value;\r\n                if (value > 2) {                \r\n                    this.legAmount = 0;\r\n                } else {\r\n                    this.legAmount = 2;\r\n                }\r\n                break;\r\n            case \"armType\":\r\n                this.armType = value;\r\n                break;\r\n            case \"eyeAmount\":\r\n                this.eyeAmount = value;\r\n            case \"furType\":\r\n                if (value === \"feathers\") {\r\n                    this.canFly = true;\r\n                } else {\r\n                    this.canFly = false;\r\n                }\r\n                this.fur = value;\r\n            case \"color\":\r\n                this.color = value;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/FireMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterModel.js":
/*!****************************************!*\
  !*** ./Model/Monsters/MonsterModel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterModel; });\nclass MonsterModel {\r\n\r\n    constructor(){\r\n        this.armAmountOption;\r\n        this.armTypeOption;\r\n        this.legAmountOption;\r\n        this.eyeAmountOption;\r\n        this.furOption;\r\n        this.colorOption;\r\n    \r\n        this.armAmount;\r\n        this.armType;\r\n        this.legAmount;\r\n        this.eyeAmount;\r\n        this.furType;\r\n        this.color;\r\n        this.canFly;\r\n        this.canSwim;\r\n    }\r\n\r\n    getImage(){\r\n        return \"resources/img/cactus.png\";\r\n    }\r\n\r\n    getJson(){\r\n        return \"{}\";\r\n    }\r\n\r\n    static createMonsterFromJson(){\r\n        return new MonsterModel();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/WaterMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/WaterMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaterMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\r\n\r\nclass WaterMonsterModel  {\r\n\r\n  constructor() {\r\n    this.armAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];\r\n    this.armTypeOption = [\"tentacle\", \"fins\"];\r\n    this.legAmountOption = [1, 2, 3, 4];\r\n    this.eyeAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];\r\n    this.furOption = [\"scales\", \"slime\"];\r\n    this.colorOption = [\"blue\", \"red\", \"green\"];\r\n\r\n    this.armAmount = 8;\r\n    this.canFly = false;\r\n    this.canSwim = true;\r\n  }\r\n\r\n  updateMonster(option, value) {\r\n    console.log(option);\r\n    switch (option) {\r\n      case \"armAmount\":\r\n      console.log(value);\r\n        this.armAmount = value;\r\n        if (value > 4) {\r\n          console.log(\" hi\");\r\n          this.legAmountOption = [0];\r\n          this.legAmount = 0;\r\n        } else {\r\n          this.legAmountOption = [1, 2, 3, 4];\r\n        }\r\n        break;\r\n      case \"armType\":\r\n        this.armType = value;\r\n        break;\r\n      case \"legAmount\":\r\n        this.legAmount = value;\r\n      case \"eyeAmount\":\r\n        this.eyeAmount = value;\r\n      case \"furType\":\r\n        this.fur = value;\r\n      case \"color\":\r\n        this.color = value;\r\n      default:\r\n        return null;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WaterMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/WindMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/WindMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\r\n\r\nclass WindMonsterModel {\r\n\r\n    constructor() {\r\n        this.armTypeOption = [\"wings\", \"claw-wings\"];\r\n        this.legAmountOption = [0, 2];\r\n        this.furOption = [\"feathers\", \"hair\", \"scales\"];\r\n        this.colorOption = [\"white\", \"blue\", \"purple\"];\r\n\r\n        this.armAmount = 2;\r\n        this.eyeAmount = 2;\r\n        this.canFly = true;\r\n        this.canSwim = true;\r\n    }\r\n\r\n    updateMonster(option, value) {\r\n        switch (option) {\r\n            case \"armType\":\r\n                this.armType = value;\r\n                break;\r\n            case \"legAmount\":\r\n                this.legAmount = value;\r\n            case \"furType\":\r\n                if (value === \"feathers\") {\r\n                    this.canSwim = false;\r\n                } else {\r\n                    this.canFly = true;\r\n                }\r\n                this.fur = value;\r\n            case \"color\":\r\n                this.color = value;\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WindMonsterModel.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorView; });\nclass ConfiguratorView {\r\n\r\n    constructor(controller, monsterTypes) {\r\n        this.controller = controller;\r\n        this.monsterTypes = monsterTypes;\r\n        this.configuratorDiv = document.getElementById(\"configuratorArea\");\r\n        this.monsterTypeSelectArea = document.getElementById(\"monsterTypeArea\");\r\n        this.test = [];\r\n        this.createNameField();\r\n        this.createNewDropDown(\"Type of Monster\", monsterTypes);\r\n    }\r\n\r\n    createNameField() {\r\n        let inputField = document.createElement(\"input\");\r\n        inputField.className = \"form-control\";\r\n        let nameLabel = document.createElement(\"Label\");\r\n        nameLabel.setAttribute(\"for\", inputField);\r\n        nameLabel.innerHTML = \"Name your new monster\";\r\n        this.monsterTypeSelectArea.appendChild(nameLabel);\r\n        this.monsterTypeSelectArea.appendChild(inputField);\r\n    }\r\n\r\n    createNewDropDown(label, attribute) {\r\n        if (attribute != null) {\r\n            let selector = document.createElement(\"SELECT\");\r\n            selector.className = \"form-control\";\r\n\r\n            let nameLabel = document.createElement(\"Label\");\r\n            nameLabel.setAttribute(\"for\", selector);\r\n            nameLabel.innerHTML = label;\r\n\r\n            if (label === \"Type of Monster\") {\r\n                this.monsterTypeSelectArea.appendChild(nameLabel);\r\n                this.monsterTypeSelectArea.appendChild(selector);\r\n            } else {\r\n                this.configuratorDiv.appendChild(nameLabel);\r\n                this.configuratorDiv.appendChild(selector);\r\n            }\r\n\r\n            for (let i = 0; i < attribute.length; i++) {\r\n                let list = document.createElement(\"option\")\r\n                let option = document.createTextNode(attribute[i]);\r\n                list.appendChild(option);\r\n                selector.appendChild(list);\r\n            }\r\n              \r\n            this.test.push(selector);\r\n            if (label === \"Type of Monster\") {\r\n                selector.onchange = () => this.controller.startMonsterCreation(selector.value);\r\n            } else {\r\n                selector.onchange = () => this.controller.updateMonster(label, selector.value);\r\n            }\r\n        }\r\n    }\r\n\r\n    updateConfigurator(monsterOptions) {\r\n        // console.log(monsterOptions);\r\n        // console.log(this.test[1]);\r\n        // console.log(this.test[1].options[this.test[1].selectedIndex].text);\r\n        // document.getElementById(monsterOptions.armAmount).selected = \"true\";\r\n    }\r\n\r\n    resetMonsterCreator() {\r\n        while (this.configuratorDiv.firstChild) {\r\n            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    startMonsterCreator(monsterOptions) {\r\n        this.resetMonsterCreator();\r\n        this.createNewDropDown(\"Amount of Arms\", monsterOptions.armAmountOption);\r\n        this.createNewDropDown(\"Type of Arms\", monsterOptions.armTypeOption);\r\n        this.createNewDropDown(\"Amount of Legs\", monsterOptions.legAmountOption);\r\n        this.createNewDropDown(\"Amount of Eyes\", monsterOptions.eyeAmountOption);\r\n        this.createNewDropDown(\"Type of Fur\", monsterOptions.furOption);\r\n        this.createNewDropDown(\"Color your Monster\", monsterOptions.colorOption);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/ConfiguratorView.js?");

/***/ }),

/***/ "./View/GridView.js":
/*!**************************!*\
  !*** ./View/GridView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridView; });\n\r\nclass GridView {\r\n\r\n    constructor(controller){\r\n        this.controller = controller;\r\n\r\n        this.addRegionOptions();\r\n        this.addGrid();\r\n    }\r\n\r\n    addRegionOptions(){\r\n        let sRegion = document.getElementById(\"region-select\");\r\n        let regions = this.controller.getModel().getRegions();\r\n\r\n        for(let i = 0; i < regions.length; i++){\r\n            let option = document.createElement(\"option\");\r\n            option.setAttribute(\"value\", i);\r\n            let text = document.createTextNode(regions[i].name);\r\n            option.appendChild(text);\r\n            sRegion.appendChild(option);\r\n        }\r\n\r\n        sRegion.onchange = () => { \r\n            this.controller.changeRegion(sRegion.selectedIndex);\r\n            this.addGrid();\r\n        };\r\n    }\r\n\r\n    addGrid(){\r\n        let grid = document.querySelector(\".grid\");\r\n        while (grid.firstChild) {\r\n            grid.removeChild(grid.firstChild);\r\n        }\r\n\r\n        for(let i = 0; i < this.controller.getModel().columns * this.controller.getModel().rows; i++){\r\n            let y = Math.floor(i / this.controller.getModel().columns);\r\n            let x = Math.floor(i % this.controller.getModel().columns);\r\n\r\n            let div = document.createElement(\"div\");\r\n            div.id = \"\" + i;\r\n            div.addEventListener(\"dragover\", this.allowDrop);\r\n            div.addEventListener(\"drop\", this.drop);\r\n\r\n            let region = this.controller.getModel().getCurrentRegion();\r\n            if(region.grid[y].Columns[x] == 1){\r\n                let img = document.createElement(\"img\");\r\n                img.src = this.controller.getModel().getNonWalkableImage();\r\n                div.appendChild(img);\r\n            }\r\n\r\n            grid.appendChild(div);\r\n        }\r\n    }\r\n\r\n    allowDrop(ev){\r\n        ev.preventDefault();\r\n    }\r\n\r\n    drop(ev){\r\n        ev.preventDefault();\r\n        let data = ev.dataTransfer.getData(\"text\");\r\n        ev.target.appendChild(document.getElementById(data));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./View/GridView.js?");

/***/ })

/******/ });