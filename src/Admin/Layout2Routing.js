import React from "react";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

const Layout2Routing = () => {
    return (
        <div className="wrapper"> 
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
}
 
export default Layout2Routing;