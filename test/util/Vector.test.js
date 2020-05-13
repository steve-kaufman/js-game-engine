import { Vector } from '../../src/util'

describe('Vector', () => {
  let vector1, vector2

  beforeEach(() => {
    vector1 = new Vector(10, 20)
    vector2 = new Vector(30, 40)
  })

  it('has x and y props', () => {
    expect(vector1.x).toBe(10)
    expect(vector1.y).toBe(20)
  })

  describe('Vector.add()', () => {
    it('can add vectors', () => {
      // act
      const result = Vector.add(vector1, vector2)

      // assert
      expect(result.x).toBe(10 + 30)
      expect(result.y).toBe(20 + 40)
    })
  })

  describe('Vector.subtract()', () => {
    it('can subtract vectors', () => {
      // act
      const result = Vector.subtract(vector1, vector2)

      // assert
      expect(result.x).toBe(10 - 30)
      expect(result.y).toBe(20 - 40)
    })
  })

  describe('Vector.multiply()', () => {
    it('can multiply vectors', () => {
      // act
      const result = Vector.multiply(vector1, vector2)

      // assert
      expect(result.x).toBe(10 * 30)
      expect(result.y).toBe(20 * 40)
    })
  })

  describe('Vector.divide()', () => {
    it('can divide vectors', () => {
      // act
      const result = Vector.divide(vector1, vector2)

      // assert
      expect(result.x).toBe(10 / 30)
      expect(result.y).toBe(20 / 40)
    })
  })

  describe('vector.add()', () => {
    it('adds a vector to itself', () => {
      // act
      vector1.add(vector2)

      // assert
      expect(vector1.x).toBe(10 + 30)
      expect(vector1.y).toBe(20 + 40)
    })
  })

  describe('vector.subtract()', () => {
    it('subtracts a vector from itself', () => {
      // act
      vector1.subtract(vector2)

      // assert
      expect(vector1.x).toBe(10 - 30)
      expect(vector1.y).toBe(20 - 40)
    })
  })

  describe('vector.multiplyBy()', () => {
    it('multiplies itself by a vector', () => {
      // act
      vector1.multiplyBy(vector2)

      // assert
      expect(vector1.x).toBe(10 * 30)
      expect(vector1.y).toBe(20 * 40)
    })
  })

  describe('vector.divideBy()', () => {
    it('divides itself by a vector', () => {
      // act
      vector1.divideBy(vector2)

      // assert
      expect(vector1.x).toBe(10 / 30)
      expect(vector1.y).toBe(20 / 40)
    })
  })
})
