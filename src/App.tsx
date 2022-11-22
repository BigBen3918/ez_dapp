import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Web3ContextProvider } from './context/Web3Context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './views/home';
import Farm from './views/farm';
import Position from './views/position';
import TVL from './views/tvl';
import Lend from './views/lend';
import ViewBase from './components/viewbase';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';

export default function App() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Square',
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                },
            },
        },
    });

    return (
        // <Web3ContextProvider>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <ViewBase>
                    <ToastContainer autoClose={3000} limit={3} />
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path={'/lend'} element={<Lend />} />
                        <Route path={'/farm'} element={<Farm />} />
                        <Route path={'/home'} element={<Home />} />
                        <Route path={'/position'} element={<Position />} />
                        <Route path={'/tvl'} element={<TVL />} />
                    </Routes>
                </ViewBase>
            </ThemeProvider>
        </BrowserRouter>
        // </Web3ContextProvider>
    );
}
