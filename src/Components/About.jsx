import React from 'react';

const About = () => {
    return (
        <div className='bg-gradient-to-b from-white to-[#F9FBE7]'>
            <div className='flex justify-center mt-4 pb-2'>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">About Me</h1>
            </div>

            <hr style={{ borderWidth: '1px', width: '50rem', margin: '0 auto' }} />

            <div className='mt-10 ml-36'>
                <div className='w-52 h-10 flex items-center justify-center bg-black text-white'>
                    <h1 className=''>Educational Qualification</h1>
                </div>

                <div className='pt-2'>
                    <p className='w-[50rem]'>I am currently finishing my <span className='font-semibold'>Bachelors</span> in 
                        <span className='font-semibold'> Applied Mathematics</span>. During my studies,
                        I have developed a strong foundation in analytical thinking and problem-solving.
                        My coursework has covered a wide range of topics, from differential equations to
                        computational methods, preparing me for diverse challenges in the field. I am
                        eager to apply my knowledge and skills in real-world projects and contribute
                        to innovative solutions.</p>
                </div>
            </div>

            <div className='mt-10 pb-[7.7rem] ml-36'>
                <div className='w-52 h-10 flex items-center justify-center bg-black text-white'>
                    <h1 className=''>Technical Qualification</h1>
                </div>

                <div className='pt-2'>
                    <p className='w-[50rem]'>
                        I have a year of experience in both <span className='font-semibold'>front end</span> and
                        <span className='font-semibold'> backend development</span>. During this time, I have
                        honed my skills in creating responsive and user-friendly interfaces, as well as
                        developing robust server-side applications. My work has involved using modern
                        technologies and frameworks to build scalable and efficient solutions. I am passionate
                        about leveraging my technical expertise to contribute to innovative projects and
                        drive meaningful results.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About; <h1>This is About Page</h1>