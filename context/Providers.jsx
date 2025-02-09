"use client";

import { customTheme } from "@/themeConfig";
import { AuthProvider } from "./AuthContext";
import { CartContextProvider } from "./CartContext";
import { ThemeProvider } from '@emotion/react';

export default function Providers({ children }){

    return (
        <AuthProvider>
            <CartContextProvider>
                <ThemeProvider theme={customTheme}>
                {children}
                </ThemeProvider>
            </CartContextProvider>
        </AuthProvider>
    );
}