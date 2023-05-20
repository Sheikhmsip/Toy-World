import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/LogIn/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AddedProducts/AllToys/AllToys";
import MyToys from "../pages/AddedProducts/MyToys/MyToys";
import AddToy from "../pages/AddedProducts/AddToy/AddToy";
import UpdateToy from "../pages/AddedProducts/MyToys/UpdateToy";


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
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:1000/toys')
        },
        {
            path: 'mytoys',
            element: <MyToys></MyToys>,
            
        },
        {
            path: 'addtoy',
            element: <AddToy></AddToy>
        },
        {
            path: 'updatetoy/:id',
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`http://localhost:1000/toys/${params.id}`)
        }
    ]
}

]);

export default router;