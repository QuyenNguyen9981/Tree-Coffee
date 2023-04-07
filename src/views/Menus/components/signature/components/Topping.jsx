import React, { useEffect, useState } from "react";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import title from "../../../../../asset/images/png/Group16.png";
import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import bgTopping from "../../../../../asset/images/png/bgtopping.png";
// import bgToppingM from "../../../../../asset/images/png/bgtoppingM.png";

const listTopping = [
  {
    name: "Black Pearl",
    price: "$ 0.85",
  },
  {
    name: "White Pearl",
    price: "$ 0.85",
  },
  {
    name: "Mango Pearl",
    price: "$ 0.85",
  },
  {
    name: "Lychee Pearl",
    price: "$ 0.85",
  },
  {
    name: "Taro Pearl",
    price: "$ 0.85",
  },
  {
    name: "Redbean Flavour",
    price: "$ 0.85",
  },
  {
    name: "Taro Flavour",
    price: "$ 0.85",
  },
  {
    name: "Coffee Jelly",
    price: "$ 0.85",
  },
  {
    name: "Herbal Jelly",
    price: "$ 0.85",
  },
  {
    name: "Rainbow Jelly",
    price: "$ 0.85",
  },
  {
    name: "Aiyu Jelly",
    price: "$ 0.85",
  },
  {
    name: "Coconut Jelly",
    price: "$ 0.85",
  },

  {
    name: "Egg Pudding",
    price: "$ 0.85",
  },
  {
    name: "Aloe Vera",
    price: "$ 0.85",
  },
  {
    name: "Roasted Coconut",
    price: "$ 0.85",
  },
  {
    name: "Chia",
    price: "$ 0.85",
  },
  {
    name: "Cheese Foam",
    price: "$ 0.85",
  },
  {
    name: "Brulee Cream",
    price: "$ 0.85",
  },
  {
    name: "Oreo Cream",
    price: "$ 0.85",
  },
];

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Topping = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const bgTopping = useRef();

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  // handle screen
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    // đặt ở đây để tránh bị re-render vô tận
    if (windowSize.innerWidth > 1023) {
      bgTopping.current?.classList.remove("backGroundToppingM");
      bgTopping.current?.classList.remove("backGroundToppingIpab");
      bgTopping.current?.classList.add("backGroundTopping");
    } else if (windowSize.innerWidth > 765) {
      bgTopping.current?.classList.add("backGroundToppingIpab");
      bgTopping.current?.classList.remove("backGroundTopping");
      bgTopping.current?.classList.remove("backGroundToppingM");
    } else {
      bgTopping.current?.classList.add("backGroundToppingM");
      bgTopping.current?.classList.remove("backGroundTopping");
      bgTopping.current?.classList.remove("backGroundToppingIpab");
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <div className="mt-[34px] pb-7 ">
      <ContainerStyle>
        <div>
          <img src={title} alt="title" />
        </div>
        <div
          data-aos="zoom-in"
          ref={bgTopping}
          // style={{ backgroundImage: `url(${bgTopping})` }}
          className=" bg-no-repeat !bg-contain bg-cover px-9 pt-7 md:pt-20 lg:pt-6 "
        >
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-x-[31px] pb-[49px] md:px-5 xl:pt-3 ">
            {listTopping?.map((topping) => {
              return (
                <li key={topping.name} className="flex items-center">
                  <span className="font-semibold text-[15px]">
                    {topping.name}
                  </span>
                  <p className="h-[1px] bg-black mt-auto mb-[6px] mx-1  flex-1"></p>
                  <span className="font-medium text-[15px] ">
                    {topping.price}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Topping;
