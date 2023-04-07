import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import Item from './Item';


const navListRight = [
    {
        id: 4,
        navItem: 'Promotion',
        href: '/promotion'
    },
    {
        id: 5,
        navItem: 'News & Event',
        href: '/news-event'
    },
    {
        id: 6,
        navItem: 'Contact',
        href: '/contact',
    }
]

const listIconSocial = [
    {
        id: 1,
        icon: <FaFacebookF />
    },
    {
        id: 2,
        icon: <FaInstagram />
    },
]

export default function MenuItemRight() {

    const router = useRouter();

    return (
        <ul className="flex justify-between items-center flex-1">
            {
                navListRight && navListRight.map((item, index) => {
                    return (
                        <li key={index} className='nav-item'>
                            <Item
                                item={item}
                                isActive={router.pathname === item.href}
                            />
                        </li>
                    )
                })
            }
            {/* <div className="icon__social flex items-center gap-[30px] xl:gap-[53px]">
                {listIconSocial?.map((item, index) => {
                    return (
                        <div key={index} className="cursor-pointer hover:text-[#552A0C]" >
                            {item.icon}
                        </div>
                    )
                })}
            </div> */}
        </ul>
    )
}
