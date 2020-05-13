import Canvas from '../../src/core/Canvas'

describe('Canvas', () => {
  let canvas

  let mockCreateElement
  let mockGetContext
  let mockBodyAppendChild

  let mockClearRect, mockFillRect, mockStrokeRect, mockDrawImage

  beforeEach(() => {
    // instantiate mock functions
    mockClearRect = jest.fn()
    mockFillRect = jest.fn()
    mockStrokeRect = jest.fn()
    mockDrawImage = jest.fn()

    mockGetContext = jest.fn(() => ({
      clearRect: mockClearRect,
      fillRect: mockFillRect,
      strokeRect: mockStrokeRect,
      drawImage: mockDrawImage
    }))
    mockBodyAppendChild = jest.fn()

    // mock document.createElement()
    const documentCreateElement = document.createElement.bind(document)
    mockCreateElement = jest.fn((tagName) => {
      if (tagName !== 'canvas') return documentCreateElement

      const canvasElement = documentCreateElement('canvas')
      // mock canvas.getContext()
      return {
        ...canvasElement,
        getContext: mockGetContext
      }
    })
    document.createElement = mockCreateElement

    // mock document.appendChild()
    document.body.appendChild = mockBodyAppendChild

    // create a new canvas
    canvas = new Canvas()
  })

  it('creates a canvas object', () => {
    expect(canvas).toBeTruthy()
  })
  it('creates an HTML canvas element', () => {
    expect(canvas.getCanvas()).toBeTruthy()
    expect(mockCreateElement).toHaveBeenCalledTimes(1)
    expect(mockCreateElement).toHaveBeenCalledWith('canvas')
  })
  it('appends the canvas object to the document body', () => {
    expect(mockBodyAppendChild).toHaveBeenCalledTimes(1)
    expect(mockBodyAppendChild).toHaveBeenCalledWith(canvas.getCanvas())
  })

  describe('clear()', () => {
    it('clears the canvas', () => {
      // act
      canvas.clear()

      // assert
      expect(mockClearRect).toHaveBeenCalledTimes(1)
      expect(mockClearRect).toHaveBeenCalledWith(
        0,
        0,
        canvas.getCanvas().width,
        canvas.getCanvas().height
      )
    })
  })

  describe('drawRect()', () => {
    it('draws a stroked rectangle by default', () => {
      // act
      canvas.drawRect(10, 20, 30, 40)

      // assert
      expect(mockStrokeRect).toHaveBeenCalledTimes(1)
      expect(mockFillRect).toHaveBeenCalledTimes(0)
    })
    it('draws a filled rectanle if specified', () => {
      // act
      canvas.drawRect(10, 20, 30, 40, true)

      // assert
      expect(mockStrokeRect).toHaveBeenCalledTimes(0)
      expect(mockFillRect).toHaveBeenCalledTimes(1)
    })
  })

  describe('drawSprite()', () => {
    const mockSpriteObj = {
      get: jest.fn(() => ({
        width: 30, height: 40
      }))
    }

    it('calls drawImage() with sprite data', () => {
      // act
      canvas.drawSprite(mockSpriteObj, 10, 20)

      // assert
      expect(mockSpriteObj.get).toHaveBeenCalledTimes(1)
      expect(mockDrawImage).toHaveBeenCalledTimes(1)
    })
  })

  describe('draw()', () => {
    it('calls drawSprite if less than four args', () => {
      // arrange
      canvas.drawSprite = jest.fn()

      // act
      canvas.draw(1)
      canvas.draw(1, 2)
      canvas.draw(1, 2, 3)

      // assert
      expect(canvas.drawSprite).toHaveBeenCalledTimes(3)
    })
    it('calls drawRect if four or more args', () => {
      // arrange
      canvas.drawRect = jest.fn()

      // act
      canvas.draw(1, 2, 3, 4)
      canvas.draw(1, 2, 3, 4, 5)

      // assert
      expect(canvas.drawRect).toHaveBeenCalledTimes(2)
    })

    it('passes on arguments', () => {
      // arrange
      canvas.drawSprite = jest.fn()
      canvas.drawRect = jest.fn()

      // act
      canvas.draw(1, 2, 3)
      canvas.draw(1, 2, 3, 4)

      // assert
      expect(canvas.drawSprite).toHaveBeenCalledWith(1, 2, 3)
      expect(canvas.drawRect).toHaveBeenCalledWith(1, 2, 3, 4)
    })
  })
})
