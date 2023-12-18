import React from 'react';
import BrandIcon from '../icons/BrandIcon0'
import SocialMedia from '../icons/SocialMedia';
import { Link } from 'react-router-dom';


function Footer(props) {
    return (
        <div id='footer'>
            <div className='flex xl:flex-row xl:justify-between xl:py-24 xl:px-24 bg-main-color-3 md:flex-col md:text-center md:gap-10 md:items-center ' id='foot-top'>
                <h1 className='text-circle font-dm-serif text-5xl leading-56 tracking-m369 h-16 overflow-y-hidden'>Ready to start?</h1>
                <div className='relative w-445 xl:h-12 md:items-center md:mb-100'>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter email adress'
                        className='p-4 pl-5 rounded-3xl bg-main-color-2 w-445 xl:h-12 outline-none text-circle font-public-sans text-base md:m-0 md:h-12' />
                    <button className='right-0 absolute footer-btn w-44 h-12 rounded-3xl bg-main-color-1 text-main-color-2 font-public-sans text-sm font-bold tracking-m115  hover:bg-main-hover-1 right-o top-0'>Schedule a Demo</button>
                </div>
            </div>

            <div id='foot-nav' className='flex flex-row justify-between align-middle items-center py-8 xl:px-24 bg-main-color-5 md:px-10'>
                <div className='flex flex-row justify-end items-center'>
                    <div className='icon'>
                        <BrandIcon />
                    </div>
                    <div className='ml-16'>
                        <ul className='flex flex-row gap-10'>
                            <Link to={`/pricing`} className='text-white text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>Pricing</Link>
                            <Link to={`/about`} className='text-white text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>About</Link>
                            <Link to={`/contact`} className='text-white text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>Contact</Link>
                        </ul>
                    </div>

                </div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default Footer;