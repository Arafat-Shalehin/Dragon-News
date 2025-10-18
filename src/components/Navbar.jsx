import React from 'react';
import { NavLink } from 'react-router';
import userimg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>

            <div className="w-[11%]"></div>
            <div className="nav flex gap-5 font-semibold text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img
                src={userimg} 
                alt="User Image"/>
                <button className='btn btn-primary px-10'>Login</button>
            </div>
            
        </div>
    );
};

export default Navbar;