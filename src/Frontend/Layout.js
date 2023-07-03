import React from "react";
import {Route, Routes} from "react-router-dom";
import LayoutRouting from "./LayoutRouting";
import Home from "./Home";
import Sign from "./Sign";
import Signup from "./Signup";
import Forgot from "./Forgot";
import Services from "./Services";
import PainPoints from "./PainPoints";
import Roles from "./Roles";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Video from "./Video";
import Checkout from "./Checkout";
import Product from "./Product";

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutRouting/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/pain-points" element={<PainPoints/>}/>
                    <Route path="/roles" element={<Roles/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/Sign" element={<Sign/>}/>
                    <Route path="/Forgot" element={<Forgot/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/video-library" element={<Video/>}/>
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/products" element={<Product />} />
                    <Route
                        path="*"
                        element={<Sign/>}
                    />
                </Route>
            </Routes>
        </>
    );
};

export default Layout;
