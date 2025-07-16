import React, { useState } from 'react';


const WorkPage = () => {
    const [work, setWork] = useState(0);
    
    const handleWorkChange = (n) => {
        setWork(n)
    };

    if (work === 0) {
        return (
            <div id="work" className='flex flex-col justify-start items-center bg-navy max-w-2xl pb-40 mb-20 pl-16'>
                <div className='flex flex-row p-4 pl-0 w-full'>
                    <span className='font-Roboto text-pink text-xl mr-3'>02.</span> 
                    <span className='font-Inter font-bold text-lightest-slate text-2xl'>Work Experience</span>
                    <span className='border-b border-b-lightest-navy w-72 my-auto mx-6'></span>
                </div>
                <div className='flex flex-row pt-6'>
                    <div className='basis-1/5'>
                        <div className='flex flex-col w-30'>
                            <div
                                onClick={() => handleWorkChange(0)} 
                                className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                UChicago
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                AdvanceH2
                            </div>
                            <div 
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                VirtualHaus
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                Sac Sewer
                            </div>
                        </div>
                    </div>
                    <div className='basis-4/5 font-Inter text-slate'>
                        <span className='text-lightest-slate  text-lg font-semibold'>Software Developer</span> 
                        <span className='text-pink  text-lg font-semibold'> @ UChicago IPPH.</span>
                        
                        <ul className='work-list'>
                            <li className='font-Inter'>
                                Engineered the frontend of eRMS—an electronic research management system—in React/TypeScript enhancing user experience and interface responsiveness across study tracking workflows.
                            </li>
                            <li className='font-Inter'>
                                Developed and maintained scalable backend services for eRMS using Django, and PostgreSQL, improving data retrieval efficiency.
                            </li>
                            <li className='font-Inter'>
                                Implemented comprehensive test coverage across the full stack ensuring high system reliability and minimizing regressions.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (work === 1) {
        return (
            <div id="work" className='flex flex-col justify-start items-center bg-navy max-w-2xl pb-40 mb-20 pl-16'>
                <div className='flex flex-row p-4 pl-0 w-full'>
                    <span className='font-Roboto text-pink text-xl mr-3'>02.</span> 
                    <span className='font-Inter font-bold text-lightest-slate text-2xl'>Work Experience</span>
                    <span className='border-b border-b-lightest-navy w-72 my-auto mx-6'></span>
                </div>
                <div className='flex flex-row pt-6'>
                    <div className='basis-1/5'>
                        <div className='flex flex-col w-30'>
                            <div
                                onClick={() => handleWorkChange(0)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                UChicago
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                AdvanceH2
                            </div>
                            <div 
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                VirtualHaus
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                SacSewer
                            </div>
                        </div>
                    </div>
                    <div className='basis-4/5 font-Inter text-slate'>
                        <span className='text-lightest-slate  text-lg font-semibold'>Software Developer (Freelance)</span> 
                        <span className='text-pink  text-lg font-semibold'> @ AdvanceH2</span>
                        <ul className='work-list'>
                            <li className='font-Inter'>
                                Designed the frontend of AdvanceH2, an AI-powered platform that aggregates hydrogen energy news and articles, improving information accessibility for researchers and industry professional.
                            </li>
                            <li className='font-Inter'>
                                Implemented robust backend infrastructure for AdvanceH2 using Supabase and Prisma, streamlining data handling and accelerating feature deployment
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (work === 2) {
        return (
            <div id="work" className='flex flex-col justify-start items-center bg-navy max-w-2xl pb-40 mb-20 pl-16'>
                <div className='flex flex-row p-4 pl-0 w-full'>
                    <span className='font-Roboto text-pink text-xl mr-3'>02.</span> 
                    <span className='font-Inter font-bold text-lightest-slate text-2xl'>Work Experience</span>
                    <span className='border-b border-b-lightest-navy w-72 my-auto mx-6'></span>
                </div>
                <div className='flex flex-row pt-6'>
                    <div className='basis-1/5'>
                        <div className='flex flex-col w-30'>
                            <div
                                onClick={() => handleWorkChange(0)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                UChicago
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                AdvanceH2
                            </div>
                            <div
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                VirtualHaus
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                SacSewer
                            </div>
                        </div>
                    </div>
                    <div className='basis-4/5 font-Inter text-slate'>
                        <span className='text-lightest-slate  text-lg font-semibold'>Frontend Developer (Freelance)</span> 
                        <span className='text-pink  text-lg font-semibold'> @ VirtualHaus</span>
                        
                        <ul className='work-list'>
                            <li className='font-Inter'>
                                Developed responsive, high-performance user interfaces for a 3D application using React/TypeScript, streamlining component architecture and enhancing user experience.
                            </li>
                            <li className='font-Inter'>
                                Designed intuitive and visually cohesive user interface layouts, aligning with user experience best practices and brand guidelines
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (work === 3) {
        return (
            <div id="work" className='flex flex-col justify-start items-center bg-navy max-w-2xl pb-40 mb-20 pl-16'>
                <div className='flex flex-row p-4 pl-0 w-full'>
                    <span className='font-Roboto text-pink text-xl mr-3'>02.</span> 
                    <span className='font-Inter font-bold text-lightest-slate text-2xl'>Work Experience</span>
                    <span className='border-b border-b-lightest-navy w-72 my-auto mx-6'></span>
                </div>
                <div className='flex flex-row pt-6'>
                    <div className='basis-1/5'>
                        <div className='flex flex-col w-30'>
                            <div
                                onClick={() => handleWorkChange(0)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                UChicago
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                AdvanceH2
                            </div>
                            <div
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                VirtualHaus
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                SacSewer
                            </div>
                        </div>
                    </div>
                    <div className='basis-4/5 font-Inter text-slate'>
                        <span className='text-lightest-slate  text-lg font-semibold'>Civil Engineer</span> 
                        <span className='text-pink  text-lg font-semibold'> @ Sacramento Area Sewer District</span>
                        
                        <ul className='work-list'>
                            <li className='font-Inter'>
                                Analyze and interpret data to problem solve and make recommendations
                            </li>
                            <li className='font-Inter'>
                                Develop reports of maintenance work and present data to stakeholders
                            </li>
                            <li className='font-Inter'>
                                Delegate tasks and project scope with interns, oversee progress
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

};

export default WorkPage;
