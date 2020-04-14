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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/BoxOutline.js":
/*!**************************************!*\
  !*** ./src/components/BoxOutline.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxOutline; });
/**
 * BoxOutline.js
 * Strokes a box of the parent GameObject's transform data
 */

function BoxOutline () {
  this.name = 'boxOutline'
  this.render = (canvas) => {
    const { x, y, width, height } = this.parent.transform.get()
    canvas.draw(x, y, width, height, false)
  }
}


/***/ }),

/***/ "./src/components/Transform.js":
/*!*************************************!*\
  !*** ./src/components/Transform.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transform; });
/**
 * Transform.js
 * Creates a Transform object containing position and dimensinos
 */

const defaults = {
  x: 0,
  y: 0,
  width: 10,
  height: 10
}

function Transform (x, y, width, height) {
  this.name = 'transform'

  // Keeps track of x, y, width, height; all publicly accessible
  this.x = x || defaults.x
  this.y = y || defaults.y
  this.width = width || defaults.width
  this.height = height || defaults.height

  // Utilities to get multiple properties
  this.getPos = () => ({
    x: this.x,
    y: this.y
  })
  this.getDim = () => ({
    width: this.width,
    height: this.height
  })
  this.get = () => ({ ...this.getPos(), ...this.getDim() })

  // Utilities to set multiple properties
  this.setPos = (x, y) => {
    this.x = x
    this.y = y
  }
  this.setDim = (width, height) => {
    this.width = width
    this.height = height
  }
  this.set = (x, y, width, height) => {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
}


/***/ }),

/***/ "./src/core/Canvas.js":
/*!****************************!*\
  !*** ./src/core/Canvas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/**
 * Canvas.js
 * Creates a Canvas object used to draw game objects
 */

// The default dimensions of the canvas
const defaultWidth = 1024
const defualtHeight = 720

/**
 * Constructs a Canvas
 */
function Canvas (width, height) {
  // Create html canvas element
  const canvas = document.createElement('canvas')
  // Set width and height
  canvas.width = width || defaultWidth
  canvas.height = height || defualtHeight

  // Get 2d drawing api from canvas element
  const ctx = canvas.getContext('2d')

  // Insert canvas element into the document
  document.body.appendChild(canvas)

  // Position of the canvas
  let viewX = 0
  let viewY = 0

  this.clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  /**
   * Draws a rectangle with the given coordinates and dimensions.
   * It will be filled by default, unless isFilled is explicitly false.
   */
  this.drawRect = (x, y, width, height, isFilled) => {
    // isFilled is true by default
    if (isFilled !== false) isFilled = true

    if (isFilled) {
      ctx.fillRect(x, y, width, height)
    } else {
      ctx.strokeRect(x, y, width, height)
    }
  }

  /**
   * Draws a sprite at the specified coordinates.
   * The coordinates will be (0, 0) by default
   */
  this.drawSprite = (spriteObj, x, y) => {
    // Position is be (0, 0) by default
    if (!x) x = 0
    if (!y) y = 0

    const sprite = spriteObj.get()

    ctx.drawImage(sprite, x, y, sprite.width, sprite.height)
  }

  /**
   * A shorthand for drawRect or drawSprite.
   * It chooses which method to call based on number of arguments
   */
  this.draw = (...args) => {
    // Calls drawRect if there are 4 or more args, else drawSprite
    if (args.length >= 4) {
      this.drawRect(...args)
    } else {
      this.drawSprite(...args)
    }
  }

  /**
   * Functions to set the viewport position
   */
  this.setView = (x, y) => {
    viewX = x
    viewY = y
  }
  this.setViewX = x => {
    viewX = x
  }
  this.setViewY = y => {
    viewY = y
  }

  /**
   * Functions to retrieve the current viewport position
   */
  this.getView = () => {
    return {
      x: viewX,
      y: viewY
    }
  }
  this.getViewX = () => {
    return viewX
  }
  this.getViewY = () => {
    return viewY
  }
}


/***/ }),

/***/ "./src/core/Game.js":
/*!**************************!*\
  !*** ./src/core/Game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./src/core/Canvas.js");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObject */ "./src/core/GameObject.js");
/**
 * Game.js
 * Handles the game update and render loops
 */




// Frequency of update loop (ticks per second)
const updateRate = 30

function Game (shouldStart = true) {
  // Game starts on initialization unless given false as parameter
  let isRunning = shouldStart

  // Canvas object
  const canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]()

  /**
   * Updates all GameObjects
   */
  const update = () => {
    _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"].all().forEach(gameObject => {
      gameObject.update()
    })

    if (isRunning) {
      setTimeout(update, 1000 / updateRate)
    }
  }

  /**
   * Renders all GameObjects
   */
  const render = () => {
    canvas.clear()

    _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"].all().forEach(gameObject => {
      gameObject.render(canvas)
    })

    if (isRunning) {
      requestAnimationFrame(render)
    }
  }

  /**
   * Method to start update and render loops
   */
  this.start = () => {
    isRunning = true
    update()
    render()
  }

  /**
   * Method to stop or pause update and render loops
   */
  this.stop = () => {
    isRunning = false
  }

  /**
   * Starts loops immediately unless given false as a parameter
   */
  if (isRunning) {
    this.start()
  }
}


/***/ }),

/***/ "./src/core/GameObject.js":
/*!********************************!*\
  !*** ./src/core/GameObject.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
/* harmony import */ var _components_Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Transform */ "./src/components/Transform.js");
/* harmony import */ var _components_BoxOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BoxOutline */ "./src/components/BoxOutline.js");
/**
 * GameObject.js
 * Creates a GameObject object with a place in the hierarchy
 * Keeps track of all GameObjects and the GameObject hierarchy
 */




// Holds list of GameObjects
const collection = []

/**
 * Creates a GameObject object
 */
function GameObject (options) {
  const { x, y, width, height, name } = options

  this.id = collection.length

  const components = []

  this.name = name

  this.update = () => {
    components.forEach(component => {
      if (component.update) {
        component.update()
      }
    })
  }

  this.render = (canvas) => {
    components.forEach(component => {
      if (component.render) {
        component.render(canvas)
      }
    })
  }

  this.delete = () => {
    delete collection[this.id]
  }

  this.addComponent = (component) => {
    component.id = components.length
    if (component.name) {
      this[component.name] = component
    }
    components.push(component)
    component.parent = this
    if (component.onAdd) {
      component.onAdd()
    }
  }

  this.removeComponent = (component) => {
    delete components[component.id]
    if (this[component.name]) {
      delete this[component.name]
    }
  }

  this.addComponent(new _components_Transform__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, width, height))
  this.addComponent(new _components_BoxOutline__WEBPACK_IMPORTED_MODULE_1__["default"]())

  collection.push(this)
}

GameObject.all = () => collection
GameObject.find = (name) => {
  return collection.find(gameObject => (gameObject.name === name))
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Game */ "./src/core/Game.js");
/* harmony import */ var _core_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/GameObject */ "./src/core/GameObject.js");



const game = new _core_Game__WEBPACK_IMPORTED_MODULE_0__["default"](false)

const player = new _core_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: 'player', width: 32, height: 32 })

const ledge = new _core_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
  name: 'ledge', x: 100, y: 400, width: 400, height: 50
})

ledge.addComponent(new BoxCollider())

const playerController = {
  speed: 3,
  update () {
    this.parent.transform.x += this.speed
  }
}

player.addComponent(playerController)

window.onload = () => {
  game.start()

  setTimeout(() => {
    player.removeComponent(playerController)
  }, 3000)
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm94T3V0bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLHFDQUFxQzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCO0FBQ1E7O0FBRXJDO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLCtDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0M7QUFDRTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLFNBQVMsNEJBQTRCOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw2REFBUztBQUNqQyx3QkFBd0IsOERBQVU7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQThCO0FBQ1k7O0FBRTFDLGlCQUFpQixrREFBSTs7QUFFckIsbUJBQW1CLHdEQUFVLEVBQUUsd0NBQXdDOztBQUV2RSxrQkFBa0Isd0RBQVU7QUFDNUI7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIEJveE91dGxpbmUuanNcbiAqIFN0cm9rZXMgYSBib3ggb2YgdGhlIHBhcmVudCBHYW1lT2JqZWN0J3MgdHJhbnNmb3JtIGRhdGFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hPdXRsaW5lICgpIHtcbiAgdGhpcy5uYW1lID0gJ2JveE91dGxpbmUnXG4gIHRoaXMucmVuZGVyID0gKGNhbnZhcykgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wYXJlbnQudHJhbnNmb3JtLmdldCgpXG4gICAgY2FudmFzLmRyYXcoeCwgeSwgd2lkdGgsIGhlaWdodCwgZmFsc2UpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNmb3JtLmpzXG4gKiBDcmVhdGVzIGEgVHJhbnNmb3JtIG9iamVjdCBjb250YWluaW5nIHBvc2l0aW9uIGFuZCBkaW1lbnNpbm9zXG4gKi9cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAxMCxcbiAgaGVpZ2h0OiAxMFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Zvcm0gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy5uYW1lID0gJ3RyYW5zZm9ybSdcblxuICAvLyBLZWVwcyB0cmFjayBvZiB4LCB5LCB3aWR0aCwgaGVpZ2h0OyBhbGwgcHVibGljbHkgYWNjZXNzaWJsZVxuICB0aGlzLnggPSB4IHx8IGRlZmF1bHRzLnhcbiAgdGhpcy55ID0geSB8fCBkZWZhdWx0cy55XG4gIHRoaXMud2lkdGggPSB3aWR0aCB8fCBkZWZhdWx0cy53aWR0aFxuICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCBkZWZhdWx0cy5oZWlnaHRcblxuICAvLyBVdGlsaXRpZXMgdG8gZ2V0IG11bHRpcGxlIHByb3BlcnRpZXNcbiAgdGhpcy5nZXRQb3MgPSAoKSA9PiAoe1xuICAgIHg6IHRoaXMueCxcbiAgICB5OiB0aGlzLnlcbiAgfSlcbiAgdGhpcy5nZXREaW0gPSAoKSA9PiAoe1xuICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgIGhlaWdodDogdGhpcy5oZWlnaHRcbiAgfSlcbiAgdGhpcy5nZXQgPSAoKSA9PiAoeyAuLi50aGlzLmdldFBvcygpLCAuLi50aGlzLmdldERpbSgpIH0pXG5cbiAgLy8gVXRpbGl0aWVzIHRvIHNldCBtdWx0aXBsZSBwcm9wZXJ0aWVzXG4gIHRoaXMuc2V0UG9zID0gKHgsIHkpID0+IHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG4gIHRoaXMuc2V0RGltID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICB9XG4gIHRoaXMuc2V0ID0gKHgsIHksIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cbn1cbiIsIi8qKlxuICogQ2FudmFzLmpzXG4gKiBDcmVhdGVzIGEgQ2FudmFzIG9iamVjdCB1c2VkIHRvIGRyYXcgZ2FtZSBvYmplY3RzXG4gKi9cblxuLy8gVGhlIGRlZmF1bHQgZGltZW5zaW9ucyBvZiB0aGUgY2FudmFzXG5jb25zdCBkZWZhdWx0V2lkdGggPSAxMDI0XG5jb25zdCBkZWZ1YWx0SGVpZ2h0ID0gNzIwXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIENhbnZhc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW52YXMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgLy8gQ3JlYXRlIGh0bWwgY2FudmFzIGVsZW1lbnRcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgLy8gU2V0IHdpZHRoIGFuZCBoZWlnaHRcbiAgY2FudmFzLndpZHRoID0gd2lkdGggfHwgZGVmYXVsdFdpZHRoXG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgfHwgZGVmdWFsdEhlaWdodFxuXG4gIC8vIEdldCAyZCBkcmF3aW5nIGFwaSBmcm9tIGNhbnZhcyBlbGVtZW50XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgLy8gSW5zZXJ0IGNhbnZhcyBlbGVtZW50IGludG8gdGhlIGRvY3VtZW50XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gIC8vIFBvc2l0aW9uIG9mIHRoZSBjYW52YXNcbiAgbGV0IHZpZXdYID0gMFxuICBsZXQgdmlld1kgPSAwXG5cbiAgdGhpcy5jbGVhciA9ICgpID0+IHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3cyBhIHJlY3RhbmdsZSB3aXRoIHRoZSBnaXZlbiBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cbiAgICogSXQgd2lsbCBiZSBmaWxsZWQgYnkgZGVmYXVsdCwgdW5sZXNzIGlzRmlsbGVkIGlzIGV4cGxpY2l0bHkgZmFsc2UuXG4gICAqL1xuICB0aGlzLmRyYXdSZWN0ID0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIGlzRmlsbGVkKSA9PiB7XG4gICAgLy8gaXNGaWxsZWQgaXMgdHJ1ZSBieSBkZWZhdWx0XG4gICAgaWYgKGlzRmlsbGVkICE9PSBmYWxzZSkgaXNGaWxsZWQgPSB0cnVlXG5cbiAgICBpZiAoaXNGaWxsZWQpIHtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3cyBhIHNwcml0ZSBhdCB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLlxuICAgKiBUaGUgY29vcmRpbmF0ZXMgd2lsbCBiZSAoMCwgMCkgYnkgZGVmYXVsdFxuICAgKi9cbiAgdGhpcy5kcmF3U3ByaXRlID0gKHNwcml0ZU9iaiwgeCwgeSkgPT4ge1xuICAgIC8vIFBvc2l0aW9uIGlzIGJlICgwLCAwKSBieSBkZWZhdWx0XG4gICAgaWYgKCF4KSB4ID0gMFxuICAgIGlmICgheSkgeSA9IDBcblxuICAgIGNvbnN0IHNwcml0ZSA9IHNwcml0ZU9iai5nZXQoKVxuXG4gICAgY3R4LmRyYXdJbWFnZShzcHJpdGUsIHgsIHksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodClcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNob3J0aGFuZCBmb3IgZHJhd1JlY3Qgb3IgZHJhd1Nwcml0ZS5cbiAgICogSXQgY2hvb3NlcyB3aGljaCBtZXRob2QgdG8gY2FsbCBiYXNlZCBvbiBudW1iZXIgb2YgYXJndW1lbnRzXG4gICAqL1xuICB0aGlzLmRyYXcgPSAoLi4uYXJncykgPT4ge1xuICAgIC8vIENhbGxzIGRyYXdSZWN0IGlmIHRoZXJlIGFyZSA0IG9yIG1vcmUgYXJncywgZWxzZSBkcmF3U3ByaXRlXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDQpIHtcbiAgICAgIHRoaXMuZHJhd1JlY3QoLi4uYXJncylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3U3ByaXRlKC4uLmFyZ3MpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9ucyB0byBzZXQgdGhlIHZpZXdwb3J0IHBvc2l0aW9uXG4gICAqL1xuICB0aGlzLnNldFZpZXcgPSAoeCwgeSkgPT4ge1xuICAgIHZpZXdYID0geFxuICAgIHZpZXdZID0geVxuICB9XG4gIHRoaXMuc2V0Vmlld1ggPSB4ID0+IHtcbiAgICB2aWV3WCA9IHhcbiAgfVxuICB0aGlzLnNldFZpZXdZID0geSA9PiB7XG4gICAgdmlld1kgPSB5XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb25zIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHZpZXdwb3J0IHBvc2l0aW9uXG4gICAqL1xuICB0aGlzLmdldFZpZXcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHZpZXdYLFxuICAgICAgeTogdmlld1lcbiAgICB9XG4gIH1cbiAgdGhpcy5nZXRWaWV3WCA9ICgpID0+IHtcbiAgICByZXR1cm4gdmlld1hcbiAgfVxuICB0aGlzLmdldFZpZXdZID0gKCkgPT4ge1xuICAgIHJldHVybiB2aWV3WVxuICB9XG59XG4iLCIvKipcbiAqIEdhbWUuanNcbiAqIEhhbmRsZXMgdGhlIGdhbWUgdXBkYXRlIGFuZCByZW5kZXIgbG9vcHNcbiAqL1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJ1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0J1xuXG4vLyBGcmVxdWVuY3kgb2YgdXBkYXRlIGxvb3AgKHRpY2tzIHBlciBzZWNvbmQpXG5jb25zdCB1cGRhdGVSYXRlID0gMzBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSAoc2hvdWxkU3RhcnQgPSB0cnVlKSB7XG4gIC8vIEdhbWUgc3RhcnRzIG9uIGluaXRpYWxpemF0aW9uIHVubGVzcyBnaXZlbiBmYWxzZSBhcyBwYXJhbWV0ZXJcbiAgbGV0IGlzUnVubmluZyA9IHNob3VsZFN0YXJ0XG5cbiAgLy8gQ2FudmFzIG9iamVjdFxuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKClcblxuICAvKipcbiAgICogVXBkYXRlcyBhbGwgR2FtZU9iamVjdHNcbiAgICovXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBHYW1lT2JqZWN0LmFsbCgpLmZvckVhY2goZ2FtZU9iamVjdCA9PiB7XG4gICAgICBnYW1lT2JqZWN0LnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgIHNldFRpbWVvdXQodXBkYXRlLCAxMDAwIC8gdXBkYXRlUmF0ZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhbGwgR2FtZU9iamVjdHNcbiAgICovXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjYW52YXMuY2xlYXIoKVxuXG4gICAgR2FtZU9iamVjdC5hbGwoKS5mb3JFYWNoKGdhbWVPYmplY3QgPT4ge1xuICAgICAgZ2FtZU9iamVjdC5yZW5kZXIoY2FudmFzKVxuICAgIH0pXG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc3RhcnQgdXBkYXRlIGFuZCByZW5kZXIgbG9vcHNcbiAgICovXG4gIHRoaXMuc3RhcnQgPSAoKSA9PiB7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZVxuICAgIHVwZGF0ZSgpXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc3RvcCBvciBwYXVzZSB1cGRhdGUgYW5kIHJlbmRlciBsb29wc1xuICAgKi9cbiAgdGhpcy5zdG9wID0gKCkgPT4ge1xuICAgIGlzUnVubmluZyA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGxvb3BzIGltbWVkaWF0ZWx5IHVubGVzcyBnaXZlbiBmYWxzZSBhcyBhIHBhcmFtZXRlclxuICAgKi9cbiAgaWYgKGlzUnVubmluZykge1xuICAgIHRoaXMuc3RhcnQoKVxuICB9XG59XG4iLCIvKipcbiAqIEdhbWVPYmplY3QuanNcbiAqIENyZWF0ZXMgYSBHYW1lT2JqZWN0IG9iamVjdCB3aXRoIGEgcGxhY2UgaW4gdGhlIGhpZXJhcmNoeVxuICogS2VlcHMgdHJhY2sgb2YgYWxsIEdhbWVPYmplY3RzIGFuZCB0aGUgR2FtZU9iamVjdCBoaWVyYXJjaHlcbiAqL1xuXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNmb3JtJ1xuaW1wb3J0IEJveE91dGxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9Cb3hPdXRsaW5lJ1xuXG4vLyBIb2xkcyBsaXN0IG9mIEdhbWVPYmplY3RzXG5jb25zdCBjb2xsZWN0aW9uID0gW11cblxuLyoqXG4gKiBDcmVhdGVzIGEgR2FtZU9iamVjdCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU9iamVjdCAob3B0aW9ucykge1xuICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIG5hbWUgfSA9IG9wdGlvbnNcblxuICB0aGlzLmlkID0gY29sbGVjdGlvbi5sZW5ndGhcblxuICBjb25zdCBjb21wb25lbnRzID0gW11cblxuICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50LnVwZGF0ZSkge1xuICAgICAgICBjb21wb25lbnQudXBkYXRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdGhpcy5yZW5kZXIgPSAoY2FudmFzKSA9PiB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50LnJlbmRlcikge1xuICAgICAgICBjb21wb25lbnQucmVuZGVyKGNhbnZhcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdGhpcy5kZWxldGUgPSAoKSA9PiB7XG4gICAgZGVsZXRlIGNvbGxlY3Rpb25bdGhpcy5pZF1cbiAgfVxuXG4gIHRoaXMuYWRkQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbXBvbmVudC5pZCA9IGNvbXBvbmVudHMubGVuZ3RoXG4gICAgaWYgKGNvbXBvbmVudC5uYW1lKSB7XG4gICAgICB0aGlzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudFxuICAgIH1cbiAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICAgIGNvbXBvbmVudC5wYXJlbnQgPSB0aGlzXG4gICAgaWYgKGNvbXBvbmVudC5vbkFkZCkge1xuICAgICAgY29tcG9uZW50Lm9uQWRkKClcbiAgICB9XG4gIH1cblxuICB0aGlzLnJlbW92ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcbiAgICBkZWxldGUgY29tcG9uZW50c1tjb21wb25lbnQuaWRdXG4gICAgaWYgKHRoaXNbY29tcG9uZW50Lm5hbWVdKSB7XG4gICAgICBkZWxldGUgdGhpc1tjb21wb25lbnQubmFtZV1cbiAgICB9XG4gIH1cblxuICB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKHgsIHksIHdpZHRoLCBoZWlnaHQpKVxuICB0aGlzLmFkZENvbXBvbmVudChuZXcgQm94T3V0bGluZSgpKVxuXG4gIGNvbGxlY3Rpb24ucHVzaCh0aGlzKVxufVxuXG5HYW1lT2JqZWN0LmFsbCA9ICgpID0+IGNvbGxlY3Rpb25cbkdhbWVPYmplY3QuZmluZCA9IChuYW1lKSA9PiB7XG4gIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZ2FtZU9iamVjdCA9PiAoZ2FtZU9iamVjdC5uYW1lID09PSBuYW1lKSlcbn1cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vY29yZS9HYW1lJ1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9jb3JlL0dhbWVPYmplY3QnXG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShmYWxzZSlcblxuY29uc3QgcGxheWVyID0gbmV3IEdhbWVPYmplY3QoeyBuYW1lOiAncGxheWVyJywgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyIH0pXG5cbmNvbnN0IGxlZGdlID0gbmV3IEdhbWVPYmplY3Qoe1xuICBuYW1lOiAnbGVkZ2UnLCB4OiAxMDAsIHk6IDQwMCwgd2lkdGg6IDQwMCwgaGVpZ2h0OiA1MFxufSlcblxubGVkZ2UuYWRkQ29tcG9uZW50KG5ldyBCb3hDb2xsaWRlcigpKVxuXG5jb25zdCBwbGF5ZXJDb250cm9sbGVyID0ge1xuICBzcGVlZDogMyxcbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnBhcmVudC50cmFuc2Zvcm0ueCArPSB0aGlzLnNwZWVkXG4gIH1cbn1cblxucGxheWVyLmFkZENvbXBvbmVudChwbGF5ZXJDb250cm9sbGVyKVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBnYW1lLnN0YXJ0KClcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBwbGF5ZXIucmVtb3ZlQ29tcG9uZW50KHBsYXllckNvbnRyb2xsZXIpXG4gIH0sIDMwMDApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9