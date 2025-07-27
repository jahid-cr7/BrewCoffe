import React from 'react';

const Gallery = () => {
    return (
        <div className='lg:max-w-7xl px-4 mt-12 text-center mx-auto'>
            <h2 className='raleway lg:text-[20px] '>Follow Us Now</h2>
            <h1 className='rancho lg:text-[55px] text-[40px]'>Follow on Instagram</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 '>
                <img src="https://i.ibb.co/gMB6jmbc/Rectangle-9.png" alt="" />
                <img src="https://i.ibb.co/chJXBK9m/Rectangle-10.png" alt="" />
                <img src="https://i.ibb.co/Xx8xJV4t/Rectangle-11.png" alt="" />
                <img src="https://i.ibb.co/7xSWGG8M/Rectangle-12.png" alt="" />
                <img src="https://i.ibb.co/RGDPdwZX/Rectangle-13.png" alt="" />
                <img src="https://i.ibb.co/hhMgR2D/Rectangle-14.png" alt="" />
                <img src="https://i.ibb.co/4RSqYgHV/Rectangle-16.png" alt="" />
                <img src="https://i.ibb.co/hbgtJhb/Rectangle-15.png" alt="" />
            </div>
        </div>
    );
};

export default Gallery;