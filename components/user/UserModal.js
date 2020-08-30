import UserImage from "./UserImage";

const UserModal = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <a href='# '
                style={{ transition: "all .30s ease-in-out" }}
                onClick={() => setShowModal(true)}
            >
                <UserImage />
            </a>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    {/* <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3> */}
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-gray-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {/* <div className="flex">
                                        <div></div>
                                        <div className="flex flex-col"></div>
                                    </div> */}
                                    <div className="h-full flex  flex-col items-center sm:justify-start justify-center text-center ">
                                        <img
                                            alt="team"
                                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center  mb-4"
                                            src='/dp1.jpg'
                                        />
                                        <div className="flex-grow ">
                                            <h2 className="title-font font-medium text-lg text-white">
                                                Holden Caulfield
                                            </h2>
                                            <h3 className="text-gray-600 mb-3">
                                                UI Developer
                                            </h3>
                                            <p className="mb-4 text-gray-500">
                                                DIY tote bag drinking vinegar
                                                cronut adaptogen squid fanny
                                                pack vaporware.
                                            </p>
                                            <span className="inline-flex">
                                                <a href='# ' className="text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a href='# ' className="ml-2 text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </a>
                                                <a href='# ' className="ml-2 text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    {/* <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                        I always felt like I could do anything.
                                        That’s the main thing people are
                                        controlled by! Thoughts- their
                                        perception of themselves! They're slowed
                                        down by their perception of themselves.
                                        If you're taught you can’t do anything,
                                        you won’t do anything. I was taught I
                                        could do everything.
                                    </p> */}
                                </div>
                                {/*footer*/}
                                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default UserModal;