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
  const { x, y, width, height, name } = options

  this.id = collection.length

  const components = []

  this.name = name

  this.update = () => {
    components.forEach(component => {
      if (component.update) {
        component.update()
      }
    })
  }

  this.render = (canvas) => {
    components.forEach(component => {
      if (component.render) {
        component.render(canvas)
      }
    })
  }

  this.delete = () => {
    delete collection[this.id]
  }

  this.addComponent = (component) => {
    component.id = components.length
    if (component.name) {
      this[component.name] = component
    }
    components.push(component)
    component.parent = this
    if (component.onAdd) {
      component.onAdd()
    }

    return component
  }

  this.removeComponent = (component) => {
    delete components[component.id]
    if (this[component.name]) {
      delete this[component.name]
    }
  }

  this.getComponents = () => [...components]

  this.addComponent(new Transform(x, y, width, height))
  this.addComponent(new BoxOutline())

  collection.push(this)
}

GameObject.all = () => [...collection]
GameObject.find = (name) => {
  return collection.find(gameObject => (gameObject.name === name))
}
