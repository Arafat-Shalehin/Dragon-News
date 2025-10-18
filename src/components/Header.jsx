import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-5'>
            <img src={logo} alt="Logo Pic" />
            <p className='text-accent text-lg'>
                Journalism Without Fear or Favour
            </p>
            <p className='text-accent font-semibold'>
                {format(new Date(),'EEEE, MMMM MM, yyyy')}
            </p>
        </div>
    );
};

export default Header;