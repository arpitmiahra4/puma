import React from "react";
import { Route, Routes } from "react-router-dom";

import Women from "../Product/Women";
import Home from "../Home/Home";
import Mens from "../Product/Mens";
import Kids from "../Product/Kids";
import NewArrivals from "../Product/NewArrivals";
import Sport from "../Product/Sport";
import Outlet from "../Product/Outlet";
import MotorSport from "../Product/MotorSport";
import Collaborations from "../Product/Collaborations";
import SingleProduct from "../Product/SingleProduct";
import AuthPage from "../Login/AuthPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Mens />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/outlet" element={<Outlet />} />
      <Route path="/collaborations" element={<Collaborations />} />
      <Route path="/motorsport" element={<MotorSport />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default AllRoutes;
