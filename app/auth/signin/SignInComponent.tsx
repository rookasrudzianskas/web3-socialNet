"use client"


import {getProviders, signIn} from "next-auth/react";
import React from 'react';

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

const SignInComponent = ({providers}: Props) => {
    return (
        <div>
            {Object.values(providers!).map((provider, index) => (
                <div className="flex items-center justify-center" key={index}>
                    <button
                        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => signIn(provider.id, {
                        callbackUrl: (process.env.VERCEL_URL ? `${process.env.VERCEL_URL}` : 'http://localhost:3000'),
                    })}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SignInComponent;
// by Rokas with ❤️
