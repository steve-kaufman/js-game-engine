import GameObject from '../../src/core/GameObject'
import { getCollisionSide } from '../../src/util/index'
import BoxCollider from '../../src/components/BoxCollider'
import KinematicBody from '../../src/components/KinematicBody'
import Game from '../../src/core/Game'

describe('getCollisionSide()', () => {
  let obj1, obj2
  let game

  beforeEach(() => {
    obj1 = new GameObject({ x: 0, y: 0, width: 10, height: 10 })
    obj1.addComponent(new BoxCollider())
    obj2 = new GameObject({ x: 0, y: 0, width: 10, height: 10 })
    obj2.addComponent(new BoxCollider())

    game = new Game(false)
  })

  it('returns null if there is no KinematicBody', () => {
    console.log(obj1, obj2)
    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe(null)
  })

  it('returns right if kinematic body is moving right', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    game.next()
    transform.x += 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('right')
  })

  it('returns left if kinematic body is moving left', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    game.next()
    transform.x -= 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('left')
  })

  it('returns bottom if kinematic body is moving down', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    game.next()
    transform.y += 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('bottom')
  })

  it('returns top if kinematic body is moving up', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    game.next()
    transform.y -= 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('top')
  })

  it('is top if moving up-left from below obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.y = 11 // move so it's below obj2
    game.next()
    transform.x -= 2
    transform.y -= 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('top')
  })

  it('is left if moving up-left from the right of obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.x = 11 // move so it's to the right of obj2
    game.next()
    transform.x -= 2
    transform.y -= 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('left')
  })

  it('is top if moving up-right from below of obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.y = 11 // move so it's below obj2
    game.next()
    transform.x += 2
    transform.y -= 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('top')
  })

  it('is right if moving up-right from the left of obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.x = -11 // move so it's to the left of obj2
    game.next()
    transform.x += 2
    transform.y -= 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('right')
  })

  it('is bottom if moving down-left from above obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.y = -11 // move so it's above obj2
    game.next()
    transform.x -= 2
    transform.y += 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('bottom')
  })

  it('is left if moving down-left from the right of obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.x = 11 // move so it's to the right of obj2
    game.next()
    transform.x -= 2
    transform.y += 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('left')
  })

  it('is bottom if moving down-right from above obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.y = -11 // move so it's above obj2
    game.next()
    transform.x += 2
    transform.y += 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('bottom')
  })

  it('is right if moving down-right from the left of obj2', () => {
    // arrange
    const { transform } = obj1
    obj1.addComponent(new KinematicBody())
    transform.x = -11 // move so it's to the left of obj2
    game.next()
    transform.x += 2
    transform.y += 2
    game.next()

    // act
    const result = getCollisionSide(obj1, obj2)

    // assert
    expect(result).toBe('right')
  })
})
