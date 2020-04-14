/**
 * BoxCollider.js
 * Creates a BoxCollider component that handles box collisions
 */

const detectCollision = (box1, box2) => {
  if (!(box1.x + box1.width > box2.x && box1.x < box2.x + box2.width)) {
    return false
  }
  if (!(box1.y + box1.height > box2.y && box1.y < box2.y + box2.height)) {
    return false
  }

  return true
}

export default function BoxCollider () {
  this.name = 'boxCollider'

  this.collisions = []

  this.preUpdate = () => {
    GameObject.all().forEach(gameObject => {
      if (!gameObject.boxCollider) return

      const parentTransform = this.parent.transform.get()
      const gameObjectTransform = gameObject.transform.get()
      if (detectCollision(parentTransform, gameObjectTransform) {
        collisions.push(
    })
  }
}
