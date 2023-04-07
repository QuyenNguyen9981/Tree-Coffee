import React from "react";
import Order from "../../components/section/Order";
import Banner from "./components/Banner";
import SlideEvent from "../promotion/components/SlideEvent/SlideEvent";
import SlideNews from "../promotion/components/SlideNews/SlideNews";

const Promotion = () => {
  return (
    <main>
      <Banner />
      <SlideEvent />
      <SlideNews />
      <Order />
    </main>
  );
};

export default Promotion;
