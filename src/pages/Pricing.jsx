import React from 'react';
import Navbar from '../components/Navbar';
import TickIcon from '../icons/TickIcon'
import Footer from '../components/Footer';

function Pricing(props) {
    return (
        <>
            <div id='pricing' className='xl:px-24 bg-main-color-3 md:px-10 md:pb-100'>
                <Navbar />
                <div className='absolute w-780 h-780 bg-circle opacity-25 top-m527 right-m140 rounded-780 md:right-m420'></div>
                <h1 className='text-circle font-dm-serif text-56 mt-8 mb-10 xl:text-left md:text-center'>Pricing</h1>

                <div className='flex flex-row justify-between md:gap-2'>
                    <div className='w-350 md:text-center xl:text-left'>
                        <h1 className='text-main-color-1 font-dm-serif text-32 leading-48 tracking-m246 mb-4'>Free Plan</h1>
                        <p className='mb-4 text-main-color-4 font-public-sans text-base leading-7'>Build and test using our core set of products with up to 100 API requests </p>
                        <h1 className='text-circle font-dm-serif text-56 tracking-m431'>$0.00</h1>
                        <hr className='opacity-25 bg-circle xl:w-350 h-02 my-6 md:w-223' />
                        <ul className='flex flex-col gap-2 md:text-start md:pl-10 xl:pl-0'>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon />Transactions </li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon />Auth</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Identity</li>
                            <li className='font-public-sans text-base leading-7 text-circle opacity-50 ml-9'>Investments</li>
                            <li className='font-public-sans text-base leading-7 text-circle opacity-50 ml-9'>Assets</li>
                            <li className='font-public-sans text-base leading-7 text-circle opacity-50 ml-9'>Liabilities</li>
                            <li className='font-public-sans text-base leading-7 text-circle opacity-50 ml-9'>Income</li>
                        </ul>
                        <hr className='opacity-25 bg-circle xl:w-350 h-02 my-6 md:w-223' />
                        <button className='hover:text-white hover:bg-circle font-public-sans text font-bold tracking-m115 w-168 h-12 rounded-3xl mx-auto border-2 border-circle'>Request Access</button>
                    </div>
                    <div className='w-350 md:text-center xl:text-left'>
                        <h1 className='text-main-color-1 font-dm-serif text-32 leading-48 tracking-m246 mb-4'>Basic Plan</h1>
                        <p className='mb-4 text-main-color-4 font-public-sans text-base leading-7'>Launch your project with unlimited requests and no contractual minimums  </p>
                        <h1 className='text-circle font-dm-serif text-56 tracking-m431'>$249.00</h1>
                        <hr className='opacity-25 bg-circle xl:w-350 h-02 my-6 md:w-223' />
                        <ul className='flex flex-col gap-2 md:text-start md:pl-10  xl:pl-0'>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Transactions</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Auth</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Identity</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Investments</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Assets</li>
                            <li className='font-public-sans text-base leading-7 text-circle opacity-50 ml-9'>Liabilities</li>
                            <li className='font-public-sans text-base leading-7 text-circle opacity-50 ml-9'>Income</li>
                        </ul>
                        <hr className='opacity-25 bg-circle xl:w-350 h-02 my-6 md:w-223' />
                        <button className='hover:text-white hover:bg-circle font-public-sans text font-bold tracking-m115 w-168 h-12 rounded-3xl mx-auto border-2 border-circle'>Request Access</button>
                    </div>
                    <div className='w-350 md:text-center xl:text-left'>
                        <h1 className='text-main-color-1 font-dm-serif text-32 leading-48 tracking-m246 mb-4'>Premium Plan</h1>
                        <p className='mb-4 text-main-color-4 font-public-sans text-base leading-7'>Get tailored solutions, volume pricing, and dedicated support for your team </p>
                        <h1 className='text-circle font-dm-serif text-56 tracking-m431'>$499.00</h1>
                        <hr className='opacity-25 bg-circle xl:w-350 h-02 my-6 md:w-223' />
                        <ul className='flex flex-col gap-2 md:text-start md:pl-10 xl:pl-0'>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Transactions</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Auth</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Identity</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Investments</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon /> Assets</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon />Liabilities</li>
                            <li className='flex flex-row items-center gap-6 text-circle font-public-sans text-base leading-7'><TickIcon />Income</li>
                        </ul>
                        <hr className='opacity-25 bg-circle xl:w-350 h-02 my-6 md:w-223' />
                        <button className='hover:text-white hover:bg-circle font-public-sans text font-bold tracking-m115 w-168 h-12 rounded-3xl mx-auto border-2 border-circle'>Request Access</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pricing;