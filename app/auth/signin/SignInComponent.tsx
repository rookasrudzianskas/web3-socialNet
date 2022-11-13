import {getProviders} from "next-auth/react";

"use-client"

import React from 'react';

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

const SignInComponent = ({providers}: Props) => {
    return (
        <div>

        </div>
    );
};

export default SignInComponent;
// by Rokas with ❤️
