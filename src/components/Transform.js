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

export default function Transform (x, y, width, height) {
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
