import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='w-[70%]'>
            <h2 className='font-semibold mb-5 mt-10'>Find Us on</h2>
            <div className='text-accent *:border *:border-gray-300
            md:*:px-6 *:px-2 *:py-3'>
                <p className='bg-base-100 flex items-center gap-2 rounded-t-md text-blue-900 md:text-sm text-[10px]'>
                    <FaFacebook size={22} className='md:block hidden'/> FaceBook
                </p>
                <p className='bg-base-100 flex items-center gap-2 text-blue-500 md:text-sm text-[10px]'>
                    <FaSquareXTwitter size={22}  className='md:block hidden'/> Twitter
                </p>
                <p className='bg-base-100 flex items-center gap-2 rounded-b-md text-pink-400 md:text-sm text-[10px]'>
                    <FaInstagramSquare size={22} className='md:block hidden'/> Instagram
                </p>
            </div>
        </div>
    );
};

export default FindUs;