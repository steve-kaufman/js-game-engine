import GameObject from '../../src/core/GameObject'
import KinematicBody from '../../src/components/KinematicBody'
import BoxCollider from '../../src/components/BoxCollider'
import Game from '../../src/core/Game'

describe('KinematicBody', () => {
  let gameObj
  const game = new Game(false)

  beforeEach(() => {
    gameObj = new GameObject({ x: 100, y: 100, width: 10, height: 20 })
    gameObj.addComponent(new BoxCollider())
    gameObj.addComponent(new KinematicBody())
  })

  it('gets velocity based on previous position', () => {
    // arrange
    game.next()
    gameObj.transform.x += 2
    gameObj.transform.y += 3
    game.next()

    // act
    const velocity = gameObj.kinematicBody.getVelocity()

    // assert
    expect(velocity.x).toBe(2)
    expect(velocity.y).toBe(3)
  })

  describe('getTrajectory()', () => {
    it('uses the top-left corner', () => {
      // arrange
      const { transform, kinematicBody } = gameObj

      game.next()
      transform.x -= 2
      transform.y -= 3
      game.next()

      const corner = kinematicBody.getCorners()[0]

      // act
      const trajectory = kinematicBody.getTrajectory(corner.x - 2)

      // assert
      expect(trajectory).toBe(corner.y - 3)
    })

    it('uses the top-right corner', () => {
      // arrange
      const { transform, kinematicBody } = gameObj

      game.next()
      transform.x += 2
      transform.y -= 3
      game.next()

      const corner = kinematicBody.getCorners()[1]

      // act
      const trajectory = kinematicBody.getTrajectory(corner.x + 2)

      // assert
      expect(trajectory).toBe(corner.y - 3)
    })

    it('uses the bottom-right corner', () => {
      // arrange
      const { transform, kinematicBody } = gameObj

      game.next()
      transform.x += 2
      transform.y += 3
      game.next()

      const corner = kinematicBody.getCorners()[2]

      // act
      const trajectory = kinematicBody.getTrajectory(corner.x + 2)

      // assert
      expect(trajectory).toBe(corner.y + 3)
    })
    it('uses the bottom-left corner', () => {
      // arrange
      const { transform, kinematicBody } = gameObj

      game.next()
      transform.x -= 2
      transform.y += 3
      game.next()

      const corner = kinematicBody.getCorners()[3]

      // act
      const trajectory = kinematicBody.getTrajectory(corner.x - 2)

      // assert
      expect(trajectory).toBe(corner.y + 3)
    })
  })
})
