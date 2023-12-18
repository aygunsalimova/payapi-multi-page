import React from 'react';
import LeftPhone from '../assets/left-phone.svg'
import RightPhone from '../assets/right-phone.svg'
import img1 from '../assets/personal-finances.svg'
import img2 from '../assets/banking-coverage.svg'
import img3 from '../assets/consumer-payments.svg'

function HomeBottom(props) {
    return (
        <div id='home-bottom' className='pt-156 xl:px-24 bg-main-color-3 md:p-0 xl:justify-between md:justify-center xl:items-start md:items-center'>
            <div className="absolute w-780 h-780 bg-circle opacity-25 top-1665 right-m385 rounded-780 md:invisible"></div>

            <div className="flex xl:flex-row xl:justify-between items-center xl:my-36 md:flex-col-reverse xl:text-left md:my-13 md:gap-12 md:text-center">
                <div className="part-3">
                    <h1 className='text-circle font-dm-serif text-5xl leading-56 tracking-m369 h-16 overflow-y-hidden'>Simple UI & UX</h1>
                    <p className='text-main-color-4 font-public-sans text-base leading-7 flex flex-col justify-center items-start gap-6 md:w-573'>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
                </div>
                <div className="flex flex-row gap-11 justify-center md:h-300">
                    <img src={LeftPhone} alt="" />
                    <img src={RightPhone} alt="" />
                </div>
            </div>

            <div id='home-bottom-2' className='flex flex-row gap-8 justify-between md:mx-10 md:py-100'>
                <div className='w-350'>
                    <img src={img1} alt="" className='m-auto md:w-88' />
                    <h5 className='mt-8 mb-4 text-circle text-center font-public-sans text-lg font-bold leading-6 tracking-m138'>Personal Finances</h5>
                    <p className='text-center font-public-sans text-base leading-6 tracking-m115 text-main-color-4'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                </div>
                <div className='w-350'>
                    <img src={img2} alt="" className='m-auto md:w-88' />
                    <h5 className='mt-8 mb-4  text-circle text-center font-public-sans text-lg font-bold leading-6 tracking-m138' >Banking & Coverage</h5>
                    <p className='text-center font-public-sans text-base leading-6 tracking-m115 text-main-color-4'>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
                </div>
                <div className='w-350'>
                    <img src={img3} alt="" className='m-auto md:w-88' />
                    <h5 className='mt-8 mb-4  text-circle text-center font-public-sans text-lg font-bold leading-6 tracking-m138'>Consumer Payments</h5>
                    <p className='text-center font-public-sans text-base leading-6 tracking-m115 text-main-color-4'>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeBottom;