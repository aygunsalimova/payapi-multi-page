import React from 'react';
import TableTop from '../assets/tabletop.png'

function HomeBody(props) {
    return (
        <div id='home-body' className='bg-main-color-3 pt-150 pr-260 pb-0 pl-156'>
            <div className='flex flex-row justify-between items-center'>
            <div className='part-1'>
                <img src={TableTop} alt="" />
                <div className='flex flex-col justify-center items-center gap-8 bg-main-color-5 shadow-table w-445 h-284'>
                    <code className='w-381 h-180 text-main-color-2 font-roboto text-xs leading-5 tracking-2'> &lt;form id="form-id" method="GET"&gt; &lt;/form&gt; <br/>
                        &lt;script <br/>
                        <span style={{width: "14px", display: "inline-block"}}></span>src="https://loremipsum.com/api.js" <br/>
                        <span style={{width: "14px", display: "inline-block"}}></span>data-client-name="Your Company's Name" <br/>
                        <span style={{width: "14px", display: "inline-block"}}></span>data-form-id="form-id" <br/>
                        <span style={{width: "14px", display: "inline-block"}}></span>data-key="test_key" <br/>
                        <span style={{width: "14px", display: "inline-block"}}></span>data-product="transactions" <br/>
                        <span style={{width: "14px", display: "inline-block"}}></span>data-env="sandbox"&gt; <br/>
                        &lt;/script&gt; <br/>
                    </code>
                </div>
            </div>
            <div className="w-445">
                <h1 className='text-circle font-dm-serif text-5xl leading-56 tracking-m369 h-16 overflow-y-hidden'>Easy to implement</h1>
                <p className='text-main-color-4 font-public-sans text-base leading-7 flex flex-col justify-center items-start gap-6'>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
            </div>
            </div>
            
        </div>
    );
}

export default HomeBody;