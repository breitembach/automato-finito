var app =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Automato_1 = __webpack_require__(/*! ./controller/Automato */ \"./src/controller/Automato.ts\");\r\nvar AppElements_1 = __webpack_require__(/*! ./view/AppElements */ \"./src/view/AppElements.ts\");\r\nexports.AppElements = AppElements_1.AppElements;\r\nvar automato = new Automato_1.Automato();\r\nexports.automato = automato;\r\nAppElements_1.AppElements.getFileEntryElement.addEventListener(\"change\", function () {\r\n    if (this.files && this.files[0]) {\r\n        var myFileEntry = this.files[0];\r\n        var reader = new FileReader();\r\n        reader.addEventListener('load', function (e) {\r\n            var afnData = e.target['result'];\r\n            try {\r\n                automato.processAfn(afnData);\r\n            }\r\n            catch (error) {\r\n                AppElements_1.AppElements.showMessageError(error.message);\r\n                throw error;\r\n            }\r\n        });\r\n        reader.readAsBinaryString(myFileEntry);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://app/./src/app.ts?");

/***/ }),

/***/ "./src/controller/Automato.ts":
/*!************************************!*\
  !*** ./src/controller/Automato.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar AppElements_1 = __webpack_require__(/*! ../view/AppElements */ \"./src/view/AppElements.ts\");\r\nvar AFN_1 = __webpack_require__(/*! ../models/AFN */ \"./src/models/AFN.ts\");\r\nvar AFD_1 = __webpack_require__(/*! ../models/AFD */ \"./src/models/AFD.ts\");\r\nvar Automato = /** @class */ (function () {\r\n    function Automato() {\r\n        this.afn = new AFN_1.AFN();\r\n        this.afd = new AFD_1.AFD();\r\n    }\r\n    Automato.prototype.getAfn = function () {\r\n        return this.afn.allStates;\r\n    };\r\n    Automato.prototype.processAfn = function (afnData) {\r\n        if (afnData == \"\") {\r\n            throw new Error(\"Arquivo Vazio\");\r\n        }\r\n        var lines = afnData.split('\\n');\r\n        if (lines[0].split(':')[0] != 'AB') {\r\n            throw new Error(\"Formato de afn não permitido\");\r\n        }\r\n        AppElements_1.AppElements.getElementInputView.textContent = afnData;\r\n        for (var i = 0; i < lines.length; i++) {\r\n            this.readByLine(lines[i].split(':'));\r\n        }\r\n        this.afd.processAfd(this.afn.allStates);\r\n    };\r\n    Automato.prototype.readByLine = function (line) {\r\n        for (var index = 0; index < line.length; index++) { // each array of strings\r\n            if (line[index] == 'AB') { // one time\r\n                this.afn.alphabet = line[index];\r\n                this.afn.alphabetValue = line[index + 1].trim().replace(' ', '');\r\n                if (this.afn.alphabetValue != '01') {\r\n                    throw new Error(\"Alfabeto de afn errado!!! Dica: AB: 0 1\");\r\n                }\r\n                break;\r\n            }\r\n            else if (line[index] == 'i') {\r\n                this.afn.stateInitial = line[index + 1].trim(); //get second element array\r\n                break;\r\n            }\r\n            else if (line[index] == 'f') {\r\n                this.afn.stateFinal = line[index + 1]; //get second element array\r\n                break; // jump to next dont goback \r\n            }\r\n            else {\r\n                this.createStates(line[index].split(' ')); // states avaiable ex: ['x1', '0', 'x100']\r\n            }\r\n        }\r\n    };\r\n    Automato.prototype.createStates = function (line) {\r\n        var state = line[0] || undefined;\r\n        var stateCur = line[2] || undefined;\r\n        var stateObj = {};\r\n        //create x: [x, x1];\r\n        //create x1: [x1, x2];\r\n        if (!(state == this.prevStateName)) {\r\n            this.prevStateName = state;\r\n            this.curState = stateCur;\r\n        }\r\n        else {\r\n            stateObj[state] = [this.curState, stateCur];\r\n            this.afn.setStates(stateObj);\r\n        }\r\n    };\r\n    return Automato;\r\n}());\r\nexports.Automato = Automato;\r\n\n\n//# sourceURL=webpack://app/./src/controller/Automato.ts?");

/***/ }),

/***/ "./src/models/AFD.ts":
/*!***************************!*\
  !*** ./src/models/AFD.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar AFN_1 = __webpack_require__(/*! ../models/AFN */ \"./src/models/AFN.ts\");\r\nvar AppElements_1 = __webpack_require__(/*! ../view/AppElements */ \"./src/view/AppElements.ts\");\r\nvar AFD = /** @class */ (function (_super) {\r\n    __extends(AFD, _super);\r\n    function AFD() {\r\n        var _this = _super.call(this) || this;\r\n        _this.statesAFD = {};\r\n        _this.afn = {};\r\n        _this.currentState = [];\r\n        _this.afnStatesValuesTemp = [];\r\n        _this.finish = false;\r\n        return _this;\r\n    }\r\n    AFD.prototype.processAfd = function (afn) {\r\n        this.afn = afn;\r\n        var initialState = afn[0];\r\n        var initialStateName = Object.keys(initialState);\r\n        var initialStateValue = Object.values(initialState)[0];\r\n        this.stateInitial = initialStateName;\r\n        this.statesAFD[initialStateName] = initialStateValue;\r\n        var nextState = initialStateValue[1]; // \"x, x,x1\"\r\n        this.currentState.push(nextState);\r\n        this.findStateInAfn(afn, nextState);\r\n    };\r\n    AFD.prototype.findStateInAfn = function (afn, search) {\r\n        var _this = this;\r\n        while (true) {\r\n            var curKeyAFD = this.currentState[0].split(',');\r\n            for (var key in curKeyAFD) {\r\n                var state_1 = curKeyAFD[key];\r\n                this.findCurrentState(state_1);\r\n            }\r\n            var state = void 0;\r\n            var state2 = void 0;\r\n            state = this.afnStatesValuesTemp.map(function (d) {\r\n                return d[0]; // zero get just values of afn 0\r\n            }).reduce(function (prev, cur) { return _this.formatValuesOfAFD(prev, cur); }); //to separe with virgula or not | Concat for one state\r\n            state2 = this.afnStatesValuesTemp.map(function (d) {\r\n                return d[1]; // one get just values of afn 1\r\n            }).reduce(function (prev, cur) { return _this.formatValuesOfAFD(prev, cur); });\r\n            if (this.goNextState(state)) {\r\n                if (state in this.statesAFD && state2 in this.statesAFD) {\r\n                    this.finish = true;\r\n                    this.statesAFD[this.currentState[0]] = [state, state2];\r\n                }\r\n                else {\r\n                    this.statesAFD[this.currentState[0]] = [state, state2];\r\n                    this.currentState = [state2];\r\n                }\r\n            }\r\n            else {\r\n                this.statesAFD[this.currentState[0]] = [state, state2];\r\n                this.currentState = [state];\r\n            }\r\n            this.afnStatesValuesTemp = [];\r\n            console.log(\"AFD\", this.statesAFD);\r\n            if (this.finish == true) {\r\n                break;\r\n            }\r\n        } // while\r\n        //finish the program and show the result on front end\r\n        AppElements_1.AppElements.getElementOutputView.textContent = \"AB: 0 1 \\n\";\r\n        AppElements_1.AppElements.getElementOutputView.textContent += \"i: \" + this.stateInitial + \" \\n\";\r\n        AppElements_1.AppElements.getElementOutputView.textContent += \"f: \" + this.currentState + \" \\n\";\r\n        var index = 0;\r\n        for (var property in this.statesAFD) {\r\n            AppElements_1.AppElements.getElementOutputView.textContent +=\r\n                property + \" \" + index + \" \" + this.statesAFD[property][index] + \"\\n\" + property + \" \" + (index + 1) + \" \" + this.statesAFD[property][index + 1] + \"\\n\";\r\n        }\r\n    };\r\n    AFD.prototype.formatValuesOfAFD = function (prev, cur) {\r\n        if (prev == undefined || prev == 'undefined') {\r\n            return \"\" + cur;\r\n        }\r\n        if (cur == undefined || cur == 'undefined') {\r\n            return \"\" + prev;\r\n        }\r\n        if (prev && cur) {\r\n            return prev + \",\" + cur;\r\n        }\r\n    };\r\n    AFD.prototype.goNextState = function (state) {\r\n        if (state in this.statesAFD)\r\n            return true;\r\n        return false;\r\n    };\r\n    AFD.prototype.findCurrentState = function (state) {\r\n        var afn = this.afn;\r\n        for (var key in afn) {\r\n            if (afn.hasOwnProperty(key)) {\r\n                if (afn[key].hasOwnProperty(state)) {\r\n                    this.afnStatesValuesTemp.push(afn[key][state]);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return AFD;\r\n}(AFN_1.AFN));\r\nexports.AFD = AFD;\r\n\n\n//# sourceURL=webpack://app/./src/models/AFD.ts?");

/***/ }),

/***/ "./src/models/AFN.ts":
/*!***************************!*\
  !*** ./src/models/AFN.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar AFN = /** @class */ (function () {\r\n    function AFN() {\r\n        this._allStates = [];\r\n    }\r\n    AFN.prototype.transformAfnToAfd = function (afn) {\r\n        console.log(afn);\r\n    };\r\n    Object.defineProperty(AFN.prototype, \"alphabet\", {\r\n        /**\r\n         * Getter alphabet\r\n         * @return {String}\r\n         */\r\n        get: function () {\r\n            return this._alphabet;\r\n        },\r\n        /**\r\n         * Setter $alphabet\r\n         * @param {String} value\r\n         */\r\n        set: function (value) {\r\n            this._alphabet = value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(AFN.prototype, \"alphabetValue\", {\r\n        /**\r\n         * Getter alphabetValue\r\n         * @return {String}\r\n         */\r\n        get: function () {\r\n            return this._alphabetValue;\r\n        },\r\n        /**\r\n         * Setter $alphabetVal\r\n         * @param {String} value\r\n         */\r\n        set: function (value) {\r\n            this._alphabetValue = value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(AFN.prototype, \"stateInitial\", {\r\n        /**\r\n         * Getter stateInitial\r\n         * @return {String}\r\n         */\r\n        get: function () {\r\n            return this._stateInitial;\r\n        },\r\n        /**\r\n         * Setter stateInitial\r\n         * @param {String} value\r\n         */\r\n        set: function (value) {\r\n            this._stateInitial = value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(AFN.prototype, \"stateFinal\", {\r\n        /**\r\n         * Getter stateFinal\r\n         * @return {String}\r\n         */\r\n        get: function () {\r\n            return this._stateFinal;\r\n        },\r\n        /**\r\n         * Setter stateFinal\r\n         * @param {String} value\r\n         */\r\n        set: function (value) {\r\n            this._stateFinal = value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(AFN.prototype, \"allStates\", {\r\n        /**\r\n         * Getter allStates\r\n         * @return {Array<object>}\r\n         */\r\n        get: function () {\r\n            return this._allStates;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * Setter setStates\r\n     * @param {object} state\r\n     */\r\n    AFN.prototype.setStates = function (state) {\r\n        this._allStates.push(state);\r\n    };\r\n    return AFN;\r\n}());\r\nexports.AFN = AFN;\r\n\n\n//# sourceURL=webpack://app/./src/models/AFN.ts?");

/***/ }),

/***/ "./src/view/AppElements.ts":
/*!*********************************!*\
  !*** ./src/view/AppElements.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar $ = document.querySelector.bind(document);\r\nvar AppElements = /** @class */ (function () {\r\n    function AppElements() {\r\n    }\r\n    Object.defineProperty(AppElements, \"getFileEntryElement\", {\r\n        get: function () {\r\n            return this.fileEntryElement;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(AppElements, \"getElementInputView\", {\r\n        get: function () {\r\n            return this.fileEntryElementView;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(AppElements, \"getElementOutputView\", {\r\n        get: function () {\r\n            return this.fileOutputView;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    AppElements.reloadPage = function () {\r\n        window.location.reload();\r\n    };\r\n    AppElements.showMessageError = function (msg) {\r\n        this.viewError.textContent = msg;\r\n        this.viewError.classList.add('d-block');\r\n    };\r\n    AppElements.fileEntryElement = $('#myFileInput');\r\n    AppElements.fileEntryElementView = $('#myFileInputView');\r\n    AppElements.fileOutputView = $('#myFileOutputView');\r\n    AppElements.viewError = $('#msg-error');\r\n    return AppElements;\r\n}());\r\nexports.AppElements = AppElements;\r\n\n\n//# sourceURL=webpack://app/./src/view/AppElements.ts?");

/***/ })

/******/ });