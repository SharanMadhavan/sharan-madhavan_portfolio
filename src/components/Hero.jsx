import profilePic from "../assets/sharan-pic.jpg"
import { ABOUT_TEXT } from "../constants"
import{ motion } from "framer-motion"
const containervarient = {
    hidden:{opacity:0, x:-100},
    visible:{
        opacity:1,
        x:0,
        transition: { 
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}
const childVarients = {
    hidden:{opacity:0, x:-100},
    visible : {opacity:1, x:0, transition: {duration: 0.5}}
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <motion.img
                     src={profilePic} alt="sharan madhavan" className="border border-stone-900 rounded-3xl"
                     width={400}
                     height={400}
                     initial={{x:100, opacity:0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration:1, delay:1.5}}
                     />
            </div>
            </div>
            <div className="w-full lg:w-1/2">

                <motion.div
                initial="hidden"
                animate="visible"
                variants={containervarient}
                 className="flex flex-col items-center lg:items-start mt-10">
                  <motion.h2
  variants={childVarients}
  className="pb-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight whitespace-nowrap 
             bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
             bg-clip-text text-transparent font-bold"
>
  Sharan Madhavan
</motion.h2>
                    <motion.span
                    
                    animate={{ 
                        scale: [1, 1.1, 1], 
                        opacity: [0.8, 1, 0.8] 
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        ease: "easeInOut" 
                      }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide whitespace-nowrap
             bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 
             bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Full Stack Developer</motion.span>
                            <motion.p variants={childVarients} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{ABOUT_TEXT}</motion.p>
                            <motion.a variants={childVarients} href="/Shranmadhavan_JavaDeveloper_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    download
                                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                                    hover:from-pink-600 hover:via-purple-600 hover:to-blue-600
                                    rounded-full px-6 py-3 
                                    text-sm font-semibold 
                                    text-white shadow-md 
                                    transition-all duration-300 ease-in-out
                                    mb-10">
                                        Download Resume
                            </motion.a>
                    
                    </motion.div> 

            </div>
            </div> 
    </div>
  )
}

export default Hero