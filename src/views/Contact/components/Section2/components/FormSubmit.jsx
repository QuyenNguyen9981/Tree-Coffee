import React from "react";
import ContainerStyle from "../../../../../components/common/ContainerStyle";
import InputArea from "../../../../../components/common/InputArea";
import InputStyle from "../../../../../components/common/InputStyle";

const FormSubmit = () => {
  const handleSubmit = (value) => {
    // handle reload page
    value.preventDefault();

    return console.log(value);
  };
  return (
    <div>
      <ContainerStyle>
        <div className="max-w-[578px] text-center m-auto pt-[19px] lg:pt-[78px]">
          <h2 className=" font-normal text-[11px] lg:text-[22px] uppercase text-primaryColor">
            If you got any questions Please do not hesitate to send us a message
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[25px] pt-[36px]"
        >
          <InputStyle type="text" label="Your Name" />
          <InputStyle type="email" label="Your Email" />
          <InputStyle type="text" label="Subject" />
          <InputArea
            type="textarea"
            label="Message"
            className="min-h-[154px] lg:min-h-[280px]"
          />
          <button type="submit" className="flex justify-center">
            <div className="text-[15px] font-medium w-[135px] pt-1 rounded-[68px]  bg-primaryColor">
              <button>
                <a href="#">Send Mesage</a>
              </button>
            </div>
          </button>
        </form>
      </ContainerStyle>
    </div>
  );
};

export default FormSubmit;
