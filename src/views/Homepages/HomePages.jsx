import React, { useEffect, useRef, useState } from "react";
import imgChoose1 from "../../asset/images/jpg/Choose/VectorSmartObject1-03.png";
import imgChoose2 from "../../asset/images/jpg/Choose/VectorSmartObject1-04.png";
import imgChoose3 from "../../asset/images/jpg/Choose/VectorSmartObject1-05.png";
import imgChoose4 from "../../asset/images/jpg/Choose/VectorSmartObject1-06.png";
import imgChoose5 from "../../asset/images/jpg/Choose/VectorSmartObject1-07.png";
import imgBanner from "../../asset/images/jpg/HeroBaner.jpg";
import imgBannerM from "../../asset/images/png/heightImg.png";

import Order from "../../components/section/Order";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";

const dataChoose2 = [
  {
    img: imgChoose1,
    title: "SODA",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose2,
    title: "FRAPPE’ BLENDED DRINKS",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose3,
    title: "TEE HOUSE TEA",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose4,
    title: "TEE HOUSE MILKTEA",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose5,
    title: "TOPPING",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
];
const dataChoose1 = [
  {
    img: imgChoose1,
    title: "New",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose2,
    title: "SIGNATURE",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose3,
    title: "TEE HOUSE’S COFFEE",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose4,
    title: "ITALIAN COFFEE",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
  {
    img: imgChoose5,
    title: "ICE BLENDED",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,...",
    note: "See more",
  },
];

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const HomePages = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [navStyle, setNavStyle] = useState(true);

  // handle screen
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    // đặt ở đây để tránh bị re-render vô tận
    if (windowSize.innerWidth <= 768) {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <main>
      <div className="shrink-0  sm:h-auto">
        <div className="lg:hidden text-center pt-[5px] font-bold text-[12px] uppercase text-primaryColor bg-black">
          Home
        </div>
        <img
          className="h-full w-full "
          src={navStyle ? imgBannerM : imgBanner}
          alt="Hero banner"
        />
      </div>
      <Section1
        data1={dataChoose1}
        data2={dataChoose2}
        className="bg-bgcolor"
      />
      <Section2 />
      <Order />
      <Section4 />
      <Section5 />
    </main>
  );
};

export default HomePages;
