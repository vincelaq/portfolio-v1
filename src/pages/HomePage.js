import React from 'react';

const HomePage = () => {
    return (
        <div className='flex flex-col justify-start bg-navy h-full'>
            <div className='mx-auto my-52 pr-52'>
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
                    I’m a software developer specializing in building (and occasionally <br/>
                    designing) applications. Currently, I’m focused on building software <br/>
                    for University of Chicago's <span className='text-pink'>Institute of Population and Precision Health</span>
                </p>
                <a href="https://github.com/vincelaq">
                    <div className='border rounded border-pink text-pink font-Roboto text-s w-fit py-4 px-5 my-16'>
                        Check out my projects!
                    </div>
                </a>
            </div>
            
        </div>
    );
};

export default HomePage;
