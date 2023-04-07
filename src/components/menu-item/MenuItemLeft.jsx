import { useFilterProduct } from "hook/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { resetActiveCategory } from "store/slices/activeMenuSlice";
import TitleMenu from "../common/TitleMenu";
import Loading from "../loading/Loading";
import Item from "./Item";

const navListLeft = [
  {
    id: 1,
    navItem: "Home",
    href: "/",
  },
  {
    id: 2,
    navItem: "Our story",
    href: "/our-story",
  },
  {
    id: 3,
    navItem: "Menu",
    href: "/menu",
  },
  {
    id: 4,
    navItem: "Promotion",
    href: "/promotion",
  },
  {
    id: 5,
    navItem: "Contact",
    href: "/contact",
  },
];

export default function MenuItemLeft({ dataHeader }) {
  const router = useRouter();

  const dispatch = useDispatch();

  // const inngredients =
  //   dataFilterProduct?.products?.data[0]?.attributes?.ingredients
  //     ?.split("\n")
  //     ?.map((item) => {
  //       return item.replace("-", "");
  //     });

  const handleClickMenu = (href) => {
    if (href === "/menu") {
      const action = resetActiveCategory(0);
      dispatch(action);
    }
  };

  return (
    <div className="header__right flex flex-col flex-1 justify-center items-end">
      <div className="flex items-center mb-[25px]">
        <div className="mr-4">
          <p className="text-base text-primary">{dataHeader?.heading_phone}</p>
          <p className="text-[25px] font-bold text-primary">
            {dataHeader?.phone_number}
          </p>
        </div>
        {dataHeader?.phone?.data?.attributes?.url && (
          <div className="relative shrink-0 w-[29px] h-[52px]">
            <Image
              src={
                process.env.NEXT_PUBLIC_NAME_DOMAIN +
                dataHeader?.phone?.data?.attributes?.url
              }
              alt={dataHeader?.phone?.data?.attributes?.name}
              priority
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>
      <ul className="nav__list flex justify-end items-center space-x-[12px]">
        {navListLeft &&
          navListLeft.map((item, index) => {
            return (
              <li
                key={index}
                className={`nav-item`}
                onClick={() => handleClickMenu(item?.href)}
              >
                <Item item={item} isActive={router.pathname === item.href} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
