import React from 'react';

const HomePage = () => {
    return (
        <div className='flex flex-col justify-start bg-navy h-full'>
            <div className='mx-40 my-48'>
                <div className='font-Roboto font-regular text-pink mb-10 text-base'>
                    Hi, my name is
                </div>
                <div className='font-Inter font-bold text-lightest-slate text-6-7xl leading-10'>
                    Vincent Laquindanum.
                </div>
                <div className='font-Inter font-bold text-slate text-6-7xl'>
                    I build things with code.
                </div>

                <p className='font-Inter text-slate text-base my-5'>
                    I’m a software engineer specializing in building (and occasionally <br/>
                    designing) applications. Currently, I’m focused on building a fullstack <br/>
                    applications for the non-profit <span className='text-pink'>NAAM House, Inc.</span>
                </p>
                <div className='border rounded border-pink text-pink font-Roboto text-s w-fit py-4 px-5 my-16'>
                    Check out my project!
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;
