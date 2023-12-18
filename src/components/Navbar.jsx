import React from 'react';
import BrandIcon from '../icons/brandicon'
import '../App.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div id='navbar' className='flex xl:flex-row xl:justify-between py-11 bg-transparent z-50 relative'>
            <div className='flex flex-row justify-end items-center'>
                <div className='icon'>
                    <Link to={`/`}> <BrandIcon /> </Link>
                </div>
                <div className='xl:ml-16 md:ml-10'>
                    <ul className='flex flex-row xl:gap-10 md:gap-2'>
                        <Link to={`/pricing`} className='text-sm font-bold opacity-50 hover:opacity-100 hover:cursor-pointer'>Pricing</Link>
                        <Link to={`/about`} className='text-sm font-bold opacity-50 hover:opacity-100 hover:cursor-pointer'>About</Link>
                        <Link to={`/contact`} className='text-sm font-bold opacity-50 hover:opacity-100 hover:cursor-pointer'>Contact</Link>
                    </ul>
                </div>

            </div>
                <button className='absolute top-0 right-9 w-44 h-12 rounded-3xl bg-main-color-1 text-main-color-2 font-public-sans text-sm font-bold tracking-m115 mt-10 md:mt-8 hover:bg-main-hover-1 md:w-30'>Schedule a Demo</button>
        </div>
    );ma
}

export default Navbar;