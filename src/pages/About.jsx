import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Avatar from '../assets/about.png'


function About(props) {
    return (
        <>
            <div id='about' className='bg-main-color-3 md:pb-100'>
                <div className='xl:px-24 md:px-10'>
                    <Navbar />
                </div>
                <div className='absolute w-780 h-780 bg-circle opacity-25 top-m527 right-m140 rounded-780 md:right-m420'></div>
                <h1 className='xl:mx-24 text-circle font-dm-serif xl:text-56 mt-8 mb-14 xl:w-730 xl:tracking-m431 xl:h-189 leading-56 xl:text-left md:mx-auto md:text-center md:tracking-m369 md:w-560 md:h-56 md:text-5xl md:leading-1'>We empower innovators by delivering access to the financial system</h1>

                <div className='xl:mx-24 flex flex-col gap-y-14 md:mx-10'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='w-253 text-circle text-32 tracking-m246 leading-10 font-dm-serif'>Our Vision</h1>
                        <p className='xl:w-635 font-public-sans text-base leading-7 text-main-color-4 md:w-456'>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <h1 className='w-253 text-circle text-32 tracking-m246 leading-10 font-dm-serif'>Our Business</h1>
                        <p className='xl:w-635 font-public-sans text-base leading-7 text-main-color-4 md:w-456'>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
                    </div>
                </div>

                <img src={Avatar} alt="avatar" className='w-webkit-full my-100' />

                <div className='flex flex-row xl:mx-24 justify-between gap-10 md:mx-10'>
                    <div className='flex flex-col w-1/3'>
                        <hr className='opacity-25 bg-circle w-100 h-02 my-6' />
                        <p className='text-main-color-4 font-public-sans text-base leading-7 opacity-70'>Team Members</p>
                        <h1 className='text-main-color-1 font-dm-serif text-56 tracking-m431'>300+</h1>
                        <hr className='opacity-25 bg-circle w-100 h-02 my-6' />
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <hr className='opacity-25 bg-circle w-100 h-02 my-6' />
                        <p className='text-main-color-4 font-public-sans text-base leading-7 opacity-70'>Offices in the US</p>
                        <h1 className='text-main-color-1 font-dm-serif text-56 tracking-m431'>3</h1>
                        <hr className='opacity-25 bg-circle w-100 h-02 my-6' />
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <hr className='opacity-25 bg-circle w-100 h-02 my-6' />
                        <p className='text-main-color-4 font-public-sans text-base leading-7 opacity-70'>Transactions analyzed</p>
                        <h1 className='text-main-color-1 font-dm-serif text-56 tracking-m431'>10M+</h1>
                        <hr className='opacity-25 bg-circle w-100 h-02 my-6' />
                    </div>
                </div>

                <div className='xl:mx-165 flex flex-col gap-y-14 mt-16 md:mx-10'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='w-253 text-circle text-32 tracking-m246 leading-10 font-dm-serif'>The Culture</h1>
                        <p className='xl:w-635 font-public-sans text-base leading-7 text-main-color-4 md:w-456'>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <h1 className='w-253 text-circle text-32 tracking-m246 leading-10 font-dm-serif'>The People</h1>
                        <p className='xl:w-635 font-public-sans text-base leading-7 text-main-color-4 md:w-456'>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default About;