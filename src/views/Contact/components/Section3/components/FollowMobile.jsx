import React from "react";
import imgFb from "../../../../../asset/images/png/contact/Facebook.png";
import imgInsta from "../../../../../asset/images/png/contact/Instagram.png";
import imgTwitter from "../../../../../asset/images/png/contact/Twitter.png";
import imgYoutube from "../../../../../asset/images/png/contact/Youtube.png";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import imgFbM from "../../../../../asset/images/png/contact/FacebookM.png";
import imgInstaM from "../../../../../asset/images/png/contact/InstagramM.png";
import imgTwitterM from "../../../../../asset/images/png/contact/TwitterM.png";
import imgYoutubeM from "../../../../../asset/images/png/contact/YoutubeM.png";

const listImg = [
  {
    id: "1",
    imgM: imgFb,
    imgM: imgFbM,
    src: "https://www.facebook.com",
  },
  {
    id: "2",
    img: imgInsta,
    imgM: imgInstaM,
    src: "https://www.instagram.com",
  },
  {
    id: "3",
    img: imgTwitter,
    imgM: imgTwitterM,
    src: "https://twitter.com",
  },
  {
    id: "4",
    img: imgYoutube,
    imgM: imgYoutubeM,
    src: "https://www.youtube.com",
  },
];

const FollowMobile = () => {
  return (
    <div className="block lg:hidden">
      <ContainerStyle className=" flex flex-col text-center">
        <h2 className="font-bold text-[12px] uppercase text-colorFolowM">
          Follow us on
        </h2>
        <div className="pt-[8px]  m-auto">
          <ul className="flex  gap-x-[18px]">
            {listImg?.map((img) => {
              return (
                <li key={img.id}>
                  <a className="cursor-pointer" href={img.src}>
                    <img src={img.imgM} alt="icon" />
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

export default FollowMobile;
