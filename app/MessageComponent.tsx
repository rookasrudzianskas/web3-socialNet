import React from 'react';
import {Message} from "../typings";
import Image from "next/image";

type Props = {
    message: Message,
}

const MessageComponent = ({message}: Props) => {
    return (
        <div>
            <div>
                <Image
                    className="rounded-full mx-2"
                    height={10}
                    width={50}
                    alt={message.username || 'Rokas'}
                    src={message?.profilePic || ''}
                />
            </div>
        </div>
    );
};

export default MessageComponent;
// by Rokas with ❤️
