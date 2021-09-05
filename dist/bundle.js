/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Apple.js":
/*!*************************!*\
  !*** ./src/js/Apple.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar random = function random(_ref) {\n  var min = _ref.min,\n      max = _ref.max;\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\nvar Apple = function Apple(_ref2) {\n  var _this = this;\n\n  var ctx = _ref2.ctx,\n      size = _ref2.size,\n      deviceWidth = _ref2.deviceWidth,\n      deviceHeight = _ref2.deviceHeight,\n      _ref2$color = _ref2.color,\n      color = _ref2$color === void 0 ? \"red\" : _ref2$color;\n\n  _classCallCheck(this, Apple);\n\n  _defineProperty(this, \"randomCoordinates\", function (snake) {\n    _this.coordinates = {\n      x: random({\n        min: 0,\n        max: _this.widthRows - 1\n      }) * _this.size,\n      y: random({\n        min: 0,\n        max: _this.heightRows - 1\n      }) * _this.size\n    };\n    var flag = true;\n\n    while (flag) {\n      if (snake.history.find(function (item) {\n        return item.x === _this.coordinates.x && item.y === _this.coordinates.y;\n      })) {\n        _this.coordinates = {\n          x: random({\n            min: 0,\n            max: _this.widthRows - 1\n          }) * _this.size,\n          y: random({\n            min: 0,\n            max: _this.heightRows - 1\n          }) * _this.size\n        };\n      } else {\n        flag = false;\n      }\n    }\n  });\n\n  _defineProperty(this, \"draw\", function () {\n    _this.ctx.fillStyle = _this.color;\n\n    _this.ctx.fillRect(_this.coordinates.x, _this.coordinates.y, _this.size, _this.size);\n  });\n\n  this.ctx = ctx;\n  this.size = size;\n  this.deviceHeight = deviceHeight;\n  this.deviceWidth = deviceWidth;\n  this.widthRows = Math.floor(deviceWidth / size);\n  this.heightRows = Math.floor(deviceHeight / size);\n  this.color = color;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apple);\n\n//# sourceURL=webpack://snake-game/./src/js/Apple.js?");

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Controller = function Controller(_ref) {\n  var execute = _ref.execute;\n\n  _classCallCheck(this, Controller);\n\n  this.execute = execute;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n//# sourceURL=webpack://snake-game/./src/js/Controller.js?");

/***/ }),

/***/ "./src/js/Environment.js":
/*!*******************************!*\
  !*** ./src/js/Environment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./src/js/Snake.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ \"./src/js/Controller.js\");\n/* harmony import */ var _Apple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Apple */ \"./src/js/Apple.js\");\n/* harmony import */ var _sounds_coin_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds/coin.mp3 */ \"./src/sounds/coin.mp3\");\n/* harmony import */ var _sounds_ping_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sounds/ping.mp3 */ \"./src/sounds/ping.mp3\");\n/* harmony import */ var _sounds_dead_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sounds/dead.wav */ \"./src/sounds/dead.wav\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar Environment = function Environment(_ref) {\n  var _this = this;\n\n  var ctx = _ref.ctx,\n      width = _ref.width,\n      height = _ref.height,\n      snakeSize = _ref.snakeSize,\n      snakeColor = _ref.snakeColor,\n      appleColor = _ref.appleColor,\n      _ref$frameRate = _ref.frameRate,\n      frameRate = _ref$frameRate === void 0 ? 25 : _ref$frameRate;\n\n  _classCallCheck(this, Environment);\n\n  _defineProperty(this, \"controllers\", {\n    w: new _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      execute: function execute() {\n        _this.snake.move(\"up\");\n      }\n    }),\n    a: new _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      execute: function execute() {\n        _this.snake.move(\"left\");\n      }\n    }),\n    s: new _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      execute: function execute() {\n        _this.snake.move(\"down\");\n      }\n    }),\n    d: new _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      execute: function execute() {\n        _this.snake.move(\"right\");\n      }\n    })\n  });\n\n  _defineProperty(this, \"activeController\", this.controllers.d);\n\n  _defineProperty(this, \"raise\", false);\n\n  _defineProperty(this, \"setup\", function () {\n    document.body.addEventListener(\"keypress\", function (e) {\n      if (e.key.toLowerCase() in _this.controllers) {\n        _this.activeController = _this.controllers[e.key.toLowerCase()];\n      }\n\n      if ((e.key === \" \" || e.key === \"spacebar\") && _this.snake.isCollation()) {\n        _this.snake.reset();\n\n        _this.apple.randomCoordinates(_this.snake);\n\n        _this.sounds.ping.play();\n\n        document.querySelector(\".count-down\").style.display = \"none\";\n        document.querySelector(\".score\").innerHTML = 0;\n\n        _this.start();\n      }\n    });\n  });\n\n  _defineProperty(this, \"appleCollation\", function () {\n    var snakeHead = _this.snake.history[_this.snake.history.length - 1];\n\n    if (snakeHead.x === _this.apple.coordinates.x && snakeHead.y === _this.apple.coordinates.y) {\n      _this.raise = true;\n\n      _this.apple.randomCoordinates(_this.snake);\n\n      document.querySelector(\".score\").innerHTML = _this.snake.history.length - 1;\n\n      _this.sounds.coin.play();\n    }\n  });\n\n  _defineProperty(this, \"start\", function () {\n    if (!_this.snake.isCollation()) {\n      _this.ctx.clearRect(0, 0, _this.width, _this.height);\n\n      _this.activeController.execute();\n\n      _this.appleCollation();\n\n      if (_this.raise) {\n        _this.raise = false;\n      } else {\n        _this.snake.update();\n      }\n\n      _this.apple.draw();\n\n      _this.snake.draw();\n\n      setTimeout(function () {\n        requestAnimationFrame(_this.start);\n      }, 1000 / _this.frameRate);\n    } else {\n      document.querySelector(\".count-down\").style.display = \"flex\";\n      document.querySelector(\".count-down>h1\").innerHTML = \"Press space bar to reset\";\n\n      _this.sounds.dead.play();\n    }\n  });\n\n  this.ctx = ctx;\n  this.width = width;\n  this.height = height;\n  this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    ctx: ctx,\n    size: snakeSize,\n    deviceWidth: width,\n    deviceHeight: height,\n    color: snakeColor\n  });\n  this.apple = new _Apple__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    ctx: ctx,\n    size: snakeSize,\n    deviceWidth: width,\n    deviceHeight: height,\n    color: appleColor\n  });\n  this.apple.randomCoordinates(this.snake);\n  this.frameRate = frameRate;\n  this.sounds = {\n    coin: new Audio(_sounds_coin_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    dead: new Audio(_sounds_dead_wav__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n    ping: new Audio(_sounds_ping_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n  };\n  this.sounds.ping.play();\n  document.querySelector(\".score\").innerHTML = 0;\n  this.setup();\n  this.start();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Environment);\n\n//# sourceURL=webpack://snake-game/./src/js/Environment.js?");

/***/ }),

/***/ "./src/js/Snake.js":
/*!*************************!*\
  !*** ./src/js/Snake.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar random = function random(_ref) {\n  var min = _ref.min,\n      max = _ref.max;\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\nvar Snake = function Snake(_ref2) {\n  var _this = this;\n\n  var ctx = _ref2.ctx,\n      _ref2$size = _ref2.size,\n      size = _ref2$size === void 0 ? 50 : _ref2$size,\n      deviceWidth = _ref2.deviceWidth,\n      deviceHeight = _ref2.deviceHeight,\n      _ref2$color = _ref2.color,\n      color = _ref2$color === void 0 ? \"black\" : _ref2$color;\n\n  _classCallCheck(this, Snake);\n\n  _defineProperty(this, \"reset\", function () {\n    var widthRows = Math.floor(_this.deviceWidth / _this.size);\n    var heightRows = Math.floor(_this.deviceHeight / _this.size);\n    _this.history = [{\n      x: random({\n        min: 0,\n        max: widthRows - 1\n      }) * _this.size,\n      y: random({\n        min: 0,\n        max: heightRows - 1\n      }) * _this.size\n    }];\n    console.log(_this.history);\n  });\n\n  _defineProperty(this, \"draw\", function () {\n    _this.ctx.fillStyle = _this.color;\n\n    _this.history.forEach(function (item) {\n      _this.ctx.fillRect(item.x, item.y, _this.size, _this.size);\n    });\n  });\n\n  _defineProperty(this, \"move\", function (direction) {\n    var coordinates = {\n      x: 0,\n      y: 0\n    };\n\n    switch (direction) {\n      case \"right\":\n        coordinates.x += _this.size;\n        break;\n\n      case \"left\":\n        coordinates.x -= _this.size;\n        break;\n\n      case \"up\":\n        coordinates.y -= _this.size;\n        break;\n\n      case \"down\":\n        coordinates.y += _this.size;\n        break;\n    }\n\n    _this.history = [].concat(_toConsumableArray(_this.history), [{\n      x: _this.history[_this.history.length - 1].x + coordinates.x,\n      y: _this.history[_this.history.length - 1].y + coordinates.y\n    }]);\n  });\n\n  _defineProperty(this, \"update\", function () {\n    _this.history.shift();\n  });\n\n  _defineProperty(this, \"isCollation\", function () {\n    var head = _this.history[_this.history.length - 1];\n\n    if (head.x < 0 || head.x > _this.deviceWidth || head.y < 0 || head.y > _this.deviceHeight) {\n      return true;\n    }\n\n    if (_this.history.find(function (item, index) {\n      return index !== _this.history.length - 1 && item.x === head.x && item.y === head.y;\n    })) {\n      return true;\n    }\n\n    return false;\n  });\n\n  this.ctx = ctx;\n  this.size = size;\n  this.deviceHeight = deviceHeight;\n  this.deviceWidth = deviceWidth;\n  this.color = color;\n  this.reset();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);\n\n//# sourceURL=webpack://snake-game/./src/js/Snake.js?");

/***/ }),

/***/ "./src/js/core.js":
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Environment */ \"./src/js/Environment.js\");\n/* harmony import */ var _sounds_theme_music_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sounds/theme-music.wav */ \"./src/sounds/theme-music.wav\");\n\n\n // DEVICE PROPERTIES\n\nvar ratio = devicePixelRatio;\nvar DEVICE_WIDTH = devicePixelRatio * window.innerWidth;\nvar DEVICE_HEIGHT = devicePixelRatio * window.innerHeight; // CANVAS DECLARATION\n\nvar canvas = document.querySelector(\"canvas\");\ncanvas.setAttribute(\"width\", DEVICE_WIDTH);\ncanvas.setAttribute(\"height\", DEVICE_HEIGHT);\ncanvas.style.width = \"100%\";\ncanvas.style.height = \"100%\";\nvar ctx = canvas.getContext(\"2d\");\nvar env;\nvar userDifficulty = \"easy\";\nvar music = new Audio(_sounds_theme_music_wav__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nmusic.play();\nvar difficulty = {\n  easy: 8,\n  medium: 15,\n  hard: 25\n};\n\nvar countDown = function countDown() {\n  var counter = 1;\n  var h1 = document.querySelector(\".count-down>h1\");\n  h1.innerHTML = 1;\n  var countDownInterval = setInterval(function () {\n    if (counter === 3) {\n      clearInterval(countDownInterval);\n      document.querySelector(\".count-down\").style.display = \"none\";\n      music.pause();\n      env = new _Environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        ctx: ctx,\n        width: DEVICE_WIDTH,\n        height: DEVICE_HEIGHT,\n        snakeSize: 20,\n        frameRate: difficulty[userDifficulty],\n        appleColor: \"red\",\n        snakeColor: \"black\"\n      });\n      return;\n    }\n\n    counter++;\n    h1.innerHTML = counter;\n  }, 1000);\n};\n\ndocument.getElementById(\"play\").addEventListener(\"click\", function (e) {\n  document.querySelector(\".menu\").style.display = \"none\";\n  document.querySelector(\".count-down\").style.display = \"flex\";\n  countDown();\n});\ndocument.querySelectorAll(\".buttons>.buttons>button\").forEach(function (item) {\n  item.addEventListener(\"click\", function (e) {\n    document.querySelectorAll(\".buttons>.buttons>button\").forEach(function (item) {\n      item.classList.remove(\"active\");\n    });\n    userDifficulty = e.target.innerHTML.toLowerCase();\n    e.target.classList.add(\"active\");\n  });\n});\ndocument.getElementById(\"music\").addEventListener(\"click\", function (e) {\n  if (e.target.innerHTML == \"Pause Music\") {\n    music.pause();\n    e.target.innerHTML = \"Play Music\";\n  } else {\n    music.play();\n    e.target.innerHTML = \"Pause Music\";\n  }\n});\n\n//# sourceURL=webpack://snake-game/./src/js/core.js?");

/***/ }),

/***/ "./src/sounds/coin.mp3":
/*!*****************************!*\
  !*** ./src/sounds/coin.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/e6c7f1b9da9bec2b40214b690dab417f.mp3\");\n\n//# sourceURL=webpack://snake-game/./src/sounds/coin.mp3?");

/***/ }),

/***/ "./src/sounds/dead.wav":
/*!*****************************!*\
  !*** ./src/sounds/dead.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/1254a902a3ffecbf7907071d20857e72.wav\");\n\n//# sourceURL=webpack://snake-game/./src/sounds/dead.wav?");

/***/ }),

/***/ "./src/sounds/ping.mp3":
/*!*****************************!*\
  !*** ./src/sounds/ping.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/3d4988d90f75e9ac5faa370c80ed3263.mp3\");\n\n//# sourceURL=webpack://snake-game/./src/sounds/ping.mp3?");

/***/ }),

/***/ "./src/sounds/theme-music.wav":
/*!************************************!*\
  !*** ./src/sounds/theme-music.wav ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/70bb25c4eba934f6c832babc2ce3dd67.wav\");\n\n//# sourceURL=webpack://snake-game/./src/sounds/theme-music.wav?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://snake-game/./src/css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/core.js");
/******/ 	
/******/ })()
;