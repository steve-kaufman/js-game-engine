/**
 * returns a vector object with values x and y
 * @param {number} x 
 * @param {number} y 
 */
function Vector (x, y) {
  this.x = x
  this.y = y

  this.add = (other) => {
    Vector.add(this, other)
  }
  this.subtract = (other) => {
    Vector.subtract(this, other)
  }
  this.multiplyBy = (other) => {
    Vector.multiply(this, other)
  }
  this.divideBy = (other) => {
    Vector.divide(this, other)
  }
}

Vector.add = (vector1, vector2) => {
  const x = vector1.x + vector2.x
  const y = vector1.y + vector2.y

  return new Vector(x, y)
}

Vector.subtract = (vector1, vector2) => {
  const x = vector1.x - vector2.x
  const y = vector1.y - vector2.y

  return new Vector(x, y)
}

Vector.multiply = (vector1, vector2) => {
  const x = vector1.x * vector2.x
  const y = vector1.y * vector2.y

  return new Vector(x, y)
}

Vector.divide = (vector1, vector2) => {
  const x = vector1.x / vector2.x
  const y = vector1.y / vector2.y

  return new Vector(x, y)
}