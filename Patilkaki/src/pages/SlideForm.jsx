import React, { useState } from 'react'
import Form from '../components/Form'
import PopUp from '../components/PopUp'

function SlideForm() {
  const [showModal, setShowModal ] = useState(false)
  return (
    <div
     className='relative h-screen w-full bg-[#4d5d53] '>
    <div className='absolute bottom-0 left-0 h-3/4 w-2/5 ml-5 '>
    <button 
    onClick={() => setShowModal(true)}
    className='bg-[#fcd12a] py-1.5 px-5 border rounded-md'
    >Win Coupon</button>
     {showModal && <Form onClose={() => setShowModal(false)}
      />} 
    </div>
    </div>
  )
}

export default SlideForm
