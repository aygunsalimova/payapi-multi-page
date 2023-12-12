import React from 'react';
import '../App.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Contact(props) {
    return (
        <>
            <div id='pricing' className='bg-main-color-3'>
                <div className='px-165'>
                    <Navbar />
                </div>
                <div className='absolute w-780 h-780 bg-circle opacity-25 top-m527 right-m140 rounded-780'></div>
                <h1 className='mx-265 text-circle font-dm-serif text-56 mt-8 mb-10 w-730 tracking-m431'>Submit a help request and we’ll get in touch shortly.</h1>

                <div className='flex flex-col gap-6'>
                    <input
                        type="text"
                        name="Name"
                        id="Name"
                        className='pb-3 font-public-sans tracking-m115 text-base text-circle opacity-100 pl-5 mx-265 border-b-circle/30 border-2 outline-none bg-transparent border-t-transparent border-r-transparent border-l-transparent h-11 w-1/4'
                        placeholder='Name' />
                    <input
                        type="email"
                        name="Email"
                        id="Email"
                        className='pb-3 font-public-sans tracking-m115 text-base text-circle opacity-100 pl-5 mx-265 border-b-circle/30 border-2 outline-none bg-transparent border-t-transparent border-r-transparent border-l-transparent h-11 w-1/4'
                        placeholder='Email Address' />
                    <input
                        type="text"
                        name="CompanyName"
                        id="CompanyName"
                        className='pb-3  text-circle opacity-100 pl-5 mx-265 border-b-circle/30 border-2 outline-none bg-transparent border-t-transparent border-r-transparent border-l-transparent h-11 w-1/4'
                        placeholder='Company Name' />
                    <input
                        type="text"
                        name="Title"
                        id="Title"
                        className='pb-3 font-public-sans tracking-m115 text-base text-circle opacity-100 pl-5 mx-265 border-b-circle/30 border-2 outline-none bg-transparent border-t-transparent border-r-transparent border-l-transparent h-11 w-1/4'
                        placeholder='Title' />
                    <textarea 
                        name="Message" 
                        id="Message" 
                        placeholder='Message'
                        rows={3}
                        className='resize-none pb-3 font-public-sans tracking-m115 text-base text-circle opacity-100 pl-5 mx-265 border-b-circle/30 border-2 outline-none bg-transparent border-t-transparent border-r-transparent border-l-transparent w-1/4' 
                        ></textarea>
                    <input 
                        type="checkbox" 
                        name="StayUpToDate" 
                        id="StayUpToDate" 
                        className='accent-main-color-1/25 mx-265 h-6 w-6 border-none'
                        />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
