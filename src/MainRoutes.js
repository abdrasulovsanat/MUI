import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Content from "./components/Content";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;