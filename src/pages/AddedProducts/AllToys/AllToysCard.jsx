import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const AllToysCard = ({toy , details}) => {
    const { photo, _id, rating, seller, title, price, quantity, category, date, email } = toy;
    return (
        <tr data-aos="fade-left" data-aos-duration="3000" className='hover'>
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