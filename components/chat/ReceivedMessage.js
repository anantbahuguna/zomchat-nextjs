const ReceivedMessage = ({message}) => {
    return (
        <div className="flex mx-6 my-3 py-4  border-t border-gray-700">
            <div className="flex-none ">
                <a href="#">
                    <img
                        src={message.sender.imageUrl}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                    />
                </a>
            </div>
            <div className="ml-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded">
                {/* <div>
                                <a
                                    href="#"
                                    className="text-white hover:underline"
                                >
                                    {message.sender.name}
                                </a>
                                <span className="text-xs text-gray-600 ml-1">
                                    {message.time}
                                </span>
                            </div> */}
                <div>
                   {message.body}
                </div>
            </div>
        </div>
    );
};

export default ReceivedMessage;