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
export default function Canvas (width, height) {
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

  /**
   * Clears the entire canvas
   */
  this.clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  /**
   * Draws a rectangle with the given coordinates and dimensions.
   * It will be stroked by default, unless isFilled is true
   */
  this.drawRect = (x, y, width, height, isFilled) => {
    if (isFilled) {
      ctx.fillRect(x, y, width, height)
    } else {
      ctx.strokeRect(x, y, width, height)
    }
  }

  /**
   * Draws a sprite at the specified coordinates.
   */
  this.drawSprite = (spriteObj, x, y) => {
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
   * Returns the HTML canvas element
   */
  this.getCanvas = () => canvas

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
