import React from "react";
import { useSelector } from "react-redux";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ListOrder = ({ data }) => {
  const indexMenu = useSelector((state) => state?.counter.value);

  const dataItemMenu = data[indexMenu];

  const dataListItemMenu = dataItemMenu.listMenu;

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="lg:mt-[100px]" data-aos="zoom-in">
      <ContainerStyle className="">
        <div className="flex flex-wrap gap-[26px] lg:gap-x-3 gap-y-[30px] lg:gap-y-[75px] justify-between md:justify-start px-5 lg:px-0">
          {dataListItemMenu?.map((item) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.bgItem})` }}
                className=" w-[148px] lg:w-[235px] max-h-[72px] lg:max-h-[115px] flex  gap-1 bg-cover"
                key={item.name}
              >
                <div className="">
                  <img
                    src={item.img}
                    alt="card"
                    className="w-[60px] lg:w-full relative  top-[-30px] lg:top-[-60px] "
                  />
                </div>
                <div className="mt-1 mb-3">
                  <div className="max-h-12 max-w-[115px] lg:h-full w-full pr-1">
                    <h4 className="font-semibold text-[8px] lg:text-[13px]">
                      {item.name}
                    </h4>
                  </div>
                  <div className="max-w-fit bg-ozColor rounded-[10px]  px-[10px] py-[3px] mt-[6px]">
                    <h4 className="font-bold text-[7px] lg:text-xs">
                      {item.capacity}
                    </h4>
                  </div>
                  <div className="mt-1">
                    <h5 className="font-semibold text-[8px] lg:text-[14px]">
                      {item.price}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContainerStyle>
    </div>
  );
};

export default ListOrder;
