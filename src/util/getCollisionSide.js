import { Vector } from './Vector'

export const getCollisionSide = (obj1, obj2) => {
  // if neither has a kinematic body, direction is irrelevant
  if (!obj1.kinematicBody && !obj2.kinematicBody) {
    return null
  }

  const kinematicBody = obj1.kinematicBody || obj2.kinematicBody

  const velocity = kinematicBody.getVelocity()

  if (velocity.x > 0 && !velocity.y) {
    return 'right'
  }
  if (velocity.x < 0 && !velocity.y) {
    return 'left'
  }
  if (velocity.y > 0 && !velocity.x) {
    return 'bottom'
  }
  if (velocity.y < 0 && !velocity.x) {
    return 'top'
  }

  if (velocity.y < 0 && velocity.x < 0) {
    // use bottom-right corner of obj2
    const corner = new Vector(
      obj2.transform.x + obj2.transform.width,
      obj2.transform.y + obj2.transform.height
    )

    const trajectory = kinematicBody.getTrajectory(corner.x)

    if (trajectory > corner.y) {
      return 'top'
    } else {
      return 'left'
    }
  }

  if (velocity.y < 0 && velocity.x > 0) {
    // use bottom-left corner of obj2
    const corner = new Vector(
      obj2.transform.x,
      obj2.transform.y + obj2.transform.height
    )

    const trajectory = kinematicBody.getTrajectory(corner.x)

    if (trajectory > corner.y) {
      return 'top'
    } else {
      return 'right'
    }
  }

  if (velocity.y > 0 && velocity.x < 0) {
    // use top-right corner of obj2
    const corner = new Vector(
      obj2.transform.x + obj2.transform.width,
      obj2.transform.y
    )

    const trajectory = kinematicBody.getTrajectory(corner.x)

    if (trajectory < corner.y) {
      return 'bottom'
    } else {
      return 'left'
    }
  }

  if (velocity.y > 0 && velocity.x > 0) {
    // use top-left corner of obj2
    const corner = new Vector(
      obj2.transform.x,
      obj2.transform.y
    )

    const trajectory = kinematicBody.getTrajectory(corner.x)

    if (trajectory < corner.y) {
      return 'bottom'
    } else {
      return 'right'
    }
  }
}
