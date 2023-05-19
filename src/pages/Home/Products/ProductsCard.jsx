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
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <p>
                <Rating style={{ maxWidth: 250 }} value={rating}  />
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;