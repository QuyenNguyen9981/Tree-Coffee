import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgLogo from "../../../../asset/images/png/mobile/Logo.png";
import ContainerStyle from "../../../../components/common/ContainerStyle";
import HeaderStyle from "../../../../components/common/HeaderStyle";
import Item from "../../../../components/menu-item/Item";

const MobileStyle = ({ data: listNavMobile }) => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="">
      <div>
        <div className=" flex items-center justify-between  pt-[10px] ">
          <div className="shrink-0">
            <Link to="/">
              <img src={imgLogo} alt="Logo" />
            </Link>
          </div>
          <div>
            <HeaderStyle className=" text-[19px]">Always on the go</HeaderStyle>
          </div>

          <div>
            <button
              className="p-2 text-primary rounded-lg outline-none focus:outline-none"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-4 mt-5 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center text-center ">
              {listNavMobile &&
                listNavMobile?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-black hover:text-primary hover:font-semibold hover-transition text-xl py-3 "
                      onClick={() => setNavbar(false)}
                    >
                      <Item
                        item={item}
                        isActive={navigate.pathname === item.href}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStyle;
