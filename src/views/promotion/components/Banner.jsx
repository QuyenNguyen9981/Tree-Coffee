import React, { useEffect } from "react";
import ContainerStyle from "../../../components/common/ContainerStyle";
import imgBanner from "../../../asset/images/png/promotion/PromoTittle1.png";
import { useState } from "react";
import { useRef } from "react";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Banner = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const bgBanner = useRef();

  // handle screen
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    // đặt ở đây để tránh bị re-render vô tận
    if (windowSize.innerWidth > 1023) {
      bgBanner.current?.classList.add("backGroundPromotion");
      bgBanner.current?.classList.remove("backGroundPromotionM");
    } else {
      bgBanner.current?.classList.add("backGroundPromotionM");
      bgBanner.current?.classList.remove("backGroundPromotion");
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <div
      ref={bgBanner}
      className="relative bg-cover bg-center md:bg-top lg:bg-center bg-no-repeat h-[624px] lg:h-[600px]"
    >
      <ContainerStyle>
        <div className="lg:hidden text-center pt-[5px] font-bold text-[12px] uppercase text-[#D1832A]">
          Promotion
        </div>
        <div className="lg:absolute lg:top-[50%]  lg:left-[30%] lg:translate-x-[-50%] lg:translate-y-[-50%] flex flex-col items-center gap-5 pt-2 lg:pt-0">
          <div className="px-[50px] lg:px-0 ">
            <img src={imgBanner} alt="banner" />
          </div>

          <div className="hoverStyle px-2 lg:px-4 py-1 lg:py-3 max-w-fit bg-primaryColor rounded-[68px]">
            <h3 className="font-medium uppercase text-[9px] lg:text-[21px]">
              ORDER NOW
            </h3>
          </div>
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Banner;
