import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
