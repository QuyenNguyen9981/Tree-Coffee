import React from "react";
import imgFb from "../../../../../asset/images/png/contact/Facebook.png";
import imgInsta from "../../../../../asset/images/png/contact/Instagram.png";
import imgTwitter from "../../../../../asset/images/png/contact/Twitter.png";
import imgYoutube from "../../../../../asset/images/png/contact/Youtube.png";
import ContainerStyle from "../../../../../components/common/ContainerStyle";

const listImg = [
  {
    id: "1",
    img: imgFb,
    src: "https://www.facebook.com",
  },
  {
    id: "2",
    img: imgInsta,
    src: "https://www.instagram.com",
  },
  {
    id: "3",
    img: imgTwitter,
    src: "https://twitter.com",
  },
  {
    id: "4",
    img: imgYoutube,
    src: "https://www.youtube.com",
  },
];

const Follow = () => {
  return (
    <div className="hidden lg:block">
      <ContainerStyle className="pt-[38px] flex flex-col text-center">
        <h2 className="font-bold text-[33px] uppercase text-primaryColor">
          Follow us on
        </h2>
        <div className="pt-[31.5px] pb-[70px] m-auto">
          <ul className="flex  gap-x-[49px]">
            {listImg?.map((img) => {
              return (
                <li key={img.id}>
                  <a className="cursor-pointer" href={img.src}>
                    <img src={img.img} alt="icon" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Follow;
