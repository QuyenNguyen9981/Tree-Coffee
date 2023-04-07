import React from "react";
import ContainerStyle from "../../../components/common/ContainerStyle";
import bgSection1 from "../../../asset/images/png/ourStory/bgImage.png";
import img1 from "../../../asset/images/png/ourStory/DrinkElement1.png";
import img2 from "../../../asset/images/png/ourStory/DrinkElement2.png";
import HeaderStyle from "../../../components/common/HeaderStyle";
import btnIcon from "../../../asset/images/svg/Frame.svg";
import { useNavigate } from "react-router-dom";
import title1 from "../../../asset/images/png/ourStory/Group1.png";
import title2 from "../../../asset/images/png/ourStory/Group2.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const handleOnClick = () => {
    navigate("/menu");
  };
  return (
    <main
      style={{ backgroundImage: `url(${bgSection1})` }}
      className="bg-center bg-cover pb-[30px] lg:pb-[87px]"
    >
      <div>
        <ContainerStyle>
          <div className="lg:hidden text-center pt-[5px] font-bold text-[12px] uppercase text-primaryColor">
            OUR Story
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[72px]">
            <div className="translate-x-2 mt-[32px] lg:mt-[109px]  w-full lg:w-[120%] pr-[106px] lg:pr-0">
              <h3 className="text-[#FED428] font-bold text-[25px] lg:text-[69px]">
                Discover a drink that’s made for you
              </h3>
              <div className=" lg:mt-[25px]">
                <p className="font-normal text-[8px] lg:text-[21px] text-bgcolor">
                  BB Tee House is a business driven by passion, we are
                  passionated about beverage industry, exellent customer
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={img1} alt="img" />
            </div>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-20">
            <div
              className="hidden lg:block"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={img2} alt="img" />
            </div>
            <div>
              <HeaderStyle className="text-[20px] text-center lg:text-left lg:text-[37px] mt-4 lg:mt-0">
                Way to have more energy with less caffeine
              </HeaderStyle>
              <div className="mt-[15px]">
                <p className="font-medium text-[8px] text-justify  lg:text-left lg:text-[20px]">
                  BB Tee House is a business driven by passion, we are
                  passionated about beverage industry, excellent customer
                  service and community. From the first day, our mission has
                  been cleared, we want to creat a new favorite beverage flavor
                  trend: using the lighter drinks but still create “the
                  wakening".
                </p>
              </div>
              <div className="mt-[7px] lg:mt-[35px] grid grid-cols-2 lg:grid-cols-none">
                <div className=" lg:hidden">
                  <img src={img2} alt="img" />
                </div>
                <div>
                  <p className="font-medium text-[8px] lg:text-[20px] text-justify  lg:text-left">
                    We are just as dedicated to roasting low caffeine coffee and
                    tea for you to enjoy at home, at work, in a café or “on the
                    move”. A simply morning routine with energy drinks will help
                    you brighten up your day. Starting your day intentionally
                    with things that make you smile and slow down may be even
                    more powerful than a high caffeine drink. It's really
                    important to start your day off right and keep being
                    positive the entire day! Our quality products are the result
                    of being committed to a craft and having a purpose. From our
                    suppliers to our production staff, we are all committed to
                    not just protecting, but enhancing the quality of all our
                    products, through every step of the process.
                  </p>
                  <div className="lg:hidden mt-2  ">
                    <img src={title1} alt="image" className="m-auto" />
                    <img src={title2} alt="image" className="m-auto" />
                  </div>
                </div>
              </div>
              <div
                className="mt-[57px] hidden lg:block"
                onClick={handleOnClick}
              >
                <div className="hoverStyle px-6 py-4 bg-btnStory rounded-[191px] max-w-fit flex gap-x-3 cursor-pointer">
                  <h3 className="text-lg text-bgcolor font-medium">
                    Back to menu
                  </h3>
                  <a>
                    <img src={btnIcon} alt="back" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ContainerStyle>
      </div>
    </main>
  );
};

export default Section1;
