import React from 'react';
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const MyToysCard = ({ toy, deleteToy }) => {
    console.log(toy)
    const { photo, _id, rating, seller, title, price, quantity, category, date, email } = toy;
    return (
        <tr>
            <td>
                <div className=" h-24">
                    {<img src={photo} alt="" className='  h-24 w-20 mx-auto' />}
                </div>
            </td>
            <td>
                {seller}
            </td>
            <td>
                {title}
            </td>
            <td>$ {price}</td>
            <td>
                {quantity}
            </td>
            <td>
                {category}
            </td>
            <td>
                {date}
            </td>
            <td className=''>
                <Link to={`/updatetoy/${_id}`}>
                <button >
                   <BiEdit className='w-20 h-12'></BiEdit>
                </button>
                </Link>

                <button onClick={() => deleteToy(_id)} >
                  <MdDeleteForever className='w-20 h-12'></MdDeleteForever>
                </button>
            </td>
        </tr>
    );
};

export default MyToysCard;