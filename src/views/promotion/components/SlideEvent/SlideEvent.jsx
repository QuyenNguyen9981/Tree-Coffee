import React from "react";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import SlideMenuEvents from "./components/SlideMenuEvents";

const SlideEvent = () => {
  return (
    <div className="pt-[61px]">
      <ContainerStyle>
        <HeaderStyle className=" text-center lg:text-left font-semibold text-[11px] lg:text-[21px]">
          DISCOVER
        </HeaderStyle>
        <HeaderStyle className="text-center lg:text-left text-[20px] lg:text-[40px]">
          upcoming events
        </HeaderStyle>
        <div className="pt-[10px] text-center lg:text-left">
          <span className="font-medium text-[10px] lg:text-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </span>
        </div>
        <SlideMenuEvents />
      </ContainerStyle>
    </div>
  );
};

export default SlideEvent;
