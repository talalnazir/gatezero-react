import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout2Routing from "./Layout2Routing";
import Dashboard from "./Dashboard";
import Initiative from "./Initiative";
import Probdesc from "./Formcomponent/Probdesc";
import Customeractorsh from "./Formcomponent/Customeractorsh";
import Buyermotivation from "./Formcomponent/Buyermotivationparity";
import Problemscorecard from "./Formcomponent/Problemscorecard";
import Problemvalidation from "./Formcomponent/Problemvalidation";
import Solutionscorecard from "./Formcomponent/Solutionscorecard";
import Cruxcompetitive from "./Formcomponent/Cruxcompetitive";
import Cruxalignment from "./Formcomponent/Cruxalignment";
import Cruximpact from "./Formcomponent/Cruximpact";
import Purchasedecisionalignment from "./Formcomponent/Purchasedecisionalignment";
import Revenuescore from "./Formcomponent/Revenuescore";
import Solutionriskscore from "./Formcomponent/Solutionriskscore";
import Fundingscore from "./Formcomponent/Fundingscore";
import Marketingscore from "./Formcomponent/Marketingscore";
import Pmcmalignment from "./Formcomponent/Pmcmalignment";
import Demandpeak from "./Formcomponent/Demandpeak";
import Results from "./Formcomponent/Results";
import Packages from "./Formcomponent/Packages";
import Assignpackage from "./Formcomponent/Assign";
import Product from "../Frontend/Product";
import UserList from "./Formcomponent/UserList";
import Checkout from "../Frontend/Checkout";


import { useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

const Layout2 = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const isMyTokenExpired = isExpired(token);
    if (isMyTokenExpired) {
      navigate("/sign");
    }
  },[]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout2Routing />}>
        <Route exact index element={<Dashboard />} />
          <Route path="packages" element={<Packages />} />
          <Route path="users" element={<UserList />} />

          <Route path="assigntopackage" element={<Assignpackage />} />
          <Route path="products" element={<Product />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="initiative" element={<Initiative />}>
            <Route path=":paramId" element={<Initiative />} />
          </Route>
          <Route path="problemdescription" element={<Probdesc />} />
          <Route path="customeractor" element={<Customeractorsh />} />
          <Route path="buyermotivation" element={<Buyermotivation />} />
          <Route path="problemscorecard" element={<Problemscorecard />} />
          <Route path="problemvalidation" element={<Problemvalidation />} />
          <Route path="solutionscorecard" element={<Solutionscorecard />} />
          <Route path="cruxcompetitive" element={<Cruxcompetitive />} />
          <Route path="cruxalignment" element={<Cruxalignment />} />
          <Route path="cruximpact" element={<Cruximpact />} />
          <Route
            path="purchasedecisionalignment"
            element={<Purchasedecisionalignment />}
          />
          <Route path="revenuescore" element={<Revenuescore />} />
          <Route path="solutionriskscore" element={<Solutionriskscore />} />
          <Route path="fundingscore" element={<Fundingscore />} />
          <Route path="marketingscore" element={<Marketingscore />} />
          <Route path="pmcmalignment" element={<Pmcmalignment />} />
          <Route path="demandpeak" element={<Demandpeak />} />
          <Route path="results" element={<Results />}>
            <Route path=":paramId" element={<Results />} />
          </Route>
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default Layout2;
