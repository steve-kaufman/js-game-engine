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
/* harmony import */ var _core_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/GameObject */ "./src/core/GameObject.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util/index.js");
/**
 * BoxCollider.js
 * Creates a BoxCollider component that handles box collisions
 */


var collection = [];
function BoxCollider() {
  var _this = this;

  this.name = 'boxCollider';
  this.collisions = [];

  this.physicsUpdate = function () {
    _core_GameObject__WEBPACK_IMPORTED_MODULE_0__["default"].all().forEach(function (gameObject) {
      if (!gameObject.boxCollider) return;
      var collision = Object(_util__WEBPACK_IMPORTED_MODULE_1__["detectCollision"])(_this.parent, gameObject);

      if (collision) {
        _this.collisions.push(collision);
      }
    });
  };

  collection.push(this);
}

BoxCollider.all = function () {
  return [].concat(collection);
};

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
function BoxOutline() {
  var _this = this;

  this.name = 'boxOutline';

  this.render = function (canvas) {
    var _this$parent$transfor = _this.parent.transform.get(),
        x = _this$parent$transfor.x,
        y = _this$parent$transfor.y,
        width = _this$parent$transfor.width,
        height = _this$parent$transfor.height;

    canvas.draw(x, y, width, height, false);
  };
}

/***/ }),

/***/ "./src/components/KinematicBody.js":
/*!*****************************************!*\
  !*** ./src/components/KinematicBody.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KinematicBody; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util/index.js");

var collection = [];
function KinematicBody() {
  var _this = this;

  this.name = 'kinematicBody';
  this.lastPos = new _util__WEBPACK_IMPORTED_MODULE_0__["Vector"]();
  this.velocity = new _util__WEBPACK_IMPORTED_MODULE_0__["Vector"](0, 0);
  this.direction = null;
  this.grounded = false;

  this.getDirection = function () {
    // for flat slope, either right or left
    if (_this.slope === 0) {
      if (_this.velocity.x > 0) return 'right';
      if (_this.velocity.x < 0) return 'left';
      return null;
    } // for vertical slope, either up or down


    if (_this.slope === Infinity) {
      if (_this.velocity.y > 0) return 'down';
      if (_this.velocity.y < 0) return 'up';
      return null;
    } // must be diagonal


    if (_this.velocity.y < 0) {
      if (_this.velocity.x > 0) {
        return 'up-right';
      }

      if (_this.velocity.x < 0) {
        return 'up-left';
      }
    }

    if (_this.velocity.y > 0) {
      if (_this.velocity.x > 0) {
        return 'down-right';
      }

      if (_this.velocity.x < 0) {
        return 'down-left';
      }
    }
  };

  this.trajectory = function (x, corner) {
    var transform = this.parent.transform;
    var box = transform.get();

    if (corner === 'top-right') {
      // use upper right corner
      return this.slope * (x - (box.x + box.width)) + box.y;
    }

    if (corner === 'bottom-right') {
      // use lower right corner
      return this.slope * (x - (box.x + box.width)) + box.y + box.height;
    }

    if (corner === 'top-left') {
      // use upper left corner
      return this.slope * x + box.y;
    }

    if (corner === 'bottom-left') {
      // use lower left corner
      return this.slope * x + box.y + box.height;
    }

    throw new Error('Not a valid corner');
  };

  this.physicsUpdate = function () {
    var _this$parent = _this.parent,
        transform = _this$parent.transform,
        boxCollider = _this$parent.boxCollider;
    _this.velocity.x = transform.x - _this.lastPos.x;
    _this.velocity.y = transform.y - _this.lastPos.y; // transform.setX(transform.x + this.velocity.x)
    // transform.setY(transform.y + this.velocity.y)

    _this.slope = _this.velocity.y / _this.velocity.x;
    _this.lastPos = transform.getPos();
    _this.grounded = false;
    boxCollider.collisions.forEach(function (collision) {
      var other = collision.other,
          side = collision.side;

      if (side === 'right') {
        transform.x = other.transform.x - transform.width;
      }

      if (side === 'left') {
        transform.x = other.transform.x + other.transform.width;
      }

      if (side === 'top') {
        transform.y = other.transform.y + other.transform.height;
      }

      if (side === 'bottom') {
        transform.y = other.transform.y - transform.height;
        _this.grounded = true;
      }
    });
  };

  this.onAdd = function () {
    _this.lastPos = _this.parent.transform.getPos();
  };

  collection.push(this);
}

KinematicBody.all = function () {
  return [].concat(collection);
};

/***/ }),

/***/ "./src/components/StaticBody.js":
/*!**************************************!*\
  !*** ./src/components/StaticBody.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticBody; });
function StaticBody() {
  this.name = 'staticBody';
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Transform.js
 * Creates a Transform object containing position and dimensinos
 */
var defaults = {
  x: 0,
  y: 0,
  width: 10,
  height: 10
};
function Transform(x, y, width, height) {
  var _this = this;

  this.name = 'transform'; // Keeps track of x, y, width, height; all publicly accessible

  this.x = x || defaults.x;
  this.y = y || defaults.y;
  this.width = width || defaults.width;
  this.height = height || defaults.height; // Utilities to get multiple properties

  this.getPos = function () {
    return {
      x: _this.x,
      y: _this.y
    };
  };

  this.getDim = function () {
    return {
      width: _this.width,
      height: _this.height
    };
  };

  this.get = function () {
    return _objectSpread(_objectSpread({}, _this.getPos()), _this.getDim());
  }; // Utilities to set multiple properties


  this.setPos = function (x, y) {
    _this.x = x;
    _this.y = y;
  };

  this.setDim = function (width, height) {
    _this.width = width;
    _this.height = height;
  };

  this.set = function (x, y, width, height) {
    _this.x = x;
    _this.y = y;
    _this.width = width;
    _this.height = height;
  };
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
var defaultWidth = 1024;
var defualtHeight = 720;
/**
 * Constructs a Canvas
 */

function Canvas(width, height) {
  var _this = this;

  // Create html canvas element
  var canvas = document.createElement('canvas'); // Set width and height

  canvas.width = width || defaultWidth;
  canvas.height = height || defualtHeight; // Get 2d drawing api from canvas element

  var ctx = canvas.getContext('2d'); // Insert canvas element into the document

  document.body.appendChild(canvas); // Position of the canvas

  var viewX = 0;
  var viewY = 0;
  /**
   * Clears the entire canvas
   */

  this.clear = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  /**
   * Draws a rectangle with the given coordinates and dimensions.
   * It will be stroked by default, unless isFilled is true
   */


  this.drawRect = function (x, y, width, height, isFilled) {
    if (isFilled) {
      ctx.fillRect(x, y, width, height);
    } else {
      ctx.strokeRect(x, y, width, height);
    }
  };
  /**
   * Draws a sprite at the specified coordinates.
   */


  this.drawSprite = function (spriteObj, x, y) {
    var sprite = spriteObj.get();
    ctx.drawImage(sprite, x, y, sprite.width, sprite.height);
  };
  /**
   * A shorthand for drawRect or drawSprite.
   * It chooses which method to call based on number of arguments
   */


  this.draw = function () {
    // Calls drawRect if there are 4 or more args, else drawSprite
    if (arguments.length >= 4) {
      _this.drawRect.apply(_this, arguments);
    } else {
      _this.drawSprite.apply(_this, arguments);
    }
  };
  /**
   * Returns the HTML canvas element
   */


  this.getCanvas = function () {
    return canvas;
  };
  /**
   * Functions to set the viewport position
   */


  this.setView = function (x, y) {
    viewX = x;
    viewY = y;
  };

  this.setViewX = function (x) {
    viewX = x;
  };

  this.setViewY = function (y) {
    viewY = y;
  };
  /**
   * Functions to retrieve the current viewport position
   */


  this.getView = function () {
    return {
      x: viewX,
      y: viewY
    };
  };

  this.getViewX = function () {
    return viewX;
  };

  this.getViewY = function () {
    return viewY;
  };
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
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/core/Input.js");
/* harmony import */ var _components_BoxCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BoxCollider */ "./src/components/BoxCollider.js");
/* harmony import */ var _components_KinematicBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/KinematicBody */ "./src/components/KinematicBody.js");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Physics */ "./src/core/Physics.js");
/**
 * Game.js
 * Handles the game update and render loops
 */





 // Frequency of update loop (ticks per second)

var updateRate = 30;
function Game() {
  var shouldStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  // Game starts on initialization unless given false as parameter
  var isRunning = shouldStart;
  var canvas; // Canvas object

  if (true) {
    canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  /**
   * Updates all GameObjects
   */


  var update = function update() {
    _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"].all().forEach(function (gameObject) {
      gameObject.update();
    });
    _Input__WEBPACK_IMPORTED_MODULE_2__["default"].clear();
    _Physics__WEBPACK_IMPORTED_MODULE_5__["default"].cleanup();
    _Physics__WEBPACK_IMPORTED_MODULE_5__["default"].update(); // run update loop again in (1 / updateRate) seconds

    if (isRunning) {
      setTimeout(update, 1000 / updateRate);
    }
  };
  /**
   * Renders all GameObjects
   */


  var render = function render() {
    canvas.clear();
    _GameObject__WEBPACK_IMPORTED_MODULE_1__["default"].all().forEach(function (gameObject) {
      gameObject.render(canvas);
    }); // run render again as soon as possible, at discretion of browser

    if (isRunning) {
      requestAnimationFrame(render);
    }
  };
  /**
   * Method to start update and render loops
   */


  this.start = function () {
    isRunning = true;
    update();
    render();
  };
  /**
   * Method to stop or pause update and render loops
   */


  this.stop = function () {
    isRunning = false;
  };

  this.next = function () {
    update();
  };
  /** Returns true if game is running */


  this.getIsRunning = function () {
    return isRunning;
  };
  /**
   * Starts loops immediately unless given false as a parameter
   */


  if (isRunning) {
    this.start();
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

var collection = [];
/**
 * Creates a GameObject object
 */

function GameObject() {
  var _this = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var x = options.x,
      y = options.y,
      width = options.width,
      height = options.height,
      name = options.name;
  this.id = collection.length;
  var components = [];
  this.name = name;

  this.update = function () {
    components.forEach(function (component) {
      if (component.preUpdate) {
        component.preUpdate();
      }
    });
    components.forEach(function (component) {
      if (component.update) {
        component.update();
      }
    });
    components.forEach(function (component) {
      if (component.postUpdate) {
        component.postUpdate();
      }
    });
  };

  this.render = function (canvas) {
    components.forEach(function (component) {
      if (component.render) {
        component.render(canvas);
      }
    });
  };

  this["delete"] = function () {
    delete collection[_this.id];
  };

  this.addComponent = function (component) {
    component.id = components.length;

    if (component.name) {
      _this[component.name] = component;
    }

    components.push(component);
    component.parent = _this;

    if (component.onAdd) {
      component.onAdd();
    }

    return component;
  };

  this.removeComponent = function (component) {
    delete components[component.id];

    if (_this[component.name]) {
      delete _this[component.name];
    }
  };

  this.getComponents = function () {
    return [].concat(components);
  };

  this.addComponent(new _components_Transform__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, width, height));
  this.addComponent(new _components_BoxOutline__WEBPACK_IMPORTED_MODULE_1__["default"]());
  collection.push(this);
}

GameObject.all = function () {
  return [].concat(collection);
};

GameObject.find = function (name) {
  return collection.find(function (gameObject) {
    return gameObject.name === name;
  });
};

/***/ }),

/***/ "./src/core/Input.js":
/*!***************************!*\
  !*** ./src/core/Input.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var keys = [];
var _justPressed = [];
var _justReleased = [];
var Input = {
  isPressed: function isPressed(keyCode) {
    return keys.includes(keyCode);
  },
  justPressed: function justPressed(keyCode) {
    return _justPressed.includes(keyCode);
  },
  justReleased: function justReleased(keyCode) {
    return _justReleased.includes(keyCode);
  },
  clear: function clear() {
    _justPressed = [];
    _justReleased = [];
  }
};
document.addEventListener('keydown', function (_ref) {
  var keyCode = _ref.keyCode;

  if (!keys.includes(keyCode)) {
    keys.push(keyCode);
  }

  _justPressed.push(keyCode);
});
document.addEventListener('keyup', function (_ref2) {
  var keyCode = _ref2.keyCode;
  var index = keys.findIndex(function (key) {
    return key === keyCode;
  });

  if (index !== -1) {
    delete keys[index];
  }

  _justReleased.push(keyCode);
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/core/Physics.js":
/*!*****************************!*\
  !*** ./src/core/Physics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BoxCollider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BoxCollider */ "./src/components/BoxCollider.js");
/* harmony import */ var _components_KinematicBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/KinematicBody */ "./src/components/KinematicBody.js");


var Physics = {
  update: function update() {
    _components_BoxCollider__WEBPACK_IMPORTED_MODULE_0__["default"].all().forEach(function (boxCollider) {
      boxCollider.physicsUpdate();
    });
    _components_KinematicBody__WEBPACK_IMPORTED_MODULE_1__["default"].all().forEach(function (kinematicBody) {
      kinematicBody.physicsUpdate();
    });
  },
  cleanup: function cleanup() {
    _components_BoxCollider__WEBPACK_IMPORTED_MODULE_0__["default"].all().forEach(function (boxCollider) {
      boxCollider.collisions = [];
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Physics);

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
/* harmony import */ var _components_StaticBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/StaticBody */ "./src/components/StaticBody.js");
/* harmony import */ var _components_KinematicBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/KinematicBody */ "./src/components/KinematicBody.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/index */ "./src/util/index.js");
/* harmony import */ var _core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/Input */ "./src/core/Input.js");







var game = new _core_Game__WEBPACK_IMPORTED_MODULE_0__["default"]();
var player = new _core_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
  name: 'player',
  x: 200,
  width: 32,
  height: 32
});
var ledge = new _core_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
  name: 'ledge',
  x: 100,
  y: 400,
  width: 400,
  height: 50
});
ledge.addComponent(new _components_BoxCollider__WEBPACK_IMPORTED_MODULE_2__["default"]());
ledge.addComponent(new _components_StaticBody__WEBPACK_IMPORTED_MODULE_3__["default"]());
var playerController = {
  gravity: 0.5,
  speed: 3,
  velocity: new _util_index__WEBPACK_IMPORTED_MODULE_5__["Vector"](0, 0),
  update: function update() {
    var _this$parent = this.parent,
        transform = _this$parent.transform,
        kinematicBody = _this$parent.kinematicBody;
    this.velocity.x = 0;

    if (_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"].isPressed(37)) {
      this.velocity.x -= this.speed;
    }

    if (_core_Input__WEBPACK_IMPORTED_MODULE_6__["default"].isPressed(39)) {
      this.velocity.x += this.speed;
    }

    if (kinematicBody.grounded) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += this.gravity;
    }

    transform.x += this.velocity.x;
    transform.y += this.velocity.y;
  }
};
player.addComponent(playerController);
player.addComponent(new _components_BoxCollider__WEBPACK_IMPORTED_MODULE_2__["default"]());
player.addComponent(new _components_KinematicBody__WEBPACK_IMPORTED_MODULE_4__["default"]());

window.onload = function () {
  game.start();
};

/***/ }),

/***/ "./src/util/Collision.js":
/*!*******************************!*\
  !*** ./src/util/Collision.js ***!
  \*******************************/
/*! exports provided: Collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collision", function() { return Collision; });
function Collision(other, side) {
  this.other = other;
  this.side = side;
}

/***/ }),

/***/ "./src/util/Vector.js":
/*!****************************!*\
  !*** ./src/util/Vector.js ***!
  \****************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
/**
 * returns a vector object with values x and y
 * @param {number} x
 * @param {number} y
 */
function Vector(x, y) {
  var _this = this;

  this.x = x;
  this.y = y;

  this.add = function (other) {
    _this.x += other.x;
    _this.y += other.y;
  };

  this.subtract = function (other) {
    _this.x -= other.x;
    _this.y -= other.y;
  };

  this.multiplyBy = function (other) {
    _this.x *= other.x;
    _this.y *= other.y;
  };

  this.divideBy = function (other) {
    _this.x /= other.x;
    _this.y /= other.y;
  };
}

Vector.add = function (vector1, vector2) {
  var x = vector1.x + vector2.x;
  var y = vector1.y + vector2.y;
  return new Vector(x, y);
};

Vector.subtract = function (vector1, vector2) {
  var x = vector1.x - vector2.x;
  var y = vector1.y - vector2.y;
  return new Vector(x, y);
};

Vector.multiply = function (vector1, vector2) {
  var x = vector1.x * vector2.x;
  var y = vector1.y * vector2.y;
  return new Vector(x, y);
};

Vector.divide = function (vector1, vector2) {
  var x = vector1.x / vector2.x;
  var y = vector1.y / vector2.y;
  return new Vector(x, y);
};

/***/ }),

/***/ "./src/util/detectCollision.js":
/*!*************************************!*\
  !*** ./src/util/detectCollision.js ***!
  \*************************************/
/*! exports provided: detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCollision", function() { return detectCollision; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util/index.js");

var detectCollision = function detectCollision(obj1, obj2) {
  // if same object, don't check
  if (obj1 === obj2) return false;
  /* Check if boxes are colliding */

  var box1 = obj1.transform.get();
  var box2 = obj2.transform.get(); // check if boxes align horizontally

  if (!(box1.x + box1.width > box2.x && box1.x < box2.x + box2.width)) {
    return false;
  } // check if boxes align vertically


  if (!(box1.y + box1.height > box2.y && box1.y < box2.y + box2.height)) {
    return false;
  }
  /* Boxes are colliding */


  console.log('colliding');
  var side;

  if (obj1.kinematicBody) {
    side = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCollisionSide"])(obj1, obj2);
  } else {
    side = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCollisionSide"])(obj2, obj1);
  }

  return new _util__WEBPACK_IMPORTED_MODULE_0__["Collision"](obj2, side);
};

/***/ }),

/***/ "./src/util/getCollisionSide.js":
/*!**************************************!*\
  !*** ./src/util/getCollisionSide.js ***!
  \**************************************/
/*! exports provided: getCollisionSide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollisionSide", function() { return getCollisionSide; });
var getCollisionSide = function getCollisionSide(obj1, obj2) {
  if (!obj1.kinematicBody && !obj2.kinematicBody) {
    return null;
  }

  var kinematicBody = obj1.kinematicBody || obj2.kinematicBody;
  var direction = kinematicBody.getDirection();

  switch (direction) {
    case 'right':
      return 'right';

    case 'left':
      return 'left';

    case 'up':
      return 'top';

    case 'down':
      return 'bottom';
  }
  /* Check for corner-to-corner line-up */


  if (direction === 'up-right') {
    var y = kinematicBody.trajectory(obj2.transform.x, 'top-right');

    if (y > obj2.transform.y + obj2.transform.height) {
      return 'top';
    } else {
      return 'right';
    }
  }

  if (direction === 'down-right') {
    var _y = kinematicBody.trajectory(obj2.transform.x, 'bottom-right');

    if (_y > obj2.transform.y) {
      return 'right';
    } else {
      return 'bottom';
    }
  }

  if (direction === 'up-left') {
    var _y2 = kinematicBody.trajectory(obj2.transform.x + obj2.transform.width, 'top-left');

    if (_y2 > obj2.transform.y + obj2.transform.height) {
      return 'top';
    } else {
      return 'left';
    }
  }

  if (direction === 'down-left') {
    var _y3 = kinematicBody.trajectory(obj2.transform.x + obj2.transform.width, 'bottom-left');

    console.log(_y3);

    if (_y3 > obj2.transform.y) {
      return 'left';
    } else {
      return 'bottom';
    }
  }
};

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: Collision, Vector, detectCollision, getCollisionSide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collision */ "./src/util/Collision.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collision", function() { return _Collision__WEBPACK_IMPORTED_MODULE_0__["Collision"]; });

/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/util/Vector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _Vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]; });

/* harmony import */ var _detectCollision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectCollision */ "./src/util/detectCollision.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectCollision", function() { return _detectCollision__WEBPACK_IMPORTED_MODULE_2__["detectCollision"]; });

/* harmony import */ var _getCollisionSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCollisionSide */ "./src/util/getCollisionSide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCollisionSide", function() { return _getCollisionSide__WEBPACK_IMPORTED_MODULE_3__["getCollisionSide"]; });







/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm94Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQm94T3V0bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9LaW5lbWF0aWNCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXRpY0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dhbWVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kZXRlY3RDb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2V0Q29sbGlzaW9uU2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uIiwiQm94Q29sbGlkZXIiLCJuYW1lIiwiY29sbGlzaW9ucyIsInBoeXNpY3NVcGRhdGUiLCJHYW1lT2JqZWN0IiwiYWxsIiwiZm9yRWFjaCIsImdhbWVPYmplY3QiLCJib3hDb2xsaWRlciIsImNvbGxpc2lvbiIsImRldGVjdENvbGxpc2lvbiIsInBhcmVudCIsInB1c2giLCJCb3hPdXRsaW5lIiwicmVuZGVyIiwiY2FudmFzIiwidHJhbnNmb3JtIiwiZ2V0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJLaW5lbWF0aWNCb2R5IiwibGFzdFBvcyIsIlZlY3RvciIsInZlbG9jaXR5IiwiZGlyZWN0aW9uIiwiZ3JvdW5kZWQiLCJnZXREaXJlY3Rpb24iLCJzbG9wZSIsIkluZmluaXR5IiwidHJhamVjdG9yeSIsImNvcm5lciIsImJveCIsIkVycm9yIiwiZ2V0UG9zIiwib3RoZXIiLCJzaWRlIiwib25BZGQiLCJTdGF0aWNCb2R5IiwiZGVmYXVsdHMiLCJUcmFuc2Zvcm0iLCJnZXREaW0iLCJzZXRQb3MiLCJzZXREaW0iLCJzZXQiLCJkZWZhdWx0V2lkdGgiLCJkZWZ1YWx0SGVpZ2h0IiwiQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZpZXdYIiwidmlld1kiLCJjbGVhciIsImNsZWFyUmVjdCIsImRyYXdSZWN0IiwiaXNGaWxsZWQiLCJmaWxsUmVjdCIsInN0cm9rZVJlY3QiLCJkcmF3U3ByaXRlIiwic3ByaXRlT2JqIiwic3ByaXRlIiwiZHJhd0ltYWdlIiwibGVuZ3RoIiwiZ2V0Q2FudmFzIiwic2V0VmlldyIsInNldFZpZXdYIiwic2V0Vmlld1kiLCJnZXRWaWV3IiwiZ2V0Vmlld1giLCJnZXRWaWV3WSIsInVwZGF0ZVJhdGUiLCJHYW1lIiwic2hvdWxkU3RhcnQiLCJpc1J1bm5pbmciLCJwcm9jZXNzIiwidXBkYXRlIiwiSW5wdXQiLCJQaHlzaWNzIiwiY2xlYW51cCIsInNldFRpbWVvdXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGFydCIsInN0b3AiLCJuZXh0IiwiZ2V0SXNSdW5uaW5nIiwib3B0aW9ucyIsImlkIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsInByZVVwZGF0ZSIsInBvc3RVcGRhdGUiLCJhZGRDb21wb25lbnQiLCJyZW1vdmVDb21wb25lbnQiLCJnZXRDb21wb25lbnRzIiwiZmluZCIsImtleXMiLCJqdXN0UHJlc3NlZCIsImp1c3RSZWxlYXNlZCIsImlzUHJlc3NlZCIsImtleUNvZGUiLCJpbmNsdWRlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImZpbmRJbmRleCIsImtleSIsImtpbmVtYXRpY0JvZHkiLCJnYW1lIiwicGxheWVyIiwibGVkZ2UiLCJwbGF5ZXJDb250cm9sbGVyIiwiZ3Jhdml0eSIsInNwZWVkIiwid2luZG93Iiwib25sb2FkIiwiQ29sbGlzaW9uIiwiYWRkIiwic3VidHJhY3QiLCJtdWx0aXBseUJ5IiwiZGl2aWRlQnkiLCJ2ZWN0b3IxIiwidmVjdG9yMiIsIm11bHRpcGx5IiwiZGl2aWRlIiwib2JqMSIsIm9iajIiLCJib3gxIiwiYm94MiIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb2xsaXNpb25TaWRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFLQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFH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QSxRQUFJQSxHQUFDLEdBQUcrRyxJQUFJLENBQUNsSCxTQUFMLENBQWVHLENBQXZCLEVBQTBCO0FBQ3hCLGFBQU8sTUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sUUFBUDtBQUNEO0FBQ0Y7QUFDRixDQWxFTSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXHJcbiAqIEJveENvbGxpZGVyLmpzXHJcbiAqIENyZWF0ZXMgYSBCb3hDb2xsaWRlciBjb21wb25lbnQgdGhhdCBoYW5kbGVzIGJveCBjb2xsaXNpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi4vY29yZS9HYW1lT2JqZWN0J1xyXG5pbXBvcnQgeyBkZXRlY3RDb2xsaXNpb24gfSBmcm9tICcuLi91dGlsJ1xyXG5cclxuY29uc3QgY29sbGVjdGlvbiA9IFtdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hDb2xsaWRlciAoKSB7XHJcbiAgdGhpcy5uYW1lID0gJ2JveENvbGxpZGVyJ1xyXG5cclxuICB0aGlzLmNvbGxpc2lvbnMgPSBbXVxyXG5cclxuICB0aGlzLnBoeXNpY3NVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBHYW1lT2JqZWN0LmFsbCgpLmZvckVhY2goZ2FtZU9iamVjdCA9PiB7XHJcbiAgICAgIGlmICghZ2FtZU9iamVjdC5ib3hDb2xsaWRlcikgcmV0dXJuXHJcblxyXG4gICAgICBjb25zdCBjb2xsaXNpb24gPSBkZXRlY3RDb2xsaXNpb24odGhpcy5wYXJlbnQsIGdhbWVPYmplY3QpXHJcblxyXG4gICAgICBpZiAoY29sbGlzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25zLnB1c2goY29sbGlzaW9uKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29sbGVjdGlvbi5wdXNoKHRoaXMpXHJcbn1cclxuXHJcbkJveENvbGxpZGVyLmFsbCA9ICgpID0+IFsuLi5jb2xsZWN0aW9uXVxyXG4iLCIvKipcclxuICogQm94T3V0bGluZS5qc1xyXG4gKiBTdHJva2VzIGEgYm94IG9mIHRoZSBwYXJlbnQgR2FtZU9iamVjdCdzIHRyYW5zZm9ybSBkYXRhXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94T3V0bGluZSAoKSB7XHJcbiAgdGhpcy5uYW1lID0gJ2JveE91dGxpbmUnXHJcbiAgdGhpcy5yZW5kZXIgPSAoY2FudmFzKSA9PiB7XHJcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMucGFyZW50LnRyYW5zZm9ybS5nZXQoKVxyXG4gICAgY2FudmFzLmRyYXcoeCwgeSwgd2lkdGgsIGhlaWdodCwgZmFsc2UpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4uL3V0aWwnXHJcblxyXG5jb25zdCBjb2xsZWN0aW9uID0gW11cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtpbmVtYXRpY0JvZHkgKCkge1xyXG4gIHRoaXMubmFtZSA9ICdraW5lbWF0aWNCb2R5J1xyXG5cclxuICB0aGlzLmxhc3RQb3MgPSBuZXcgVmVjdG9yKClcclxuXHJcbiAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMCwgMClcclxuXHJcbiAgdGhpcy5kaXJlY3Rpb24gPSBudWxsXHJcblxyXG4gIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZVxyXG5cclxuICB0aGlzLmdldERpcmVjdGlvbiA9ICgpID0+IHtcclxuICAgIC8vIGZvciBmbGF0IHNsb3BlLCBlaXRoZXIgcmlnaHQgb3IgbGVmdFxyXG4gICAgaWYgKHRoaXMuc2xvcGUgPT09IDApIHtcclxuICAgICAgaWYgKHRoaXMudmVsb2NpdHkueCA+IDApIHJldHVybiAncmlnaHQnXHJcblxyXG4gICAgICBpZiAodGhpcy52ZWxvY2l0eS54IDwgMCkgcmV0dXJuICdsZWZ0J1xyXG5cclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIC8vIGZvciB2ZXJ0aWNhbCBzbG9wZSwgZWl0aGVyIHVwIG9yIGRvd25cclxuICAgIGlmICh0aGlzLnNsb3BlID09PSBJbmZpbml0eSkge1xyXG4gICAgICBpZiAodGhpcy52ZWxvY2l0eS55ID4gMCkgcmV0dXJuICdkb3duJ1xyXG5cclxuICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHJldHVybiAndXAnXHJcblxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIG11c3QgYmUgZGlhZ29uYWxcclxuICAgIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAwKSB7XHJcbiAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuICd1cC1yaWdodCdcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy52ZWxvY2l0eS54IDwgMCkge1xyXG4gICAgICAgIHJldHVybiAndXAtbGVmdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgaWYgKHRoaXMudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgICByZXR1cm4gJ2Rvd24tcmlnaHQnXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgICByZXR1cm4gJ2Rvd24tbGVmdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy50cmFqZWN0b3J5ID0gZnVuY3Rpb24gKHgsIGNvcm5lcikge1xyXG4gICAgY29uc3QgeyB0cmFuc2Zvcm0gfSA9IHRoaXMucGFyZW50XHJcblxyXG4gICAgY29uc3QgYm94ID0gdHJhbnNmb3JtLmdldCgpXHJcblxyXG4gICAgaWYgKGNvcm5lciA9PT0gJ3RvcC1yaWdodCcpIHtcclxuICAgICAgLy8gdXNlIHVwcGVyIHJpZ2h0IGNvcm5lclxyXG4gICAgICByZXR1cm4gdGhpcy5zbG9wZSAqICh4IC0gKGJveC54ICsgYm94LndpZHRoKSkgKyBib3gueVxyXG4gICAgfVxyXG4gICAgaWYgKGNvcm5lciA9PT0gJ2JvdHRvbS1yaWdodCcpIHtcclxuICAgICAgLy8gdXNlIGxvd2VyIHJpZ2h0IGNvcm5lclxyXG4gICAgICByZXR1cm4gdGhpcy5zbG9wZSAqICh4IC0gKGJveC54ICsgYm94LndpZHRoKSkgKyBib3gueSArIGJveC5oZWlnaHRcclxuICAgIH1cclxuICAgIGlmIChjb3JuZXIgPT09ICd0b3AtbGVmdCcpIHtcclxuICAgICAgLy8gdXNlIHVwcGVyIGxlZnQgY29ybmVyXHJcbiAgICAgIHJldHVybiB0aGlzLnNsb3BlICogKHgpICsgYm94LnlcclxuICAgIH1cclxuICAgIGlmIChjb3JuZXIgPT09ICdib3R0b20tbGVmdCcpIHtcclxuICAgICAgLy8gdXNlIGxvd2VyIGxlZnQgY29ybmVyXHJcbiAgICAgIHJldHVybiB0aGlzLnNsb3BlICogKHgpICsgYm94LnkgKyBib3guaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBjb3JuZXInKVxyXG4gIH1cclxuXHJcbiAgdGhpcy5waHlzaWNzVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0cmFuc2Zvcm0sIGJveENvbGxpZGVyIH0gPSB0aGlzLnBhcmVudFxyXG5cclxuICAgIHRoaXMudmVsb2NpdHkueCA9IHRyYW5zZm9ybS54IC0gdGhpcy5sYXN0UG9zLnhcclxuICAgIHRoaXMudmVsb2NpdHkueSA9IHRyYW5zZm9ybS55IC0gdGhpcy5sYXN0UG9zLnlcclxuXHJcbiAgICAvLyB0cmFuc2Zvcm0uc2V0WCh0cmFuc2Zvcm0ueCArIHRoaXMudmVsb2NpdHkueClcclxuICAgIC8vIHRyYW5zZm9ybS5zZXRZKHRyYW5zZm9ybS55ICsgdGhpcy52ZWxvY2l0eS55KVxyXG5cclxuICAgIHRoaXMuc2xvcGUgPSB0aGlzLnZlbG9jaXR5LnkgLyB0aGlzLnZlbG9jaXR5LnhcclxuXHJcbiAgICB0aGlzLmxhc3RQb3MgPSB0cmFuc2Zvcm0uZ2V0UG9zKClcclxuXHJcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2VcclxuXHJcbiAgICBib3hDb2xsaWRlci5jb2xsaXNpb25zLmZvckVhY2goY29sbGlzaW9uID0+IHtcclxuICAgICAgY29uc3QgeyBvdGhlciwgc2lkZSB9ID0gY29sbGlzaW9uXHJcblxyXG4gICAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIHRyYW5zZm9ybS54ID0gb3RoZXIudHJhbnNmb3JtLnggLSB0cmFuc2Zvcm0ud2lkdGhcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtLnggPSBvdGhlci50cmFuc2Zvcm0ueCArIG90aGVyLnRyYW5zZm9ybS53aWR0aFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzaWRlID09PSAndG9wJykge1xyXG4gICAgICAgIHRyYW5zZm9ybS55ID0gb3RoZXIudHJhbnNmb3JtLnkgKyBvdGhlci50cmFuc2Zvcm0uaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNpZGUgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtLnkgPSBvdGhlci50cmFuc2Zvcm0ueSAtIHRyYW5zZm9ybS5oZWlnaHRcclxuICAgICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdGhpcy5vbkFkZCA9ICgpID0+IHtcclxuICAgIHRoaXMubGFzdFBvcyA9IHRoaXMucGFyZW50LnRyYW5zZm9ybS5nZXRQb3MoKVxyXG4gIH1cclxuXHJcbiAgY29sbGVjdGlvbi5wdXNoKHRoaXMpXHJcbn1cclxuXHJcbktpbmVtYXRpY0JvZHkuYWxsID0gKCkgPT4gWy4uLmNvbGxlY3Rpb25dXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRpY0JvZHkgKCkge1xyXG4gIHRoaXMubmFtZSA9ICdzdGF0aWNCb2R5J1xyXG59XHJcbiIsIi8qKlxyXG4gKiBUcmFuc2Zvcm0uanNcclxuICogQ3JlYXRlcyBhIFRyYW5zZm9ybSBvYmplY3QgY29udGFpbmluZyBwb3NpdGlvbiBhbmQgZGltZW5zaW5vc1xyXG4gKi9cclxuXHJcbmNvbnN0IGRlZmF1bHRzID0ge1xyXG4gIHg6IDAsXHJcbiAgeTogMCxcclxuICB3aWR0aDogMTAsXHJcbiAgaGVpZ2h0OiAxMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Zvcm0gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICB0aGlzLm5hbWUgPSAndHJhbnNmb3JtJ1xyXG5cclxuICAvLyBLZWVwcyB0cmFjayBvZiB4LCB5LCB3aWR0aCwgaGVpZ2h0OyBhbGwgcHVibGljbHkgYWNjZXNzaWJsZVxyXG4gIHRoaXMueCA9IHggfHwgZGVmYXVsdHMueFxyXG4gIHRoaXMueSA9IHkgfHwgZGVmYXVsdHMueVxyXG4gIHRoaXMud2lkdGggPSB3aWR0aCB8fCBkZWZhdWx0cy53aWR0aFxyXG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IGRlZmF1bHRzLmhlaWdodFxyXG5cclxuICAvLyBVdGlsaXRpZXMgdG8gZ2V0IG11bHRpcGxlIHByb3BlcnRpZXNcclxuICB0aGlzLmdldFBvcyA9ICgpID0+ICh7XHJcbiAgICB4OiB0aGlzLngsXHJcbiAgICB5OiB0aGlzLnlcclxuICB9KVxyXG4gIHRoaXMuZ2V0RGltID0gKCkgPT4gKHtcclxuICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxyXG4gIH0pXHJcbiAgdGhpcy5nZXQgPSAoKSA9PiAoeyAuLi50aGlzLmdldFBvcygpLCAuLi50aGlzLmdldERpbSgpIH0pXHJcblxyXG4gIC8vIFV0aWxpdGllcyB0byBzZXQgbXVsdGlwbGUgcHJvcGVydGllc1xyXG4gIHRoaXMuc2V0UG9zID0gKHgsIHkpID0+IHtcclxuICAgIHRoaXMueCA9IHhcclxuICAgIHRoaXMueSA9IHlcclxuICB9XHJcbiAgdGhpcy5zZXREaW0gPSAod2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gIH1cclxuICB0aGlzLnNldCA9ICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICB0aGlzLnggPSB4XHJcbiAgICB0aGlzLnkgPSB5XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDYW52YXMuanNcclxuICogQ3JlYXRlcyBhIENhbnZhcyBvYmplY3QgdXNlZCB0byBkcmF3IGdhbWUgb2JqZWN0c1xyXG4gKi9cclxuXHJcbi8vIFRoZSBkZWZhdWx0IGRpbWVuc2lvbnMgb2YgdGhlIGNhbnZhc1xyXG5jb25zdCBkZWZhdWx0V2lkdGggPSAxMDI0XHJcbmNvbnN0IGRlZnVhbHRIZWlnaHQgPSA3MjBcclxuXHJcbi8qKlxyXG4gKiBDb25zdHJ1Y3RzIGEgQ2FudmFzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW52YXMgKHdpZHRoLCBoZWlnaHQpIHtcclxuICAvLyBDcmVhdGUgaHRtbCBjYW52YXMgZWxlbWVudFxyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgLy8gU2V0IHdpZHRoIGFuZCBoZWlnaHRcclxuICBjYW52YXMud2lkdGggPSB3aWR0aCB8fCBkZWZhdWx0V2lkdGhcclxuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IGRlZnVhbHRIZWlnaHRcclxuXHJcbiAgLy8gR2V0IDJkIGRyYXdpbmcgYXBpIGZyb20gY2FudmFzIGVsZW1lbnRcclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICAvLyBJbnNlcnQgY2FudmFzIGVsZW1lbnQgaW50byB0aGUgZG9jdW1lbnRcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcylcclxuXHJcbiAgLy8gUG9zaXRpb24gb2YgdGhlIGNhbnZhc1xyXG4gIGxldCB2aWV3WCA9IDBcclxuICBsZXQgdmlld1kgPSAwXHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFycyB0aGUgZW50aXJlIGNhbnZhc1xyXG4gICAqL1xyXG4gIHRoaXMuY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYXdzIGEgcmVjdGFuZ2xlIHdpdGggdGhlIGdpdmVuIGNvb3JkaW5hdGVzIGFuZCBkaW1lbnNpb25zLlxyXG4gICAqIEl0IHdpbGwgYmUgc3Ryb2tlZCBieSBkZWZhdWx0LCB1bmxlc3MgaXNGaWxsZWQgaXMgdHJ1ZVxyXG4gICAqL1xyXG4gIHRoaXMuZHJhd1JlY3QgPSAoeCwgeSwgd2lkdGgsIGhlaWdodCwgaXNGaWxsZWQpID0+IHtcclxuICAgIGlmIChpc0ZpbGxlZCkge1xyXG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmF3cyBhIHNwcml0ZSBhdCB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLlxyXG4gICAqL1xyXG4gIHRoaXMuZHJhd1Nwcml0ZSA9IChzcHJpdGVPYmosIHgsIHkpID0+IHtcclxuICAgIGNvbnN0IHNwcml0ZSA9IHNwcml0ZU9iai5nZXQoKVxyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlLCB4LCB5LCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIHNob3J0aGFuZCBmb3IgZHJhd1JlY3Qgb3IgZHJhd1Nwcml0ZS5cclxuICAgKiBJdCBjaG9vc2VzIHdoaWNoIG1ldGhvZCB0byBjYWxsIGJhc2VkIG9uIG51bWJlciBvZiBhcmd1bWVudHNcclxuICAgKi9cclxuICB0aGlzLmRyYXcgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgLy8gQ2FsbHMgZHJhd1JlY3QgaWYgdGhlcmUgYXJlIDQgb3IgbW9yZSBhcmdzLCBlbHNlIGRyYXdTcHJpdGVcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgIHRoaXMuZHJhd1JlY3QoLi4uYXJncylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZSguLi5hcmdzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgSFRNTCBjYW52YXMgZWxlbWVudFxyXG4gICAqL1xyXG4gIHRoaXMuZ2V0Q2FudmFzID0gKCkgPT4gY2FudmFzXHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9ucyB0byBzZXQgdGhlIHZpZXdwb3J0IHBvc2l0aW9uXHJcbiAgICovXHJcbiAgdGhpcy5zZXRWaWV3ID0gKHgsIHkpID0+IHtcclxuICAgIHZpZXdYID0geFxyXG4gICAgdmlld1kgPSB5XHJcbiAgfVxyXG4gIHRoaXMuc2V0Vmlld1ggPSB4ID0+IHtcclxuICAgIHZpZXdYID0geFxyXG4gIH1cclxuICB0aGlzLnNldFZpZXdZID0geSA9PiB7XHJcbiAgICB2aWV3WSA9IHlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9ucyB0byByZXRyaWV2ZSB0aGUgY3VycmVudCB2aWV3cG9ydCBwb3NpdGlvblxyXG4gICAqL1xyXG4gIHRoaXMuZ2V0VmlldyA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHZpZXdYLFxyXG4gICAgICB5OiB2aWV3WVxyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLmdldFZpZXdYID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHZpZXdYXHJcbiAgfVxyXG4gIHRoaXMuZ2V0Vmlld1kgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdmlld1lcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdhbWUuanNcclxuICogSGFuZGxlcyB0aGUgZ2FtZSB1cGRhdGUgYW5kIHJlbmRlciBsb29wc1xyXG4gKi9cclxuXHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnXHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCdcclxuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXHJcbmltcG9ydCBCb3hDb2xsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL0JveENvbGxpZGVyJ1xyXG5pbXBvcnQgS2luZW1hdGljQm9keSBmcm9tICcuLi9jb21wb25lbnRzL0tpbmVtYXRpY0JvZHknXHJcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4vUGh5c2ljcydcclxuXHJcbi8vIEZyZXF1ZW5jeSBvZiB1cGRhdGUgbG9vcCAodGlja3MgcGVyIHNlY29uZClcclxuY29uc3QgdXBkYXRlUmF0ZSA9IDMwXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lIChzaG91bGRTdGFydCA9IHRydWUpIHtcclxuICAvLyBHYW1lIHN0YXJ0cyBvbiBpbml0aWFsaXphdGlvbiB1bmxlc3MgZ2l2ZW4gZmFsc2UgYXMgcGFyYW1ldGVyXHJcbiAgbGV0IGlzUnVubmluZyA9IHNob3VsZFN0YXJ0XHJcblxyXG4gIGxldCBjYW52YXNcclxuXHJcbiAgLy8gQ2FudmFzIG9iamVjdFxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XHJcbiAgICBjYW52YXMgPSBuZXcgQ2FudmFzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgYWxsIEdhbWVPYmplY3RzXHJcbiAgICovXHJcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xyXG4gICAgR2FtZU9iamVjdC5hbGwoKS5mb3JFYWNoKGdhbWVPYmplY3QgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnVwZGF0ZSgpXHJcbiAgICB9KVxyXG4gICAgSW5wdXQuY2xlYXIoKVxyXG5cclxuICAgIFBoeXNpY3MuY2xlYW51cCgpXHJcbiAgICBQaHlzaWNzLnVwZGF0ZSgpXHJcblxyXG4gICAgLy8gcnVuIHVwZGF0ZSBsb29wIGFnYWluIGluICgxIC8gdXBkYXRlUmF0ZSkgc2Vjb25kc1xyXG4gICAgaWYgKGlzUnVubmluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KHVwZGF0ZSwgMTAwMCAvIHVwZGF0ZVJhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGFsbCBHYW1lT2JqZWN0c1xyXG4gICAqL1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGNhbnZhcy5jbGVhcigpXHJcblxyXG4gICAgR2FtZU9iamVjdC5hbGwoKS5mb3JFYWNoKGdhbWVPYmplY3QgPT4ge1xyXG4gICAgICBnYW1lT2JqZWN0LnJlbmRlcihjYW52YXMpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHJ1biByZW5kZXIgYWdhaW4gYXMgc29vbiBhcyBwb3NzaWJsZSwgYXQgZGlzY3JldGlvbiBvZiBicm93c2VyXHJcbiAgICBpZiAoaXNSdW5uaW5nKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdG8gc3RhcnQgdXBkYXRlIGFuZCByZW5kZXIgbG9vcHNcclxuICAgKi9cclxuICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgaXNSdW5uaW5nID0gdHJ1ZVxyXG4gICAgdXBkYXRlKClcclxuICAgIHJlbmRlcigpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdG8gc3RvcCBvciBwYXVzZSB1cGRhdGUgYW5kIHJlbmRlciBsb29wc1xyXG4gICAqL1xyXG4gIHRoaXMuc3RvcCA9ICgpID0+IHtcclxuICAgIGlzUnVubmluZyA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICB0aGlzLm5leHQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgLyoqIFJldHVybnMgdHJ1ZSBpZiBnYW1lIGlzIHJ1bm5pbmcgKi9cclxuICB0aGlzLmdldElzUnVubmluZyA9ICgpID0+IGlzUnVubmluZ1xyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgbG9vcHMgaW1tZWRpYXRlbHkgdW5sZXNzIGdpdmVuIGZhbHNlIGFzIGEgcGFyYW1ldGVyXHJcbiAgICovXHJcbiAgaWYgKGlzUnVubmluZykge1xyXG4gICAgdGhpcy5zdGFydCgpXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBHYW1lT2JqZWN0LmpzXHJcbiAqIENyZWF0ZXMgYSBHYW1lT2JqZWN0IG9iamVjdCB3aXRoIGEgcGxhY2UgaW4gdGhlIGhpZXJhcmNoeVxyXG4gKiBLZWVwcyB0cmFjayBvZiBhbGwgR2FtZU9iamVjdHMgYW5kIHRoZSBHYW1lT2JqZWN0IGhpZXJhcmNoeVxyXG4gKi9cclxuXHJcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2Zvcm0nXHJcbmltcG9ydCBCb3hPdXRsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvQm94T3V0bGluZSdcclxuXHJcbi8vIEhvbGRzIGxpc3Qgb2YgR2FtZU9iamVjdHNcclxuY29uc3QgY29sbGVjdGlvbiA9IFtdXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIEdhbWVPYmplY3Qgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lT2JqZWN0IChvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQsIG5hbWUgfSA9IG9wdGlvbnNcclxuXHJcbiAgdGhpcy5pZCA9IGNvbGxlY3Rpb24ubGVuZ3RoXHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXVxyXG5cclxuICB0aGlzLm5hbWUgPSBuYW1lXHJcblxyXG4gIHRoaXMudXBkYXRlID0gKCkgPT4ge1xyXG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgIGlmIChjb21wb25lbnQucHJlVXBkYXRlKSB7XHJcbiAgICAgICAgY29tcG9uZW50LnByZVVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcclxuICAgICAgaWYgKGNvbXBvbmVudC51cGRhdGUpIHtcclxuICAgICAgICBjb21wb25lbnQudXBkYXRlKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICBpZiAoY29tcG9uZW50LnBvc3RVcGRhdGUpIHtcclxuICAgICAgICBjb21wb25lbnQucG9zdFVwZGF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB0aGlzLnJlbmRlciA9IChjYW52YXMpID0+IHtcclxuICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICBpZiAoY29tcG9uZW50LnJlbmRlcikge1xyXG4gICAgICAgIGNvbXBvbmVudC5yZW5kZXIoY2FudmFzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdGhpcy5kZWxldGUgPSAoKSA9PiB7XHJcbiAgICBkZWxldGUgY29sbGVjdGlvblt0aGlzLmlkXVxyXG4gIH1cclxuXHJcbiAgdGhpcy5hZGRDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XHJcbiAgICBjb21wb25lbnQuaWQgPSBjb21wb25lbnRzLmxlbmd0aFxyXG4gICAgaWYgKGNvbXBvbmVudC5uYW1lKSB7XHJcbiAgICAgIHRoaXNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcclxuXHJcbiAgICBjb21wb25lbnQucGFyZW50ID0gdGhpc1xyXG5cclxuICAgIGlmIChjb21wb25lbnQub25BZGQpIHtcclxuICAgICAgY29tcG9uZW50Lm9uQWRkKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50XHJcbiAgfVxyXG5cclxuICB0aGlzLnJlbW92ZUNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcclxuICAgIGRlbGV0ZSBjb21wb25lbnRzW2NvbXBvbmVudC5pZF1cclxuICAgIGlmICh0aGlzW2NvbXBvbmVudC5uYW1lXSkge1xyXG4gICAgICBkZWxldGUgdGhpc1tjb21wb25lbnQubmFtZV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRoaXMuZ2V0Q29tcG9uZW50cyA9ICgpID0+IFsuLi5jb21wb25lbnRzXVxyXG5cclxuICB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKHgsIHksIHdpZHRoLCBoZWlnaHQpKVxyXG4gIHRoaXMuYWRkQ29tcG9uZW50KG5ldyBCb3hPdXRsaW5lKCkpXHJcblxyXG4gIGNvbGxlY3Rpb24ucHVzaCh0aGlzKVxyXG59XHJcblxyXG5HYW1lT2JqZWN0LmFsbCA9ICgpID0+IFsuLi5jb2xsZWN0aW9uXVxyXG5HYW1lT2JqZWN0LmZpbmQgPSAobmFtZSkgPT4ge1xyXG4gIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZ2FtZU9iamVjdCA9PiAoZ2FtZU9iamVjdC5uYW1lID09PSBuYW1lKSlcclxufVxyXG4iLCJjb25zdCBrZXlzID0gW11cclxubGV0IGp1c3RQcmVzc2VkID0gW11cclxubGV0IGp1c3RSZWxlYXNlZCA9IFtdXHJcblxyXG5jb25zdCBJbnB1dCA9IHtcclxuICBpc1ByZXNzZWQgKGtleUNvZGUpIHtcclxuICAgIHJldHVybiBrZXlzLmluY2x1ZGVzKGtleUNvZGUpXHJcbiAgfSxcclxuICBqdXN0UHJlc3NlZCAoa2V5Q29kZSkge1xyXG4gICAgcmV0dXJuIGp1c3RQcmVzc2VkLmluY2x1ZGVzKGtleUNvZGUpXHJcbiAgfSxcclxuICBqdXN0UmVsZWFzZWQgKGtleUNvZGUpIHtcclxuICAgIHJldHVybiBqdXN0UmVsZWFzZWQuaW5jbHVkZXMoa2V5Q29kZSlcclxuICB9LFxyXG5cclxuICBjbGVhciAoKSB7XHJcbiAgICBqdXN0UHJlc3NlZCA9IFtdXHJcbiAgICBqdXN0UmVsZWFzZWQgPSBbXVxyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7IGtleUNvZGUgfSkgPT4ge1xyXG4gIGlmICgha2V5cy5pbmNsdWRlcyhrZXlDb2RlKSkge1xyXG4gICAga2V5cy5wdXNoKGtleUNvZGUpXHJcbiAgfVxyXG5cclxuICBqdXN0UHJlc3NlZC5wdXNoKGtleUNvZGUpXHJcbn0pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7IGtleUNvZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0ga2V5cy5maW5kSW5kZXgoa2V5ID0+IGtleSA9PT0ga2V5Q29kZSlcclxuICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICBkZWxldGUga2V5c1tpbmRleF1cclxuICB9XHJcblxyXG4gIGp1c3RSZWxlYXNlZC5wdXNoKGtleUNvZGUpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxyXG4iLCJpbXBvcnQgQm94Q29sbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Cb3hDb2xsaWRlcidcclxuaW1wb3J0IEtpbmVtYXRpY0JvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9LaW5lbWF0aWNCb2R5J1xyXG5cclxuY29uc3QgUGh5c2ljcyA9IHtcclxuICB1cGRhdGUgKCkge1xyXG4gICAgQm94Q29sbGlkZXIuYWxsKCkuZm9yRWFjaChib3hDb2xsaWRlciA9PiB7XHJcbiAgICAgIGJveENvbGxpZGVyLnBoeXNpY3NVcGRhdGUoKVxyXG4gICAgfSlcclxuICAgIEtpbmVtYXRpY0JvZHkuYWxsKCkuZm9yRWFjaChraW5lbWF0aWNCb2R5ID0+IHtcclxuICAgICAga2luZW1hdGljQm9keS5waHlzaWNzVXBkYXRlKClcclxuICAgIH0pXHJcbiAgfSxcclxuICBjbGVhbnVwICgpIHtcclxuICAgIEJveENvbGxpZGVyLmFsbCgpLmZvckVhY2goYm94Q29sbGlkZXIgPT4ge1xyXG4gICAgICBib3hDb2xsaWRlci5jb2xsaXNpb25zID0gW11cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzXHJcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vY29yZS9HYW1lJ1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2NvcmUvR2FtZU9iamVjdCdcclxuaW1wb3J0IEJveENvbGxpZGVyIGZyb20gJy4vY29tcG9uZW50cy9Cb3hDb2xsaWRlcidcclxuaW1wb3J0IFN0YXRpY0JvZHkgZnJvbSAnLi9jb21wb25lbnRzL1N0YXRpY0JvZHknXHJcbmltcG9ydCBLaW5lbWF0aWNCb2R5IGZyb20gJy4vY29tcG9uZW50cy9LaW5lbWF0aWNCb2R5J1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3V0aWwvaW5kZXgnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvcmUvSW5wdXQnXHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKVxyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IEdhbWVPYmplY3QoeyBuYW1lOiAncGxheWVyJywgeDogMjAwLCB3aWR0aDogMzIsIGhlaWdodDogMzIgfSlcclxuXHJcbmNvbnN0IGxlZGdlID0gbmV3IEdhbWVPYmplY3Qoe1xyXG4gIG5hbWU6ICdsZWRnZScsIHg6IDEwMCwgeTogNDAwLCB3aWR0aDogNDAwLCBoZWlnaHQ6IDUwXHJcbn0pXHJcblxyXG5sZWRnZS5hZGRDb21wb25lbnQobmV3IEJveENvbGxpZGVyKCkpXHJcbmxlZGdlLmFkZENvbXBvbmVudChuZXcgU3RhdGljQm9keSgpKVxyXG5cclxuY29uc3QgcGxheWVyQ29udHJvbGxlciA9IHtcclxuICBncmF2aXR5OiAwLjUsXHJcbiAgc3BlZWQ6IDMsXHJcbiAgdmVsb2NpdHk6IG5ldyBWZWN0b3IoMCwgMCksXHJcbiAgdXBkYXRlICgpIHtcclxuICAgIGNvbnN0IHsgdHJhbnNmb3JtLCBraW5lbWF0aWNCb2R5IH0gPSB0aGlzLnBhcmVudFxyXG5cclxuICAgIHRoaXMudmVsb2NpdHkueCA9IDBcclxuICAgIGlmIChJbnB1dC5pc1ByZXNzZWQoMzcpKSB7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueCAtPSB0aGlzLnNwZWVkXHJcbiAgICB9XHJcbiAgICBpZiAoSW5wdXQuaXNQcmVzc2VkKDM5KSkge1xyXG4gICAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5zcGVlZFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChraW5lbWF0aWNCb2R5Lmdyb3VuZGVkKSB7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLmdyYXZpdHlcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0ueCArPSB0aGlzLnZlbG9jaXR5LnhcclxuICAgIHRyYW5zZm9ybS55ICs9IHRoaXMudmVsb2NpdHkueVxyXG4gIH1cclxufVxyXG5cclxucGxheWVyLmFkZENvbXBvbmVudChwbGF5ZXJDb250cm9sbGVyKVxyXG5wbGF5ZXIuYWRkQ29tcG9uZW50KG5ldyBCb3hDb2xsaWRlcigpKVxyXG5wbGF5ZXIuYWRkQ29tcG9uZW50KG5ldyBLaW5lbWF0aWNCb2R5KCkpXHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIGdhbWUuc3RhcnQoKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBDb2xsaXNpb24gKG90aGVyLCBzaWRlKSB7XHJcbiAgdGhpcy5vdGhlciA9IG90aGVyXHJcbiAgdGhpcy5zaWRlID0gc2lkZVxyXG59XHJcbiIsIi8qKlxyXG4gKiByZXR1cm5zIGEgdmVjdG9yIG9iamVjdCB3aXRoIHZhbHVlcyB4IGFuZCB5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVmVjdG9yICh4LCB5KSB7XHJcbiAgdGhpcy54ID0geFxyXG4gIHRoaXMueSA9IHlcclxuXHJcbiAgdGhpcy5hZGQgPSAob3RoZXIpID0+IHtcclxuICAgIHRoaXMueCArPSBvdGhlci54XHJcbiAgICB0aGlzLnkgKz0gb3RoZXIueVxyXG4gIH1cclxuICB0aGlzLnN1YnRyYWN0ID0gKG90aGVyKSA9PiB7XHJcbiAgICB0aGlzLnggLT0gb3RoZXIueFxyXG4gICAgdGhpcy55IC09IG90aGVyLnlcclxuICB9XHJcbiAgdGhpcy5tdWx0aXBseUJ5ID0gKG90aGVyKSA9PiB7XHJcbiAgICB0aGlzLnggKj0gb3RoZXIueFxyXG4gICAgdGhpcy55ICo9IG90aGVyLnlcclxuICB9XHJcbiAgdGhpcy5kaXZpZGVCeSA9IChvdGhlcikgPT4ge1xyXG4gICAgdGhpcy54IC89IG90aGVyLnhcclxuICAgIHRoaXMueSAvPSBvdGhlci55XHJcbiAgfVxyXG59XHJcblxyXG5WZWN0b3IuYWRkID0gKHZlY3RvcjEsIHZlY3RvcjIpID0+IHtcclxuICBjb25zdCB4ID0gdmVjdG9yMS54ICsgdmVjdG9yMi54XHJcbiAgY29uc3QgeSA9IHZlY3RvcjEueSArIHZlY3RvcjIueVxyXG5cclxuICByZXR1cm4gbmV3IFZlY3Rvcih4LCB5KVxyXG59XHJcblxyXG5WZWN0b3Iuc3VidHJhY3QgPSAodmVjdG9yMSwgdmVjdG9yMikgPT4ge1xyXG4gIGNvbnN0IHggPSB2ZWN0b3IxLnggLSB2ZWN0b3IyLnhcclxuICBjb25zdCB5ID0gdmVjdG9yMS55IC0gdmVjdG9yMi55XHJcblxyXG4gIHJldHVybiBuZXcgVmVjdG9yKHgsIHkpXHJcbn1cclxuXHJcblZlY3Rvci5tdWx0aXBseSA9ICh2ZWN0b3IxLCB2ZWN0b3IyKSA9PiB7XHJcbiAgY29uc3QgeCA9IHZlY3RvcjEueCAqIHZlY3RvcjIueFxyXG4gIGNvbnN0IHkgPSB2ZWN0b3IxLnkgKiB2ZWN0b3IyLnlcclxuXHJcbiAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSlcclxufVxyXG5cclxuVmVjdG9yLmRpdmlkZSA9ICh2ZWN0b3IxLCB2ZWN0b3IyKSA9PiB7XHJcbiAgY29uc3QgeCA9IHZlY3RvcjEueCAvIHZlY3RvcjIueFxyXG4gIGNvbnN0IHkgPSB2ZWN0b3IxLnkgLyB2ZWN0b3IyLnlcclxuXHJcbiAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSlcclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb24sIGdldENvbGxpc2lvblNpZGUgfSBmcm9tICcuLi91dGlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGVjdENvbGxpc2lvbiA9IChvYmoxLCBvYmoyKSA9PiB7XHJcbiAgLy8gaWYgc2FtZSBvYmplY3QsIGRvbid0IGNoZWNrXHJcbiAgaWYgKG9iajEgPT09IG9iajIpIHJldHVybiBmYWxzZVxyXG5cclxuICAvKiBDaGVjayBpZiBib3hlcyBhcmUgY29sbGlkaW5nICovXHJcblxyXG4gIGNvbnN0IGJveDEgPSBvYmoxLnRyYW5zZm9ybS5nZXQoKVxyXG4gIGNvbnN0IGJveDIgPSBvYmoyLnRyYW5zZm9ybS5nZXQoKVxyXG5cclxuICAvLyBjaGVjayBpZiBib3hlcyBhbGlnbiBob3Jpem9udGFsbHlcclxuICBpZiAoIShib3gxLnggKyBib3gxLndpZHRoID4gYm94Mi54ICYmIGJveDEueCA8IGJveDIueCArIGJveDIud2lkdGgpKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgLy8gY2hlY2sgaWYgYm94ZXMgYWxpZ24gdmVydGljYWxseVxyXG4gIGlmICghKGJveDEueSArIGJveDEuaGVpZ2h0ID4gYm94Mi55ICYmIGJveDEueSA8IGJveDIueSArIGJveDIuaGVpZ2h0KSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKiBCb3hlcyBhcmUgY29sbGlkaW5nICovXHJcblxyXG4gIGNvbnNvbGUubG9nKCdjb2xsaWRpbmcnKVxyXG5cclxuICBsZXQgc2lkZVxyXG5cclxuICBpZiAob2JqMS5raW5lbWF0aWNCb2R5KSB7XHJcbiAgICBzaWRlID0gZ2V0Q29sbGlzaW9uU2lkZShvYmoxLCBvYmoyKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWRlID0gZ2V0Q29sbGlzaW9uU2lkZShvYmoyLCBvYmoxKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBDb2xsaXNpb24ob2JqMiwgc2lkZSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0Q29sbGlzaW9uU2lkZSA9IChvYmoxLCBvYmoyKSA9PiB7XHJcbiAgaWYgKCFvYmoxLmtpbmVtYXRpY0JvZHkgJiYgIW9iajIua2luZW1hdGljQm9keSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IGtpbmVtYXRpY0JvZHkgPSBvYmoxLmtpbmVtYXRpY0JvZHkgfHwgb2JqMi5raW5lbWF0aWNCb2R5XHJcblxyXG4gIGNvbnN0IGRpcmVjdGlvbiA9IGtpbmVtYXRpY0JvZHkuZ2V0RGlyZWN0aW9uKClcclxuXHJcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgcmV0dXJuICdyaWdodCdcclxuICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICByZXR1cm4gJ2xlZnQnXHJcbiAgICBjYXNlICd1cCc6XHJcbiAgICAgIHJldHVybiAndG9wJ1xyXG4gICAgY2FzZSAnZG93bic6XHJcbiAgICAgIHJldHVybiAnYm90dG9tJ1xyXG4gIH1cclxuXHJcbiAgLyogQ2hlY2sgZm9yIGNvcm5lci10by1jb3JuZXIgbGluZS11cCAqL1xyXG5cclxuICBpZiAoZGlyZWN0aW9uID09PSAndXAtcmlnaHQnKSB7XHJcbiAgICBjb25zdCB5ID0ga2luZW1hdGljQm9keS50cmFqZWN0b3J5KG9iajIudHJhbnNmb3JtLngsICd0b3AtcmlnaHQnKVxyXG5cclxuICAgIGlmICh5ID4gb2JqMi50cmFuc2Zvcm0ueSArIG9iajIudHJhbnNmb3JtLmhlaWdodCkge1xyXG4gICAgICByZXR1cm4gJ3RvcCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAncmlnaHQnXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb24gPT09ICdkb3duLXJpZ2h0Jykge1xyXG4gICAgY29uc3QgeSA9IGtpbmVtYXRpY0JvZHkudHJhamVjdG9yeShvYmoyLnRyYW5zZm9ybS54LCAnYm90dG9tLXJpZ2h0JylcclxuXHJcbiAgICBpZiAoeSA+IG9iajIudHJhbnNmb3JtLnkpIHtcclxuICAgICAgcmV0dXJuICdyaWdodCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnYm90dG9tJ1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZGlyZWN0aW9uID09PSAndXAtbGVmdCcpIHtcclxuICAgIGNvbnN0IHkgPSBraW5lbWF0aWNCb2R5LnRyYWplY3RvcnkoXHJcbiAgICAgIG9iajIudHJhbnNmb3JtLnggKyBvYmoyLnRyYW5zZm9ybS53aWR0aCxcclxuICAgICAgJ3RvcC1sZWZ0J1xyXG4gICAgKVxyXG5cclxuICAgIGlmICh5ID4gb2JqMi50cmFuc2Zvcm0ueSArIG9iajIudHJhbnNmb3JtLmhlaWdodCkge1xyXG4gICAgICByZXR1cm4gJ3RvcCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbGVmdCdcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24tbGVmdCcpIHtcclxuICAgIGNvbnN0IHkgPSBraW5lbWF0aWNCb2R5LnRyYWplY3RvcnkoXHJcbiAgICAgIG9iajIudHJhbnNmb3JtLnggKyBvYmoyLnRyYW5zZm9ybS53aWR0aCxcclxuICAgICAgJ2JvdHRvbS1sZWZ0J1xyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHkpXHJcblxyXG4gICAgaWYgKHkgPiBvYmoyLnRyYW5zZm9ybS55KSB7XHJcbiAgICAgIHJldHVybiAnbGVmdCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnYm90dG9tJ1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaXNpb24gfSBmcm9tICcuL0NvbGxpc2lvbidcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi9WZWN0b3InXHJcbmltcG9ydCB7IGRldGVjdENvbGxpc2lvbiB9IGZyb20gJy4vZGV0ZWN0Q29sbGlzaW9uJ1xyXG5pbXBvcnQgeyBnZXRDb2xsaXNpb25TaWRlIH0gZnJvbSAnLi9nZXRDb2xsaXNpb25TaWRlJ1xyXG5cclxuZXhwb3J0IHsgQ29sbGlzaW9uLCBWZWN0b3IsIGRldGVjdENvbGxpc2lvbiwgZ2V0Q29sbGlzaW9uU2lkZSB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=