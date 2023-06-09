import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import ActiveLink from '../../ActiveLink/ActiveLink';
const NavBar = () => {
  
    const {user, logout} = useContext(AuthContext);

    const signOut = () => {
        logout()
        .then()
        .catch(error => {
            console.log(error)
        });
        toast.success('Logout Successful') 

    }

    const nevItems = <>

        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/alltoys">All Toys</ActiveLink></li>

        {
            user && <>
            <li><ActiveLink to='/mytoys'>My Toys</ActiveLink></li>
            <li><ActiveLink to='/addtoy'>Add A Toy</ActiveLink></li>
            </>
        }
        

        <li><Link to="/blogs">Blogs</Link></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nevItems}
                    </ul>
                </div>
                <Link to="/" className=" btn-ghost normal-case text-xl"><img className='w-[100px] h-[80px]' src='https://i.ibb.co/7nw8vv8/attachment-62p129397.png' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nevItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link className="btn  btn-primary" onClick={signOut}>
                     Logout 
                    </Link> :
                    <Link className="btn  btn-primary" to='/login'>
                     Login 
                    </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;