import React from 'react';
import BrandIcon from '../icons/BrandIcon0'
import SocialMedia from '../icons/SocialMedia';


function Footer(props) {
    return (
        <div id='footer'>
            <div className='flex flex-row justify-between' id='foot-top'>
                <h1>Ready to start?</h1>
                <div className='div-container shadow-btn-shadow'>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter email adress'
                        className='p-4 pl-7 rounded-3xl bg-main-color-2 w-445 h-12 outline-none text-circle font-public-sans text-base font-bold' />
                    <button className='footer-btn w-44 h-12 rounded-3xl bg-main-color-1 text-main-color-2 font-public-sans text-sm font-bold tracking-m115 hover:bg-main-hover-1'>Schedule a Demo</button>
                </div>
            </div>

            <div id='foot-nav' className='flex flex-row justify-between align-middle items-center'>
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