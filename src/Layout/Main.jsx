import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../pages/SharePage/Header/NavBar';
import { Toaster } from 'react-hot-toast';
import Footer from '../pages/SharePage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;