import React from 'react';
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const FunSection = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" className='  mx-auto relative '>
            <img src="https://img.creator-prod.zmags.com/assets/images/6452c896b6fc7c5ba74c69d1.png?im=Resize,width=4011"  alt="" />

            <div data-aos="fade-down"  data-aos-duration="2500"  className='mx-auto border-black border rounded-xl bg-blue-100 md:absolute md:top-[45%] md:left-[40%] top-[50%] left-[50%] '>
                <div className=' border-black mx-auto p-5 rounded-xl'>
                <h1 className='text-yellow-200 text-2xl text-center bg-slate-500 rounded-lg p-2'> Fun with Toys Stars</h1>
                <p className='bg-black text-white p-3 text-lg rounded-xl mt-2'>Popular Toys Website </p>

                <div className='pt-3'>
                    <Link className='btn btn-outline  btn-error btn-block' to="https://www.amazon.com.au/s?k=toy&crid=34R21XWYN1EEE&sprefix=toy%2Caps%2C304&ref=nb_sb_noss_1">
                    Amazon Toy
                    </Link> <br />
                    <Link className=' mt-2 btn-outline btn btn-block btn-error' to="https://www.toysrus.com/">
                    Toysrus
                    </Link>
                </div>
                </div>
                
            </div>

        </div>
    );
};

export default FunSection;