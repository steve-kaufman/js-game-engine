import Game from './core/Game'
import GameObject from './core/GameObject'
import BoxCollider from './components/BoxCollider'

const game = new Game(false)

const player = new GameObject({ name: 'player', width: 32, height: 32 })

const ledge = new GameObject({
  name: 'ledge', x: 100, y: 400, width: 400, height: 50
})

ledge.addComponent(new BoxCollider())

const playerController = {
  speed: 3,
  update () {
    this.parent.transform.x += this.speed
  }
}

player.addComponent(playerController)

window.onload = () => {
  game.start()

  setTimeout(() => {
    player.removeComponent(playerController)
  }, 3000)
}
