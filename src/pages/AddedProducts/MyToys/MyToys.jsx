import React from 'react';
import { useLoaderData } from "react-router-dom";
import MyToysCard from './MyToysCard';

const MyToys = () => {

    const myToys = useLoaderData();

    console.log(myToys);
    return (
        <div>
            <h2 className="text-5xl">Your Toys: </h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               Toy Image
                            </th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Upload Date</th>
                            <th>Update/Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody >
                    
                       {
                        myToys.map( toy => <MyToysCard
                            
                            key={toy._id}
                            toy={toy}

                        >
                        </MyToysCard>)
                       }
                     
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyToys;