import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../pages/SharePage/Header/NavBar';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;