import React from 'react';
import { useLoaderData} from "react-router-dom";
import AllToysCard from './AllToysCard';

import useTitle from '../../../hook/useTitle';

const AllToys = () => {
    const allToys = useLoaderData()
    useTitle("All Toys")
    return (
        <div>
            <div>
                <h2>
                    Here is All Toys of Toy Stars Users {allToys.length} 
                </h2>
            </div>
           
            <div className="overflow-x-auto w-full">
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