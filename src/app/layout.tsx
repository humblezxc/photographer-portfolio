"use client"

import React from "react";
import { Provider } from 'react-redux'
import { setUpStore } from '@/store/store'
import '@/styles/index.scss'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const store = setUpStore()

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <Header />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
