import React from 'react';

const HomePage = () => {
    return (
        <div className='flex flex-col justify-start bg-navy h-screen '>
            <div className='mx-48 my-48'>
                <div className='font-Roboto text-pink mb-5'>
                    Hi, my name is
                </div>
                <div className='font-Inter font-bold text-lightest-slate text-6xl mb-3'>
                    Vincent Laquindanum.
                </div>
                <div className='font-Inter font-bold text-slate text-6xl mb-5'>
                    I build things with code.
                </div>

                <p className='font-Inter text-slate'>
                    I’m a software engineer specializing in building (and occasionally <br/>
                    designing) applications. Currently, I’m focused on building a fullstack <br/>
                    applications for the non-profit <span className='text-pink'>NAAM House, Inc.</span>
                </p>
                <div className='border rounded border-pink text-pink font-Roboto text-xs w-fit py-3 px-4 my-10'>
                    Check out my project!
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;
