import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div>
            <SocialLogin/>
            <FindUs/>
            <Qzone/>
        </div>
    );
};

export default RightAside;