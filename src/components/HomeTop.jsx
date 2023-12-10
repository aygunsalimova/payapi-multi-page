import React from 'react';
import Navbar from '../components/Navbar';
import Phone from '../assets/phone.svg'


function HomeTop() {
    return (
        <div>
            <div id='home' className='bg-main-color-3 w-100 pl-156 pr-156 pb-75'>
                <Navbar />
                <div className='absolute w-780 h-780 bg-circle opacity-25 top-m200 right-m150 rounded-780'></div>

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col self-center'>
                        <h1 className='w-546 h-243 text-circle text-7xl font-normal leading-18 tracking-m554 font-dm-serif'>Start building with our APIs for absolutely free.</h1>
                        <div className='relative shadow-btn-shadow'>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter email adress'
                                className='p-4 pl-5 rounded-3xl bg-main-color-2 w-445 h-12 outline-none text-circle font-public-sans text-base font-bold' />
                            <button className='right-0 absolute footer-btn w-44 h-12 rounded-3xl bg-main-color-1 text-main-color-2 font-public-sans text-sm font-bold tracking-m115  hover:bg-main-hover-1 right-o top-0'>Schedule a Demo</button>
                        </div>
                        <p className='text-main-color-4 font-public-sans text-base  font-normal ml-7 mt-4'>Have any questions? <b className='hover:cursor-pointer'>Contact Us</b></p>
                    </div>

                    <img src={Phone} alt="phone" className='w-257 h-498 z-50 mr-24' />
                </div>
            </div>
        </div>
    );
}

export default HomeTop;