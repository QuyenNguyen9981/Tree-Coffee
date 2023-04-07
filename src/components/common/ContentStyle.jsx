import React from "react";

const ContentStyle = ({ className, ...prop }) => {
  return (
    <p
      className={`text-menuColor-titleItems font-medium text-[19px] ${className}`}
      {...prop}
    ></p>
  );
};

export default ContentStyle;
