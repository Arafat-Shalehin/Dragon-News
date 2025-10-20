import React from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>

            <div className="lg:w-[10.5%] md:w-[20%] w-[26%] sm:block hidden"></div>
            <div className="nav flex gap-5 font-semibold text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img
                className='sm:block hidden'
                src={userimg} 
                alt="User Image"/>
                <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
            </div>
            
        </div>
    );
};

export default Navbar;