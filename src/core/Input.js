const keys = []
let justPressed = []
let justReleased = []

const Input = {
  isPressed (keyCode) {
    return keys.includes(keyCode)
  },
  justPressed (keyCode) {
    return justPressed.includes(keyCode)
  },
  justReleased (keyCode) {
    return justReleased.includes(keyCode)
  },

  clear () {
    justPressed = []
    justReleased = []
  }
}

document.addEventListener('keydown', ({ keyCode }) => {
  if (!keys.includes(keyCode)) {
    keys.push(keyCode)
  }

  justPressed.push(keyCode)
})

document.addEventListener('keyup', ({ keyCode }) => {
  const index = keys.findIndex(key => key === keyCode)
  if (index !== -1) {
    delete keys[index]
  }

  justReleased.push(keyCode)
})

export default Input
