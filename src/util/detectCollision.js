import { Collision, getCollisionSide } from '../util'

export const detectCollision = (obj1, obj2) => {
  // if same object, don't check
  if (obj1 === obj2) return false

  /* Check if boxes are colliding */

  const box1 = obj1.transform.get()
  const box2 = obj2.transform.get()

  // check if boxes align horizontally
  if (!(box1.x + box1.width > box2.x && box1.x < box2.x + box2.width)) {
    return false
  }
  // check if boxes align vertically
  if (!(box1.y + box1.height > box2.y && box1.y < box2.y + box2.height)) {
    return false
  }

  /* Boxes are colliding */

  let side

  if (obj1.kinematicBody) {
    side = getCollisionSide(obj1, obj2)
  } else {
    side = getCollisionSide(obj2, obj1)
  }

  return new Collision(obj2, side)
}
