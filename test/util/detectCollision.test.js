/* eslint-env jest */
import GameObject from '../../src/core/GameObject'
import { detectCollision, getCollisionSide } from '../../src/util'
import KinematicBody from '../../src/components/KinematicBody'
import BoxCollider from '../../src/components/BoxCollider'
import StaticBody from '../../src/components/StaticBody'

describe('detectCollision', () => {
  it('returns false if objects are the same', () => {
    // arrange
    const gameObject = new GameObject()
    const kinematicGameObject = new GameObject()
    kinematicGameObject.addComponent(new BoxCollider())
    kinematicGameObject.addComponent(new KinematicBody())

    // act
    const result1 = detectCollision(gameObject, gameObject)
    const result2 = detectCollision(kinematicGameObject, kinematicGameObject)

    // assert
    expect(result1).toBe(false)
    expect(result2).toBe(false)
  })

  it("returns false if objects don't align horizontally", () => {
    // arrange
    const obj1 = new GameObject({ x: 10, y: 10, width: 20, height: 20 })
    const obj2 = new GameObject({ x: 30, y: 10, width: 20, height: 20 })
    const obj3 = new GameObject({ x: 50, y: 50, width: 20, height: 20 })

    obj1.addComponent(new BoxCollider())

    obj2.addComponent(new BoxCollider())
    obj2.addComponent(new KinematicBody())

    obj3.addComponent(new BoxCollider())
    obj3.addComponent(new StaticBody())

    // act
    const oneCollidesWithTwo = detectCollision(obj1, obj2)
    const oneCollidesWithThree = detectCollision(obj1, obj3)
    const twoCollidesWithThree = detectCollision(obj2, obj3)

    // assert
    expect(oneCollidesWithTwo).toBe(false)
    expect(oneCollidesWithThree).toBe(false)
    expect(twoCollidesWithThree).toBe(false)
  })

  it("returns false if objects don't align vertically", () => {
    // arrange
    const obj1 = new GameObject({ x: 10, y: 10, width: 20, height: 20 })
    const obj2 = new GameObject({ x: 10, y: 30, width: 20, height: 20 })
    const obj3 = new GameObject({ x: 50, y: 50, width: 20, height: 20 })

    obj1.addComponent(new BoxCollider())

    obj2.addComponent(new BoxCollider())
    obj2.addComponent(new KinematicBody())

    obj3.addComponent(new BoxCollider())
    obj3.addComponent(new StaticBody())

    // act
    const oneCollidesWithTwo = detectCollision(obj1, obj2)
    const oneCollidesWithThree = detectCollision(obj1, obj3)
    const twoCollidesWithThree = detectCollision(obj2, obj3)

    // assert
    expect(oneCollidesWithTwo).toBe(false)
    expect(oneCollidesWithThree).toBe(false)
    expect(twoCollidesWithThree).toBe(false)
  })

  it('returns a collision if objects align horizontally and vertically', () => {
    // arrange
    const obj1 = new GameObject({ x: 10, y: 10, width: 20, height: 20 })
    const obj2 = new GameObject({ x: 15, y: 15, width: 20, height: 20 })
    const obj3 = new GameObject({ x: 5, y: 5, width: 20, height: 20 })

    obj1.addComponent(new BoxCollider())

    obj2.addComponent(new BoxCollider())
    obj2.addComponent(new KinematicBody())

    obj3.addComponent(new BoxCollider())
    obj3.addComponent(new StaticBody())

    // act
    const oneCollidesWithTwo = detectCollision(obj1, obj2)
    const oneCollidesWithThree = detectCollision(obj1, obj3)
    const twoCollidesWithThree = detectCollision(obj2, obj3)

    // assert
    expect(oneCollidesWithTwo).toBeTruthy()
    expect(oneCollidesWithThree).toBeTruthy()
    expect(twoCollidesWithThree).toBeTruthy()
  })

  it('gets the correct side', () => {
    // arrange
    const obj1 = new GameObject({ x: 10, y: 10, width: 20, height: 20 })
    const obj2 = new GameObject({ x: 15, y: 15, width: 20, height: 20 })
    const obj3 = new GameObject({ x: 5, y: 5, width: 20, height: 20 })

    obj1.addComponent(new BoxCollider())

    obj2.addComponent(new BoxCollider())
    obj2.addComponent(new KinematicBody())

    obj3.addComponent(new BoxCollider())
    obj3.addComponent(new StaticBody())

    // act
    const side1 = detectCollision(obj1, obj2).side
    const side2 = detectCollision(obj1, obj3).side
    const side3 = detectCollision(obj2, obj3).side

    // assert
    expect(side1).toBe(getCollisionSide(obj1, obj2))
    expect(side2).toBe(null)
    expect(side3).toBe(getCollisionSide(obj1, obj2))
  })
})
