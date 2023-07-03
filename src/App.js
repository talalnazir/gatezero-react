import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout2 from "./Admin/Layout2";
import Layout from "./Frontend/Layout";
import Admindashboard from "./Admin/Admindashboard";
import "./Frontend/style.css";
import "./Frontend/scss/app.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Layout />} />
        <Route exact path="/user/*" element={<Layout2 />} />
        <Route exact path="/admin" element={<Admindashboard />} />
      </Routes>
    </>
  );
};

export default App;
