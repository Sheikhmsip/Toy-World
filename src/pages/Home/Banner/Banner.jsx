import React from 'react';

import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div>

            <div >
            <h2 className='mx-auto  text-center bg-slate-400 text-4xl py-3 text-white font-bold'>Collections Of <span className=' text-blue-600'>Toys</span> <span className=' text-yellow-400'>Stars</span></h2>
            </div>
            <Marquee speed={150} className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src='https://m.media-amazon.com/images/I/81dSQ0tVdML._AC_SX679_.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src='https://m.media-amazon.com/images/I/81Ta1p5sXPL._AC_SX679_.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src='https://m.media-amazon.com/images/I/71Vut8HAcdL._AC_SX679_.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src='https://i.ibb.co/wBLVvKD/71b6cd-S3p-L-AC-SX679.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src='https://i.ibb.co/WtYFY2M/f2be8d99-a1ff-4cde-9179-d40d6b243bfb-940edecd3ee59f44e66a11854d14e5fc.webp' className="w-full h-[70vh]" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img src='https://m.media-amazon.com/images/I/71FTXVVdf4L._AC_SX679_.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item7" className="carousel-item w-full">
                    <img src='https://m.media-amazon.com/images/I/71nmQ5cc5JL._AC_SX679_.jpg' className="w-full h-[70vh]" />
                </div>
                <div id="item8" className="carousel-item w-full">
                    <img src='https://m.media-amazon.com/images/I/41xV-VKOI2L._AC_SX679_.jpg' className="w-full h-[70vh]" />
                </div>
            </Marquee>
        </div>
    );
};

export default Banner;