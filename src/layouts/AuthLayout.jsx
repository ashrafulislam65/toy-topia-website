import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='md:px-20'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;