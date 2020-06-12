/**
 * Game.js
 * Handles the game update and render loops
 */

import Canvas from './Canvas'
import GameObject from './GameObject'
import Input from './Input'

// Frequency of update loop (ticks per second)
const updateRate = 30

export default function Game (shouldStart = true) {
  // Game starts on initialization unless given false as parameter
  let isRunning = shouldStart

  let canvas

  // Canvas object
  if (process.env.NODE_ENV !== 'test') {
    canvas = new Canvas()
  }

  /**
   * Updates all GameObjects
   */
  const update = () => {
    GameObject.all().forEach(gameObject => {
      gameObject.update()
    })
    Input.clear()

    // run update loop again in (1 / updateRate) seconds
    if (isRunning) {
      setTimeout(update, 1000 / updateRate)
    }
  }

  /**
   * Renders all GameObjects
   */
  const render = () => {
    // Clear screen before rendering
    canvas.clear()

    GameObject.all().forEach(gameObject => {
      gameObject.render(canvas)
    })

    // run render again as soon as possible, at discretion of browser
    if (isRunning) {
      window.requestAnimationFrame(render)
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
   * Runs update a single time
   */
  this.next = () => {
    update()
  }

  /** Returns true if game is running */
  this.getIsRunning = () => isRunning

  /**
   * Starts loops immediately unless given false as a parameter
   */
  if (isRunning) {
    this.start()
  }
}
