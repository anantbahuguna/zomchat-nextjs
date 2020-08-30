import { useState, useEffect } from "react";
import { ChatInputBox, ReceivedMessage, SentMessage } from "../chat";

import { animateScroll } from "react-scroll";

// message type = 0 for received messages
// message type = 1 for sent messages

const ChatSection = () => {
    const [messages, sendMessage] = useState([
        {
            body: `yeah hahaha
        some other comment
        why are you so awesome`,
            type: 0,
        },
        { body: `Here are the Tailwind Docs`, type: 1 },
        {
            body: `Does that result in the raw svg being inlined in
        the DOM?`,
            type: 0,
        },
        {
            body: `This is handy if you don't want to load SVG as a
        separate file.`,
            type: 0,
        },
        {
            body: `This is handly if You Don't want to load as a
        separate SVG file`,
            type: 1,
        },
        { body: "Exactly the same way as in Vue impulse", type: 0 },
        {
            body: `I think it can slow down the page if there's too
        much bloat in the document.
        Compared to loading it externally.`,
            type: 0,
        },
        {
            body: `Comparison would be better if it's not also
        comparing an vector svg to a raster gif, it's a
        difference in rendering too.`,
            type: 0,
        },
    ]);

    useEffect(() => {
        scrollToBottom();
    }, []);
    useEffect(() => {
        scrollToBottom();
    }, [messages.length]);

    return (
        // <div className=" flex-1 flex justify-between">
        <div className="bg-gray-750 flex-1 flex flex-col justify-between font-chat text-gray-200">
            <div className="text-sm text-gray-400 overflow-y-auto" id="scrollTo">
                {messages.map((message, index) =>
                    message.type === 0 ? (
                        <ReceivedMessage message={message} key={index} />
                    ) : (
                        <SentMessage message={message} key={index} />
                    )
                )}
            </div>
            <ChatInputBox messages={messages} sendMessage={sendMessage} />
        </div>
        // </div>
    );
};

export default ChatSection;

const scrollToBottom = () => {
    animateScroll.scrollToBottom({
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuint",
        containerId: "scrollTo",
    });
};
