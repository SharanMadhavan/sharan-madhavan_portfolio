import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaCogs, FaJava } from 'react-icons/fa'
import { GiDatabase } from 'react-icons/gi'
import { MdApi } from 'react-icons/md'
import { RiReactjsLine } from 'react-icons/ri'
import {animate, motion} from "framer-motion"

const iconvariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2
            whileInView={{opacity:1, y: 0}}
            initial= {{opacity:0, y: -100}}
            transition={{duration: 1.5}}
         className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
            whileInView={{opacity:1, x: 0}}
            initial= {{opacity:0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconvariants(2.5)} >
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(3)}
            className="p-4"> 
                <FaJava className="text-7xl text-red-600" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconvariants(5)}
            className="p-4"> 
                <FaCogs className="text-7xl text-grey-500"/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconvariants(2)}
            className="p-4"> 
                <BiLogoPostgresql className="text-7xl text-sky-500"/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(6)}
            className="p-4"> 
                <MdApi className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconvariants(4)}
            className="p-4"> 
                <GiDatabase className="text-7xl text-blue-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies