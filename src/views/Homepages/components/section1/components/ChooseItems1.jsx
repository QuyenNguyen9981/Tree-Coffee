import React from "react";

const ChooseItems = (props) => {
  const { data } = props;
  return (
    <>
      <div className="flex gap-y-[10px] lg:gap-y-[34px] flex-col">
        {data?.map((choose1) => {
          return (
            <div key={choose1.title} className="flex flex-col md:flex-row ">
              <div className="  flex items-center gap-[6px]  ">
                <div className="shrink-0 w-[63px] h-[70px] lg:shrink-0 lg:w-auto lg:h-auto">
                  <img src={choose1.img} alt={choose1.title} />
                </div>

                <div className="">
                  <div className="">
                    <h4 className="font-bold text-[12px] lg:text-lg md:underline md:decoration-2 hover:text-titleColor2 !cursor-pointer">
                      {choose1.title}
                    </h4>
                  </div>

                  <p className="hidden md:block text-[9px] lg:text-[16px]">
                    {choose1.content}
                  </p>

                  <p className="hidden md:block md:text-[9px] lg:text-[16px]">
                    {choose1.note}
                  </p>
                </div>
              </div>
              <div className="mt-2 md:hidden">
                <p className="h-[1px] bg-black flex-1"></p>
                <p className="   text-[9px] ">{choose1.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChooseItems;
