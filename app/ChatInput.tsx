"use client"

import React, {useState} from 'react';

const ChatInput = ({}) => {
    const [input, setInput] = useState('');
    return (
        <form className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-pointer" placeholder={'Enter a message here...'}/>
            <button disabled={!input} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit">
                Send
            </button>
        </form>
    );
};

export default ChatInput;
// by Rokas with ❤️
