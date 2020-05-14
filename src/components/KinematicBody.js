import { Vector } from '../util'

const collection = []

export default function KinematicBody () {
  this.name = 'kinematicBody'

  let lastPos = new Vector()

  let slope = 0

  let corners = []

  const velocity = new Vector(0, 0)

  this.grounded = false

  this.getVelocity = () => ({ ...velocity })

  this.getLastPos = () => ({ ...lastPos })

  // this.getDirection = () => {
  //   // for flat slope, either right or left
  //   if (slope === 0) {
  //     if (velocity.x > 0) return 'right'

  //     if (velocity.x < 0) return 'left'

  //     return null
  //   }
  //   // for vertical slope, either up or down
  //   if (slope === Infinity) {
  //     if (velocity.y > 0) return 'down'

  //     if (velocity.y < 0) return 'up'

  //     return null
  //   }

  //   // must be diagonal
  //   if (velocity.y < 0) {
  //     if (velocity.x > 0) {
  //       return 'up-right'
  //     }
  //     if (velocity.x < 0) {
  //       return 'up-left'
  //     }
  //   }
  //   if (velocity.y > 0) {
  //     if (velocity.x > 0) {
  //       return 'down-right'
  //     }
  //     if (velocity.x < 0) {
  //       return 'down-left'
  //     }
  //   }
  // }

  this.getCorners = () => {
    const { transform } = this.parent

    return [
      new Vector(transform.x, transform.y),
      new Vector(transform.x + transform.width, transform.x),
      new Vector(transform.x + transform.width, transform.y + transform.height),
      new Vector(transform.x, transform.y + transform.height)
    ]
  }

  /**
   * Takes in absolute x coordinate
   * Outputs y value using trajectory line (based on velocity)
   */
  this.getTrajectory = function (x) {
    // find correct corner
    let corner

    if (velocity.x < 0 && velocity.y < 0) {
      // use top-left corner
      corner = corners[0]
    } else if (velocity.x > 0 && velocity.y < 0) {
      // use top-right corner
      corner = corners[1]
    } else if (velocity.x > 0 && velocity.y > 0) {
      // use bottom right corner
      corner = corners[2]
    } else if (velocity.x < 0 && velocity.y > 0) {
      // use bottom left corner
      corner = corners[3]
    }

    return (velocity.y / velocity.x) * (x - corner.x) + corner.y
  }

  this.physicsUpdate = () => {
    const { transform, boxCollider } = this.parent

    velocity.x = transform.x - lastPos.x
    velocity.y = transform.y - lastPos.y

    // transform.setX(transform.x + velocity.x)
    // transform.setY(transform.y + velocity.y)

    slope = velocity.y / velocity.x

    corners = this.getCorners()

    this.grounded = false

    boxCollider.collisions.forEach(collision => {
      const { other, side } = collision

      if (side === 'right') {
        transform.x = other.transform.x - transform.width
      }
      if (side === 'left') {
        transform.x = other.transform.x + other.transform.width
      }
      if (side === 'top') {
        transform.y = other.transform.y + other.transform.height
      }
      if (side === 'bottom') {
        transform.y = other.transform.y - transform.height
        this.grounded = true
      }
    })

    lastPos = transform.getPos()
  }

  this.onAdd = () => {
    lastPos = this.parent.transform.getPos()
  }

  collection.push(this)
}

KinematicBody.all = () => [...collection]
