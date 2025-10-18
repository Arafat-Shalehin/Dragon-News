import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3'>
            <p className='text-base- 100 bg-secondary px-3 py-2'>
                Latest
            </p>
            <Marquee className='flex gap-3' pauseOnHover={true}>
                <p className='font-bold'>
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Quam, quae.               
                </p>
                <p className='font-bold'>
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Quam, quae.               
                </p>
                <p className='font-bold'>
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Quam, quae.               
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;