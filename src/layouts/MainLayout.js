import React from 'react';
import { CSSReset } from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';

export default function MainLayout({ children, themeToggle }){
    return (
        <>
        <CSSReset />
        <Navbar themeToggle={themeToggle}/>
        <main>
        {children}
        </main>
        </>
    );
};