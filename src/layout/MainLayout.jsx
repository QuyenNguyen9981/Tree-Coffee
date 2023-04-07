import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "../layout/components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
