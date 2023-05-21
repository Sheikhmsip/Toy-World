import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import AllToysCard from './AllToysCard';
import useTitle from '../../../hook/useTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const AllToys = () => {
    useTitle("All Toys")
    const allToys = useLoaderData();
    const [toy, setToy] = useState(allToys);

    const { title, date, rating, number, description, photo, address } = toy;
    //  console.log(toy)
    const details = (_id) => {
        const toyProduct = allToys.filter(t => t._id === _id);
        for (const product of toyProduct) {
            console.log(product);
            setToy(product);
        }
    }

    const search = event => {
        event.preventDefault()
        const form = event.target;
        const input = form.search.value; 
        console.log(input);
        const searchResult = toy.filter(result => result.title = input)
        console.log(searchResult);
        setToy(searchResult);
    }



    return (
        <div className='w-[96%] mx-auto'>
            <div >
                <h2 className='text-center text-blue-500 font-bold py-3 bg-gray-400 rounded-xl text-3xl'>   Here is All Toys of Toy Stars Users {allToys.length}  </h2>

            </div>

            <form onSubmit={search}>
                <div className="form-control p-2">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" name='search' />
                        <button type='submit' className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </form>

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


                    <div className='flex'>
                        <div className='leading-10'>
                            <p className='font-semibold'>
                                <span className='text-blue-500 font-bold'>Rating</span> <Rating style={{ maxWidth: 150 }} value={rating} readOnly ></Rating>
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
                        <img src={photo} alt="" className='w-[60%]' />
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