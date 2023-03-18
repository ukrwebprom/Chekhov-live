import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';

export const Layout = () => {
    return (
        <>
        <Header />
            <Outlet />
        <Footer />
        </>
    )
}