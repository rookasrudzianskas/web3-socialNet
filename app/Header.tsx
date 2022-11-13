import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = ({}) => {
    return (
        <header>
            <div className="flex-col flex items-center space-y-5">
                <div className={"flex space-x-2 items-center"}>
                    <Image
                        src={"https://links.papareact.com/jne"}
                        alt={"logo"}
                        width={50}
                        height={10}
                    />
                    <p className="text-blue-400">Welcome to Meta Messenger</p>
                </div>
                <Link href='/auth/signin' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </Link>
            </div>
        </header>
    );
};

export default Header;
// by Rokas with ❤️
