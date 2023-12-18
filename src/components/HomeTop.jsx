import React from 'react';
import Navbar from '../components/Navbar';
import Phone from '../assets/phone.svg'


function HomeTop() {
    return (
        <>
            <div id='home' className='bg-main-color-3 w-100 xl:px-24 pb-75 md:px-10'>
                <Navbar />
                <div className='absolute w-780 h-780 bg-circle opacity-25 top-m390 xl:right-m150 rounded-780 md:right-0'></div>

                <div className='flex xl:flex-row xl:justify-between md:flex-col-reverse md:justify-center md:items-center md:gap-12'>
                    <div className='flex flex-col self-center md:gap-5'>
                        <h1 className='w-546 h-243 text-circle text-7xl xl:text-left font-normal tracking-m554 font-dm-serif md:text-5xl md:h-full md:text-center md:overflow-y-hidden'>Start building with our APIs for absolutely free.</h1>
                        <div className='relative w-445 xl:h-12 md:items-center'>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter email adress'
                                className='p-4 pl-5 rounded-3xl bg-main-color-2 w-445 xl:h-12 outline-none text-circle font-public-sans text-base md:m-0' />
                            <button className='right-0 absolute footer-btn w-44 h-12 rounded-3xl bg-main-color-1 text-main-color-2 font-public-sans text-sm font-bold tracking-m115  hover:bg-main-hover-1 right-o top-0'>Schedule a Demo</button>
                        </div>
                        <p className='text-main-color-4 font-public-sans text-base font-normal ml-7 mt-4 md:m-0'>Have any questions? <b className='hover:cursor-pointer'>Contact Us</b></p>
                    </div>

                    <img src={Phone} alt="phone" className='w-257 h-498 z-50 mr-24 md:mr-0' />
                </div>
            </div>
        </>
    );
}

export default HomeTop;