import React, { useState } from 'react';


const WorkPage = () => {
    const [work, setWork] = useState(0);
    
    


    return (
        <div className='flex flex-col justify-start items-center bg-navy max-w-2xl pb-96 mb-20 pl-16'>
            <div className='flex flex-row p-4 pl-0 w-full'>
                <span className='font-Roboto text-pink text-xl mr-3'>02.</span> 
                <span className='font-Inter font-bold text-lightest-slate text-2xl'>Work Experience</span>
                <span className='border-b border-b-lightest-navy w-72 my-auto mx-6'></span>
            </div>
            <div className='flex flex-row pt-6'>
                <div className='basis-1/5'>
                    <div className='flex flex-col w-30'>
                        <div className='border-l-2 border-l-pink h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                            NAAM House
                        </div>
                        <div className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
                            Sac Sewer
                        </div>
                        <div className='border-l-2 border-l-lightest-navy h-10 p-5 flex flex-col justify-center font-Roboto text-slate text-xs'>
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
};

export default WorkPage;
