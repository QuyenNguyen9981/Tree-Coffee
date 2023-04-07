import React from "react";
import TitleFooter from "../../../../components/common/TitleFooter";
import iconFacebook from "../../../../asset/images/png/Facebook.png";
import iconInstagram from "../../../../asset/images/png/Instagram.png";
import iconTwitter from "../../../../asset/images/png/Twitter.png";
import iconYoutube from "../../../../asset/images/png/Youtube.png";

const listIcon = [
  {
    icon: iconFacebook,
    href: "https://www.facebook.com/",
  },
  {
    icon: iconInstagram,
    href: "https://www.instagram.com",
  },
  {
    icon: iconTwitter,
    href: "https://twitter.com",
  },
  {
    icon: iconYoutube,
    href: "https://www.youtube.com",
  },
];

const Follow = () => {
  return (
    <div>
      <TitleFooter>follow us on</TitleFooter>
      <ul className="flex gap-x-[26.15px] pt-[21px]">
        {listIcon?.map((icon) => {
          return (
            <li key={icon.icon}>
              <a href={icon.href}>
                <img src={icon.icon} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
      <TitleFooter className="mt-[25px]">branches</TitleFooter>
      <TitleFooter className="mt-4  !text-[12px] lg:text-[17px]">
        1. Haddon Ave, Haddon Towne, NJ, US
      </TitleFooter>
      <TitleFooter className="mt-[10px] !text-[12px] lg:text-[17px]">
        2. Haddon Ave, Haddon Towne, NJ, US
      </TitleFooter>
    </div>
  );
};

export default Follow;
