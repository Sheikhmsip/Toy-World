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
            <div>
                {
                    allToys.map(toy => <AllToysCard
                    key={toy._id}
                    toy={toy}
                    ></AllToysCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;