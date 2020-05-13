import Game from '../../src/core/Game'

describe('Game', () => {
  it('creates a game object', () => {
    const game = new Game(false)

    expect(game).toBeTruthy()
  })
})
