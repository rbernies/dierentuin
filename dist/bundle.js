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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorController; });\n/* harmony import */ var _Model_Configurator_ConfiguratorModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Configurator/ConfiguratorModel */ \"./Model/Configurator/ConfiguratorModel.js\");\n/* harmony import */ var _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/ConfiguratorView */ \"./View/ConfiguratorView.js\");\n\n\n\n\nclass ConfiguratorController {\n\n    constructor() {\n        this.model = new _Model_Configurator_ConfiguratorModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.view = new _View_ConfiguratorView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, this.model.getMonsterTypes());\n        this.startMonsterCreation(\"water\");\n    }\n\n    startMonsterCreation(monsterType) {\n        this.view.startMonsterCreator(this.model.getMonsterOptions(monsterType));\n    }\n\n    updateMonster(option, value){\n        this.model.newMonster.updateMonster(option, value);\n        this.view.updateConfigurator(this.model.newMonster);\n    }\n}\n\n//# sourceURL=webpack:///./Controller/ConfiguratorController.js?");

/***/ }),

/***/ "./Controller/GridController.js":
/*!**************************************!*\
  !*** ./Controller/GridController.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridController; });\n/* harmony import */ var _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/GridModel */ \"./Model/Zoo/GridModel.js\");\n/* harmony import */ var _View_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/GridView */ \"./View/GridView.js\");\n\n\n\nclass GridController {\n\n    constructor(regionId){\n        this.model = new _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](regionId);\n        this.view = new _View_GridView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, this.model.columns, this.model.rows);\n    }\n\n    changeRegion(regionId){\n        this.model = new _Model_Zoo_GridModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](regionId);\n    }\n\n    getRegions(){\n        return this.model.regions;\n    }\n\n    getCurrentRegion(){\n        return this.model.getCurrentRegion();\n    }\n}\n\n//# sourceURL=webpack:///./Controller/GridController.js?");

/***/ }),

/***/ "./Controller/Main.js":
/*!****************************!*\
  !*** ./Controller/Main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfiguratorController */ \"./Controller/ConfiguratorController.js\");\n/* harmony import */ var _GridController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridController */ \"./Controller/GridController.js\");\n\n\n\n\nconst configuratorController = new _ConfiguratorController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst gridController = new _GridController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0);\n\n\n//# sourceURL=webpack:///./Controller/Main.js?");

/***/ }),

/***/ "./Model/Configurator/ConfiguratorModel.js":
/*!*************************************************!*\
  !*** ./Model/Configurator/ConfiguratorModel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorModel; });\n/* harmony import */ var _Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Monsters/WaterMonsterModel */ \"./Model/Monsters/WaterMonsterModel.js\");\n/* harmony import */ var _Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Monsters/FireMonsterModel */ \"./Model/Monsters/FireMonsterModel.js\");\n/* harmony import */ var _Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Monsters/EarthMonsterModel */ \"./Model/Monsters/EarthMonsterModel.js\");\n/* harmony import */ var _Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Monsters/WindMonsterModel */ \"./Model/Monsters/WindMonsterModel.js\");\n\n\n\n\n\n\nclass ConfiguratorModel {\n\n\n    getMonsterTypes() {\n        return [\"water\", \"fire\", \"earth\", \"wind\"];\n    }\n\n    getMonsterOptions(monsterType) {\n        switch (monsterType) {\n            case \"water\":\n                this.newMonster = new _Monsters_WaterMonsterModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n                return this.newMonster\n            case \"fire\":\n                this.newMonster = new _Monsters_FireMonsterModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n                return this.newMonster\n            case \"earth\":\n                this.newMonster = new _Monsters_EarthMonsterModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n                return this.newMonster;\n            case \"wind\":\n                this.newMonster = new _Monsters_WindMonsterModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n                return this.newMonster;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Configurator/ConfiguratorModel.js?");

/***/ }),

/***/ "./Model/Monsters/EarthMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/EarthMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EarthMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\n\nclass EarthMonsterModel {\n\n    constructor() {\n        this.legAmountOption = [2, 4, 6];\n        this.furOption = [\"hair\", \"scales\", \"slime\"];\n        this.colorOption = [\"purple\", \"orange\", \"white\"];\n\n        this.armAmount = 2;\n        this.armType = \"claws\";\n        this.eyeAmount = 2;\n        this.canFly = false;\n        this.canSwim = false;\n    }\n\n    updateMonster(option, value) {\n        switch (option) {\n            case \"legAmount\":\n                this.legAmount = value;\n            case \"furType\":\n                this.fur = value;\n            case \"color\":\n                this.color = value;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/EarthMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/FireMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/FireMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FireMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\n\nclass FireMonsterModel {\n\n    constructor() {\n        this.armAmountOption = [1, 2, 3, 4, 5, 6];\n        this.armTypeOption = [\"tentacle\", \"claws\", \"claw-wings\"];\n        this.eyeAmountOption = [1, 2, 3, 4];\n        this.furOption = [\"scales\", \"feathers\"];\n        this.colorOption = [\"red\", \"orange\", \"brown\"];\n\n        this.legAmount = 2;\n        this.canFly = false;\n        this.canSwim = false;\n    }\n\n    updateMonster(option, value) {\n        switch (option) {\n            case \"armAmount\":\n                this.armAmount = value;\n                if (value > 2) {                \n                    this.legAmount = 0;\n                } else {\n                    this.legAmount = 2;\n                }\n                break;\n            case \"armType\":\n                this.armType = value;\n                break;\n            case \"eyeAmount\":\n                this.eyeAmount = value;\n            case \"furType\":\n                if (value === \"feathers\") {\n                    this.canFly = true;\n                } else {\n                    this.canFly = false;\n                }\n                this.fur = value;\n            case \"color\":\n                this.color = value;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/FireMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/MonsterModel.js":
/*!****************************************!*\
  !*** ./Model/Monsters/MonsterModel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MonsterModel; });\nclass MonsterModel {\n\n    constructor(){\n        this.armAmountOption;\n        this.armTypeOption;\n        this.legAmountOption;\n        this.eyeAmountOption;\n        this.furOption;\n        this.colorOption;\n    \n        this.armAmount;\n        this.armType;\n        this.legAmount;\n        this.eyeAmount;\n        this.furType;\n        this.color;\n        this.canFly;\n        this.canSwim;\n    }\n\n    getImage(){\n        return \"resources/img/cactus.png\";\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/MonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/WaterMonsterModel.js":
/*!*********************************************!*\
  !*** ./Model/Monsters/WaterMonsterModel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WaterMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\n\nclass WaterMonsterModel  {\n\n  constructor() {\n    this.armAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];\n    this.armTypeOption = [\"tentacle\", \"fins\"];\n    this.legAmountOption = [1, 2, 3, 4];\n    this.eyeAmountOption = [1, 2, 3, 4, 5, 6, 7, 8];\n    this.furOption = [\"scales\", \"slime\"];\n    this.colorOption = [\"blue\", \"red\", \"green\"];\n\n    this.armAmount = 8;\n    this.canFly = false;\n    this.canSwim = true;\n  }\n\n  updateMonster(option, value) {\n    console.log(option);\n    switch (option) {\n      case \"armAmount\":\n      console.log(value);\n        this.armAmount = value;\n        if (value > 4) {\n          console.log(\" hi\");\n          this.legAmountOption = [0];\n          this.legAmount = 0;\n        } else {\n          this.legAmountOption = [1, 2, 3, 4];\n        }\n        break;\n      case \"armType\":\n        this.armType = value;\n        break;\n      case \"legAmount\":\n        this.legAmount = value;\n      case \"eyeAmount\":\n        this.eyeAmount = value;\n      case \"furType\":\n        this.fur = value;\n      case \"color\":\n        this.color = value;\n      default:\n        return null;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WaterMonsterModel.js?");

/***/ }),

/***/ "./Model/Monsters/WindMonsterModel.js":
/*!********************************************!*\
  !*** ./Model/Monsters/WindMonsterModel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WindMonsterModel; });\n/* harmony import */ var _MonsterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\n\nclass WindMonsterModel {\n\n    constructor() {\n        this.armTypeOption = [\"wings\", \"claw-wings\"];\n        this.legAmountOption = [0, 2];\n        this.furOption = [\"feathers\", \"hair\", \"scales\"];\n        this.colorOption = [\"white\", \"blue\", \"purple\"];\n\n        this.armAmount = 2;\n        this.eyeAmount = 2;\n        this.canFly = true;\n        this.canSwim = true;\n    }\n\n    updateMonster(option, value) {\n        switch (option) {\n            case \"armType\":\n                this.armType = value;\n                break;\n            case \"legAmount\":\n                this.legAmount = value;\n            case \"furType\":\n                if (value === \"feathers\") {\n                    this.canSwim = false;\n                } else {\n                    this.canFly = true;\n                }\n                this.fur = value;\n            case \"color\":\n                this.color = value;\n            default:\n                return null;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./Model/Monsters/WindMonsterModel.js?");

/***/ }),

/***/ "./Model/Zoo/GridModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/GridModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridModel; });\n/* harmony import */ var _WeatherModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherModel */ \"./Model/Zoo/WeatherModel.js\");\n/* harmony import */ var _TileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileModel */ \"./Model/Zoo/TileModel.js\");\n\n\n\nclass GridModel {\n    \n    constructor(regionId){\n        this.regionId = regionId;\n        this.columns = 10;\n        this.rows = 10;\n        this.grid = [];\n        this.regions = JSON.parse(regionData);\n        this.loadRegion(regionId);\n    }\n    \n    loadRegion(regionId) {\n        this.regionId = regionId;\n        let region = this.regions[regionId];\n        this.columns = region.grid[0].Columns.length;\n        this.rows = region.grid.length;\n        for(let y = 0; y < this.rows; y++){\n            for(let x = 0; x < this.columns; x++){\n                this.grid[y * this.columns + x] = new _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](region.grid[y].Columns[x]);\n            }\n        }\n\n        this.weatherModel = new _WeatherModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](region[\"reference city\"]);\n    }\n\n    calculateTileSize(){\n        let w = (window.innerWidth * 0.6) / this.columns;\n        let h = (window.innerHeight * 0.8) / this.rows;\n        let tileSize = h;\n        if(tileSize > w) tileSize = w;\n        tileSize = Math.floor(tileSize);\n        _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize = tileSize;\n    }\n\n    getCurrentRegion(){\n        return this.regions[this.regionId];\n    }\n\n    drop(x, y, monster){\n        let tileX = Math.floor(x / _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize);\n        let tileY = Math.floor(y /  _TileModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize);\n        if(tileX >= 0 && tileX < this.columns && tileY >= 0 && tileY < this.rows){\n            this.grid[tileY * this.columns + tileX].placeMonster(monster);\n            return true;\n        }\n        return false;\n    }\n\n    getNonWalkableImage(){\n        return this.getCurrentRegion()[\"non-walkable-image\"];\n    }\n\n}\n\n\n\n//# sourceURL=webpack:///./Model/Zoo/GridModel.js?");

/***/ }),

/***/ "./Model/Zoo/TileModel.js":
/*!********************************!*\
  !*** ./Model/Zoo/TileModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TileModel; });\nlet tileSize;\n\nclass TileModel {\n\n    constructor(walkable){\n        this.walkable = walkable;\n        this.monster = null;\n    }\n\n    static get tileSize(){ return tileSize; }\n    static set tileSize(n){ tileSize = n; }\n\n    placeMonster(monster){\n        this.monster = monster;\n    }\n\n    getMonster(){\n        return this.monster;\n    }\n\n    removeMonster(){\n        this.monster = null;\n    }\n\n    isWalkable(){\n        return this.walkable;\n    }\n\n}\n\n//# sourceURL=webpack:///./Model/Zoo/TileModel.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConfiguratorView; });\nclass ConfiguratorView {\n\n    constructor(controller, monsterTypes) {\n        this.controller = controller;\n        this.monsterTypes = monsterTypes;\n        this.configuratorDiv = document.getElementById(\"configuratorArea\");\n        this.monsterTypeSelectArea = document.getElementById(\"monsterTypeArea\");\n        this.test = [];\n        this.createNameField();\n        this.createNewDropDown(\"Type of Monster\", monsterTypes);\n    }\n\n    createNameField() {\n        let inputField = document.createElement(\"input\");\n        inputField.className = \"form-control\";\n        let nameLabel = document.createElement(\"Label\");\n        nameLabel.setAttribute(\"for\", inputField);\n        nameLabel.innerHTML = \"Name your new monster\";\n        this.monsterTypeSelectArea.appendChild(nameLabel);\n        this.monsterTypeSelectArea.appendChild(inputField);\n    }\n\n    createNewDropDown(label, attribute) {\n        if (attribute != null) {\n            let selector = document.createElement(\"SELECT\");\n            selector.className = \"form-control\";\n\n            let nameLabel = document.createElement(\"Label\");\n            nameLabel.setAttribute(\"for\", selector);\n            nameLabel.innerHTML = label;\n\n            if (label === \"Type of Monster\") {\n                this.monsterTypeSelectArea.appendChild(nameLabel);\n                this.monsterTypeSelectArea.appendChild(selector);\n            } else {\n                this.configuratorDiv.appendChild(nameLabel);\n                this.configuratorDiv.appendChild(selector);\n            }\n\n            for (let i = 0; i < attribute.length; i++) {\n                let list = document.createElement(\"option\")\n                let option = document.createTextNode(attribute[i]);\n                list.appendChild(option);\n                selector.appendChild(list);\n            }\n              \n            this.test.push(selector);\n            if (label === \"Type of Monster\") {\n                selector.onchange = () => this.controller.startMonsterCreation(selector.value);\n            } else {\n                selector.onchange = () => this.controller.updateMonster(label, selector.value);\n            }\n        }\n    }\n\n    updateConfigurator(monsterOptions) {\n        // console.log(monsterOptions);\n        // console.log(this.test[1]);\n        // console.log(this.test[1].options[this.test[1].selectedIndex].text);\n        // document.getElementById(monsterOptions.armAmount).selected = \"true\";\n    }\n\n    resetMonsterCreator() {\n        while (this.configuratorDiv.firstChild) {\n            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);\n        }\n    }\n\n    startMonsterCreator(monsterOptions) {\n        this.resetMonsterCreator();\n        this.createNewDropDown(\"Amount of Arms\", monsterOptions.armAmountOption);\n        this.createNewDropDown(\"Type of Arms\", monsterOptions.armTypeOption);\n        this.createNewDropDown(\"Amount of Legs\", monsterOptions.legAmountOption);\n        this.createNewDropDown(\"Amount of Eyes\", monsterOptions.eyeAmountOption);\n        this.createNewDropDown(\"Type of Fur\", monsterOptions.furOption);\n        this.createNewDropDown(\"Color your Monster\", monsterOptions.colorOption);\n    }\n}\n\n//# sourceURL=webpack:///./View/ConfiguratorView.js?");

/***/ }),

/***/ "./View/GridView.js":
/*!**************************!*\
  !*** ./View/GridView.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GridView; });\n/* harmony import */ var _Model_Zoo_TileModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Zoo/TileModel */ \"./Model/Zoo/TileModel.js\");\n/* harmony import */ var _Model_Monsters_MonsterModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Monsters/MonsterModel */ \"./Model/Monsters/MonsterModel.js\");\n\n\n\nclass GridView {\n\n    constructor(controller, columns, rows){\n        this.columns = columns;\n        this.rows = rows;\n        this.controller = controller;\n\n        this.canvas = document.querySelector('canvas');\n        this.g = this.canvas.getContext('2d');\n\n        const debounce = (func) => {\n            let timer\n            return (event) => {\n              if (timer) { clearTimeout(timer) }\n              timer = setTimeout(func, 100, event)\n            }\n        }\n          \n        window.addEventListener('resize', debounce(() => {\n            this.resize();\n        }))\n\n        this.resize();\n\n        this.addRegionOptions();\n    }\n\n    addRegionOptions(){\n        let sRegion = document.getElementById(\"region-select\");\n        let regions = this.controller.getRegions();\n\n        for(let i = 0; i < regions.length; i++){\n            let option = document.createElement(\"option\");\n            option.setAttribute(\"value\", i);\n            let text = document.createTextNode(regions[i].name);\n            option.appendChild(text);\n            sRegion.appendChild(option);\n        }\n\n        sRegion.onchange = () => { \n            this.controller.changeRegion(sRegion.selectedIndex);\n            this.resize();\n        };\n\n        let rect = this.canvas.getBoundingClientRect();\n        this.drop(rect.left, rect.top, new _Model_Monsters_MonsterModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n    }\n\n    drop(x, y, monster){\n        let rect = this.canvas.getBoundingClientRect();\n        x -= rect.left;\n        y -= rect.top;\n        if(x <= rect.right && y <= rect.bottom){\n            let dropped = this.controller.model.drop(x, y, monster);\n            if(dropped) this.resize();\n            return dropped;\n        }\n        return false;\n    }\n\n    resize() {\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight;\n\n        this.controller.model.calculateTileSize();\n        let tileSize = _Model_Zoo_TileModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize;\n\n        this.canvas.width = this.columns *  tileSize;\n        this.canvas.height = this.rows * tileSize;\n\n        let grid = this.controller.model.grid;\n        let image = this.controller.model.getNonWalkableImage();\n\n        for(let y = 0; y < this.rows; y++){\n            for(let x = 0; x < this.columns; x++){\n                this.g.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);\n                \n                if(grid[y * this.columns + x].isWalkable() > 0){\n                    let img = new Image();\n                    img.onload = () => {\n                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);\n                    }\n                    img.src = image;\n                }\n\n                let monster = grid[y * this.columns + x].getMonster();\n                if(monster){\n                    let img = new Image();\n                    img.onload = () => {\n                        this.g.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);\n                    }\n                    img.src = monster.getImage();\n                }\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack:///./View/GridView.js?");

/***/ })

/******/ });