import bannerImg from "/images/cover1.jpg";
import { HiDownload } from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-col justify-center items-center gap-24 mt-24 bg-gradient-to-b from-white to-[#F9FBE7] pb-[5.92rem]">
            <div>
                <h1 className='text-6xl'>👋 Hey there,</h1>
                <h1 className="text-6xl">It's Ashish Sarker.</h1>
                <p className="mt-4 w-[28rem] text-center lg:text-left">Welcome to my web corner! I'm Ashish Sarker, a passionate and aspiring front end developer with one year of experience making web application stunning and user friendly</p>

                <div className="flex justify-center lg:justify-start mt-5 gap-5">
                    <div>
                        <a href="/resume.pdf" download><button className="btn rounded-full flex items-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text hover:border-emerald-500">Download Resume <span className="text-black"><HiDownload /></span></button></a>
                    </div>
                    <div>
                        <button className="btn rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white">Say Hello <FaLongArrowAltRight /></button>
                    </div>
                </div>
            </div>
            <div>
                <img className="w-96 rounded-full" src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Home