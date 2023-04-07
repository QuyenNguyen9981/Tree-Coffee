import React from "react";
import imgBackground from "../../../asset/images/jpg/image4.jpg";
import ContainerStyle from "../../../components/common/ContainerStyle";

import TitleFooter from "../../../components/common/TitleFooter";
import Contact from "./components/Contact";
import Follow from "./components/Follow";
import Hours from "./components/Hours";

const dataWork = [
  {
    data: "monday",
    time: "8AM - 8PM",
  },
  {
    data: "tuesday",
    time: "8AM - 8PM",
  },
  {
    data: "wednesday",
    time: "8AM - 8PM",
  },
  {
    data: "thursday",
    time: "8AM - 8PM",
  },
  {
    data: "firday",
    time: "10AM - 8PM",
  },
  {
    data: "saturday",
    time: "10AM - 8PM",
  },
  {
    data: "sunday",
    time: "10AM - 8PM",
  },
];
const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${imgBackground})` }}
      className="bg-cover pt-[70px] pb-[56px]"
    >
      <ContainerStyle className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[130px] gap-y-12">
        <Hours data={dataWork} />
        <Contact />
        <Follow />
      </ContainerStyle>
    </footer>
  );
};

export default Footer;
