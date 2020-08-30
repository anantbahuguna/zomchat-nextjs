import { useState, useRef } from "react";

const ChatInputBox = ({ messages, sendMessage }) => {
    const [inputMsg, setInputMsg] = useState("");

    const onSubmit = () => {
        sendMessage([...messages, { body: inputMsg, type: 1 }]);
        setInputMsg("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") onSubmit();
    };

    return (
        <div className="bg-gray-750 h-24 flex items-center mx-3 border-t border-gray-600">
            <button className="px-2 py-2 h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white border-r border-gray-600">
                <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
                </svg>
            </button>
            <div className="flex-1">
                <input
                    type="text"
                    className="w-full text-sm h-10 px-2 py -2 bg-gray-700 text-gray-200 focus:outline-none"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="px-2 py-2 bg-gray-700 rounded-r flex items-center h-10">
                <button
                    className="h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white"
                    onClick={onSubmit}
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paper-plane"
                        className="w-4 h-4 svg-inline--fa fa-paper-plane fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                        ></path>
                    </svg>
                </button>
                <button className="h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3">
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatInputBox;
