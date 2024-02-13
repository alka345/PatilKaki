import React, { useEffect, useState } from 'react'

function Timer() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [mins, setMinutes] = useState(0)
  const [secs, setSeconds] = useState(0)

  const deadline = "February, 20, 2024";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor(time / (1000 * 60 * 60) % 24))
    setMinutes(Math.floor(time / (1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)
    return () => clearInterval(interval)
  }, [])
  // grid place-items-center h-screen
  return (
    <div className='bg-[#b1bca0] flex  flex-col items-center justify-center h-screen'>
      <div className='bg-[#78866b] p-5 text-white'>Time is running out. <br />  Grab your spot fast</div>
      <div className='flex bg-[#36454F] p-10 text-3xl text-white'>
        <div className='flex'>
          <h1>{days < 10 ? "0" + days : days} </h1>
          <span  className='pl-5 text-sm'>Days</span>
        </div>
        <div className='flex'>
          <h1  className='pl-5'>{hours < 10 ? "0" + hours : hours}</h1>
          <span className='pl-5 text-sm'>Hours</span>
        </div>
        <div className='flex'>
          <h1  className='pl-5'>{mins < 10 ? "0" + mins : mins}</h1>
          <span  className='pl-5 text-sm'>Mins</span>
        </div>
        <div className='flex'>
          <h1  className='pl-5'>{secs < 10 ? "0" + secs : secs}</h1>
          <span  className='pl-5 text-sm'>Secs</span>
        </div>
      </div>
    <button className='bg-[#fcd12a] border border-yellow-500 rounded-xl mt-5 px-11 py-4 '>Register Now at Rs.499 <span className='line-through'>1999</span></button>
    </div>
  )
}


export default Timer
