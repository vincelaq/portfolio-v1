import React from 'react';

const Navigation = () => {
    return (
        <nav className='bg-navy'>
            <div className=' mx-auto px-2 sm:px-6 lg:px-8'>
                
                <div className='flex flex-row border-2 border-pink'>
                    <hr className='border-1 border-t-slate w-1/6 my-auto'></hr>
                    <div className='text-pink font-Roboto mx-5'>laq.vince@gmail.com</div>
                    <div className='h-auto my-auto mx-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="slate" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
