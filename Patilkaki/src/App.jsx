import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CTA from './pages/CTA'
import Timer from './pages/Timer'
import SlideForm from './pages/SlideForm'
import PopUp from './components/PopUp'
import Hero from './pages/Hero'
import About from './pages/About'
import MeSection from './pages/MeSection'
import {motion} from 'framer-motion'

function App() {
  

  return (
    <>
    
    <motion.div 

initial={{opacity:0.5, scale:0.5}}
transition={{duration:2}}
whileInView={{opacity:1, scale:1}}
>
<Hero/>
</motion.div>
    <motion.div 

        initial={{opacity:0.5, scale:0.5}}
        transition={{duration:2}}
        whileInView={{opacity:1, scale:1}}
        >
          <About/>
        </motion.div>
    <motion.div 

        initial={{opacity:0.5, scale:0.5}}
        transition={{duration:2}}
        whileInView={{opacity:1, scale:1}}
        >
          <MeSection/>
        </motion.div>
    <motion.div 

        initial={{opacity:0.5, scale:0.5}}
        transition={{duration:2}}
        whileInView={{opacity:1, scale:1}}
        ><Timer/>
          
        </motion.div>
    <motion.div 

        initial={{opacity:0.5, scale:0.5}}
        transition={{duration:2}}
        whileInView={{opacity:1, scale:1}}
        >
          <CTA/>
          
        </motion.div>
    <motion.div 

        initial={{opacity:0.5, scale:0.5}}
        transition={{duration:2}}
        whileInView={{opacity:1, scale:1}}
        >
          
    <SlideForm/>
          
        </motion.div>
    
    
    
    
  
    </>
    
    
  )
}

export default App
