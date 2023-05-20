import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ProductsCard = ({product}) => {

    const {title, description, rating, img, price, quantity, seller_name, email, phone, category } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl mx-auto">
            <figure className="px-10 pt-10">
                <img  src={img} alt="toys" className="rounded-xl h-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white bg-black rounded-lg p-2">{title}</h2>
                
                <p className='bg-red-500 p-2 rounded-lg text-white'>${price}</p>
                <p className='text-black font-serif text-lg'>{description}</p>
                <Rating style={{ maxWidth: 150 }} value={rating} />
                
                 
                
                
            </div>
            <div className="card-actions">
                    <button className="btn btn-block btn-primary rounded-none">View Details</button>
                </div>
        </div>
    );
};

export default ProductsCard;