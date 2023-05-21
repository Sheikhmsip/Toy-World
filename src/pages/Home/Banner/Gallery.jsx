import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Gallery = () => {
    return (
        <div data-aos="fade-down-left" data-aos-duration="3000" className='py-5'>
           <h2 className='mx-auto  text-center bg-slate-400 text-4xl py-3 text-white font-bold'>Gallery Of <span className=' text-blue-600'>Toys</span> <span className=' text-yellow-400'>Stars</span></h2>
        <div className="carousel w-full h-80">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/mb_story-the-avengers_launch_2x?fit=constrain&cropN=0,0,1,1&fmt=jpeg&qlt=90&wid=1200" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.insider.com/5c9e9ec392c8867339065ac3?width=600&format=jpeg&auto=webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i0.wp.com/batman-news.com/wp-content/uploads/2022/08/McFarlane-Toys-Page-Punchers-7-Inch-The-Flash-Featured-01.jpg?fit=1200%2C675&quality=80&strip=info&ssl=1" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://www.gannett-cdn.com/presto/2021/10/23/USAT/bc545e25-64c2-4720-a13c-70de27464cf3-Hero.png?width=660&height=372&fit=crop&format=pjpg&auto=webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </div>   
    );
};

export default Gallery;