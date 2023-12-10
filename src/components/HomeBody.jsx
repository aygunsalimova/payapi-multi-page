import React from 'react';
import TableTop from '../assets/tabletop.png'

function HomeBody(props) {
    return (
        <div id='home-body'>
            <div className='group-by'>
            <div className='part-1'>
                <img src={TableTop} alt="" />
                <div className='box-table'>
                    <code> &lt;form id="form-id" method="GET"&gt; &lt;/form&gt; <br/>
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
            <div className="part-2">
                <h1>Easy to implement</h1>
                <p>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
            </div>
            </div>
            
        </div>
    );
}

export default HomeBody;