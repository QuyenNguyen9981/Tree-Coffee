import React from "react";

const TitleFooter = ({ className, ...prop }) => {
  return (
    <h2
      className={`font-semibold text-[21px] uppercase text-bgcolor ${className}`}
      {...prop}
    ></h2>
  );
};

export default TitleFooter;
