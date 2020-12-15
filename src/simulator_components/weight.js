import { motion } from "framer-motion"
import React from 'react';
import { SpringVisualizer } from './SpringVisualizer'
import createPersistedState from 'use-persisted-state'

const useFormState = createPersistedState('config')
const valueAttributes = {
  mass: { min: 0.1, max: 20, step: 0.1 },
  tension: { min: 1, max: 500, step: 1 },
  friction: { min: 1, max: 200, step: 1 },
  precision: { min: 0.01, max: 1, step: 0.001 },
  velocity: { min: -50, max: 50, step: 1 }
}

function Weight(props){ 
  const [display, setDisplay] = React.useState('spring')
  const [active, setActive] = React.useState(false)

  const formState = useFormState({ mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: 0 })
  const config = formState[0]
  
  const play = React.useCallback(
    evt => {
      evt && evt.preventDefault()
      setActive(x => !x)
    },
    [setActive]
  )

  // React.useEffect(() => { setActive(false) }, [])

  // React.useEffect(
  //   () => {
  //     navigate()
  //     window.addEventListener('hashchange', navigate, false)
  //     return () => { window.removeEventListener('hashchange', navigate) }

  //     function navigate() {
  //       setActive(false)
  //       setDisplay(window.location.hash.replace('#', '') || 'spring')
  //     }
  //   },
  //   []
  // )
  return <SpringVisualizer onClick={play} {...{ active, valueAttributes, config  }} />
}
export default Weight;