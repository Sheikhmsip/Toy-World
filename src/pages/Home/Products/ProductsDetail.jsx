import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useTitle from '../../../hook/useTitle';
AOS.init();

const ProductsDetail = () => {

    useTitle("Toy-Details")
    const details = useLoaderData()
    console.log(details)
    const { title, img, price, description, rating, quantity, seller_name, address, phone, category, email } = details;
    return (
        <div className=" flex rounded-md items-center justify-evenly py-5">

            <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500" data-aos-duration="2000" className="p-2 rounded-lg w-96  border border-blue-500">
                <h2 className=" text-2xl"><span className='text-sky-800 font-bold'>Toy Title: </span> {title} </h2>
                <div className='mt-3  text-yellow-400'>
                    <h5 className='text-black font-bold'>Seller Details</h5>
                    <hr />
                    <p><span className='text-black font-medium'>Name:  </span> {seller_name} </p>
                    <p><span className='text-black font-medium'>Email:  </span>  {email} </p>
                    <p><span className='text-black font-medium'>Contract:  </span>  {phone} </p>
                    <p><span className='text-black font-medium'>Address:  </span>  {address}</p>
                </div>

                <div className='mt-3  text-yellow-400'>
                    <h5 className='text-black font-bold'>Toy Details</h5>
                    <hr />
                    <p><span className='text-black font-medium'>Price:  </span>  $ {price} </p>
                    <p><span className='text-black font-medium'>Category:  </span> {category} </p>
                    <p><span className='text-black font-medium'>Available quantity:  </span> {quantity} </p>
                    <p><span className='text-black font-medium'>Description:  </span> {description} </p>
                    
                </div>


                <p className='text-sky-500 font-bold'>Rating <Rating style={{ maxWidth: 200 }} value={rating} readOnly /></p>

                
            </div>
            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000" className=''>
             <img className='rounded-md h-96' src={img} />
            </div>
            
        </div>
    );
};

export default ProductsDetail;