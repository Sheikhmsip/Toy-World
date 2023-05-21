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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductsDetail from "../pages/Home/Products/ProductsDetail";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
            loader: () => fetch('https://toys-server-six.vercel.app/toys')
        },
        {
            path: 'mytoys',
            element: <PrivateRoute>
                <MyToys></MyToys>
            </PrivateRoute>
            
        },
        {
            path: 'addtoy',
            element: <PrivateRoute>
                <AddToy></AddToy>
            </PrivateRoute>
        },
        {
            path: 'updatetoy/:id',
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`https://toys-server-six.vercel.app/toys/${params.id}`)
        },
        {
            path: 'detail/:id',
            element: <PrivateRoute><ProductsDetail></ProductsDetail></PrivateRoute>,
            loader: ({params}) => fetch(`https://toys-server-six.vercel.app/products/${params.id}`)
            
        }
    ]
}

]);

export default router;