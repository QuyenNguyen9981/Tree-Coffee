import React from "react";
import Slider from "react-slick";
import img1 from "../../../../../asset/images/png/promotion/Group1.png";
import img2 from "../../../../../asset/images/png/promotion/Group2.png";
import img3 from "../../../../../asset/images/png/promotion/Group3.png";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../../components/common/HeaderStyle";
import NextArrow from "../../../../../asset/images/svg/NextArrow.svg";
import PrevArrow from "../../../../../asset/images/svg/PrevArrow.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const listSlide = [
  {
    img: img1,
    title: "Lorem Ipsum 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img2,
    title: "Lorem Ipsum 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img3,
    title: "Lorem Ipsum 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img1,
    title: "Lorem Ipsum 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img2,
    title: "Lorem Ipsum 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: img3,
    title: "Lorem Ipsum 6",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const SlideMenuEvents = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="hidden lg:block absolute top-[50%] right-[-10px] opacity-60">
        <img
          src={NextArrow}
          alt="nextArrow"
          className="text-right"
          onClick={onClick}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="hidden lg:block absolute top-[50%] left-[-10px] z-[10] ">
        <img
          src={PrevArrow}
          alt="prewArrow"
          className="text-right"
          onClick={onClick}
        />
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="pt-[18px]">
      <ContainerStyle className="slideCustomEvent">
        <Slider {...settings} className=" bg-cover">
          {listSlide?.map((list) => {
            return (
              <div key={list.title} className="">
                <div
                  className="pt-3 pl-[22px] shrink-0 h-[365px]"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img src={list.img} alt="img" />
                </div>
                <div className="pl-[46px] pr-[6px] pt-2">
                  <HeaderStyle className="font-semibold text-[20px]">
                    {list.title}
                  </HeaderStyle>
                  <div className="">
                    <span className="font-medium text-[20px]">
                      {list.content}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </ContainerStyle>
    </div>
  );
};

export default SlideMenuEvents;
