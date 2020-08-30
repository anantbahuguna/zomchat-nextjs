import { UserModal } from "../user";

const TopBar = () => {
    return (
        <div className="flex text-white h-12">
            <div className="bg-gray-800 w-56 flex-none flex items-center justify-between border-b border-gray-900 px-3 py-2">
                <div className="font-bold">ZOMCHAT</div>
                <button>
                    {" "}
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path
                            className="heroicon-ui"
                            d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="bg-gray-750 flex-1 flex items-center justify-between border-b border-gray-900 px-4">
                <div className="flex items-center">
                    {/* <div className="text-gray-500 text-2xl"># </div>
                    <div className="ml-2 text-sm text-white">general</div> */}
                    {/* <UserImage /> */}
                    <UserModal />
                    <div className="border-l pl-3 ml-3 border-gray-600 text-sm text-gray-400 hidden md:inline-block">
                        Johny Doe
                    </div>
                </div>

                <div className="flex items-center">
                    <a href="# " className="ml-4">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="video"
                            className="w-5 h-5 text-gray-500 hover:text-gray-200 svg-inline--fa fa-video fa-w-18"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <path
                                fill="currentColor"
                                d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
                            ></path>
                        </svg>
                    </a>
                    <a href="# " className="ml-4">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="phone-alt"
                            className="w-5 h-5 text-gray-500 hover:text-gray-200 svg-inline--fa fa-phone-alt fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                            ></path>
                        </svg>
                    </a>
                    <a href="# " className="ml-4">
                        {/* <SearchBox /> */}
                        {/* <svg
                            class="w-6 h-6 text-gray-500 hover:text-gray-200"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path
                                class="heroicon-ui"
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                            ></path>
                        </svg> */}
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="ellipsis-v"
                            className="w-5 h-5 text-gray-500 hover:text-gray-200 svg-inline--fa fa-ellipsis-v fa-w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192 512"
                        >
                            <path
                                fill="currentColor"
                                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
