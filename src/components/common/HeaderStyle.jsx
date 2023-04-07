import React from "react";

const HeaderStyle = ({ className, ...prop }) => {
  return (
    <h2
      className={`text-titleColor2 uppercase font-bold ${className}`}
      {...prop}
    />
  );
};

export default HeaderStyle;
