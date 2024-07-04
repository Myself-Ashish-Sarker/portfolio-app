import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {

    const links = <>
        <li><Link className='text-base font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text' to="/">Home</Link></li>
        <li><Link className='text-base font-bold' to="/about">About</Link></li>
        <li><Link className='text-base font-bold' to="/projects">Projects</Link></li>
        <li><Link className='text-base font-bold' to="/skills">Skills</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 border-b-2 border-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/"><h1 className='text-xl'><strong>Ashish <span className='text-slate-500'>Sarker</span></strong></h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/letstalk" className="btn btn-outline">Let's Talk <FaLongArrowAltRight /></Link>
            </div>
        </div>
    );
};

export default Navbar;