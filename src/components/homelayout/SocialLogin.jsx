import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Login with</h1>
            <div className='grid grid-cols-1 space-y-3'>
                <button className='btn btn-outline btn-primary text-[10px] sm:text-md md:text-[15px] lg:text-lg'>
                    <FaGoogle size={24}/> Login with Google
                </button>
                <button className='btn btn-outline btn-base-200 text-[10px] sm:text-md md:text-[15px] lg:text-lg'>
                    <FaGithub size={24}/> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;