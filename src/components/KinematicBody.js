import { Vector } from '../util'

export default function KinematicBody () {
  this.name = 'kinematicBody'

  this.lastPos = this.parent.transform.getPos()

  this.velocity = new Vector(0, 0)

  this.direction = null

  this.getDirection = () => {
    // for flat slope, either right or left
    if (this.slope === 0) {
      if (this.velocity.x > 0) return 'right'

      if (this.velocity.x < 0) return 'left'

      return null
    }
    // for vertical slope, either up or down
    if (this.slope === Infinity) {
      if (this.velocity.y > 0) return 'down'
      
      if (this.velocity.y < 0) return 'up'

      return null
    }

    // must be diagonal
    if (this.velocity.y < 0) {
      if (this.velocity.x > 0) {
        return 'up-right'
      }
      if (this.velocity.x < 0) {
        return 'up-left'
      }
    }
    if (this.velocity.y > 0) {
      if (this.velocity.x > 0) {
        return 'down-right'
      }
      if (this.velocity.x < 0) {
        return 'down-left'
      }
    }
  }

  this.trajectory = function (x, corner) {
    const box = parent.transform.get()

    if (corner === 'top-right') {
      // use upper right corner
      return slope * (x - (box.x + box.width)) + box.y
    }
    if (corner === 'bottom-right') {
      // use lower right corner
      return slope * (x - (box.x + box.width)) + box.y + box.height
    }
    if (corner === 'top-left') {
      // use upper left corner
      return slope * (x) + box.y
    }
    if (corner === 'bottom-left') {
      // use lower left corner
      return slope * (x) + box.y + box.height
    }

    throw new Error('Not a valid corner')
  }

  this.update = () => {
    const position = this.parent.transform.getPos()

    this.velocity.x = position.x - lastPos.x
    this.velocity.y = position.y - lastPos.y

    this.slope = velocity.y / velocity.x

    this.direction = this.getDirection()

    this.lastPos = position
  }
}