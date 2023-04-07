import React from "react";
import Slider from "react-slick";
import img1 from "../../../../../asset/images/png/News/Aboutus1.png";
import img2 from "../../../../../asset/images/png/News/Aboutus2.png";
import img3 from "../../../../../asset/images/png/News/Aboutus3.png";
import NextArrow from "../../../../../asset/images/svg/NextArrow.svg";
import PrevArrow from "../../../../../asset/images/svg/PrevArrow.svg";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../../components/common/HeaderStyle";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const listSlideNew = [
  {
    img: img1,
    title: "buy 1 get 1",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate",
  },
  {
    img: img2,
    title: "happy hours",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse ",
  },
  {
    img: img3,
    title: "1+1=3",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate",
  },
  {
    img: img1,
    title: "buy 1 get 1",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate",
  },
  {
    img: img2,
    title: "happy hours",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse ",
  },
  {
    img: img3,
    title: "1+1=3",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate",
  },
];

const SlideNewElement = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="hidden lg:block absolute top-[40%] right-[-10px] opacity-60">
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
      <div className="hidden lg:block absolute top-[40%] left-[-10px] z-[10] ">
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
    dots: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "42px",
          color: "#BF4C50",
          fontWeight: "700",
          fontSize: "23px",
        }}
      >
        {i + 1}
      </div>
    ),

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
          customPaging: (i) => (
            <div
              style={{
                width: "30px",
                color: "#BF4C50",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              {i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="slideCustomNews pt-10 mb-[174px]">
      <ContainerStyle>
        <Slider {...settings} className=" bg-cover">
          {listSlideNew?.map((news) => {
            return (
              <div key={news.title} className="">
                <div
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img src={news.img} alt="" />
                </div>
                <HeaderStyle>{news.title}</HeaderStyle>
                <div>
                  <span>{news.content}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </ContainerStyle>
    </div>
  );
};

export default SlideNewElement;
