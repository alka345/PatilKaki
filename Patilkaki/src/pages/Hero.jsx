import React from 'react'

function Hero() {


    return (
        <div className='bg-[#36454f] text-white grid grid-cols-2 divide-x h-screen '>
            
            <div >
            <h1 className='mt-10'>LOGO</h1>
                <h1 className='text-2xl font-sans mt-11 flex justify-center '>Discover a Consultant's <br />
                    Approach to Problem <br />
                    Solving</h1>
                <p className='flex  justify-center '>Learn the proven approach used by top strategy consultants to tackle 
                <br />
                    complex business challenges effectively .SOlve an MBB case study LIVE <br />
                    with Ashwin to understand the concepts hands-on</p>
                    <div className='flex  justify-center mt-11 gap-10'>
                        <div className='border rounded-sm flex flex-col justify-center items-center p-5' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                            <p>20 February</p></div>
                        <div className='border rounded-sm  flex flex-col justify-center items-center p-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                            <p>1 PM <br />Onwards</p></div>
                        <div className='border rounded-sm flex flex-col justify-center items-center p-5'>2.5 Hours</div>
                    </div>
                    <button className='bg-[#fcd12a] p-2.5 mt-11 flex justify-center mx-auto'>Register Now at $ 499 <span className='line-through'>1999</span></button>
                    <div><a className='underline flex justify-center mt-5'>Click here to get team discount</a></div>
            
            </div>
            {/* col-2 */}
            <div>
                <div className='flex flex-col justify-center items-center h-screen'>
                    <div className=' bg-gradient-to-br from-black via-teal-800 to-black p-5'>
                    <p className='flex justify-center'>Welcome to</p>
                    <h2 className='flex justify-center font-bold'>STRATEGY CONSULTING <br />MASTERY WORKSHOP</h2>
                    <div className='flex gap-8 mt-10'>
                        <button className='bg-white  flex rounded-full px-1 py-.5 text-black'>
                        Deloite
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round"
                        strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>
                        <button className='bg-white flex rounded-full px-1 py-.5 text-black'>
                        BAIN
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round"
                             strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
                        <button className='bg-white flex rounded-full px-1 py-.5 text-black'>
                        WTW
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
                        </div>

                        
                        </div> 
                        <div className='border mt-11 bg-slate-400 py-1 px-11'>Instructed by</div>
                </div>
            </div>
        </div>
    )
}

export default Hero
