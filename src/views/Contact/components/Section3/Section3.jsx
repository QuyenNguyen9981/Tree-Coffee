import React from "react";
import Map from "../../../../components/Map/Map";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import Follow from "../Section2/components/Follow";
import FollowMobile from "./components/FollowMobile";

const Section3 = () => {
  return (
    <div>
      <ContainerStyle className="flex flex-col lg:flex-row gap-x-[84px] ">
        <div className="">
          <Map />
        </div>
        <div className="pt-[18px] lg:pt-[58px]">
          <div className="flex gap-3 ">
            <div>
              <h2 className="font-bold text-[15px] lg:text-[21px] uppercase ">
                Branches
              </h2>

              <div className="lg:pt-[20px] flex flex-col">
                <h3 className="font-bold text-[10px] lg:text-[21px] text-btnStory">
                  BBTee House 1
                </h3>
                <span className="font-bold text-[9px] lg:text-[18px]">
                  +1 856-355-8555
                </span>
                <span className="font-bold text-[9px] lg:text-[18px]">
                  144 Haddon Ave, Haddon Towne, NJ, US
                </span>
              </div>
            </div>
            <FollowMobile />
          </div>
        </div>
      </ContainerStyle>
    </div>
  );
};

export default Section3;
