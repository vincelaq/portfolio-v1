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
                                NAAM House
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                Sac Sewer
                            </div>
                            <div 
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                CA Energy
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                FMB, Inc.
                            </div>
                        </div>
                    </div>
                    <div className='basis-4/5 font-Inter text-slate'>
                        <span className='text-lightest-slate  text-lg font-semibold'>Volunteer Developer</span> 
                        <span className='text-pink  text-lg font-semibold'> @ NAAM House, Inc.</span>
                        
                        <ul className='work-list'>
                            <li className='font-Inter'>
                                Write, maintain code for client Naam House a non-profit organization aimed to help veterans in need
                            </li>
                            <li className='font-Inter'>
                                Work with a variety of different languages and technologies such as JavaScript, React Native, MongoDB, MySQL, Heroku, Vonage, and Expo
                            </li>
                            <li className='font-Inter'>
                                Communicate with NAAM House representatives regarding design and functionality of the app
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
                                NAAM House
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                Sac Sewer
                            </div>
                            <div 
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                CA Energy
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                FMB, Inc.
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
                                Delegate tasks and project scope with contractors, oversee progress
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
                                NAAM House
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                Sac Sewer
                            </div>
                            <div
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                CA Energy
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                FMB, Inc.
                            </div>
                        </div>
                    </div>
                    <div className='basis-4/5 font-Inter text-slate'>
                        <span className='text-lightest-slate  text-lg font-semibold'>Mechanical Engineer Intern</span> 
                        <span className='text-pink  text-lg font-semibold'> @ CA Energy Commissions</span>
                        
                        <ul className='work-list'>
                            <li className='font-Inter'>
                                Corrected project cost and expenditure reports of existing and potential energy projects funded by the State of California
                            </li>
                            <li className='font-Inter'>
                                Reviewed energy research reports prior to management review
                            </li>
                            <li className='font-Inter'>
                                Communicate with team members regarding reports and engineering calculations
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
                                NAAM House
                            </div>
                            <div 
                                onClick={() => handleWorkChange(1)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                Sac Sewer
                            </div>
                            <div
                                onClick={() => handleWorkChange(2)} 
                                className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                CA Energy
                            </div>
                            <div
                                onClick={() => handleWorkChange(3)} 
                                className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                                FMB, Inc.
                            </div>
                        </div>
                    </div>
                    <div className='basis-4/5 font-Inter text-slate'>
                        <span className='text-lightest-slate  text-lg font-semibold'>Mechanical Engineer Intern</span> 
                        <span className='text-pink  text-lg font-semibold'> @ Frank M. Booth, Inc.</span>
                        
                        <ul className='work-list'>
                            <li className='font-Inter'>
                                Detailed HVAC and pipe designs for several projects
                            </li>
                            <li className='font-Inter'>
                            Plotted and spooled pipe designs to be manufactured, fabricated and
delivered on site
                            </li>
                            <li className='font-Inter'>
                                Communicate with team members regarding design and engineering calculations
                            </li>
                        </ul>
                    </div>
                   
                </div>
    
                
            </div>
        );
    }

};

export default WorkPage;
