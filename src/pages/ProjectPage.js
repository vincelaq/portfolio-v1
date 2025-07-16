import React from 'react';

const ProjectPage = () => {
    
    
    return (
        <div id="project" className='flex flex-col px-24 pb-60 justify-start items-center bg-navy max-w-6xl'>
            <div className='flex flex-row p-4 pl-0 w-full'>
                <span className='font-Roboto text-pink text-xl mr-3'>03.</span> 
                <span className='font-Inter font-bold text-lightest-slate text-2xl'>Projects</span>
                <span className='border-b border-b-lightest-navy w-72 my-auto mx-6'></span>
            </div>

            <div className='my-12'>
                <div className='feature'>
                    <div className='project-content-second'>
                        <div className='font-Roboto font-light text-xs-sm text-pink w-full text-left my-1'>
                            Featured Project
                        </div>
                        <div className='font-Inter font-bold text-2xl w-full text-lightest-slate text-left mb-6'>
                            Retro Future
                        </div>
                        <div className='bg-light-navy py-5 pl-7 pr-4 text-light-slate text-left text-sm-base rounded'>
                            A marketplace for the world’s most coveted items in the smartest way possible. Buy and sell the vintage apparel, electronics, music, and accessories with the confidence of Retro Future product verification process to protect both buyers and sellers.
                        </div>

                        <div className='flex flex-row justify-start font-Roboto text-sm text-slate my-3'>
                            <span className='px-4'>Django</span>
                            <span className='px-4'>React</span>
                            <span className='px-4'>Redux</span>    
                            <span className='px-4'>PostgreSQL</span>
                            <span className='pl-4'>AWS</span>
                        </div>
                        
                        <div className='flex flex-row justify-start'>
                            <a href="https://github.com/vincelaq/retro-future">
                                <div className='m-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>GitHub</title>
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    
                                </div>
                            </a>
                            <a href="http://retro-future.herokuapp.com/">
                                <div className='ml-3 my-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='project-image-second'>
                        <div className='project-image-wrapper object-fill'>
                            <img className='w-full h-full opacity-60' src="https://retro-future-flex-525.s3.us-west-1.amazonaws.com/portfolio/retro-future.png" alt="retro-future front page screenshot"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-12'>
                <div className='feature'>
                    <div className='project-content-second'>
                        <div className='font-Roboto font-light text-xs-sm text-pink w-full text-left my-1'>
                            Featured Project
                        </div>
                        <div className='font-Inter font-bold text-2xl w-full text-lightest-slate text-left mb-6'>
                            DevBook
                        </div>
                        <div className='bg-light-navy py-5 pr-7 pl-8 text-light-slate text-left text-sm-base rounded'>
                            A new social media platform where software developers can share their code, ask for help, share ideas, discuss events and make valuable connections. DevBook is focused on keeping up with industry standards. It will be a place where you can find the answers to your development issues in a modern way.
                        </div>

                        <div className='flex flex-row justify-start font-Roboto text-sm text-slate my-3'>
                            <span className='pr-4'>Node</span>
                            <span className='px-4'>Express</span>
                            <span className='px-4'>React</span>   
                            <span className='px-4'>MongoDB</span>
                            <span className='px-4'>AWS</span>
                        </div>
                        
                        <div className='flex flex-row justify-start'>
                            <a href="https://github.com/vincelaq/dev-social-media">
                                <div className='my-3 mr-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>GitHub</title>
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    
                                </div>
                            </a>
                            <a href="https://devbook-flex525.herokuapp.com/">
                                <div className='m-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='project-image-second'>
                        <div className='project-image-wrapper object-fill'>
                            <img className='w-full h-full opacity-60' src="https://retro-future-flex-525.s3.us-west-1.amazonaws.com/portfolio/devbook.png" alt="devbook front page screenshot"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-12'>
                <div className='feature'>
                    <div className='project-content-second'>
                        <div className='font-Roboto font-light text-xs-sm text-pink w-full text-left my-1'>
                            Featured Project
                        </div>
                        <div className='font-Inter font-bold text-2xl w-full text-lightest-slate text-left mb-6'>
                            Historic Stops
                        </div>
                        <div className='bg-light-navy py-5 pl-7 pr-4 text-light-slate text-left text-sm-base rounded'>
                            Commissioned us to build a travel community, code-named Project Wayfarer, for users to share tips about their favorite locations around the world. The client has provided basic wireframes and user stories.
                        </div>

                        <div className='flex flex-row justify-start font-Roboto text-sm text-slate my-3'>
                            <span className='px-4'>Django</span> 
                            <span className='px-4'>PostgreSQL</span>
                            <span className='pl-4'>AWS</span>
                        </div>
                        
                        <div className='flex flex-row justify-start'>
                            <a href="https://github.com/rsato1007/wayfarer-project">
                                <div className='m-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>GitHub</title>
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://historic-stops.herokuapp.com/">
                                <div className='ml-3 my-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='project-image-second'>
                        <div className='project-image-wrapper object-fill'>
                            <img className='w-full h-full opacity-60' src="https://retro-future-flex-525.s3.us-west-1.amazonaws.com/portfolio/historic-stops.png" alt="historic-stops front page screenshot"/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='my-12'>
                <div className='feature'>
                    <div className='project-content-second'>
                        <div className='font-Roboto font-light text-xs-sm text-pink w-full text-left my-1'>
                            Featured Project
                        </div>
                        <div className='font-Inter font-bold text-2xl w-full text-lightest-slate text-left mb-6'>
                            Tron
                        </div>
                        <div className='bg-light-navy py-5 pr-7 pl-8 text-light-slate text-left text-sm-base rounded'>
                            A head-to-head version of classic game "Snake". Unlike the original game where the tail grows longer as you collect apples, TRON Lightcycle Battle does not have a tail, but any space that has been occupied by the player(s) in the past will be considered a wall to crash into for the entire round.
                        </div>

                        <div className='flex flex-row justify-start font-Roboto text-sm text-slate my-3'>
                            <span className='pr-4'>JavaScript</span>
                            <span className='px-4'>HTML</span>
                            <span className='px-4'>CSS</span>   
                            <span className='px-4'>jQuery</span>
                        </div>
                        
                        <div className='flex flex-row justify-start'>
                            <a href="https://github.com/vincelaq/tron-lightcycle-game">
                                <div className='my-3 mr-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>GitHub</title>
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://vincelaq.github.io/tron-lightcycle-game/">
                                <div className='m-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6">
                                        <title>External Link</title>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='project-image-second'>
                        <div className='project-image-wrapper object-fill'>
                            <img className='w-full h-full opacity-60' src="https://retro-future-flex-525.s3.us-west-1.amazonaws.com/portfolio/tron.png" alt="tron front page screenshot"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
