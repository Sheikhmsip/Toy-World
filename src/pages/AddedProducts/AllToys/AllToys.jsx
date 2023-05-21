import React from 'react';
import { useLoaderData} from "react-router-dom";
import AllToysCard from './AllToysCard';

import useTitle from '../../../hook/useTitle';

const AllToys = () => {
    const allToys = useLoaderData()
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
                        allToys.map( toy => <AllToysCard
                            
                            key={toy._id}
                            toy={toy}
                            

                        >
                        </AllToysCard>)
                       }
                     
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default AllToys;