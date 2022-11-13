"use client"

import React, {FormEvent, useState} from 'react';
import { v4 as uuid } from 'uuid';
import {Message} from "../typings";
import useSWR from 'swr';
import fetcher from "../utils/fetchMessages";
import {unstable_getServerSession} from "next-auth";
import {useSession} from "next-auth/react";

type Props = {
    session: Awaited<ReturnType<typeof unstable_getServerSession>>
}

const ChatInput = ({}: Props) => {
    const {data: session} = useSession();
    const [input, setInput] = useState('');
    const {data: messages, error, mutate} = useSWR("/api/getMessages", fetcher);

    const addMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;

        const messageToSend = input;
        setInput('');
        const id = uuid();

        const message: Message = {
            id: id,
            message: messageToSend,
            created_at: Date.now(),
            username: 's',
            profilePic: 'https://yt3.ggpht.com/IQ4OqurVrPmACaf3h5fgTcRInn6QoHz0xN4O5qzhuhY7UKgpDg2A4mGyhWW5vcaGSiVbf_FLdQ=s900-c-k-c0x00ffffff-no-rj',
            email: session?.user?.email,
        }

        const uploadMessageToUpstash = async () => {
            const data = await fetch('/api/addMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message})
            }).then((res) => res.json());

            return [data.message, ...messages!];
        }
        // we are going to change the cache
        await mutate(uploadMessageToUpstash, {
            optimisticData: [message, ...messages!],
            rollbackOnError: true
        })
    }

    return (
        <form onSubmit={addMessage} className="fixed bg-white bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100">
            <input disabled={!session} value={input} onChange={(e) => setInput(e.target.value)} type="text" className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-pointer" placeholder={'Enter a message here...'}/>
            <button disabled={!input} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit">
                Send
            </button>
        </form>
    );
};

export default ChatInput;
// by Rokas with ❤️
