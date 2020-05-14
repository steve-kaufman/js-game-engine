/**
 * BoxCollider.js
 * Creates a BoxCollider component that handles box collisions
 */

import GameObject from '../core/GameObject'
import { detectCollision } from '../util'

const collection = []

export default function BoxCollider () {
  this.name = 'boxCollider'

  this.collisions = []

  this.physicsUpdate = () => {
    GameObject.all().forEach(gameObject => {
      if (!gameObject.boxCollider) return

      const collision = detectCollision(this.parent, gameObject)

      if (collision) {
        this.collisions.push(collision)
      }
    })
  }

  collection.push(this)
}

BoxCollider.all = () => [...collection]
