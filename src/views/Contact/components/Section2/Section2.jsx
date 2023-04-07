import React from "react";
import FormSubmit from "../Section2/components/FormSubmit";
import Info from "../Section2/components/Info";
import bgSection2 from "../../../../asset/images/png/contact/bgSection2.png";
import Follow from "./components/Follow";

const Section2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgSection2})` }}
      className="lg:min-h-[1192px] pb-[23px] lg:pb-0"
    >
      <Info />
      <FormSubmit />
      <Follow />
    </div>
  );
};

export default Section2;
