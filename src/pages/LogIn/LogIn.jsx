import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { BsGoogle } from 'react-icons/Bs';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../hook/useTitle';


const LogIn = () => {

    const {login, logInWithGoogle } = useContext(AuthContext);
   useTitle("Login")
    const [error, setError] = useState('')

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;

        console.log(email, password, displayName)
        
        if(password.length < 6) {
            toast.error("please set at least 6 characters ")
            return
          }

        login(email, password, displayName) 
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Login Successful')
            event.target.reset();
            return setError('')
        })
        .catch(error => {
            setError('Wrong email and password')
        })
    }

    const googleLogIn = () => {
        logInWithGoogle()
    }



    return (
        <div className="hero min-h-screen shadow-2xl bg-base-200">
        <div className="hero-content ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Login Form</h1>
                    <form onSubmit={handleLogIn} >

                    <div className="form-control">
                            <label className=" font-bold label">
                                <span className="label-text text-2xl">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className=" font-bold label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type Your Email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className=" font-bold label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder=" Type Your Password" required className="input input-bordered" />
                           
                        </div>
                        <div>
                        <p className=' text-red-500'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="form-control mt-6">

                            <button onClick={googleLogIn} className="btn bg-black text-yellow-500">
                                <BsGoogle className='w-8 h-8 mr-2 text-yellow-500'></BsGoogle>
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