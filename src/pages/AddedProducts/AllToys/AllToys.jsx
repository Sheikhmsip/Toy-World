import React, {useState} from 'react';
import { useLoaderData } from "react-router-dom";
import AllToysCard from './AllToysCard';

import useTitle from '../../../hook/useTitle';
import { Rating } from '@smastrom/react-rating';

const AllToys = () => {
    const allToys = useLoaderData();
     const [toy, setToy] = useState(allToys);

     const {title, date, rating, number, description, photo, address} = toy;
 console.log(toy)
   
    const details = (_id) => {
        const toyProduct = allToys.filter((toys) => toys._id === _id);
    for (const product of toyProduct) {
      console.log(product);
      setToy(product);
    }
   

    } 

    useTitle("All Toys")
    return (
        <div className='w-[96%] mx-auto'>
            <div >
                <h2 className='text-center text-blue-500 font-bold py-3 bg-gray-400 rounded-xl text-3xl'>   Here is All Toys of Toy Stars Users {allToys.length}  </h2>

            </div>

            <div className="overflow-x-auto w-full my-2">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>seller Email</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody >

                        {
                            allToys.map(toy => <AllToysCard
                                key={toy._id}
                                toy={toy}
                                details={details}
                            >
                            </AllToysCard>)
                        }

                    </tbody>


                </table>
            </div>

            {/* Modal Body */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{description}</p>
                    <div>

                    <p className='font-semibold'>
                            <span className='text-blue-500 font-bold'>Rating</span> <Rating  style={{ maxWidth: 150 }} value={rating} ></Rating>
                        </p>
                    <p className='font-semibold'>
                            <span className='text-blue-500 font-bold'>Contact:</span> {number}
                        </p>
                       
                        <p className='font-semibold'>
                            <span className='text-blue-500 font-bold'>Upload Date:</span> {date}
                        </p>
                        <p className='font-semibold'>
                            <span className='text-blue-500 font-bold'>Address:</span> {address}
                        </p>
                    </div>
                    <div className="modal-action absolute -top-1 right-1">
                        <label htmlFor="my-modal-6" className="btn">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToys;