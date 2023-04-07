import React from "react";
import order1 from "../../../../asset/images/jpg/ORDER1.png";
import order2 from "../../../../asset/images/jpg/ORDER2.png";
import ContentStyle from "../../../../components/common/ContentStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";

const dataSection3 = [
  {
    title: "Order",
    content: "Open your phone and choose BB Tee House",
  },
  {
    title: "Chosen Menu",
    content: "Choose your favorite drink and pay for your order",
  },
  {
    title: "Delivery",
    content: "Let’s wait a minute, your drink will be delivery very soon",
  },
];
const Section3 = () => {
  return (
    <div>
      <ContentStyle className=" bg-section3 ">
        <HeaderStyle className="text-[20px] lg:text-5xl text-center mt-[29px] lg:mt-[53px]">
          NOW YOU CAN ORDER ON
        </HeaderStyle>
        <div className="flex flex-col gap-x-[39px] mt-[27px] mb-[55px]">
          <img src={order1} alt="shipper" />
          <img src={order2} alt="uber" />
        </div>
        <div className="flex justify-center  ">
          {dataSection3?.map((section3) => {
            return (
              <div key={section3.title} className="text-center max-w-[385px]">
                <h4 className="font-bold text-menuColor-titleItems text-5xl">
                  {section3.title}
                </h4>
                <div className="pt-[17px] pb-[46px]">
                  <ContentStyle className="text-lg">
                    {section3.content}
                  </ContentStyle>
                </div>
              </div>
            );
          })}
        </div>
      </ContentStyle>
    </div>
  );
};

export default Section3;
