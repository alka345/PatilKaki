import React, { useRef } from 'react'
import { X } from 'lucide-react';


function Form({ onClose }) {
    // const modalRef = useRef();

    // const closeModal = (e) => {
    //     if (modalRef.current === e.target) {
    //         onClose();
    //     }
    // }
    return (
        <>
                 <div
                // ref={modalRef}
                // onClick={closeModal}
                className='bg-[#78866b] pt-11'
                >
                <button
                    className='bg-black'
                    onClick={onClose}
                >
                    <X />
                </button>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-4xl mt-11'>FLAT 15% OFF</h1>
                    <h3>Enter your details and win a coupon<br /> worth 15% off</h3>
                    <div>
                        <input
                            className='py-1.5 px-5 border rounded-sm mt-5 w-full'
                            type="text"
                            placeholder='Enter your phone' />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            className='mt-5 py-1.5 px-5 border rounded-sm w-full'
                        />
                    </div>
                    <button
                        className='bg-[#fcd12a] border border-yellow-500 rounded-sm px-5 py-1.5 mt-5 mb-11 w-auto'
                    >Show me Coupon </button>
                </div>
            </div>
            
        </>
    )
}

export default Form
