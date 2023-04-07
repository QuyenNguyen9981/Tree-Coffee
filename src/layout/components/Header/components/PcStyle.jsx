import React from "react";
import { Link, NavLink } from "react-router-dom";
import imgDeli from "../../../../asset/images/jpg/Delivery.png";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import imgLogo from "../../../../asset/images/jpg/Logo.png";

const PcStyle = ({ data: listNav }) => {
  const activeMenu = {
    backgroundColor: "#FFD529",
  };
  return (
    <div>
      <div className="flex justify-between items-end py-[19px] pb-[10px]">
        <div className="shrink-0">
          <Link to="/">
            <img src={imgLogo} alt="Logo" />
          </Link>
        </div>
        <div id="customMenuBar" className=" flex flex-col items-end gap-[25px]">
          <Link to="">
            <img id="phoneNumber" src={imgDeli} alt="Deli" />
          </Link>
          <div>
            <div className=" flex items-center gap-x-[9px]">
              {listNav?.map((menu) => {
                return (
                  <NavLink
                    to={menu.href}
                    style={({ isActive }) =>
                      isActive ? activeMenu : undefined
                    }
                    className="hover:bg-primaryColor px-2 xl:px-[23px] py-[6px] rounded-[36px] "
                    key={menu.navItem}
                    end
                  >
                    {menu.navItem}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcStyle;
