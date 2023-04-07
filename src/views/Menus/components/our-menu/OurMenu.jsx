import React from "react";
import imgBackground from "../../../../asset/images/png/image6.png";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import SlideOurMenu from "./components/SlideOurMenu";

const OurMenu = ({ data }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgBackground})` }}
      className=" bg-cover bg-center"
    >
      <ContainerStyle>
        <div className="lg:hidden text-center pt-[5px] font-bold text-[12px] uppercase text-primaryColor">
          OUR MENU
        </div>
        <div className="flex flex-col items-center ">
          <HeaderStyle className=" hidden lg:block text-[40px]  !text-contentStory lg:!text-bgcolor ">
            OUR MENU
          </HeaderStyle>
          <HeaderStyle className="hidden lg:block text-[40px] !text-bgcolor font-medium">
            LET START TO ORDER NOW
          </HeaderStyle>
          <SlideOurMenu dataOurMenu={data} />
        </div>
      </ContainerStyle>
    </div>
  );
};

export default OurMenu;
