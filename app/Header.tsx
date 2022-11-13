import React from 'react';
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Header = ({}) => {
    const session = true;

    if(session) return (
        <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
            <div className="flex space-x-2">
                <Image src={session?.user?.image || 'https://links.papareact.com/jne'} height={10} width={50} alt={'image'} className="rounded-full mx-2 object-contain" />
                <div>
                    <p className="text-blue-400">Logged in as:</p>
                    <p className="font-bold text-lg">Rokas Rudzianskas</p>
                </div>
            </div>
            <LogoutButton />
        </header>
    )

    return (
        <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
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
