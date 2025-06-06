import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:1, y: -100}}
    transition={{duration: 0.5}} 
    className="my-20 text-center text-4xl">Get In Touch</motion.h2>
    <div className="text-center tracking-tighter">
        <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1}} 
        className="my-4"> {CONTACT.address}</motion.p>
        <motion.p 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x: 100}}
             transition={{duration: 1}} 
             
        >
         <a 
    href={`tel:${CONTACT.phoneNo}`} 
    className="border-b border-dashed hover:text-pink-400 transition-all duration-300"
  >
    {CONTACT.phoneNo}
  </a>
        </motion.p>
        <a href={`mailto:${CONTACT.email}`}  className="border-b border-dashed hover:text-pink-400 transition-all duration-300">
            {CONTACT.email}
        </a>
    </div>
    </div>
  )
}

export default Contact