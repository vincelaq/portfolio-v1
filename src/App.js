import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ProjectPage from './pages/ProjectPage';



const App = () => {
    return (
        <Router>
            <div className='h-screen bg-navy'>
                <Navigation/>
                <div className='flex flex-row h-full'>
                    <section className='bg-navy basis-1/12 relative h-full'>
                        <div className='flex flex-col fixed bottom-0 left-10'>
                            
                            <div className='m-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                    <title>GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                
                            </div>
                            <div className='m-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                    <title>Instagram</title>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                            <div className='m-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                    <title>Twitter</title>
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </div>
                            <div className='m-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                    <title>LinkedIn</title>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <div className='m-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#a8b2d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5">
                                    <title>CodePen</title>
                                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                                    <line x1="12" y1="2" x2="12" y2="8.5"></line>
                                </svg>
                            </div>


                            <div className='border-l border-l-light-slate h-40 mx-auto mt-3'></div>
                        </div>
                    </section>
                    <main className='basis-10/12 flex flex-col items-center'>
                        <HomePage/>
                        <AboutPage/>
                        <WorkPage/>
                        <ProjectPage/>
                    </main>
                    <section className='bg-navy basis-1/12 relative'>
                        <div className='flex flex-col fixed bottom-0 -right-5 justify-center items-center'>
                            
                            <div className='text-light-slate font-light font-Roboto text-xs-sm mx-5 my-3 rotate-90 -translate-y-20'>laq.vince@gmail.com</div>


                            <div className='border-l border-l-light-slate h-40 mx-auto mt-3'></div>
                        </div>
                    </section>
                </div>
            </div>
        </Router>
    )
}

export default App;
