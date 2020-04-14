/**
 * BoxOutline.js
 * Strokes a box of the parent GameObject's transform data
 */

export default function BoxOutline () {
  this.name = 'boxOutline'
  this.render = (canvas) => {
    const { x, y, width, height } = this.parent.transform.get()
    canvas.draw(x, y, width, height, false)
  }
}
