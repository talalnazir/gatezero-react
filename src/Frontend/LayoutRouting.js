import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";

import './style.css';
const Layout = () => {
    return (
        <div className="wrapper"> 
            <Header />
            <Outlet />
           <Footer/>
        </div>
    );
}
 
export default Layout;