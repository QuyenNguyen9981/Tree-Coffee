import React from "react";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import SlideNewElement from "./components/SlideNewElement";

const SlideNews = () => {
  return (
    <div className="mt-[50px]">
      <ContainerStyle>
        <HeaderStyle className="text-center lg:text-left font-semibold text-[11px] lg:text-[21px]">
          DISCOVER
        </HeaderStyle>
        <HeaderStyle className="text-center lg:text-left text-[20px] lg:text-4xl">
          news
        </HeaderStyle>
        <SlideNewElement />
      </ContainerStyle>
    </div>
  );
};

export default SlideNews;
