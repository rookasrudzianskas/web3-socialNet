import React from 'react';
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import {Message} from "../typings";

const HomePage = async ({}) => {

    const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).then((res) => res.json());
    const messages: Message[] = data.messages;

    return (
        <main>
            <MessageList initialMessages={messages} />
            <ChatInput />
        </main>
    );
};

export default HomePage;
// by Rokas with ❤️
