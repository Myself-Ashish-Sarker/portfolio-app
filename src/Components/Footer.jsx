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
                <p>created by <span className="text-lg font-bold">Ashish Sarker</span></p>
            </div>
        </div>
    );
};

export default Footer