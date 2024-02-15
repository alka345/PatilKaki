import React from 'react'

function About() {
  return (
    <div className='font-sans'>
      <h1 className='flex justify-center items-center text-3xl'>ABOUT <spa className='text-yellow-600'> FOUNDERX</spa></h1>
      <p className='flex justify-center mt-4 text-xl'>The world needs your creativity and ingenuity. Don't put your dreams on hold. <br /> Start your founder's journey today!</p>
      <div className=' grid grid-cols-2 divide-x h-screen gap-8'>
        <div className='bg-[#36454f] flex justify-center items-center mt-10  border rounded-lg h-3/4 ml-10'><img src="sideImg.jpg" alt="" /></div>
        <div className='bg-yellow-600 mt-10 border rounded-lg flex flex-col justify-center h-3/4 mr-10'>
          <div className='text-xl pl-10 text-slate-600'>Master a <span className='font-bold text-black'>structured approach </span> to building a tech venture</div>
          <div className='text-xl pl-10 text-slate-600'><span className='font-bold text-black'>Get coached by</span>India's top 1% founders, operators and investors</div>
          <div className='text-xl pl-10 text-slate-600'><span className='font-bold text-black'>Learn by doing-</span>Work on actual startup ideas in a real-world startup team simulation</div>
          <div className='text-xl pl-10 text-slate-600' ><span className='font-bold text-black'>Expand your network</span>in the community of like-minded peers</div>
          <div className='text-xl pl-10 text-slate-600'><span className='font-bold text-black'>Find your co-founder</span>& your core team among the fellows and alumini</div>
          
        </div>
      </div>
    </div>
  )
}

export default About
