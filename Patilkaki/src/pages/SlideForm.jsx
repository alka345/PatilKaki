import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import PopUp from '../components/PopUp'




function SlideForm() {
  
  const [showForm, setShowForm] = useState(false)

  useEffect(() =>{
    const timer = setTimeout(() => {
      setShowForm(true);
    },15000);

    return () => clearTimeout(timer);
  },[]);

  return (
    <div
      className='relative h-screen w-full font-sans '>
      <nav>
        <div className='flex bg-[#d3d3d3] justify-between'>
          <p className='pl-11'>+9185913612</p>
          <h3 className='pr-11'>About</h3></div>
        <div className='flex p-6 justify-between'>
          <h1>PatilKaki</h1>
          <div className='flex gap-3 pr-8'>
            <p>Traditional</p>
            <p>Healthy</p>
            <p>Namkeen Specials</p>
            <p>Laddos</p>
            <p>Upvas Snacks</p>
          </div>
        </div>
      </nav>
      <div>
        <h1 className='bg-[#708090] flex justify-center text-white'>NEXT DAY DELIVERY in Mum,Thane,Navi M & Pune</h1>
      </div>
      <div className='bg-black flex'>
        <img src="snacksImg.jpeg" alt="" />
        <img width={400} src="snacks-2.jpeg" alt="" />

        <img width={400} src="snacks3.jpeg" alt="" />


      </div>

      <div
        className='absolute bottom-0 left-0 h-3/4 w-2/5 ml-5 '>
        {showForm && <Form onClose={() => setShowForm(false)}/>}
      </div>
    </div>
  )
}

export default SlideForm
