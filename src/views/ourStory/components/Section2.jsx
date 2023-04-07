import React from "react";
import Slider from "react-slick";
import bgImage from "../../../asset/images/png/ourStory/bgImage2.png";
import imgUser from "../../../asset/images/png/ourStory/Customers.png";
import NextArrow from "../../../asset/images/svg/NextArrow.svg";
import PrevArrow from "../../../asset/images/svg/PrevArrow.svg";
import ContainerStyle from "../../../components/common/ContainerStyle";
import dotStyle from "../../../asset/images/png/ourStory/Ellipse1.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const dataSlide = [
  {
    id: "1",
    img: imgUser,
    title: "Our Happy Customers",
    name: "Mr.Jony",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: "2",
    img: imgUser,
    title: "Our Happy Customers",
    name: "Mr.Jony",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: "3",
    img: imgUser,
    title: "Our Happy Customers",
    name: "Mr.Jony",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const Section2 = () => {
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
      <div className="hidden lg:block absolute top-[50%] left-[-40px] z-[10] opacity-60 ">
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
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (value) => (
      <div>
        <ul className="">{value}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          backgroundImage: `url(${dotStyle})`,
          height: "15px",
          width: "15px",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          dots: true,
        },
      },
    ],
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-center bg-cover"
    >
      <ContainerStyle>
        <Slider {...settings} className="SlideStory">
          {dataSlide?.map((data) => {
            return (
              <div
                key={data.id}
                className="!flex flex-col lg:flex-row justify-center lg:gap-[150px]  lg:pt-[12px]  mb-[84px]"
              >
                <div className=" lg:hidden mt-[18px] mb-[12px] self-center">
                  <h3 className="font-bold text-[20px]  text-titleColor2 ">
                    {data.title}
                  </h3>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="max-w-[163px] lg:max-w-none lg:shrink-0 c m-auto "
                >
                  <img src={data.img} alt="img" className="lg:mt-[50px]" />
                </div>
                <div className="mx-[50px] lg:ml-0">
                  <div className="hidden lg:block">
                    <h3 className="font-bold text-[37px] pt-[87px] text-titleColor2">
                      {data.title}
                    </h3>
                  </div>
                  <div className="mt-2 lg:mt-[54px]">
                    <h4 className="text-[15px] lg:text-[30px] font-semibold text-titleColor lg:text-contentStory ">
                      {data.name}
                    </h4>
                  </div>
                  <div className="">
                    <p className="font-medium italic lg:font-font1 text-[10px] lg:text-[22px] text-menuColor-paramItems lg:text-bgcolor">
                      {data.description}
                    </p>
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

export default Section2;
