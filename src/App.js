import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useColorScheme from './styles/ColorScheme';
import { darkTheme, lightTheme } from './styles/Theme';

import  MainLayout  from './layouts/MainLayout'
import  CreatePage from './pages/create-page'
import Home from './pages/home'

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
                <Home />
              </MainLayout>
          }/>
          <Route 
            path='/create-page' 
            element={
              <MainLayout 
                themeToggle={toggleColorScheme}
                colorScheme={colorScheme}
              >
                <CreatePage />
              </MainLayout>
          }/>
        </Routes>
      </div>
    </ThemeProvider> 
  );
}
