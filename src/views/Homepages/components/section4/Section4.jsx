import React from "react";
import { useRef } from "react";
import img1 from "../../../../asset/images/jpg/Aboutus IMG_0000_Vector Smart Object.jpg";
import img2 from "../../../../asset/images/jpg/Aboutus IMG_0001_Vector Smart Object.jpg";
import img3 from "../../../../asset/images/jpg/Aboutus IMG_0002_About us IMG.jpg";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import ContentStyle from "../../../../components/common/ContentStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const dataSection4 = [
  {
    img: img1,
    title: "Make it simple",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse molestie consequat, ",
    link: "#",
  },
  {
    img: img2,
    title: "COFFEE SHOP",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse molestie consequat, ",
    link: "#",
  },
  {
    img: img3,
    title: "COFFEE BAR",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse molestie consequat, ",
    link: "#",
  },
  {
    img: img1,
    title: "Make it simple",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse molestie consequat, ",
    link: "#",
  },
  {
    img: img2,
    title: "COFFEE SHOP",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse molestie consequat, ",
    link: "#",
  },
  {
    img: img3,
    title: "COFFEE BAR",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam t in vulputate velit esse molestie consequat, ",
    link: "#",
  },
];
const Section4 = () => {
  const content = useRef();

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const handleSeeMore = (value) => {
    content.current?.classList.remove("line-clamp-3");
    value.target.style.display = "none";
  };

  return (
    <div>
      <ContainerStyle className="my-[26px] lg:my-[48px]">
        <HeaderStyle className="text-[20px] lg:text-[42px] text-center">
          ABOUT US
        </HeaderStyle>
        <div
          className="mt-[25px] grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-3 lg:gap-x-6  lg:gap-y-10"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {dataSection4?.map((section4) => {
            return (
              <div key={section4.title} className="">
                <img src={section4.img} alt="" className="w-full" />
                <div className="mt-[6px] lg:mt-[32px]">
                  <a
                    href={section4.link}
                    className="text-[9px] lg:text-[22px] font-bold lg:font-medium uppercase cursor-pointer hover:text-titleColor"
                  >
                    {section4.title}
                  </a>
                </div>
                <ContentStyle className="mt-[6px] lg:mt-[16px] text-[9px] lg:text-[19px] line-clamp-3 ">
                  {section4.content}
                </ContentStyle>
                <div
                  className=" text-[9px] lg:text-[19px]  lg:hidden text-center hover:underline-offset-1 decoration-black text-red-600"
                  onClick={handleSeeMore}
                >
                  see more
                </div>
              </div>
            );
          })}
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Section4;
