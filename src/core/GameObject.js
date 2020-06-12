/**
 * GameObject.js
 * Creates a GameObject object with a place in the hierarchy
 * Keeps track of all GameObjects and the GameObject hierarchy
 */

import Transform from '../components/Transform'
import BoxOutline from '../components/BoxOutline'

// Holds list of GameObjects
const collection = []

/**
 * Creates a GameObject object
 */
export default function GameObject (options = {}) {
  // Options for GameObject
  const { x, y, width, height, name } = options

  // Set id to the index it will have in the collection
  const id = collection.length
  /**
   * Returns id
   */
  this.getId = () => id

  // Keep track of components in a list
  const components = []

  // Name property
  this.name = name

  /**
   * Runs once per tick
   */
  this.update = () => {
    // Run all preUpdate() methods in components
    for (const component of components) {
      if (component.preUpdate) {
        component.preUpdate()
      }
    }
    // Run all update() methods in components
    for (const component of components) {
      if (component.update) {
        component.update()
      }
    }
    // Run all postUpdate() methods in components
    for (const component of components) {
      if (component.postUpdate) {
        component.postUpdate()
      }
    }
  }

  /**
   * Runs once every animation frame
   */
  this.render = (canvas) => {
    // Run all render() methods in components
    components.forEach(component => {
      if (component.render) {
        component.render(canvas)
      }
    })
  }

  /**
   * Removes this GameObject from the collection
   */
  this.delete = () => {
    delete collection[id]
  }

  /**
   * Adds a Component to this GameObject
   * @param {Component} component
   */
  this.addComponent = (component) => {
    // Set the component's id to the index in the array it will be
    component.id = components.length
    // If the component has a name, make it a property of this
    if (component.name) {
      this[component.name] = component
    }

    // Add the component to the collection
    components.push(component)

    // Set the component's parent property to this
    component.parent = this

    // Run the component's onAdd() method
    if (component.onAdd) {
      component.onAdd()
    }

    // Return the now added component
    return component
  }

  /**
   * Removes a component from the collection
   * @param {Component} component
   */
  this.removeComponent = (component) => {
    delete components[component.id]
    if (this[component.name]) {
      delete this[component.name]
    }
  }

  /**
   * Returns a copy of the Component collection
   */
  this.getComponents = () => [...components]

  // Add a Transform and BoxOutline by default
  this.addComponent(new Transform(x, y, width, height))
  this.addComponent(new BoxOutline())

  // Add this to the GameObject collection
  collection.push(this)
}

/**
 * Returns a copy of the GameObject collection
 */
GameObject.all = () => [...collection]
/**
 * Returns a single GameObject with the provided name
 * @param {string} name
 */
GameObject.find = (name) => {
  return collection.find(gameObject => (gameObject.name === name))
}
