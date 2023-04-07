import React from "react";

const ContainerStyle = ({ className, ...prop }) => {
  return (
    <div
      className={`max-w-full mx-auto px-4  sm:max-w-[640px] md:max-w-[768px]  lg:max-w-[1280px]  sm:px-4 md:px-6 lg:px-6 ${className}`}
      {...prop}
    />
  );
};

export default ContainerStyle;
