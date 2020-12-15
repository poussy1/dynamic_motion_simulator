import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './styles.css'
import MyImg from './my_img'
function Card() {
  const [flipped, set] = useState()
  const { transform } = useSpring({
    transform: `scaleY(${flipped ? 2 : 1})`,
    config: { mass: 125, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set((state) => !state)}>
      <a.div style={{ transform }}>
        <MyImg />
      </a.div>
    </div>
  )
}

render(<Card />, document.getElementById('root'))
