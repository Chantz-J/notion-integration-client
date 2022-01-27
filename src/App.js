import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import useColorScheme from './styles/ColorScheme';
import { darkTheme, lightTheme } from './styles/Theme';

import  MainLayout  from './layouts/MainLayout'
import  PageCreate from './pages/PageCreate'
import LandingPage from './pages/LandingPage'
 

export default function App() {
  const [colorScheme, toggleColorScheme] = useColorScheme()
  const theme = colorScheme === 'light' ? lightTheme : darkTheme

  return ( 
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route 
            path='/' 
            element={
              <MainLayout 
                themeToggle={toggleColorScheme}
                colorScheme={colorScheme}
              >
                <LandingPage />
              </MainLayout>
          }/>
          <Route 
            path='/create-page' 
            element={
              <MainLayout 
                themeToggle={toggleColorScheme}
                colorScheme={colorScheme}
              >
                <PageCreate />
              </MainLayout>
          }/>
        </Routes>
      </div>
    </ThemeProvider> 
  );
}
