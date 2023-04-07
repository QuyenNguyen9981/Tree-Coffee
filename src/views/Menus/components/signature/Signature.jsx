import React from "react";
import OrderNow from "./components/OrderNow";
import ListOrder from "./components/ListOrder";
import Topping from "./components/Topping";
import imgBg3 from "../../../../asset/images/png/SectionBG3.png";

const Signature = ({ data }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgBg3})` }}
      className="bg-cover bg-center"
    >
      <OrderNow data={data} />
      <ListOrder data={data} />
      <Topping />
    </div>
  );
};

export default Signature;
