import React from 'react';
import { Link } from "react-router-dom";

const AllToysCard = ({toy}) => {
    const { photo, _id, rating, seller, title, price, quantity, category, date, email } = toy;
    return (
        <tr className='hover'>
            <td>
                {
                    seller && `${seller}`
                }
            </td>
            <td>
                {
                    email && `${email}`
                }
            </td>
            <td>
                {
                    title && `${title}`
                }
            </td>
            <td>{
                price && `$ ${price}`
                }</td>
            <td>
                {
                    quantity && `${quantity}`
                }
            </td>
            <td>
                {category}
            </td>
            
            <td className=''>
                <Link >
                <button >
                   Views Details
                </button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysCard;