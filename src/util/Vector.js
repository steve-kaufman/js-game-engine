/**
 * returns a vector object with values x and y
 * @param {number} x
 * @param {number} y
 */
export function Vector (x, y) {
  this.x = x
  this.y = y

  this.add = (other) => {
    this.x += other.x
    this.y += other.y
  }
  this.subtract = (other) => {
    this.x -= other.x
    this.y -= other.y
  }
  this.multiplyBy = (other) => {
    this.x *= other.x
    this.y *= other.y
  }
  this.divideBy = (other) => {
    this.x /= other.x
    this.y /= other.y
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
