import React from "react";
import bgSesion3 from "../../../../asset/images/jpg/Section3.png";
import ContentStyle from "../../../../components/common/ContentStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import Slide from "../section2/components/Slide";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import { useRef } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  const content = useRef();

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const handleSeeMore = (value) => {
    content.current?.classList.remove("line-clamp-2");
    value.target.style.display = "none";
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgSesion3})`,
      }}
      className="bg-cover mt-[53px]"
    >
      <ContainerStyle>
        <HeaderStyle className="font-semibold text-[11px] lg:text-xl text-center pt-[18px] lg:pt-[34px]">
          DISCOVER
        </HeaderStyle>
        <HeaderStyle className="text-center text-[20px] lg:text-[40px]">
          UPCOMING EVENTS
        </HeaderStyle>
        <div
          ref={content}
          className="text-[10px] lg:text-[19px] m-auto mt-2 line-clamp-2 lg:line-clamp-none"
        >
          <ContentStyle className="  text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore . Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </ContentStyle>
        </div>
        <div
          className=" lg:hidden text-center hover:underline-offset-1 decoration-black text-red-600"
          onClick={handleSeeMore}
        >
          see more
        </div>
      </ContainerStyle>
      <div
        className="pt-[19px] lg:pt-[49px] pb-[26px] lg:pb-[93px]"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Slide />
      </div>
    </div>
  );
};

export default Section2;
