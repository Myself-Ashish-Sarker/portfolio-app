import './skills.css';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { useRef } from 'react';
import Swal from 'sweetalert2';

const LetsTalk = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_84t0bjw', 'template_on8mm78', form.current, {
                publicKey: '9WRsoyhoX2SrW8FJh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thank You for sending me an email",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='bg-gradient-to-b from-white to-[#F9FBE7]'>
            <div className="mt-4 pb-2 flex justify-center">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Contact Me</h1>
            </div>

            <hr style={{ borderWidth: '1px', width: '50rem', margin: '0 auto' }} />

            <div className="flex justify-center">
                <h1 className="mt-4 text-center w-[32rem] font-semibold">Let's Connect and Create Something Amazing Together. Reach Out to Start a Conversation About Your Project or Idea Today!</h1>
            </div>

            <div className="lg:px-72 grid grid-cols-1 gap-2 lg:grid-cols-2 place-items-center mt-10">
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
            </div>


            <div className="flex justify-center mt-10 pb-2">
                <div className="card card-compact skill w-[38rem] shadow-xl">
                    <div className="card-body">

                        <div className="flex justify-center">
                            <h1 className="text-3xl pb-3">Send Me a Email</h1>
                        </div>

                        <form ref={form} onSubmit={sendEmail} action="">

                            <div className="grid grid-cols-1 px-10 lg:grid-cols-2 lg:px-10 justify-center gap-4">
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <MdSubject />
                                        <input type="text" className="grow" placeholder="Name" name="from_name" />
                                    </label>
                                </div>
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <IoMdMail />
                                        <input type="text" className="grow" placeholder="Email" name="from_email" />
                                    </label>
                                </div>
                            </div>

                            <div className="flex px-5 justify-center mt-4 lg:mt-2 ">
                                <textarea name="message" className="textarea textarea-bordered w-[20rem] lg:w-[31rem]" placeholder="Share Your Thougths"></textarea>
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