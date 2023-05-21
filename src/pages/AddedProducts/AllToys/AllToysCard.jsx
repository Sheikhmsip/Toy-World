import React from 'react';
import { Link } from "react-router-dom";

const AllToysCard = ({toy , details}) => {
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
                
                <label 
                onClick={() => details(_id)}
                htmlFor="my-modal-6" className="btn btn-outline">
                        Details

                    </label>
                
            </td>
        </tr>
    );
};

export default AllToysCard;