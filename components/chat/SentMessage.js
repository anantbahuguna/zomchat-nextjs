const SentMessage = ({ message }) => {
    return (
        <div className="flex flex-row-reverse mx-6 my-3 py-4  border-t border-gray-700">
            <div className="flex-none ml-5">
                <a href="#">
                    <img
                        src={message.sender ? message.sender.imageUrl : '/dp1.jpg'}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                    />
                </a>
            </div>
            <div className=" px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded">
                {/* <div>
                                <a
                                    href="#"
                                    className="text-white hover:underline"
                                >
                                    johndoe
                                </a>
                                <span className="text-xs text-gray-600 ml-1">
                                    07/19/2019
                                </span>
                            </div> */}
                <div>
                    {message.body}
                </div>
            </div>
        </div>
    );
};

export default SentMessage;