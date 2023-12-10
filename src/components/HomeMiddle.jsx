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
             <div id="home-middle" className='flex flex-row justify-between items-center bg-main-color-5 w-100 py-100 px-165'>
            <div className='ha-col-1'>
                <h1 className='text-main-color-2 font-dm-serif text-5xl font-normal tracking-m369 leading-56 h-16'>Who we work with</h1>
                <p className='mt-4 mb-8 text-main-color-2 font-public-sans'>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                <button className='ha-btn'>About us</button>
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