import React from 'react'

function MeSection() {
  return (
    <div className='font-sans'>
      <h1 className='flex justify-center text-xl text-bold text-yellow-500 '>But,</h1>
      <h2 className='flex justify-center text-bold'>Why should you become a MIndful Marketer?</h2>
<div className='flex gap-10 justify-center pt-11'>
  <div><img src="learn1.jpg" width={300} alt="" /><p className='flex justify-center'>Learn to look at challenges <br />through a different lens</p></div>
  <div><img src="understand.jpg" width={300} alt="" /><p className='flex justify-center'>Develop a deep understanding <br />of modern mrketing</p></div>
  <div><img src="deep.jpg" width={300} alt="" /><p className='flex justify-center'>Understand time-tested <br /> principles</p></div>
</div>
<div className='flex justify-center my-8 gap-10'>
  <div><img src="learn.jpg" width={300} alt="" /><p className='flex justify-center'>Become a strategic thinker <br />without trend-surfing</p></div>
  <div><img src="creative2.jpg" width={300} alt="" /><p className='flex justify-center'>Incorporate a creative & innovative thought process </p></div>
  </div>
    </div>
  )
}

export default MeSection
