import React from 'react'
import Form from '../components/Form'

function SlideForm() {
  return (
    <div className='relative h-screen w-full bg-[#4d5d53] '>
    <div className='absolute bottom-0 left-0 h-3/4 w-2/5 ml-5 '>
      <Form/>
    </div>
    </div>
  )
}

export default SlideForm
