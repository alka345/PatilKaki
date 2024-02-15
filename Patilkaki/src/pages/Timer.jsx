import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

function Timer() {
  const [secs, setSeconds] = useState(10*60);
  useEffect(() => {
  const timer = setInterval(()=>{
    setSeconds(prevSeconds => prevSeconds - 1);
  },1000)
  return ()=> clearInterval(timer);
  }, [])
  
const formatTime = (time) => {
  
  const minutes = Math.floor(time/60);
  if(minutes>0){
  const secs = time % 60;
  return `${ minutes}: ${secs < 10 ? '0' : ''}${secs}`}
 
}

  return (
    <div className='bg-[#b1bca0] flex  flex-col items-center justify-center h-screen font-sans'>
      <div className='text-bold text-4xl p-5 text-white'>Time is running out. <br />  Grab your spot fast</div>
      <div className='flex bg-[#36454F] border rounded-lg px-10 py-8 text-3xl mt-11 text-white'>
      <div>{formatTime (secs)}</div>

      </div>
    

    <motion.button 
    initial={{opacity:1, scale:1}}
    transition={{duration:2}}
    whileHover={{opacity:1, scale:1.5}}
    className='bg-[#fcd12a] border border-yellow-500 rounded-xl mt-5 px-11 py-4 '
    >Register Now at Rs.499 <span className='line-through'>1999</span></motion.button>
    </div>
  )
}


export default Timer
