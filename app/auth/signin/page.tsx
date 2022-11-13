import React from 'react';
import {useSession, signIn, signOut, getProviders} from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

const SignInPage = async ({}) => {
    const providers = await getProviders();

    return (
        <div>
            <div>
                <Image
                    className="rounded-full mx-2 object-cover"
                    width={700}
                    height={700}
                    src={'https://links.papareact.com/161'}
                    alt={'Sign in'}
                />
            </div>
            <SignInComponent providers={providers} />
        </div>
    );
};

export default SignInPage;
// by Rokas with ❤️
