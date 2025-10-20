import React from 'react';
import classroom from '../../assets/class.png';
import swimming from '../../assets/swimming.png';
import playground from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 rounded p-3 mt-10'>
            <h1 className='font-bold mb-2'>Q-Zone</h1>
            <div className='space-y-2'>
                <img src={classroom} alt="Classroom Pic" />
                <img src={swimming} alt="swimming Pic" />
                <img src={playground} alt="playground Pic" />
            </div>
        </div>
    );
};

export default Qzone;