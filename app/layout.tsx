import '../styles/globals.css';
import React from "react";
import Header from "./Header";

export default function RootLayout({
                                       // Layouts must accept a children prop.
                                       // This will be populated with nested layouts or pages
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
            <Header />
        {children}</body>
        </html>
    );
}
