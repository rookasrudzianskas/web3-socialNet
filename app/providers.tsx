"use client"

import {SessionProvider} from "next-auth/react";

export function Providers({session, children}: any) {
    // const session = await unstable_getServerSession();
    return <SessionProvider session={session}>{children}</SessionProvider>
}
