import React from "react";
import { NavLink } from "react-router-dom";

export default function Item({ item, isActive }) {
  const activeMenu = {
    backgroundColor: "#FFD529",
  };
  return (
    <NavLink
      to={item.href}
      style={({ isActive }) => (isActive ? activeMenu : undefined)}
      className="hover:bg-primaryColor px-2 xl:px-[23px] py-[6px] rounded-[15px] "
      key={item.navItem}
      end
    >
      {item.navItem}
    </NavLink>
  );
}
