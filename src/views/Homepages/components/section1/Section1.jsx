import React from "react";
import ChooseItems1 from "../section1/components/ChooseItems1";
import ChooseItems2 from "../section1/components/ChooseItems2";
import imgCol2 from "../../../../asset/images/jpg/Allyouneed 1.png";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import bgMobi from "../../../../asset/images/jpg/bgMobi.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1 = ({ data1, data2 }) => {
  const dataChoose1 = data1;
  const dataChoose2 = data2;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-cover bg-[#F5F5F5]">
      <div>
        <ContainerStyle className="">
          <HeaderStyle className="text-center mt-[20px] lg:mt-[52px] text-titleColor text-[20px] lg:text-[50.8641px]">
            CHOOSE & ENJOY
          </HeaderStyle>

          <div
            style={{ backgroundImage: `url(${bgMobi})` }}
            className="lg:!bg-none flex justify-between bg-bgcolor mt-3 lg:mt-10 gap-[35px] lg:gap-5  bg-contain bg-center bg-no-repeat"
          >
            <ChooseItems1
              data={dataChoose1}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <div className="hidden lg:block lg:pt-[92px] lg:shrink-0">
              <img
                src={imgCol2}
                alt="all you need"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>
            <ChooseItems2
              data={dataChoose2}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
        </ContainerStyle>
      </div>
    </div>
  );
};

export default Section1;
