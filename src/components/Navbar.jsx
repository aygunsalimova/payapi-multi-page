import React from 'react';
import BrandIcon from '../icons/brandicon'
import '../App.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div id='navbar' className='flex flex-row justify-between py-11 bg-transparent z-50 relative'>
            <div className='flex flex-row justify-end items-center'>
                <div className='icon'>
                    <Link to={`/`}> <BrandIcon /> </Link>
                </div>
                <div className='ml-16'>
                    <ul className='flex flex-row gap-10'>
                        <Link to={`/`} className='text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>Home</Link>
                        <Link to={`/pricing`} className='text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>Pricing</Link>
                        <Link to={`/about`} className='text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>About</Link>
                        <Link to={`/contact`} className='text-sm font-bold opacity-70 hover:opacity-100 hover:cursor-pointer'>Contact</Link>
                    </ul>
                </div>

            </div>
                <button className='absolute top-0 right-9 w-44 h-12 rounded-3xl bg-main-color-1 text-main-color-2 font-public-sans text-sm font-bold tracking-m115 mt-10 hover:bg-main-hover-1'>Schedule a Demo</button>
        </div>
    );
}

export default Navbar;