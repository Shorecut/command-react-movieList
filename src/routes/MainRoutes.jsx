import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AddMoviePage from "../pages/AddMoviePage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddMoviePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
