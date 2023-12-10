import React from 'react';
import BrandIcon from '../icons/BrandIcon0'
import SocialMedia from '../icons/SocialMedia';


function Footer(props) {
    return (
        <div id='footer'>
            <div className='flex flex-row justify-between py-24 px-165 bg-main-color-3' id='foot-top'>
                <h1 className='text-circle font-dm-serif text-5xl leading-56 tracking-m369 h-16 overflow-y-hidden'>Ready to start?</h1>
                <div className='relative h-full shadow-btn-shadow'>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter email adress'
                        className='p-4 pl-7 rounded-3xl bg-main-color-2 w-445 h-12 outline-none text-circle font-public-sans text-base font-bold' />
                    <button className='absolute top-0 right-0 w-44 h-12 rounded-3xl bg-main-color-1 text-main-color-2 font-public-sans text-sm font-bold tracking-m115 hover:bg-main-hover-1'>Schedule a Demo</button>
                </div>
            </div>

            <div id='foot-nav' className='flex flex-row justify-between align-middle items-center py-8 px-165 bg-main-color-5'>
                <div className='flex flex-row justify-end items-center'>
                    <div className='icon'>
                        <BrandIcon />
                    </div>
                    <div className='ml-16'>
                        <ul className='flex flex-row gap-10'>
                            <li className='text-white text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>Pricing</li>
                            <li className='text-white text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>About</li>
                            <li className='text-white text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>Contact</li>
                        </ul>
                    </div>

                </div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default Footer;