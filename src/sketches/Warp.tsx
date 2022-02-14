import { useState } from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'
import { useDarkMode } from '../hooks/useDarkMode'
import { distance } from './utils'

let radius, cloud
const phrase = y =>
  'flowers that shine with evil cry'.split('').map((c, x) => ({
    c: c,
    x: x * 10 + (window ? window.innerWidth / 2 - 160 : 0),
    y: y * 16,
    initialX: x * 10 + (window ? window.innerWidth / 2 - 160 : 0),
    initialY: y * 16,
  }))

export const Warp = () => {
  const [parent, setParent] = useState<Element>()
  const [dark] = useDarkMode()

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width, height } = canvasParentRef.getBoundingClientRect()
    p5.createCanvas(width, height).parent(canvasParentRef)
    p5.textFont('Inter var')
    p5.textSize(12)
    p5.textAlign('center')
    p5.ellipseMode('center')
    setParent(canvasParentRef)

    radius = 50
    cloud = new Array(32).fill(null).map((_, y) => phrase(y))
  }

  const draw = (p5: p5Types) => {
    p5.clear()

    p5.noStroke()
    p5.fill(dark ? '#f5f5f4' : '#292524')
    cloud.forEach(line => line.forEach(char => p5.text(char.c, char.x, char.y)))

    p5.stroke('#fbbf24')
    p5.noFill()
    p5.ellipse(p5.mouseX, p5.mouseY, radius * 2, radius * 2)

    update(p5)
  }

  const update = (p5: p5Types) => {
    cloud.forEach(line =>
      line.forEach((char, x) => {
        char.y -= 1
        if (char.y < -10) {
          char.x = char.initialX
          char.y = p5.height + 10
        }
      })
    )
  }

  const mouseMoved = (p5: p5Types & { movedX: number; movedY: number }) => {
    cloud.forEach(line =>
      line.forEach(char => {
        const dist = distance(char.x, char.y, p5.mouseX, p5.mouseY)
        if (dist < radius) {
          char.x += p5.movedX / (dist / 4)
          char.y += p5.movedY / (dist / 4)
        }
      })
    )
  }

  const mouseWheel = (p5: p5Types, event) => {
    radius -= event.delta / 10
    if (radius < 16) radius = 16
    if (radius > 128) radius = 128
  }

  const windowResized = (p5: p5Types) => {
    const { width, height } = parent.getBoundingClientRect()
    p5.resizeCanvas(width, height)
  }

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      mouseMoved={mouseMoved as any}
      mouseWheel={mouseWheel as any}
      className='w-full h-full'
    />
  )
}
