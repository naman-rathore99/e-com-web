"use client"
import React, { useState } from "react";
import Link from "next/link";
import { 
    // FaHeart, 
    // FaShoppingCart,
     FaBars,
      FaTimes, 
    //  FaSearch,
    //   FaBell 
    }
       from 'react-icons/fa';
import MaxWidthWrapper from "../layout/max-width-wrapper";

export interface NavbarInterface {
    name?: string;
    link?: string;
    onClick?: string;
    icon?: React.ReactNode | string;
}

const SubNavbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navbarLink: NavbarInterface[] = [
        { name: "Men", link: "collections/men" },
        { name: "Women", link: "collections/women" },
        { name: "Electronics", link: "collections/electronics" },
        { name: "Sport", link: "collections/sport" },
        { name: "Groceries", link: "collections/groceries" },
        { name: "Fashion", link: "collections/fashion" },
    ];

    return (
        <MaxWidthWrapper className="lg:py-4 py-4 flex items-center justify-center">
       
                <div className="flex flex-wrap items-center justify-between max-lg:gap-y-6 max-sm:gap-x-4">
                    {/* <a href="javascript:void(0)" className="flex items-center">
                        <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
                        <h2>ayn core</h2>
                    </a> */}

                    <div id="collapseMenu" className={`${menuOpen ? 'flex' : 'hidden'} lg:flex lg:items-center lg:flex-grow max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}>
                       
                       
                        <button id="toggleClose" className="lg:hidden fixed top-2 left-3 z-[100] rounded-full dark:bg-white p-3" onClick={toggleMenu}>
                            <FaTimes className="w-10 fill-black " />
                        </button>

                        <ul className="lg:flex lg:gap-x-10 lg:justify-center lg:w-full max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <li className="mb-6 hidden max-lg:block">
                                <Link href="/">
                                    {/* <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" /> */}
                                    {/* <h2>ayn core</h2> */}
                                </Link>
                            </li>
                            {navbarLink.map((navLink, index) => (
                                <li key={index} className="max-lg:border-b max-lg:py-3">
                                    <Link href={`/${navLink.link}`}>
                                        <span className="hover:text-[#007bff] text-black dark:text-white font-bold text-[15px] block">
                                            {navLink.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
              

                    <div className="flex items-center space-x-8">

                        
                        {/* <span className="relative">
                            <FaHeart className="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" size={20} />
                            <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                        </span>
                        <span className="relative">
                            <FaShoppingCart className="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" size={20} />
                            <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">4</span>
                        </span>
                        <FaBell className="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" size={20} /> */}


                        <button id="toggleOpen" className="lg:hidden absolute right-4" onClick={toggleMenu}>
                            <FaBars className="w-7 h-7 fill-white"  />
                        </button>
                    </div>
                </div>

             
          
        </MaxWidthWrapper>
    );
};

export default SubNavbar;
