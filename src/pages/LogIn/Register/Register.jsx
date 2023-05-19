import React from 'react';
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="hero min-h-screen shadow-2xl bg-base-200">
        <div className="hero-content">
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Registration Form </h1>
                    <form >

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                           
                        </div>
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