import React from 'react';

const Navigation = () => {
    return (
        <nav className='bg-navy'>
            <div className='mx-auto py-5'>
                
                <div className='flex flex-row mx-auto'>
                    <div className='flex flex-row basis-1/2 justify-start'>
                        <hr className='border-1 border-t-slate w-1/6 my-auto py-auto'></hr>
                        <div className='text-pink font-Roboto text-sm mx-5 my-auto'>laq.vince@gmail.com</div>
                        <div className='h-auto my-auto ml-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            
                        </div>
                        <div className='h-auto my-auto ml-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                <title>Instagram</title>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                        <div className='h-auto my-auto ml-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                <title>Twitter</title>
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </div>
                        <div className='h-auto my-auto ml-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                <title>LinkedIn</title>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                        <div className='h-auto my-auto ml-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                <title>CodePen</title>
                                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                                <line x1="12" y1="2" x2="12" y2="8.5"></line>
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-row basis-1/2 justify-end'>
                        <div className='my-auto mx-4'>
                            <span className='font-Roboto text-xs text-pink'>01.</span>
                            <span className='font-Roboto font-medium text-xs text-slate ml-2'>About</span>
                        </div>
                        <div className='my-auto mx-4'>
                            <span className='font-Roboto text-xs text-pink'>02.</span>
                            <span className='font-Roboto font-medium text-xs text-slate ml-2'>Experience</span>
                        </div>
                        <div className='my-auto mx-4'>
                            <span className='font-Roboto text-xs text-pink'>03.</span>
                            <span className='font-Roboto font-medium text-xs text-slate ml-2'>Work</span>
                        </div>
                        <div className='my-auto mx-4'>
                            <span className='font-Roboto text-xs text-pink'>04.</span>
                            <span className='font-Roboto font-medium text-xs text-slate ml-2'>Contact</span>
                        </div>
                        <div className='my-auto ml-4 mr-10 py-2 px-3 border rounded border-pink text-pink font-Roboto text-xs'>
                            Resume
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
