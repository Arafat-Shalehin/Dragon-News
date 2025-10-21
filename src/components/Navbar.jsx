import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const {user, logOutUser} = use(AuthContext);

    const handleLogout = () => {
        logOutUser()
        .then(() => {
            alert('Sign-out successful.')
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className='flex justify-between items-center'>

            <div className="lg:w-[10.5%] md:w-[20%] w-[26%] sm:block hidden font-semibold text-md">
                {user?.email}
            </div>
            <div className="nav flex gap-5 font-semibold text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-2">
                <img
                className='sm:block hidden w-12 rounded-full'
                src={`${user ? user.photoURL : userimg}`} 
                alt="User Image"/>
                {user ? 
                (
                    <button onClick={handleLogout} className='btn btn-primary px-10'>LogOut</button>
                ) 
                : 
                (<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)}
                
            </div>
            
        </div>
    );
};

export default Navbar;