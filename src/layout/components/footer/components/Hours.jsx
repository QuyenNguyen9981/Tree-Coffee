import React from "react";
import TitleFooter from "../../../../components/common/TitleFooter";

const Hours = ({ data }) => {
  return (
    <div className="text-bgcolor ">
      <TitleFooter>Opening Hours</TitleFooter>
      <ul className="mt-[10px] lg:mt-[39px] flex flex-col gap-[21px]">
        {data?.map((work) => {
          return (
            <li className="flex items-end" key={work.data}>
              <span className="text-[13px] uppercase font-normal">
                {work.data}
              </span>
              <p className="h-[1px] bg-white flex-1 mr-[17.5px] ml-1 mb-[6px]"></p>
              <span className="text-[13px]">{work.time}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hours;
