import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-5'>
            <img src={logo} alt="Logo Pic" />
            <p className='text-[#706F6F] text-xl'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;