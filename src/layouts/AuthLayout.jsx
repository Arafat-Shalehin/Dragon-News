import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-6'>
                <Navbar/>
            </header>
            <main className='w-11/12 mx-auto py-6'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;