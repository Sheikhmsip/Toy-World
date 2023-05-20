import React from 'react';
import { useLoaderData} from "react-router-dom";

const AllToys = () => {
    const allToys = useLoaderData()
    return (
        <div>
            All Toys page 
        </div>
    );
};

export default AllToys;