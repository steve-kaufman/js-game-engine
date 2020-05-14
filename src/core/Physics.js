import BoxCollider from '../components/BoxCollider'
import KinematicBody from '../components/KinematicBody'

const Physics = {
  update () {
    BoxCollider.all().forEach(boxCollider => {
      boxCollider.physicsUpdate()
    })
    KinematicBody.all().forEach(kinematicBody => {
      kinematicBody.physicsUpdate()
    })
  },
  cleanup () {
    BoxCollider.all().forEach(boxCollider => {
      boxCollider.collisions = []
    })
  }
}

export default Physics
