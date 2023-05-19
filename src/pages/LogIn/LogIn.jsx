import React from 'react';
import { Link } from "react-router-dom";


const LogIn = () => {
    return (
        <div className="hero min-h-screen shadow-2xl bg-base-200">
        <div className="hero-content ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                    <form >
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

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="form-control mt-6">

                            <button className="btn btn-primary">
                            Login With Google
                            </button>
                        </div>
                    <p>Don't Have any Account <Link className=' text-blue-400 link font-bold' to="/register">Register A Account</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LogIn;