import React from "react";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../../components/common/HeaderStyle";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const OrderNow = ({ data }) => {
  // reduxtoolkit dùng để đồng bộ state hiện tại
  const indexSlide = useSelector((state) => state.counter.value);

  const newData = data[indexSlide];
  console.log(newData);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div>
        <ContainerStyle>
          <div
            className="flex flex-col-reverse lg:flex-row justify-between gap-x-[119px] min-h-[428px] "
            key={newData.title}
          >
            <div className="translate-y-[-40px] lg:mt-9 lg:w-1/2 relative">
              <HeaderStyle className="w-[40%] lg:mt-9 lg:w-full font-bold text-[22px] lg:text-[53px] underline underline-offset-4  decoration-black ">
                {newData.title}
              </HeaderStyle>
              <div className=" lg:mt-6">
                <h5 className="font-medium text-[10px] lg:text-[23px]">
                  {newData.content}
                </h5>
              </div>
              <div className="hoverStyle px-[11px] mt-[10px] bg-primaryColor rounded-[53.3793px] max-w-fit cursor-pointer ml-auto">
                <a>
                  <h4 className="font-semibold text-[11px] lg:text-[33px]">
                    Order Now
                  </h4>
                </a>
              </div>
            </div>
            <div className=" relative w-[75%] lg:w-1/2 flex justify-center">
              <div
                className="relative top-[-10px] left-24 lg:left-0  lg:absolute lg:top-[-45px]"
                data-aos="fade-left"
              >
                <img
                  src={newData.imgBig}
                  alt="bigImage"
                  className="bg-cover bg-center"
                />
                <div className="absolute bottom-[65px] right-[23px]">
                  <img src={newData.imgItem} alt="iconImage" className="" />
                </div>
              </div>
            </div>
          </div>
        </ContainerStyle>
      </div>
    </div>
  );
};

export default OrderNow;
