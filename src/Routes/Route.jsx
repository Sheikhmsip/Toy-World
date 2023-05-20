import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/LogIn/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AddedProducts/AllToys/AllToys";
import MyToys from "../pages/AddedProducts/MyToys/MyToys";
import AddToy from "../pages/AddedProducts/AddToy/AddToy";


const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <LogIn></LogIn>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
            path: 'alltoys',
            element: <AllToys></AllToys>
        },
        {
            path: 'mytoys',
            element: <MyToys></MyToys>,
            // loader: () => fetch('http://localhost:1000/toys')
        },
        {
            path: 'addtoy',
            element: <AddToy></AddToy>
        }
    ]
}

]);

export default router;