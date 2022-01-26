import React from 'react';

const Navigation = () => {
    return (
        <nav className='bg-gradient-to-b from-navy sticky top-0 z-10'>
            <div className='mx-5 py-8'>
                
                <div className='flex flex-row mx-auto'>
                    <div className='flex flex-row basis-1/2 justify-start'>
                        
                            <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" className='h-10 mx-8'>
                                <title>Logo</title>
                                <g transform="translate(0.000000, 0.000000)">
                                    <g transform="translate(3.000000, 3.000000)">
                                        <polygon id="Shape" stroke="#EA00D9" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23" fill="#0B192F"></polygon>
                                        <path d="M 25 30.75 L 30.337 30.75 L 39.4457 57.405 L 39.8133 57.405 L 48.922 30.75 L 54.2597 30.75 L 42.4825 63.477 L 36.7773 63.477 L 25 30.75 Z" fill="#EA00D9"></path>
                                    </g>
                                </g>
                            </svg>

                       

                    </div>
                    <div className='flex flex-row basis-1/2 justify-end'>
                       
                        <div className='my-auto mx-4'>
                            <a href="#about">
                                <span className='font-Roboto text-xs-sm text-pink'>01.</span>
                                <span className='font-Roboto font-regular text-xs-sm text-light-slate ml-2'>About</span>
                            </a>
                        </div>
                        
                        <div className='my-auto mx-4'>
                            <a href="#work">
                                <span className='font-Roboto text-xs-sm text-pink'>02.</span>
                                <span className='font-Roboto font-regular text-xs-sm text-light-slate ml-2'>Experience</span>
                            </a>
                        </div>
                        <div className='my-auto mx-4'>
                            <a href="#project">
                                <span className='font-Roboto text-xs-sm text-pink'>03.</span>
                                <span className='font-Roboto font-regular text-xs-sm text-light-slate ml-2'>Projects</span>
                            </a>
                        </div>
                        <div className='my-auto mx-4'>
                            <a href="#contact">
                                <span className='font-Roboto text-xs-sm text-pink'>04.</span>
                                <span className='font-Roboto font-regular text-xs-sm text-light-slate ml-2'>Contact</span>
                            </a>
                        </div>
                        <a href="resume.pdf">
                            <div className='my-auto ml-4 mr-10 py-2 px-4 border rounded border-pink text-pink font-Roboto text-sm'>
                                Resume
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
