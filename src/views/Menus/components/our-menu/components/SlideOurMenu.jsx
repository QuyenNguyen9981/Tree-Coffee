import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import NextArrow from "../../../../../asset/images/svg/NextArrow.svg";
import PrevArrow from "../../../../../asset/images/svg/PrevArrow.svg";
import { slideCurrent } from "../../../../../features/slickSlide/slickSlide";

const SlideOurMenu = ({ dataOurMenu }) => {
  const dispatch = useDispatch();

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="hidden lg:block absolute top-[50%] right-[-6px] opacity-60">
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
      <div className="hidden lg:block absolute top-[50%] left-[-6px] z-[10] ">
        <img
          src={PrevArrow}
          alt="prewArrow"
          className="text-right"
          onClick={onClick}
        />
      </div>
    );
  }

  const hanldeOnclick = (oldIndex, newIndex) => {
    console.log(newIndex);
    // dùng đồng bộ state của slide bar
    dispatch(slideCurrent(newIndex));
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 600,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: hanldeOnclick,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="slideNewsOur my-2 lg:my-[50px] w-full">
      <Slider {...settings} className=" flex items-end">
        {dataOurMenu?.map((data) => {
          return (
            <div key={data.title} className="">
              <img
                src={data.img}
                alt="logo"
                className="m-auto w-[130px] cursor-pointer "
              />
              <h3 className="font-medium text-[14px] lg:text-[17px] text-bgcolor text-center pt-[11px]">
                {data.title}
              </h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideOurMenu;
