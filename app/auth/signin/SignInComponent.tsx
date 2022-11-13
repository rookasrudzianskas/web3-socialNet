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
                <div key={index}>
                    <button onClick={() => signIn(provider.id, {
                        callbackUrl: (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000') + '/auth/signin',
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
