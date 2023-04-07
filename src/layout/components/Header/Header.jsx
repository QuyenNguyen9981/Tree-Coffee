import React, { useEffect, useRef, useState } from "react";
import scrollToTop from "../../../asset/images/png/ScrollToTop.png";
import ContainerStyle from "../../../components/common/ContainerStyle";
import MobileStyle from "./components/MobileStyle";
import PcStyle from "./components/PcStyle";

const listMenus = [
  {
    id: 1,
    navItem: "Home",
    href: "/",
  },

  {
    id: 2,
    navItem: "Menu",
    href: "/menu",
  },
  {
    id: 3,
    navItem: "Our story",
    href: "/our-story",
  },
  {
    id: 4,
    navItem: "Promotion",
    href: "/promotion",
  },
  {
    id: 5,
    navItem: "Contact",
    href: "/contactus",
  },
];

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Header = () => {
  // screen current
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // position scroll
  const [offset, setOffset] = useState(0);
  const headerEle = useRef();
  const scrollTop = useRef();
  const [navStyle, setNavStyle] = useState(true);

  // handle scroll
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // handle screen
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    // đặt ở đây để tránh bị re-render vô tận
    if (windowSize.innerWidth < 1024) {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  if (offset >= 1) {
    headerEle.current?.classList.add("ScrollHeader");
    scrollTop.current.style.display = "block ";
  } else {
    headerEle.current?.classList.remove("ScrollHeader");
  }

  return (
    <header ref={headerEle} className=" relative lg:sticky top-0 w-full ">
      <ContainerStyle>
        {navStyle ? (
          <MobileStyle data={listMenus} />
        ) : (
          <PcStyle data={listMenus} />
        )}
        <div
          ref={scrollTop}
          className="!hidden lg:block w-8 lg:w-[65px] lg:fixed top-[1500px] right-6"
        >
          <a href="#" className="">
            <img src={scrollToTop} alt="icon" />
          </a>
        </div>
      </ContainerStyle>
    </header>
  );
};

export default Header;
