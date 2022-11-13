"use client";

import React from 'react';
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
import {Message} from "../typings";

const MessageList = ({}) => {
    const {data: messages, error, mutate} = useSWR<Message[]>("/api/getMessages", fetcher);

    return (
        <div>
            {messages?.map((message) => (
                <div key={message.id}>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
// by Rokas with ❤️
