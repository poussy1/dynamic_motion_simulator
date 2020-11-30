import { motion } from "framer-motion"

function Weight(props){ 
  return <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  />
}
export default Weight;