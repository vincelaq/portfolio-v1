import React from 'react';


const AboutPage = () => {
    
    
    return (
        <div id='about' className='flex flex-col ml-24 mb-72 justify-start items-center bg-navy max-w-4xl'>
            <div className='flex flex-row p-4 pl-0 w-full'>
                <span className='font-Roboto text-pink text-xl mr-3'>01.</span> 
                <span className='font-Inter font-bold text-lightest-slate text-2xl'>About Me</span>
                <span className='border-b border-b-lightest-navy w-72 my-auto mx-6'></span>
            </div>
            <div className='flex flex-row pt-6'>
                <div className='basis-3/5 font-Inter text-slate'>
                    Hello! My name is Vince and I enjoy building things from fullstack apps to video games. My interests in development started in 2016 when I learned Python and SQL for work in my civil engineering job. My coding work was limited as a civil engineer, but I wanted to continue learning and buiilding things so I self-taught for a few months before enrolling and General Assembly’s Software Engineering Immersive bootcamp. <br/><br/>
                    Fast-forward today, I’ve created and develop quite a few projects that can be found on my GitHub or Work section of my portfolio. Here are a few technologies I've been working with:
                    
                    <ul className='skills-list'>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Django</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>AWS</li>
                    </ul>
                </div>
                <div className='basis-2/5'>
                    <div className='border bg-pink w-72 mx-10'>
                        <img className='opacity-70' src="profile.jpeg"/>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default AboutPage;
