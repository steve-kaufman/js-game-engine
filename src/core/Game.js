/**
 * Game.js
 * Handles the game update and render loops
 */

import Canvas from './Canvas'
import GameObject from './GameObject'

// Frequency of update loop (ticks per second)
const updateRate = 30

export default function Game (shouldStart = true) {
  // Game starts on initialization unless given false as parameter
  let isRunning = shouldStart

  // Canvas object
  const canvas = new Canvas()

  /**
   * Updates all GameObjects
   */
  const update = () => {
    GameObject.all().forEach(gameObject => {
      gameObject.update()
    })

    if (isRunning) {
      setTimeout(update, 1000 / updateRate)
    }
  }

  /**
   * Renders all GameObjects
   */
  const render = () => {
    canvas.clear()

    GameObject.all().forEach(gameObject => {
      gameObject.render(canvas)
    })

    if (isRunning) {
      requestAnimationFrame(render)
    }
  }

  /**
   * Method to start update and render loops
   */
  this.start = () => {
    isRunning = true
    update()
    render()
  }

  /**
   * Method to stop or pause update and render loops
   */
  this.stop = () => {
    isRunning = false
  }

  /**
   * Starts loops immediately unless given false as a parameter
   */
  if (isRunning) {
    this.start()
  }
}
