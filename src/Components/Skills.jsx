import './skills.css';
import html from '/images/skills/html.png';
import css from '/images/skills/css.png';
import js from '/images/skills/js.png';
import boot from '/images/skills/boot.png';
import tailwind from '/images/skills/tailwind.png';
import react from '/images/skills/react.png';
import firebase from '/images/skills/firebase.png';
import nodejs from '/images/skills/nodejs.png';
import express from '/images/skills/express.png';
import mongo from '/images/skills/mongo.png';

const Skills = () => {
    return (
        <div className='bg-gradient-to-b from-white to-[#F9FBE7]'>
            <div>
                <div className='mt-4 text-center pb-14'>
                    <h1 className='pb-4 text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Showcasing Skills</h1>

                    <hr style={{borderWidth: '1px', width: '50rem', margin: '0 auto'}} />

                    <p className='mt-4 w-[32rem] mx-auto font-semibold'>Showcasing My Skills Both Front and Back End</p>

                    <div className='mt-10 grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 justify-items-center px-12 lg:px-52 md:px-24 justify-center gap-4'>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={html} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={css} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={js} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-16' src={tailwind} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={boot} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={react} alt="" />
                        </div>
                    </div>

                    <div className='mt-10 grid items-center grid-cols-2 lg:grid-cols-6 md:grid-cols-3 justify-items-center px-12 lg:px-52 md:px-24 justify-center gap-4'>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={firebase} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={nodejs} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={express} alt="" />
                        </div>
                        <div sty className='skill flex items-center justify-center w-36 h-36 rounded-lg'>
                            <img className='w-24 h-24' src={mongo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;