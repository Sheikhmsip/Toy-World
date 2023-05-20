import React from 'react';
import { Link } from "react-router-dom";

const FunSection = () => {
    return (
        <div className=' relative'>
            <img src="https://img.creator-prod.zmags.com/assets/images/6452c896b6fc7c5ba74c69d1.png?im=Resize,width=4011"  alt="" />

            <div className='mx-auto absolute top-[45%] left-[40%] '>
                <div className='border mx-auto p-5 rounded-xl'>
                <h1 className='text-yellow-200 text-2xl'> Fun with Toys Stars</h1>
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