import '../styles/globals.css';
import React from "react";
import {unstable_getServerSession} from "next-auth";
import {Providers} from "./providers";

export default async function RootLayout({
                                             // Layouts must accept a children prop.
                                             // This will be populated with nested layouts or pages
                                             children
                                         }: {
    children: React.ReactNode;
}) {

    const session = await unstable_getServerSession();

    return (
        <html lang="en">
        <body>
        <header/>
            {children}
        </body>
        </html>
    );
}
