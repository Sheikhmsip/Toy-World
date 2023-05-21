import React from 'react';
import { Rating } from '@smastrom/react-rating'
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ProductsCard = ({product}) => {

    const {title, _id, id, description, rating, img, price, quantity, seller_name, email, phone, category } = product;
    return (
        <div  data-aos="zoom-in" data-aos-duration="1000"
         className="card w-96 bg-base-100 shadow-2xl mx-auto">
            <figure className="px-10 pt-10">
                <img  src={img} alt="toys" className="rounded-xl h-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white bg-black rounded-lg p-2">{title}</h2>
                
                <p className='bg-red-500 rounded-lg card-title text-white p-2'>${price}</p>
                <p className='text-black font-serif text-lg'>{description}</p>
                <Rating style={{ maxWidth: 150 }} value={rating} ></Rating>
            </div>

            <div className="card-actions">
                    <Link to={`/detail/${_id}`} className='w-full'>
                    <button className="btn btn-block  btn-primary rounded-none">View Details</button>
                    </Link>
                </div>
        </div>
    );
};

export default ProductsCard;