import React from 'react';
import google from '../assets/google.svg'
import hp from '../assets/hp.svg'
import microsoft from '../assets/microsoft.svg'
import nvidia from '../assets/nvidia.svg'
import oracle from '../assets/oracle.svg'
import tesla from '../assets/tesla.svg'

function HomeMiddle(props) {
    return (
        <div>
            <div id="home-middle" className='flex xl:flex-row xl:justify-between xl:text-left items-center bg-main-color-5 w-100 py-100 xl:px-24 md:flex-col-reverse md:gap-16'>
                <div className='ha-col-1 flex md:items-center md:flex-col md:text-center xl:text-left xl:items-start'>
                    <h1 className='text-main-color-2 font-dm-serif text-5xl font-normal tracking-m369 leading-56 h-16 md:text-5xl md:text-center'>Who we work with</h1>
                    <p className='mt-4 mb-8 text-main-color-2 font-public-sans w-445 opacity-70 text-sm font-normal xl:text-left md:text-center md:leading-7'>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                    <button className='text-main-color-2 text-center font-public-sans text-base font-bold tracking-m115 w-129 h-12 rounded-3xl border-main-color-2 border-solid border-1 hover:text-main-color-5 hover:bg-white md:m-0'>About us</button>
                </div>

                <div className='ha-col-2 grid grid-flow-row grid-cols-3 gap-14'>
                    <img src={tesla} alt="" />
                    <img src={microsoft} alt="" />
                    <img src={hp} alt="" />
                    <img src={oracle} alt="" />
                    <img src={google} alt="" />
                    <img src={nvidia} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeMiddle;