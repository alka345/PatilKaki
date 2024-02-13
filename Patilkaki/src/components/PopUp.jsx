import React from 'react'

function PopUp() {
  return (
    <div className='fixed bg-opacity-30 backdrop-blur-sm'> 
  <div className='bg-[#78866b]'>
    <svg xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
    stroke="currentColor"
     className="w-6 h-6">
  <path strokeLinecap="round" 
  strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-4xl mt-11'>FLAT 15% OFF</h1>
      <h3>Enter your details and win a coupon<br /> worth 15% off</h3>
      <div>
        <input 
        className='py-1.5 px-5 border rounded-sm mt-5 w-full'
        type="text" 
        placeholder='Enter your phone' 
        required
        />
      </div>
      <div>
        <input 
        type="email" 
        placeholder='Enter your Email'
        className='mt-5 py-1.5 px-5 border rounded-sm w-full'
        required
        />
      </div>
      <button 
      className='bg-[#fcd12a] border border-yellow-500 rounded-sm px-5 py-1.5 mt-5 mb-11 w-auto'
      >Show me Coupon </button>
    </div>
    </div>


    </div>
  )
}

export default PopUp
