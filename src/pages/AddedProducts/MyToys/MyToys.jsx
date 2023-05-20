import  { useState, useEffect } from 'react';
import { useLoaderData} from "react-router-dom";
import MyToysCard from './MyToysCard';

const MyToys = () => {
    // const myToys = useLoaderData();

    const [toys, setToys] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:1000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    } , [])



    const deleteToy = id => {
        fetch(`http://localhost:1000/toys/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = toys.filter( toy => toy._id !== id);
            setToys(remaining);
        })
    }

    // console.log(myToys);
    console.log(toys)
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
                        toys.map( toy => <MyToysCard
                            
                            key={toy._id}
                            toy={toy}
                            deleteToy={deleteToy}

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