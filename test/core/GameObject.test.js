import GameObject from '../../src/core/GameObject'

describe('GameObject', () => {
  let gameObject

  beforeEach(() => {
    gameObject = new GameObject()
  })

  it('has a transform', () => {
    expect(gameObject.transform).toBeTruthy()
  })
  it('has a boxOutline', () => {
    expect(gameObject.boxOutline).toBeTruthy()
  })

  describe('update()', () => {
    it('updates its transform and boxOutline', () => {
      // arrange
      gameObject.transform.update = jest.fn()
      gameObject.boxOutline.update = jest.fn()

      // act
      gameObject.update()

      // assert
      expect(gameObject.transform.update).toHaveBeenCalledTimes(1)
      expect(gameObject.boxOutline.update).toHaveBeenCalledTimes(1)
    })

    it('updates any added components', () => {
      // arrange
      const fakeComponent = {
        update: jest.fn()
      }
      gameObject.addComponent(fakeComponent)

      // act
      gameObject.update()

      // assert
      expect(fakeComponent.update).toHaveBeenCalledTimes(1)
    })
  })

  describe('render()', () => {
    it('renders its boxOutline', () => {
      // arrange
      gameObject.boxOutline.render = jest.fn()

      // act
      gameObject.render()

      // assert
      expect(gameObject.boxOutline.render).toHaveBeenCalledTimes(1)
    })

    it('renders any added components', () => {
      // arrange
      gameObject.removeComponent(gameObject.boxOutline)
      const fakeComponent = {
        render: jest.fn()
      }
      gameObject.addComponent(fakeComponent)

      // act
      gameObject.render()

      // assert
      expect(fakeComponent.render).toHaveBeenCalledTimes(1)
    })
  })

  describe('delete', () => {
    it('removes itself from the collection', () => {
      // arrange
      const initialCollection = GameObject.all()
      const id = gameObject.id

      // act
      gameObject.delete()

      // assert
      expect(initialCollection[id]).toBeTruthy()
      expect(GameObject.all()[id]).not.toBeTruthy()
    })
  })

  describe('addComponent', () => {
    let fakeComponent

    beforeEach(() => {
      fakeComponent = {}
    })

    it('attaches an id', () => {
      // arrange
      const beforeBeingAdded = { ...fakeComponent }

      // act
      gameObject.addComponent(fakeComponent)

      // assert
      expect(beforeBeingAdded.id).not.toBeTruthy()
      expect(fakeComponent.id).toBeTruthy()
    })

    it('creates custom property if component has name', () => {
      // arrange
      fakeComponent.name = 'fakeComponent'

      // act
      gameObject.addComponent(fakeComponent)

      // assert
      expect(gameObject.fakeComponent).toBeTruthy()
    })

    it('adds component to list of components', () => {
      // act
      gameObject.addComponent(fakeComponent)

      // assert
      expect(gameObject.getComponents()[fakeComponent.id]).toBeTruthy()
    })

    it('runs component.onAdd', () => {
      // arrange
      fakeComponent.onAdd = jest.fn()

      // act
      gameObject.addComponent(fakeComponent)

      // assert
      expect(fakeComponent.onAdd).toHaveBeenCalledTimes(1)
    })

    it('returns the component added to it', () => {
      // act
      const addedComponent = gameObject.addComponent(fakeComponent)

      // assert
      expect(addedComponent).toBe(fakeComponent)
    })
  })

  describe('removeComponent', () => {
    it('removes the component from the list of components', () => {
      // arrange
      const { id } = gameObject.addComponent({ name: 'dummy' })
      const listBeforeRemoving = gameObject.getComponents()

      // act
      gameObject.removeComponent(gameObject.dummy)

      // asssert
      expect(listBeforeRemoving[id]).toBeTruthy()
      expect(gameObject.getComponents()[id]).not.toBeTruthy()
    })
  })
})
