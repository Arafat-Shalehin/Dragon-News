import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayouts = () => {
    return (
        <div>
            <Header/>
            <section className='w-11/12 mx-auto my-5'>
                <LatestNews/>
            </section>
            <nav className='w-11/12 mx-auto my-9'>
                <Navbar/>
            </nav>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayouts;