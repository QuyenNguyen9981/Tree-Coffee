import React from "react";
import ContainerStyle from "../../../components/common/ContainerStyle";
import bgSection from "../../../asset/images/png/contact/Section1.png";

const Section1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgSection})` }}
      className="lg:min-h-[610px] pb-[44px] lg:pb-0"
    >
      <ContainerStyle>
        <div className="lg:hidden text-center pt-[5px] font-bold text-[12px] uppercase text-primaryColor">
          Contact
        </div>
        <div className="flex flex-col items-center pt-[78px] lg:pt-[282px]">
          <h2 className="font-bold text-[18px] lg:text-[55px] text-bgcolor uppercase">
            contact us
          </h2>
          <h3 className=" font-semibold text-[13px] lg:text-[40px] text-bgcolor uppercase italic pt-[13px]">
            Get in touch with us
          </h3>
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Section1;
