import { Vector } from '../util'

export default function KinematicBody () {
  this.name = 'kinematicBody'

  // Keep track of position from last tick, to calculate velocity
  let lastPos = new Vector()

  // Keep track of each corner
  let corners = []

  // Keep track of velocity
  const velocity = new Vector(0, 0)

  // Whether or not body is having a bottom collision
  this.grounded = false

  /**
   * Returns velocity vector
   */
  this.getVelocity = () => ({ ...velocity })

  /**
   * Returns lastPost vector
   */
  this.getLastPos = () => ({ ...lastPos })

  /**
   * Calculates position of each corner and returns array of vectors
   */
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

  /**
   * Sets information for collision detection
   */
  this.beforeCollisions = () => {
    const { transform } = this.parent

    // Assume there is no bottom collision until proven
    this.grounded = false

    // Calculate velocity vector
    velocity.x = transform.x - lastPos.x
    velocity.y = transform.y - lastPos.y

    // Set corners
    corners = this.getCorners()
  }

  /**
   * Collision handler for kinematicBody
   * Adjusts body based on collision side
   */
  this.handleCollision = ({ other, side }) => {
    const { transform } = this.parent

    if (side === 'right') {
      // Make body flush with left side of other
      transform.x = other.transform.x - transform.width
    }
    if (side === 'left') {
      // Make body flush with right side of other
      transform.x = other.transform.x + other.transform.width
    }
    if (side === 'top') {
      // Make body flush with bottom side of other
      transform.y = other.transform.y + other.transform.height
    }
    if (side === 'bottom') {
      // Make body flush with top side of other
      transform.y = other.transform.y - transform.height
      // Body is grounded
      this.grounded = true
    }
  }

  /**
   * Runs before update loop
   */
  this.preUpdate = () => {
    // Set 'lastPos' to current position, before updates take place
    lastPos = this.parent.transform.getPos()
  }

  /**
   * Runs when component is added to GameObject
   */
  this.onAdd = () => {
    // Set lastPos to initial transform position
    lastPos = this.parent.transform.getPos()
  }
}
