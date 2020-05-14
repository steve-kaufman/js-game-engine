export const getCollisionSide = (obj1, obj2) => {
  if (!obj1.kinematicBody && !obj2.kinematicBody) {
    return null
  }

  const kinematicBody = obj1.kinematicBody || obj2.kinematicBody

  const direction = kinematicBody.getDirection()

  switch (direction) {
    case 'right':
      return 'right'
    case 'left':
      return 'left'
    case 'up':
      return 'top'
    case 'down':
      return 'bottom'
  }

  /* Check for corner-to-corner line-up */

  if (direction === 'up-right') {
    const y = kinematicBody.getTrajectory(obj2.transform.x, 'top-right')

    if (y > obj2.transform.y + obj2.transform.height) {
      return 'top'
    } else {
      return 'right'
    }
  }
  if (direction === 'down-right') {
    const y = kinematicBody.getTrajectory(obj2.transform.x, 'bottom-right')

    if (y > obj2.transform.y) {
      return 'right'
    } else {
      return 'bottom'
    }
  }
  if (direction === 'up-left') {
    const y = kinematicBody.getTrajectory(
      obj2.transform.x + obj2.transform.width,
      'top-left'
    )

    if (y > obj2.transform.y + obj2.transform.height) {
      return 'top'
    } else {
      return 'left'
    }
  }
  if (direction === 'down-left') {
    const y = kinematicBody.getTrajectory(
      obj2.transform.x + obj2.transform.width,
      'bottom-left'
    )

    if (y > obj2.transform.y) {
      return 'left'
    } else {
      return 'bottom'
    }
  }
}
