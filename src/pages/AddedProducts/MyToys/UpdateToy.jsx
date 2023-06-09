import React from 'react';
import { useLoaderData } from "react-router-dom";
import { toast } from 'react-hot-toast';
import useTitle from '../../../hook/useTitle';
const UpdateToy = () => {

    useTitle("Update Toy");

    const toy = useLoaderData();
    const { _id, title, price, quantity,  description,date, photo } = toy;


    const updateProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;  const date = form.date.value;
        const description = form.description.value;
        const toy = {title, photo, price, quantity, date, description};

        console.log(toy)

        fetch(`https://toys-server-six.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

         if(data.modifiedCount > 0){
            toast.success("Successfully Update")
            return
         }
         if(data.modifiedCount === 0){
            toast.success("Nothing Update")
         }
            
        })


    }
    return (
        <div className='w-[95%] mx-auto py-3'>
            <h2 className='text-center text-blue-500 font-bold py-3 bg-gray-400 rounded-xl text-3xl'>  Update Toy Form </h2>
            <form onSubmit={updateProduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Name</span>
                        </label>
                        <input type="text" name="title" defaultValue={title} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Image URL</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" />
                    </div>

                   
                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Uploaded Date</span>
                        </label>
                        <input type="date" name="date" defaultValue={date} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Descriptions</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} className="input input-bordered" />
                    </div>

                    
                    
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
                </div>
            </form>
            
        </div>
    );
};

export default UpdateToy;