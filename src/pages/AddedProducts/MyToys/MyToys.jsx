import  { useState, useEffect, useContext } from 'react';

import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';
import useTitle from '../../../hook/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    useTitle('MyToys')
    const [toys, setToys] = useState([]);

    // const url = `http://localhost:1000/toys?email=${user.email}`
    useEffect(() =>{
        fetch('https://toys-server-six.vercel.app/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    } , [])

    const deleteToy = id => {


        Swal.fire({
            title: 'Are you sure You want to Delete?',
            text: "If you want you can cancel",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-server-six.vercel.app/toys/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){

                Swal.fire(
                    "Your Toy Deleted",
                    "This Toy has been Deleted Successful"
                )
                const remaining = toys.filter( toy => toy._id !== id);
                setToys(remaining);
            }
            
        })

            }
        })
        
        
    }

    // console.log(myToys);
    console.log(toys)
    return (
        <div className='w-[95%] mx-auto'>
            <h2 className="text-5xl p-4 text-blue-500 font-bold">Your Total Toys: {toys.length} </h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full text-center  table-fixed">
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
                    <tbody className='hover hover:bg-sky-700'>
                    
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