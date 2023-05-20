import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hook/useTitle';

const AddToy = () => {
    useTitle("Add Toy")
    const { user } = useContext(AuthContext)

    console.log(user);

    const handelAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const seller = form.seller.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const address = form.address.value;
        const number = form.number.value;
        const email = form.email.value;
        const category = form.category.value;
        const date = form.date.value;
        const description = form.description.value;

        const toy = { title, seller, photo, price, quantity, rating, address, number, email, category, date, description };
        console.log(toy)

        fetch('http://localhost:1000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Successfully Toy added")
                }
            })

    }

    return (
        <div className='w-[95%] mx-auto py-4'>
            <h2 className='text-center text-3xl'> Toy Add Form   </h2>
            <form onSubmit={handelAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        user &&
                        <div className="form-control">
                            <label className=" text-xl font-bold label">
                                <span className="label-text text-blue-500">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={user.displayName} name="seller" className="input input-bordered" />
                        </div>
                    }

{
                        user &&
                        <div className="form-control">
                            <label className=" text-xl font-bold label">
                                <span className="label-text text-blue-500">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" defaultValue={user.email} className="input input-bordered" />
                        </div>
                    }

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Name</span>
                        </label>
                        <input type="text" name="title" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Image URL</span>
                        </label>
                        <input type="text" name="photo" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Toy Quantity</span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />
                    </div>

                    <div className=' form-control ' >
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">
                                Select Toy Category
                            </span>
                        </label>
                        <select className="text-input select select-bordered " name='category'>
                        <option disabled selected> Select one</option>
                            <option value="Marvel">Marvel</option>
                            <option value="Star Ware">Star Ware</option>
                            <option value="Avengers">Avengers</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Uploaded Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Descriptions</span>
                        </label>
                        <input type="text" name="description" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Rating</span>
                        </label>
                        <input type="number" name="rating" defaultValue={5} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Address</span>
                        </label>
                        <input type="text" name="address" className="input input-bordered" />
                    </div>
                  

                    <div className="form-control">
                        <label className=" text-xl font-bold label">
                            <span className="label-text text-blue-500">Phone</span>
                        </label>
                        <input type="number" name="number" placeholder="Phone Number" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Product" />
                </div>
            </form>

        </div>
    );
};

export default AddToy;