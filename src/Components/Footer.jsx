import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="border-t-2 flex justify-between px-8 py-4 bg-[#F9FBE7]">
            <div className="flex text-2xl gap-4">
                <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://x.com/" target="_blank"><FaTwitterSquare /></a>
                <a href="https://x.com/" target="_blank"><IoLogoLinkedin /></a>
            </div>

            <div className="flex gap-4 font-semibold text-sm">
                <p><Link className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text' to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/works">Works</Link></p>
                <p><Link to="/contact">Contact</Link></p>
            </div>
        </div>
    );
};

export default Footer;