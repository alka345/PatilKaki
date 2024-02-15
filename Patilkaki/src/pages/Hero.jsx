import React from 'react'

function Hero() {


    return (
        <div className='text-white grid grid-cols-2 divide-x h-screen bg-cover bg-no-repeat font-sans'>
            <div >
                <h1 className='mt-10'>LOGO</h1>
                <h1 className='text-4xl font-bold font-sans mt-11 flex justify-center text-[#2f9757]'>Turning ideas into innovations, <br />
                    one leap at a time                    </h1>
                <p className='flex  justify-center text-[#8dad35] mt-4'>Learn the proven approach used by top strategy
                    <br /> consultants to tackle
                    complex business <br /> challenges effectively .Solve an MBB case study<br /> LIVE
                    with Ashwin to understand the concepts hands-on</p>
                <div className='flex  justify-center mt-11 gap-11'>
                    <div className='border rounded-lg flex flex-col justify-center items-center p-5 w-36 bg-[#114d28]' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <p>20 February</p></div>
                    <div className='border rounded-lg  flex flex-col justify-center items-center p-5 w-36 bg-[#114d28] '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>1 PM <br />Onwards</p></div>
                    <div className='border rounded-lg flex flex-col justify-center items-center p-5 w-36 bg-[#114d28]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                        2.5 Hours</div>
                </div>
                <button className='bg-[#fcd12a] p-2.5 mt-11 flex justify-center mx-auto border rounded-lg w-60'>Register Now at $ 499 <span className='line-through'>1999</span></button>
                <div><a className='underline flex justify-center mt-5'>Click here to get team discount</a></div>

            </div>
            {/* col-2 */}
            <div>
                <div className='flex flex-col justify-center items-center h-screen'>
                    <div className=' bg-[#114d28] border rounded-md  p-8'>
                        <p className='flex justify-center'>Welcome to</p>
                        <h2 className='flex justify-center font-bold'>STRATEGY CONSULTING <br />MASTERY WORKSHOP</h2>
                        <div className='flex gap-8 mt-10'>
                            <button className='bg-[#2f9757]  flex rounded-full px-1 py-.5 text-black'>
                                Deloite
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                            <button className='bg-[#2f9757] flex rounded-full px-1 py-.5 text-black'>
                                BAIN
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                            <button className='bg-[#2f9757] flex rounded-full px-1 py-.5 text-black'>
                                WTW
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
