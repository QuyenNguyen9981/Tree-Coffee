import React from "react";
import img1 from "../../../../../asset/images/jpg/image2.jpg";
import img2 from "../../../../../asset/images/jpg/image1.jpg";
import img3 from "../../../../../asset/images/jpg/image3.jpg";
import NextArrow from "../../../../../asset/images/svg/NextArrow.svg";
import PrevArrow from "../../../../../asset/images/svg/PrevArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const listSlide = [
  {
    img: img1,
    link: "",
  },
  {
    img: img2,
    link: "",
  },
  {
    img: img3,
    link: "",
  },
  {
    img: img1,
    link: "",
  },
  {
    img: img2,
    link: "",
  },
  {
    img: img3,
    link: "",
  },
];

const Slide = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="hidden lg:block absolute top-[50%] right-3 opacity-60">
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
      <div className="hidden lg:block absolute top-[50%] left-3 z-[10] ">
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "70px",
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="slideNews bg-cover">
        {listSlide?.map((slides) => {
          return (
            <img
              key={slides.img}
              src={slides.img}
              alt={slides.img}
              className="center-[30px] cursor-pointer"
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Slide;
