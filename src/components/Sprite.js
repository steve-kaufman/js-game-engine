/**
 * Sprite.js
 * Creates a Sprite object used to render an image associated with a GameObject
 */

export default function Sprite (url) {
  this.name = 'sprite'

  const canvasElement = document.createElement('canvas')
  const ctx = canvasElement.getContext('2d')

  const image = new Image()
  image.src = url
  image.onload = () => {
    canvasElement.width = image.width
    canvasElement.height = image.height
    ctx.drawImage(image, 0, 0)
  }

  this.render = (canvas) => {
    const { x, y } = this.parent.transform.getPos()
    canvas.draw(this, x, y)
  }

  this.get = () => canvasElement

  this.onAdd = () => {
    this.parent.removeComponent(this.parent.boxOutline)
  }
}
