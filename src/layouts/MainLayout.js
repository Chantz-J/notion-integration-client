import React from 'react';
import { CSSReset } from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';

export default function MainLayout( { children, themeToggle, colorScheme } ){
    return (
        <>
        <CSSReset />
        <Navbar themeToggle={themeToggle} colorScheme={colorScheme}/>
        <main>
        {children}
        </main>
        </>
    );
};