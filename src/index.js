import Game from './core/Game'
import GameObject from './core/GameObject'
import BoxCollider from './components/BoxCollider'
import StaticBody from './components/StaticBody'
import KinematicBody from './components/KinematicBody'
import { Vector } from './util/index'
import Input from './core/Input'

const game = new Game()

const player = new GameObject({ name: 'player', x: 200, width: 32, height: 32 })

const ledge = new GameObject({
  name: 'ledge', x: 100, y: 400, width: 400, height: 50
})

ledge.addComponent(new BoxCollider())
ledge.addComponent(new StaticBody())

const playerController = {
  gravity: 0.5,
  speed: 3,
  velocity: new Vector(0, 0),
  update () {
    const { transform, kinematicBody } = this.parent

    this.velocity.x = 0
    if (Input.isPressed(37)) {
      this.velocity.x -= this.speed
    }
    if (Input.isPressed(39)) {
      this.velocity.x += this.speed
    }

    if (kinematicBody.grounded) {
      this.velocity.y = 0
    } else {
      this.velocity.y += this.gravity
    }

    transform.x += this.velocity.x
    transform.y += this.velocity.y
  }
}

player.addComponent(playerController)
player.addComponent(new BoxCollider())
player.addComponent(new KinematicBody())

window.onload = () => {
  game.start()
}
