"use client";

import React from 'react';
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
import {Message} from "../typings";
import MessageComponent from './MessageComponent';

const MessageList = ({}) => {
    const {data: messages, error, mutate} = useSWR<Message[]>("/api/getMessages", fetcher);

    return (
        <div>
            {messages?.map((message) => (
                <MessageComponent key={message.id} message={message} />
            ))}
        </div>
    );
};

export default MessageList;
// by Rokas with ❤️
