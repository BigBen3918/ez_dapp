import React from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { Web3ContextProvider } from './context/Web3Context'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Farm from './views/farm'
import Lend from './views/lend'
import Home from './views/home'
import ViewBase from './components/viewbase'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function App() {

    const theme = createTheme({
        typography: {
            fontFamily: 'Square'
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                },
            }
        }
    });

    return (
        <Web3ContextProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <ViewBase>
                        <ToastContainer autoClose={3000} limit={3} />
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/home" replace />}
                            />
                            <Route path={'/lend'} element={<Lend />} />
                            <Route path={'/farm'} element={<Farm />} />
                            <Route path={'/home'} element={<Home />} />
                        </Routes>
                    </ViewBase>
                </ThemeProvider>
            </BrowserRouter>
        </Web3ContextProvider >
    );
}
