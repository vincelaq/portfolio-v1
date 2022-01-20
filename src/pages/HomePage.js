import React from 'react';

const HomePage = () => {
    return (
        <div className='flex flex-col justify-start bg-navy h-full'>
            <div className='mx-auto my-48'>
                <div className='font-Roboto font-regular text-pink mb-5 text-lg'>
                    Hi, my name is
                </div>
                <div className='font-Inter font-bold text-lightest-slate text-7xl mb-3'>
                    Vincent Laquindanum.
                </div>
                <div className='font-Inter font-bold text-slate text-7xl mb-5'>
                    I build things with code.
                </div>

                <p className='font-Inter text-slate text-lg'>
                    I’m a software engineer specializing in building (and occasionally <br/>
                    designing) applications. Currently, I’m focused on building a fullstack <br/>
                    applications for the non-profit <span className='text-pink'>NAAM House, Inc.</span>
                </p>
                <div className='border rounded border-pink text-pink font-Roboto text-s w-fit py-4 px-5 my-10'>
                    Check out my project!
                </div>
            </div>
            

            <div className='mx-auto my-48'>
                <div className='font-Roboto font-regular text-pink mb-5 text-lg'>
                    Hi, my name is
                </div>
                <div className='font-Inter font-bold text-lightest-slate text-7xl mb-3'>
                    Vincent Laquindanum.
                </div>
                <div className='font-Inter font-bold text-slate text-7xl mb-5'>
                    I build things with code.
                </div>

                <p className='font-Inter text-slate text-lg'>
                    I’m a software engineer specializing in building (and occasionally <br/>
                    designing) applications. Currently, I’m focused on building a fullstack <br/>
                    applications for the non-profit <span className='text-pink'>NAAM House, Inc.</span>
                </p>
                <div className='border rounded border-pink text-pink font-Roboto text-s w-fit py-4 px-5 my-10'>
                    Check out my project!
                </div>
            </div>
        </div>
    );
};

export default HomePage;
