import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState('');

    const register = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, password, email, photo)

        if(password.length < 6) {
            toast.error("please set at least 6 characters ")
            return
          }

        createUser( email, password, name, photo)
        .then(result => {
            const createdUser = result.user;
            // console.log(createdUser);
           
            event.target.reset();
            return toast.success("Registration Successful")
        })
        .catch(error => {
            // console.log(error)
           setError(toast.error('Already Register this email')) 
           
        })
    }

    return (
        <div className=" shadow-2xl bg-base-200">
        <div className="hero-content">
            
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Registration Form </h1>
                    <form onSubmit={register}>

                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Picture</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                           
                        </div>

                        <p className=' text-red-500'>{error}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Registration" />
                        </div>
                    </form>
                    <p>Already have an Account <Link className='link text-red-400 font-bold' to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;