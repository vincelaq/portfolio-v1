import React from 'react';


const ContactPage = () => {
    
    
    return (
        <div id="contact" className='flex flex-col mx-24 mb-72 justify-start items-center bg-navy max-w-6xl'>
            
            <div className='font-Roboto text-pink text-base'>04. What's Next?</div> 
            <div className='font-Inter font-bold text-light-slate text-5xl pt-3 pb-5'>Get In Touch</div>
            <div className='w-6/12 text-center font-Inter text-slate mb-12'>
                I’m always looking for new exciting opportunities and projects so my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </div>
            <div className='border border-pink py-4 px-8 text-pink rounded-md font-Roboto text-sm mb-56'>
                Say Hello
            </div>
            <div className='text-slate font-Roboto text-xs text-center p-8'>
                Built by Vincent Laquindanum<br/>
                <a href="https://github.com/bchiang7/v4">Beautifully Designed by Brittany Chiang</a>
            </div>
            
        </div>
    );
};

export default ContactPage;
