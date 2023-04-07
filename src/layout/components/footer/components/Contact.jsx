import React from "react";
import TitleFooter from "../../../../components/common/TitleFooter";

const Contact = () => {
  return (
    <div className="text-bgcolor">
      <TitleFooter>contact us</TitleFooter>
      <div className=" mt-[20px] lg:mt-[39px]">
        <p>
          <a href="www.bbteehouse.com">www.bbteehouse.com</a>
        </p>
        <p>
          <a href="Facebook.com/BBTeeHouse">Facebook.com/BBTeeHouse</a>
        </p>
      </div>
      <TitleFooter className="!text-[12px] lg:text-[17px] py-2 lg:py-4">
        +1 856-355-8555
      </TitleFooter>
      <TitleFooter className="!text-[12px] lg:text-[17px] py-2 lg:py-4">
        144 Haddon Ave, Haddon Towne, NJ, US
      </TitleFooter>
    </div>
  );
};

export default Contact;
