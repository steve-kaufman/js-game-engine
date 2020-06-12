/**
 * BoxCollider.js
 * Creates a BoxCollider component that handles 2D collisions
 */

import GameObject from '../core/GameObject'
import { detectCollision } from '../util'

export default function BoxCollider () {
  this.name = 'boxCollider'

  // Array to hold collision objects, reset on every tick
  this.collisions = []

  /**
   * postUpdate method
   * Detects all collisions involving parent GameObject,
   * fires collision handlers.
   */
  this.postUpdate = () => {
    // Reset collisions
    this.collisions = []

    // Loop through all GameObjects and check for collisions with parent
    GameObject.all().forEach(gameObject => {
      // Skip GameObject if it doesn't have a BoxCollider
      if (!gameObject.boxCollider) return

      // Run beforeCollisions() on every component that has it
      for (const component of this.parent.getComponents()) {
        if (component.beforeCollisions) {
          component.beforeCollisions()
        }
      }

      // Detect collision between parent and other
      const collision = detectCollision(this.parent, gameObject)

      // Check if collision was detected
      if (collision) {
        // Add collision to list
        this.collisions.push(collision)
        // Call handleCollision() method on every component that has it
        for (const component of this.parent.getComponents()) {
          if (component.handleCollision) {
            component.handleCollision(collision)
          }
        }
      }
    })
  }
}
