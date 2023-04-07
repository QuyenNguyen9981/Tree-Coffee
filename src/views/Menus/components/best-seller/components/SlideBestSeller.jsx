import React from "react";
import item1 from "../../../../../asset/images/png/listBestSell/image7.png";
import item2 from "../../../../../asset/images/png/listBestSell/image8.png";
import item3 from "../../../../../asset/images/png/listBestSell/image9.png";
import item4 from "../../../../../asset/images/png/listBestSell/image10.png";
import item5 from "../../../../../asset/images/png/listBestSell/image11.png";
import NextArrow from "../../../../../asset/images/svg/NextArrow.svg";
import PrevArrow from "../../../../../asset/images/svg/PrevArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const listItem = [
  {
    img: item1,
  },
  {
    img: item2,
  },
  {
    img: item3,
  },
  {
    img: item4,
  },
  {
    img: item5,
  },
  {
    img: item1,
  },
  {
    img: item2,
  },
  {
    img: item3,
  },
  {
    img: item4,
  },
  {
    img: item5,
  },
];

const SlideBestSeller = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
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
    slidesToShow: 7,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        },
      },
    ],
  };

  return (
    <div className="lg:mt-[40px]" data-aos="zoom-in-up">
      <div className="slideBestSell">
        <Slider {...settings} className=" ">
          {listItem?.map((item) => {
            return (
              <div key={item.img}>
                <img
                  src={item.img}
                  alt="item"
                  className="cursor-pointer object-fill"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SlideBestSeller;
