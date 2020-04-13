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
  this.drawSprite = (sprite, x, y) => {
    // Position is be (0, 0) by default
    if (!x) x = 0
    if (!y) y = 0

    ctx.drawImage(sprite.getSprite(), x, y, sprite.width, sprite.height)
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
