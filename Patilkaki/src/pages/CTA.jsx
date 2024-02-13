import React from 'react'

function CTA() {
  return (
    <div className='grid grid-cols-2 h-screen w-screen text-white justify-center items-center '>
      <div className=' flex flex-col justify-center items-center border rounded-lg bg-slate-700 p-10 ml-10'>
        <h1 className='  text-xl'>Crash course Launch Offer(Save INR 1799)</h1>
        <p className='mt-8'>
          <ul >
          <li >Learn the toolkit of the professionals in just 3 Hours</li>
          <li>Enjoy the discount price of 299</li>
          <li>The launch offer expires soon , grab your seat NOW!</li>
          </ul>
        </p>
      </div>
      <div className=' border rounded-lg bg-slate-700 p-10 flex flex-col mr-10' >
        <p>Price of the Program</p>
        <h1 className='font-bold text-4xl'>$499 <span className='line-through font-normal text-sm'>$1999</span></h1>
        <button className='bg-[#fcd12a] py-3 px-1
         mt-5 border rounded-lg border-yellow-600 text-black w-1/3'>Register Now</button>
      </div>
      
    </div>
  )
}

export default CTA
