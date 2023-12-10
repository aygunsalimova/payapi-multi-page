import React from 'react';
import LeftPhone from '../assets/left-phone.svg'
import RightPhone from '../assets/right-phone.svg'
import img1 from '../assets/personal-finances.svg'
import img2 from '../assets/banking-coverage.svg'
import img3 from '../assets/consumer-payments.svg'

function HomeBottom(props) {
    return (
        <div id='home-bottom'>
            <div className="absolute w-780 h-780 bg-circle opacity-25 top-1665 right-m385 rounded-780"></div>

            <div className="group-by mt-36 mb-36">
                <div className="part-3">
                    <h1>Simple UI & UX</h1>
                    <p>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
                </div>
                <div className="part-4">
                    <img src={LeftPhone} alt="" />
                    <img src={RightPhone} alt="" />
                </div>
            </div>

            <div id='home-bottom-2' className='flex flex-row gap-8'>
                <div className=''>
                    <img src={img1} alt="" className='m-auto' />
                    <h5 className='mt-8 mb-4'>Personal Finances</h5>
                    <p>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                </div>
                <div className=''>
                    <img src={img2} alt="" className='m-auto' />
                    <h5 className='mt-8 mb-4' >Banking & Coverage</h5>
                    <p>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
                </div>
                <div className=''>
                    <img src={img3} alt="" className='m-auto' />
                    <h5 className='mt-8 mb-4'>Consumer Payments</h5>
                    <p>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeBottom;