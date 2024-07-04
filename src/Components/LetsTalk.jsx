import './skills.css';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdSubject } from "react-icons/md";

const LetsTalk = () => {
    return (
        <div className='bg-gradient-to-b from-white to-[#F9FBE7]'>
            <div className="mt-5 pb-2 flex justify-center">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Contact Me</h1>
            </div>

            <hr style={{ borderWidth: '1px', width: '50rem', margin: '0 auto' }} />

            <div className="flex justify-center">
                <h1 className="mt-4 text-center w-[32rem] font-semibold">Let's Connect and Create Something Amazing Together. Reach Out to Start a Conversation About Your Project or Idea Today!</h1>
            </div>

            <div className="flex justify-center gap-5 items-center mt-10 px-5">
                <div className="flex justify-center w-72 h-10 border-2 border-black">
                    <div className="flex items-center gap-2">
                        <IoMdMail className="mt-1" /> myselfashishsarker@gmail.com
                    </div>
                </div>
                <div className="flex justify-center w-72 h-10 border-2 border-black">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="mt-1" /> +8801531350224
                    </div>
                </div>
                <div>
                    <a href="/resume/dummy-resume.pdf">
                        <button className="btn btn-outline">
                            <div className="flex items-center gap-2">
                                Download Resume <LuDownload />
                            </div>
                        </button>
                    </a>
                </div>
            </div>


            <div className="flex justify-center mt-10 pb-2">
                <div className="card card-compact skill w-[38rem] shadow-xl">
                    <div className="card-body">

                        <div className="flex justify-center">
                            <h1 className="text-3xl pb-3">Send Me a Email</h1>
                        </div>

                        <form action="">

                            <div className="flex justify-center gap-4">
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <IoMdMail />
                                        <input type="text" className="grow" placeholder="Email" name="email" />
                                    </label>
                                </div>
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <MdSubject />
                                        <input type="text" className="grow" placeholder="Subject" name="subject" />
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-center mt-2 ">
                                <textarea name="text" className="textarea textarea-bordered w-[31rem]" placeholder="Share Your Thougths"></textarea>
                            </div>

                            <div className="flex justify-center mt-5">
                                <button className="btn btn-outline" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LetsTalk