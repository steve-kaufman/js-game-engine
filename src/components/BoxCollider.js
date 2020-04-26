/**
 * BoxCollider.js
 * Creates a BoxCollider component that handles box collisions
 */

import { vectorToDirection, Vector } from '../util'


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

    direction = vectorToDirection(velocity) 
  }
  else if (obj1.staticBody && obj2.kinematicBody) {
    // if obly obj2 is kinematic, use inverse velocity to determine direction
    const velocity = Vector.reverse(obj2.kinematicBody.getVelocity())

    direction = vectorToDirection(velocity)
  }
  else if (obj1.kinematicBody && obj2.kinematicBody) {
    // if both are kinematic, use difference of velocity to determine direction
    const velocity = Vector.subtract(
      obj1.kinematicBody.getVelocity(),
      obj2.kinematicBody.getVelocity()
    )

    direction = vectorToDirection(velocity)
  }
  else {
    // both objects are static bodies, direction is irrelevant
    direction = null
  }

  return new Collision(obj2, direction)
}

export default function BoxCollider () {
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
