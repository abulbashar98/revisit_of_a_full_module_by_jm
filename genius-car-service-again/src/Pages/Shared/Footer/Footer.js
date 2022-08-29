import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            {/* <p className='text-center mt-5' >copyright claimed @ {new Date().getFullYear().toLocaleString()}</p> */}
            <p className='text-center mt-5' >copyright claimed @ {year}</p>
        </div>
    );
};

export default Footer;