import React from "react";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import iconPhone from "../../../../../asset/images/png/contact/Group.png";
import iconLocal from "../../../../../asset/images/png/contact/Vector.png";
import iconSocial from "../../../../../asset/images/png/contact/Social.png";

const listInfo = [
  {
    icon: iconPhone,
    title: "Phone",
    content: "+1 856-355-8555",
  },
  {
    icon: iconLocal,
    title: "Address",
    content: "144 Haddon Ave, Haddon Towne, NJ, US",
  },
  {
    icon: iconSocial,
    title: "Social",
    content: "www.bbteehouse.com Facebook.com/BBTeeHouse",
  },
];

const Info = () => {
  return (
    <div className="pt-[19px] lg:pt-[67px]">
      <ContainerStyle>
        <div
          className="StyleSpace grid grid-cols-3 gap-3 lg:gap-20 "
          style={{}}
        >
          {listInfo?.map((info) => {
            return (
              <div key={info.title} className="flex flex-col items-center px-2">
                <div>
                  <div className="">
                    <img
                      src={info.icon}
                      alt="icon"
                      className="m-auto w-[8px] lg:w-[30px]"
                    />
                  </div>
                  <h4 className="font-medium text-[8px] lg:text-[30px] text-primaryColor">
                    {info.title}
                  </h4>
                </div>
                <div className="text-center w-full mt-[10px] lg:mt-[34px]">
                  <p className="font-bold text-[9px] lg:text-[22px] text-bgcolor text-ellipsis overflow-hidden">
                    {info.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Info;
