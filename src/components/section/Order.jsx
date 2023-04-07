import React, { useEffect } from "react";
import order1 from "../../asset/images/jpg/ORDER1.png";
import order2 from "../../asset/images/jpg/ORDER2.png";
import ContainerStyle from "../common/ContainerStyle";
import ContentStyle from "../common/ContentStyle";
import HeaderStyle from "../common/HeaderStyle";
import Aos from "aos";
import "aos/dist/aos.css";

const dataSection3 = [
  {
    title: "Order",
    content: "Open your phone and choose BB Tee House",
    link: "#",
  },
  {
    title: "Chosen Menu",
    content: "Choose your favorite drink and pay for your order",
    link: "#",
  },
  {
    title: "Delivery",
    content: "Let’s wait a minute, your drink will be delivery very soon",
    link: "#",
  },
];
const Order = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=" bg-section3 py-[40px]">
      <ContainerStyle>
        <div className="flex flex-col gap-y-[31px] lg:gap-y-0 items-center">
          <HeaderStyle className="text-2xl lg:text-5xl text-center lg:mb-[27px]">
            NOW YOU CAN ORDER ON
          </HeaderStyle>
          <div className="flex justify-center gap-7 lg:mb-[55px]">
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src={order1}
              alt="shipper"
              className="hoverOrder w-[85px] h-[85px] lg:w-auto lg:h-auto"
            />
            <img
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src={order2}
              alt="uber"
              className="hoverOrder w-[85px] h-[85px] lg:w-auto lg:h-auto"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-[38px] text-center">
            {dataSection3?.map((section3) => {
              return (
                <div key={section3.title}>
                  <a
                    href={section3.link}
                    className="font-bold text-menuColor-titleItems text-sm lg:text-5xl cursor-pointer hover:text-titleColor"
                  >
                    {section3.title}
                  </a>
                  <div>
                    <ContentStyle className="text-xs lg:text-lg">
                      {section3.content}
                    </ContentStyle>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Order;
