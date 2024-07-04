import { Link } from "react-router-dom";
import web01 from "/images/web01.png";
import web02 from "/images/web02.png";
import web03 from "/images/web03.png";


const Projects = () => {

    return (
        <div className="bg-gradient-to-b from-white to-[#F9FBE7]">
            <div className="text-center mt-8 ">
                <h1 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className=' text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Featured Projects</h1>
            </div>

            <div className="mt-4 pb-4 space-y-2 grid justify-items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {/* first box */}
                <div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={web01}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Package Boy</h2>
                            <p><span className="font-semibold">Technology Used:</span> html, css, javascript, react, firebox, mongodb</p>
                            <p><span className="font-semibold">Live Link:</span> <a className="text-emerald-500 hover:underline" href="https://packageboy-app.netlify.app/">Live Link</a></p>

                            {/* modal */}
                            <button className="btn btn-outline btn-secondary" onClick={() => document.getElementById('my_modal_5').showModal()}>Learn More</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-slate-800">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            {/* modal */}

                        </div>
                    </div>
                </div>
                {/* first box */}

                {/* second box */}
                <div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={web02}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Phoneix Gym</h2>
                            <p><span className="font-semibold">Technology Used:</span> html, css, javascript, react, firebox, mongodb</p>
                            <p><span className="font-semibold">Live Link:</span> <a className="text-emerald-500 hover:underline" href="https://packageboy-app.netlify.app/">Live Link</a></p>

                            {/* modal */}
                            <button className="btn btn-outline btn-secondary" onClick={() => document.getElementById('my_modal_5').showModal()}>Learn More</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            {/* modal */}

                        </div>
                    </div>
                </div>
                {/* second box */}

                {/* third box */}
                <div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={web03}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Package Boy</h2>
                            <p><span className="font-semibold">Technology Used:</span> html, css, javascript, react, firebox, mongodb</p>
                            <p><span className="font-semibold">Live Link:</span> <a className="text-emerald-500 hover:underline" href="https://packageboy-app.netlify.app/">Live Link</a></p>

                            {/* modal */}
                            <button className="btn btn-outline btn-secondary" onClick={() => document.getElementById('my_modal_5').showModal()}>Learn More</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            {/* modal */}

                        </div>
                    </div>
                </div>
                {/* third box */}
            </div>
        </div>
    );
};

export default Projects