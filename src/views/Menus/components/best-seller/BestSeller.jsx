import React from "react";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import SlideBestSeller from "./components/SlideBestSeller";

const BestSeller = () => {
  return (
    <div className="mt-[42.5px] lg:mt-14  lg:mb-[88px]">
      <ContainerStyle className="text-center">
        <h4 className="font-semibold text-[11px] lg:text-[21px] text-titleColor uppercase">
          Discover
        </h4>
        <HeaderStyle className=" text-[20px] lg:text-[40px]">
          Best seller of the week
        </HeaderStyle>
        <div className="lg:px-[95px]">
          <span className="font-medium text-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </span>
        </div>
      </ContainerStyle>
      <SlideBestSeller />
    </div>
  );
};

export default BestSeller;
