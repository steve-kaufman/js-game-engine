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

/***/ "./src/components/BoxCollider.js":
/*!***************************************!*\
  !*** ./src/components/BoxCollider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxCollider; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util/index.js");
/**
 * BoxCollider.js
 * Creates a BoxCollider component that handles box collisions
 */




function Collision (other, direction) {
  this.other = other
  this.direction = direction
}

const getKinematicCollisionDirection = (kinematic, other) => {
  // TODO
}

/**
 * 
 * @param {any} obj1 
 * @param {any} obj2 
 */
const detectCollision = (obj1, obj2) => {
  // if one or both objects is not a physics body, no collision
  if (!obj1.staticBody && !obj1.kinematicBody) return false
  if (!obj2.staticBody && !obj2.kinematicBody) return false

  const box1 = obj1.transform1.get()
  const box2 = obj2.transform2.get()

  // check if boxes align horizontally
  if (!(box1.x + box1.width > box2.x && box1.x < box2.x + box2.width)) {
    return false
  }
  // check if boxes align vertically
  if (!(box1.y + box1.height > box2.y && box1.y < box2.y + box2.height)) {
    return false
  }

  let direction

  if (obj1.kinematicBody && obj2.staticBody) {
    // if only obj1 is kinematic, use its velocity to determine collision direction
    const trajectory = obj1.kinematicBody.getTrajectory()

    if (trajectory(obj2.transform.x) > obj2.transform.y)

    direction = Object(_util__WEBPACK_IMPORTED_MODULE_0__["vectorToDirection"])(velocity) 
  }
  else if (obj1.staticBody && obj2.kinematicBody) {
    // if obly obj2 is kinematic, use inverse velocity to determine direction
    const velocity = _util__WEBPACK_IMPORTED_MODULE_0__["Vector"].reverse(obj2.kinematicBody.getVelocity())

    direction = Object(_util__WEBPACK_IMPORTED_MODULE_0__["vectorToDirection"])(velocity)
  }
  else if (obj1.kinematicBody && obj2.kinematicBody) {
    // if both are kinematic, use difference of velocity to determine direction
    const velocity = _util__WEBPACK_IMPORTED_MODULE_0__["Vector"].subtract(
      obj1.kinematicBody.getVelocity(),
      obj2.kinematicBody.getVelocity()
    )

    direction = Object(_util__WEBPACK_IMPORTED_MODULE_0__["vectorToDirection"])(velocity)
  }
  else {
    // both objects are static bodies, direction is irrelevant
    direction = null
  }

  return new Collision(obj2, direction)
}

function BoxCollider () {
  this.name = 'boxCollider'

  this.collisions = []

  this.preUpdate = () => {
    GameObject.all().forEach(gameObject => {
      if (!gameObject.boxCollider) return

      const collision = detectCollision(this.parent, gameObject)

      if (collision) {
        collisions.push(collision)
      }
    })
  }
}


/***/ }),

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
/* harmony import */ var _components_BoxCollider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BoxCollider */ "./src/components/BoxCollider.js");




const game = new _core_Game__WEBPACK_IMPORTED_MODULE_0__["default"](false)

const player = new _core_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: 'player', width: 32, height: 32 })

const ledge = new _core_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
  name: 'ledge', x: 100, y: 400, width: 400, height: 50
})

ledge.addComponent(new _components_BoxCollider__WEBPACK_IMPORTED_MODULE_2__["default"]())

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


/***/ }),

/***/ "./src/util/Vector.js":
/*!****************************!*\
  !*** ./src/util/Vector.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * returns a vector object with values x and y
 * @param {number} x 
 * @param {number} y 
 */
function Vector (x, y) {
  this.x = x
  this.y = y

  this.add = (other) => {
    Vector.add(this, other)
  }
  this.subtract = (other) => {
    Vector.subtract(this, other)
  }
  this.multiplyBy = (other) => {
    Vector.multiply(this, other)
  }
  this.divideBy = (other) => {
    Vector.divide(this, other)
  }
}

Vector.add = (vector1, vector2) => {
  const x = vector1.x + vector2.x
  const y = vector1.y + vector2.y

  return new Vector(x, y)
}

Vector.subtract = (vector1, vector2) => {
  const x = vector1.x - vector2.x
  const y = vector1.y - vector2.y

  return new Vector(x, y)
}

Vector.multiply = (vector1, vector2) => {
  const x = vector1.x * vector2.x
  const y = vector1.y * vector2.y

  return new Vector(x, y)
}

Vector.divide = (vector1, vector2) => {
  const x = vector1.x / vector2.x
  const y = vector1.y / vector2.y

  return new Vector(x, y)
}

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: vectorToDirection, Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vectorToDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectorToDirection */ "./src/util/vectorToDirection.js");
/* harmony import */ var _vectorToDirection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vectorToDirection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vectorToDirection", function() { return _vectorToDirection__WEBPACK_IMPORTED_MODULE_0__["vectorToDirection"]; });

/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/util/Vector.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Vector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _Vector__WEBPACK_IMPORTED_MODULE_1___default.a; });





/***/ }),

/***/ "./src/util/vectorToDirection.js":
/*!***************************************!*\
  !*** ./src/util/vectorToDirection.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/steven/Projects/game/src/util/vectorToDirection.js'");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm94Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm94T3V0bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRW1EOzs7QUFHbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLElBQUk7QUFDZixXQUFXLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLCtEQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQU07O0FBRTNCLGdCQUFnQiwrREFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFNO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsK0RBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLHFDQUFxQzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRTZCO0FBQ1E7O0FBRXJDO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLCtDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0M7QUFDRTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLFNBQVMsNEJBQTRCOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3Qiw2REFBUztBQUNqQyx3QkFBd0IsOERBQVU7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDWTtBQUNROztBQUVsRCxpQkFBaUIsa0RBQUk7O0FBRXJCLG1CQUFtQix3REFBVSxFQUFFLHdDQUF3Qzs7QUFFdkUsa0JBQWtCLHdEQUFVO0FBQzVCO0FBQ0EsQ0FBQzs7QUFFRCx1QkFBdUIsK0RBQVc7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUMxQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQm94Q29sbGlkZXIuanNcbiAqIENyZWF0ZXMgYSBCb3hDb2xsaWRlciBjb21wb25lbnQgdGhhdCBoYW5kbGVzIGJveCBjb2xsaXNpb25zXG4gKi9cblxuaW1wb3J0IHsgdmVjdG9yVG9EaXJlY3Rpb24sIFZlY3RvciB9IGZyb20gJy4uL3V0aWwnXG5cblxuZnVuY3Rpb24gQ29sbGlzaW9uIChvdGhlciwgZGlyZWN0aW9uKSB7XG4gIHRoaXMub3RoZXIgPSBvdGhlclxuICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvblxufVxuXG5jb25zdCBnZXRLaW5lbWF0aWNDb2xsaXNpb25EaXJlY3Rpb24gPSAoa2luZW1hdGljLCBvdGhlcikgPT4ge1xuICAvLyBUT0RPXG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge2FueX0gb2JqMSBcbiAqIEBwYXJhbSB7YW55fSBvYmoyIFxuICovXG5jb25zdCBkZXRlY3RDb2xsaXNpb24gPSAob2JqMSwgb2JqMikgPT4ge1xuICAvLyBpZiBvbmUgb3IgYm90aCBvYmplY3RzIGlzIG5vdCBhIHBoeXNpY3MgYm9keSwgbm8gY29sbGlzaW9uXG4gIGlmICghb2JqMS5zdGF0aWNCb2R5ICYmICFvYmoxLmtpbmVtYXRpY0JvZHkpIHJldHVybiBmYWxzZVxuICBpZiAoIW9iajIuc3RhdGljQm9keSAmJiAhb2JqMi5raW5lbWF0aWNCb2R5KSByZXR1cm4gZmFsc2VcblxuICBjb25zdCBib3gxID0gb2JqMS50cmFuc2Zvcm0xLmdldCgpXG4gIGNvbnN0IGJveDIgPSBvYmoyLnRyYW5zZm9ybTIuZ2V0KClcblxuICAvLyBjaGVjayBpZiBib3hlcyBhbGlnbiBob3Jpem9udGFsbHlcbiAgaWYgKCEoYm94MS54ICsgYm94MS53aWR0aCA+IGJveDIueCAmJiBib3gxLnggPCBib3gyLnggKyBib3gyLndpZHRoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIC8vIGNoZWNrIGlmIGJveGVzIGFsaWduIHZlcnRpY2FsbHlcbiAgaWYgKCEoYm94MS55ICsgYm94MS5oZWlnaHQgPiBib3gyLnkgJiYgYm94MS55IDwgYm94Mi55ICsgYm94Mi5oZWlnaHQpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBsZXQgZGlyZWN0aW9uXG5cbiAgaWYgKG9iajEua2luZW1hdGljQm9keSAmJiBvYmoyLnN0YXRpY0JvZHkpIHtcbiAgICAvLyBpZiBvbmx5IG9iajEgaXMga2luZW1hdGljLCB1c2UgaXRzIHZlbG9jaXR5IHRvIGRldGVybWluZSBjb2xsaXNpb24gZGlyZWN0aW9uXG4gICAgY29uc3QgdHJhamVjdG9yeSA9IG9iajEua2luZW1hdGljQm9keS5nZXRUcmFqZWN0b3J5KClcblxuICAgIGlmICh0cmFqZWN0b3J5KG9iajIudHJhbnNmb3JtLngpID4gb2JqMi50cmFuc2Zvcm0ueSlcblxuICAgIGRpcmVjdGlvbiA9IHZlY3RvclRvRGlyZWN0aW9uKHZlbG9jaXR5KSBcbiAgfVxuICBlbHNlIGlmIChvYmoxLnN0YXRpY0JvZHkgJiYgb2JqMi5raW5lbWF0aWNCb2R5KSB7XG4gICAgLy8gaWYgb2JseSBvYmoyIGlzIGtpbmVtYXRpYywgdXNlIGludmVyc2UgdmVsb2NpdHkgdG8gZGV0ZXJtaW5lIGRpcmVjdGlvblxuICAgIGNvbnN0IHZlbG9jaXR5ID0gVmVjdG9yLnJldmVyc2Uob2JqMi5raW5lbWF0aWNCb2R5LmdldFZlbG9jaXR5KCkpXG5cbiAgICBkaXJlY3Rpb24gPSB2ZWN0b3JUb0RpcmVjdGlvbih2ZWxvY2l0eSlcbiAgfVxuICBlbHNlIGlmIChvYmoxLmtpbmVtYXRpY0JvZHkgJiYgb2JqMi5raW5lbWF0aWNCb2R5KSB7XG4gICAgLy8gaWYgYm90aCBhcmUga2luZW1hdGljLCB1c2UgZGlmZmVyZW5jZSBvZiB2ZWxvY2l0eSB0byBkZXRlcm1pbmUgZGlyZWN0aW9uXG4gICAgY29uc3QgdmVsb2NpdHkgPSBWZWN0b3Iuc3VidHJhY3QoXG4gICAgICBvYmoxLmtpbmVtYXRpY0JvZHkuZ2V0VmVsb2NpdHkoKSxcbiAgICAgIG9iajIua2luZW1hdGljQm9keS5nZXRWZWxvY2l0eSgpXG4gICAgKVxuXG4gICAgZGlyZWN0aW9uID0gdmVjdG9yVG9EaXJlY3Rpb24odmVsb2NpdHkpXG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gYm90aCBvYmplY3RzIGFyZSBzdGF0aWMgYm9kaWVzLCBkaXJlY3Rpb24gaXMgaXJyZWxldmFudFxuICAgIGRpcmVjdGlvbiA9IG51bGxcbiAgfVxuXG4gIHJldHVybiBuZXcgQ29sbGlzaW9uKG9iajIsIGRpcmVjdGlvbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94Q29sbGlkZXIgKCkge1xuICB0aGlzLm5hbWUgPSAnYm94Q29sbGlkZXInXG5cbiAgdGhpcy5jb2xsaXNpb25zID0gW11cblxuICB0aGlzLnByZVVwZGF0ZSA9ICgpID0+IHtcbiAgICBHYW1lT2JqZWN0LmFsbCgpLmZvckVhY2goZ2FtZU9iamVjdCA9PiB7XG4gICAgICBpZiAoIWdhbWVPYmplY3QuYm94Q29sbGlkZXIpIHJldHVyblxuXG4gICAgICBjb25zdCBjb2xsaXNpb24gPSBkZXRlY3RDb2xsaXNpb24odGhpcy5wYXJlbnQsIGdhbWVPYmplY3QpXG5cbiAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCIvKipcbiAqIEJveE91dGxpbmUuanNcbiAqIFN0cm9rZXMgYSBib3ggb2YgdGhlIHBhcmVudCBHYW1lT2JqZWN0J3MgdHJhbnNmb3JtIGRhdGFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hPdXRsaW5lICgpIHtcbiAgdGhpcy5uYW1lID0gJ2JveE91dGxpbmUnXG4gIHRoaXMucmVuZGVyID0gKGNhbnZhcykgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wYXJlbnQudHJhbnNmb3JtLmdldCgpXG4gICAgY2FudmFzLmRyYXcoeCwgeSwgd2lkdGgsIGhlaWdodCwgZmFsc2UpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNmb3JtLmpzXG4gKiBDcmVhdGVzIGEgVHJhbnNmb3JtIG9iamVjdCBjb250YWluaW5nIHBvc2l0aW9uIGFuZCBkaW1lbnNpbm9zXG4gKi9cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAxMCxcbiAgaGVpZ2h0OiAxMFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Zvcm0gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy5uYW1lID0gJ3RyYW5zZm9ybSdcblxuICAvLyBLZWVwcyB0cmFjayBvZiB4LCB5LCB3aWR0aCwgaGVpZ2h0OyBhbGwgcHVibGljbHkgYWNjZXNzaWJsZVxuICB0aGlzLnggPSB4IHx8IGRlZmF1bHRzLnhcbiAgdGhpcy55ID0geSB8fCBkZWZhdWx0cy55XG4gIHRoaXMud2lkdGggPSB3aWR0aCB8fCBkZWZhdWx0cy53aWR0aFxuICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCBkZWZhdWx0cy5oZWlnaHRcblxuICAvLyBVdGlsaXRpZXMgdG8gZ2V0IG11bHRpcGxlIHByb3BlcnRpZXNcbiAgdGhpcy5nZXRQb3MgPSAoKSA9PiAoe1xuICAgIHg6IHRoaXMueCxcbiAgICB5OiB0aGlzLnlcbiAgfSlcbiAgdGhpcy5nZXREaW0gPSAoKSA9PiAoe1xuICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgIGhlaWdodDogdGhpcy5oZWlnaHRcbiAgfSlcbiAgdGhpcy5nZXQgPSAoKSA9PiAoeyAuLi50aGlzLmdldFBvcygpLCAuLi50aGlzLmdldERpbSgpIH0pXG5cbiAgLy8gVXRpbGl0aWVzIHRvIHNldCBtdWx0aXBsZSBwcm9wZXJ0aWVzXG4gIHRoaXMuc2V0UG9zID0gKHgsIHkpID0+IHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG4gIHRoaXMuc2V0RGltID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICB9XG4gIHRoaXMuc2V0ID0gKHgsIHksIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cbn1cbiIsIi8qKlxuICogQ2FudmFzLmpzXG4gKiBDcmVhdGVzIGEgQ2FudmFzIG9iamVjdCB1c2VkIHRvIGRyYXcgZ2FtZSBvYmplY3RzXG4gKi9cblxuLy8gVGhlIGRlZmF1bHQgZGltZW5zaW9ucyBvZiB0aGUgY2FudmFzXG5jb25zdCBkZWZhdWx0V2lkdGggPSAxMDI0XG5jb25zdCBkZWZ1YWx0SGVpZ2h0ID0gNzIwXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIENhbnZhc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW52YXMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgLy8gQ3JlYXRlIGh0bWwgY2FudmFzIGVsZW1lbnRcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgLy8gU2V0IHdpZHRoIGFuZCBoZWlnaHRcbiAgY2FudmFzLndpZHRoID0gd2lkdGggfHwgZGVmYXVsdFdpZHRoXG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgfHwgZGVmdWFsdEhlaWdodFxuXG4gIC8vIEdldCAyZCBkcmF3aW5nIGFwaSBmcm9tIGNhbnZhcyBlbGVtZW50XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgLy8gSW5zZXJ0IGNhbnZhcyBlbGVtZW50IGludG8gdGhlIGRvY3VtZW50XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gIC8vIFBvc2l0aW9uIG9mIHRoZSBjYW52YXNcbiAgbGV0IHZpZXdYID0gMFxuICBsZXQgdmlld1kgPSAwXG5cbiAgdGhpcy5jbGVhciA9ICgpID0+IHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3cyBhIHJlY3RhbmdsZSB3aXRoIHRoZSBnaXZlbiBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cbiAgICogSXQgd2lsbCBiZSBmaWxsZWQgYnkgZGVmYXVsdCwgdW5sZXNzIGlzRmlsbGVkIGlzIGV4cGxpY2l0bHkgZmFsc2UuXG4gICAqL1xuICB0aGlzLmRyYXdSZWN0ID0gKHgsIHksIHdpZHRoLCBoZWlnaHQsIGlzRmlsbGVkKSA9PiB7XG4gICAgLy8gaXNGaWxsZWQgaXMgdHJ1ZSBieSBkZWZhdWx0XG4gICAgaWYgKGlzRmlsbGVkICE9PSBmYWxzZSkgaXNGaWxsZWQgPSB0cnVlXG5cbiAgICBpZiAoaXNGaWxsZWQpIHtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH0gZWxzZSB7XG4gICAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3cyBhIHNwcml0ZSBhdCB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLlxuICAgKiBUaGUgY29vcmRpbmF0ZXMgd2lsbCBiZSAoMCwgMCkgYnkgZGVmYXVsdFxuICAgKi9cbiAgdGhpcy5kcmF3U3ByaXRlID0gKHNwcml0ZU9iaiwgeCwgeSkgPT4ge1xuICAgIC8vIFBvc2l0aW9uIGlzIGJlICgwLCAwKSBieSBkZWZhdWx0XG4gICAgaWYgKCF4KSB4ID0gMFxuICAgIGlmICgheSkgeSA9IDBcblxuICAgIGNvbnN0IHNwcml0ZSA9IHNwcml0ZU9iai5nZXQoKVxuXG4gICAgY3R4LmRyYXdJbWFnZShzcHJpdGUsIHgsIHksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodClcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNob3J0aGFuZCBmb3IgZHJhd1JlY3Qgb3IgZHJhd1Nwcml0ZS5cbiAgICogSXQgY2hvb3NlcyB3aGljaCBtZXRob2QgdG8gY2FsbCBiYXNlZCBvbiBudW1iZXIgb2YgYXJndW1lbnRzXG4gICAqL1xuICB0aGlzLmRyYXcgPSAoLi4uYXJncykgPT4ge1xuICAgIC8vIENhbGxzIGRyYXdSZWN0IGlmIHRoZXJlIGFyZSA0IG9yIG1vcmUgYXJncywgZWxzZSBkcmF3U3ByaXRlXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDQpIHtcbiAgICAgIHRoaXMuZHJhd1JlY3QoLi4uYXJncylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3U3ByaXRlKC4uLmFyZ3MpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9ucyB0byBzZXQgdGhlIHZpZXdwb3J0IHBvc2l0aW9uXG4gICAqL1xuICB0aGlzLnNldFZpZXcgPSAoeCwgeSkgPT4ge1xuICAgIHZpZXdYID0geFxuICAgIHZpZXdZID0geVxuICB9XG4gIHRoaXMuc2V0Vmlld1ggPSB4ID0+IHtcbiAgICB2aWV3WCA9IHhcbiAgfVxuICB0aGlzLnNldFZpZXdZID0geSA9PiB7XG4gICAgdmlld1kgPSB5XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb25zIHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHZpZXdwb3J0IHBvc2l0aW9uXG4gICAqL1xuICB0aGlzLmdldFZpZXcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHZpZXdYLFxuICAgICAgeTogdmlld1lcbiAgICB9XG4gIH1cbiAgdGhpcy5nZXRWaWV3WCA9ICgpID0+IHtcbiAgICByZXR1cm4gdmlld1hcbiAgfVxuICB0aGlzLmdldFZpZXdZID0gKCkgPT4ge1xuICAgIHJldHVybiB2aWV3WVxuICB9XG59XG4iLCIvKipcbiAqIEdhbWUuanNcbiAqIEhhbmRsZXMgdGhlIGdhbWUgdXBkYXRlIGFuZCByZW5kZXIgbG9vcHNcbiAqL1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJ1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0J1xuXG4vLyBGcmVxdWVuY3kgb2YgdXBkYXRlIGxvb3AgKHRpY2tzIHBlciBzZWNvbmQpXG5jb25zdCB1cGRhdGVSYXRlID0gMzBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSAoc2hvdWxkU3RhcnQgPSB0cnVlKSB7XG4gIC8vIEdhbWUgc3RhcnRzIG9uIGluaXRpYWxpemF0aW9uIHVubGVzcyBnaXZlbiBmYWxzZSBhcyBwYXJhbWV0ZXJcbiAgbGV0IGlzUnVubmluZyA9IHNob3VsZFN0YXJ0XG5cbiAgLy8gQ2FudmFzIG9iamVjdFxuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKClcblxuICAvKipcbiAgICogVXBkYXRlcyBhbGwgR2FtZU9iamVjdHNcbiAgICovXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBHYW1lT2JqZWN0LmFsbCgpLmZvckVhY2goZ2FtZU9iamVjdCA9PiB7XG4gICAgICBnYW1lT2JqZWN0LnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgIHNldFRpbWVvdXQodXBkYXRlLCAxMDAwIC8gdXBkYXRlUmF0ZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhbGwgR2FtZU9iamVjdHNcbiAgICovXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjYW52YXMuY2xlYXIoKVxuXG4gICAgR2FtZU9iamVjdC5hbGwoKS5mb3JFYWNoKGdhbWVPYmplY3QgPT4ge1xuICAgICAgZ2FtZU9iamVjdC5yZW5kZXIoY2FudmFzKVxuICAgIH0pXG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc3RhcnQgdXBkYXRlIGFuZCByZW5kZXIgbG9vcHNcbiAgICovXG4gIHRoaXMuc3RhcnQgPSAoKSA9PiB7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZVxuICAgIHVwZGF0ZSgpXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc3RvcCBvciBwYXVzZSB1cGRhdGUgYW5kIHJlbmRlciBsb29wc1xuICAgKi9cbiAgdGhpcy5zdG9wID0gKCkgPT4ge1xuICAgIGlzUnVubmluZyA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGxvb3BzIGltbWVkaWF0ZWx5IHVubGVzcyBnaXZlbiBmYWxzZSBhcyBhIHBhcmFtZXRlclxuICAgKi9cbiAgaWYgKGlzUnVubmluZykge1xuICAgIHRoaXMuc3RhcnQoKVxuICB9XG59XG4iLCIvKipcbiAqIEdhbWVPYmplY3QuanNcbiAqIENyZWF0ZXMgYSBHYW1lT2JqZWN0IG9iamVjdCB3aXRoIGEgcGxhY2UgaW4gdGhlIGhpZXJhcmNoeVxuICogS2VlcHMgdHJhY2sgb2YgYWxsIEdhbWVPYmplY3RzIGFuZCB0aGUgR2FtZU9iamVjdCBoaWVyYXJjaHlcbiAqL1xuXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNmb3JtJ1xuaW1wb3J0IEJveE91dGxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9Cb3hPdXRsaW5lJ1xuXG4vLyBIb2xkcyBsaXN0IG9mIEdhbWVPYmplY3RzXG5jb25zdCBjb2xsZWN0aW9uID0gW11cblxuLyoqXG4gKiBDcmVhdGVzIGEgR2FtZU9iamVjdCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU9iamVjdCAob3B0aW9ucykge1xuICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIG5hbWUgfSA9IG9wdGlvbnNcblxuICB0aGlzLmlkID0gY29sbGVjdGlvbi5sZW5ndGhcblxuICBjb25zdCBjb21wb25lbnRzID0gW11cblxuICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50LnVwZGF0ZSkge1xuICAgICAgICBjb21wb25lbnQudXBkYXRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdGhpcy5yZW5kZXIgPSAoY2FudmFzKSA9PiB7XG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50LnJlbmRlcikge1xuICAgICAgICBjb21wb25lbnQucmVuZGVyKGNhbnZhcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdGhpcy5kZWxldGUgPSAoKSA9PiB7XG4gICAgZGVsZXRlIGNvbGxlY3Rpb25bdGhpcy5pZF1cbiAgfVxuXG4gIHRoaXMuYWRkQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbXBvbmVudC5pZCA9IGNvbXBvbmVudHMubGVuZ3RoXG4gICAgaWYgKGNvbXBvbmVudC5uYW1lKSB7XG4gICAgICB0aGlzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudFxuICAgIH1cbiAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxuICAgIGNvbXBvbmVudC5wYXJlbnQgPSB0aGlzXG4gICAgaWYgKGNvbXBvbmVudC5vbkFkZCkge1xuICAgICAgY29tcG9uZW50Lm9uQWRkKClcbiAgICB9XG4gIH1cblxuICB0aGlzLnJlbW92ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcbiAgICBkZWxldGUgY29tcG9uZW50c1tjb21wb25lbnQuaWRdXG4gICAgaWYgKHRoaXNbY29tcG9uZW50Lm5hbWVdKSB7XG4gICAgICBkZWxldGUgdGhpc1tjb21wb25lbnQubmFtZV1cbiAgICB9XG4gIH1cblxuICB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKHgsIHksIHdpZHRoLCBoZWlnaHQpKVxuICB0aGlzLmFkZENvbXBvbmVudChuZXcgQm94T3V0bGluZSgpKVxuXG4gIGNvbGxlY3Rpb24ucHVzaCh0aGlzKVxufVxuXG5HYW1lT2JqZWN0LmFsbCA9ICgpID0+IGNvbGxlY3Rpb25cbkdhbWVPYmplY3QuZmluZCA9IChuYW1lKSA9PiB7XG4gIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZ2FtZU9iamVjdCA9PiAoZ2FtZU9iamVjdC5uYW1lID09PSBuYW1lKSlcbn1cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vY29yZS9HYW1lJ1xuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9jb3JlL0dhbWVPYmplY3QnXG5pbXBvcnQgQm94Q29sbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL0JveENvbGxpZGVyJ1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoZmFsc2UpXG5cbmNvbnN0IHBsYXllciA9IG5ldyBHYW1lT2JqZWN0KHsgbmFtZTogJ3BsYXllcicsIHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9KVxuXG5jb25zdCBsZWRnZSA9IG5ldyBHYW1lT2JqZWN0KHtcbiAgbmFtZTogJ2xlZGdlJywgeDogMTAwLCB5OiA0MDAsIHdpZHRoOiA0MDAsIGhlaWdodDogNTBcbn0pXG5cbmxlZGdlLmFkZENvbXBvbmVudChuZXcgQm94Q29sbGlkZXIoKSlcblxuY29uc3QgcGxheWVyQ29udHJvbGxlciA9IHtcbiAgc3BlZWQ6IDMsXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5wYXJlbnQudHJhbnNmb3JtLnggKz0gdGhpcy5zcGVlZFxuICB9XG59XG5cbnBsYXllci5hZGRDb21wb25lbnQocGxheWVyQ29udHJvbGxlcilcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZ2FtZS5zdGFydCgpXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcGxheWVyLnJlbW92ZUNvbXBvbmVudChwbGF5ZXJDb250cm9sbGVyKVxuICB9LCAzMDAwKVxufVxuIiwiLyoqXG4gKiByZXR1cm5zIGEgdmVjdG9yIG9iamVjdCB3aXRoIHZhbHVlcyB4IGFuZCB5XG4gKiBAcGFyYW0ge251bWJlcn0geCBcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFxuICovXG5mdW5jdGlvbiBWZWN0b3IgKHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG5cbiAgdGhpcy5hZGQgPSAob3RoZXIpID0+IHtcbiAgICBWZWN0b3IuYWRkKHRoaXMsIG90aGVyKVxuICB9XG4gIHRoaXMuc3VidHJhY3QgPSAob3RoZXIpID0+IHtcbiAgICBWZWN0b3Iuc3VidHJhY3QodGhpcywgb3RoZXIpXG4gIH1cbiAgdGhpcy5tdWx0aXBseUJ5ID0gKG90aGVyKSA9PiB7XG4gICAgVmVjdG9yLm11bHRpcGx5KHRoaXMsIG90aGVyKVxuICB9XG4gIHRoaXMuZGl2aWRlQnkgPSAob3RoZXIpID0+IHtcbiAgICBWZWN0b3IuZGl2aWRlKHRoaXMsIG90aGVyKVxuICB9XG59XG5cblZlY3Rvci5hZGQgPSAodmVjdG9yMSwgdmVjdG9yMikgPT4ge1xuICBjb25zdCB4ID0gdmVjdG9yMS54ICsgdmVjdG9yMi54XG4gIGNvbnN0IHkgPSB2ZWN0b3IxLnkgKyB2ZWN0b3IyLnlcblxuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KVxufVxuXG5WZWN0b3Iuc3VidHJhY3QgPSAodmVjdG9yMSwgdmVjdG9yMikgPT4ge1xuICBjb25zdCB4ID0gdmVjdG9yMS54IC0gdmVjdG9yMi54XG4gIGNvbnN0IHkgPSB2ZWN0b3IxLnkgLSB2ZWN0b3IyLnlcblxuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KVxufVxuXG5WZWN0b3IubXVsdGlwbHkgPSAodmVjdG9yMSwgdmVjdG9yMikgPT4ge1xuICBjb25zdCB4ID0gdmVjdG9yMS54ICogdmVjdG9yMi54XG4gIGNvbnN0IHkgPSB2ZWN0b3IxLnkgKiB2ZWN0b3IyLnlcblxuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KVxufVxuXG5WZWN0b3IuZGl2aWRlID0gKHZlY3RvcjEsIHZlY3RvcjIpID0+IHtcbiAgY29uc3QgeCA9IHZlY3RvcjEueCAvIHZlY3RvcjIueFxuICBjb25zdCB5ID0gdmVjdG9yMS55IC8gdmVjdG9yMi55XG5cbiAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSlcbn0iLCJpbXBvcnQgeyB2ZWN0b3JUb0RpcmVjdGlvbiB9IGZyb20gJy4vdmVjdG9yVG9EaXJlY3Rpb24nXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vVmVjdG9yJ1xuXG5leHBvcnQgeyB2ZWN0b3JUb0RpcmVjdGlvbiwgVmVjdG9yIH0iXSwic291cmNlUm9vdCI6IiJ9