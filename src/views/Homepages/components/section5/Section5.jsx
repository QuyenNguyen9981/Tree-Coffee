import React from "react";
import ContentStyle from "../../../../components/common/ContentStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import imgVector1 from "../../../../asset/images/png/Vector.png";
import imgBackground from "../../../../asset/images/jpg/image5.jpg";
import ContainerStyle from "../../../../components/common/ContainerStyle";

const Section5 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgBackground})`,
      }}
      className="w-full"
    >
      <ContainerStyle>
        <div className="flex flex-col items-center">
          <div className="w-5 sm:w-10 lg:shrink-0">
            <img
              src={imgVector1}
              alt="vector1"
              className="mt-5 lg:mt-[44px] "
            />
          </div>
          <HeaderStyle className=" mt-3 lg:mt-6 text-[20px] sm:text-[50px] lg:text-[67px]">
            Always on the go
          </HeaderStyle>
          <div className="s">
            <ContentStyle className="font-semibold text-[8px] sm:text-[20px]  lg:text-[32px] mt-2 lg:mt-[31px] text-center">
              Let us simplify your morning and daily routine and help set the
              mood with drinks to brighten the day! Our intentions is only to
              make you smile.
            </ContentStyle>
          </div>
          <div className="max-w-[628px] mt-[8px] mb-3 lg:mb-[45px]">
            <ContentStyle className="text-[8px] sm:text-[20px]  lg:text-[32px]  text-center ">
              Reveal your taste buds and enjoy the feeling of freshness
            </ContentStyle>
          </div>
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Section5;
