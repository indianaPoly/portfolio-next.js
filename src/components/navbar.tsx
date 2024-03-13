"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarItems } from "./navbarItems";
import Link from "next/link";
import { NavbarItem } from "@/types";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItem: NavbarItem[] = [
    {
      name: "<메인 페이지 />",
      link: "/",
    },
    {
      name: "<활동 내역 />",
      link: "activity",
    },
    {
      name: "<프로젝트 />",
      link: "project",
    },
    {
      name: "<블로그 />",
      link: "blogs",
    },
  ];

  const NAVBAR_VARIANTS = {
    visible: {
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.2,
      },
    },
  };

  const USER_NAME = "고현림";

  return (
    <>
      <nav className="flex flex-col justify-center items-center p-[20px]">
        <ul className="flex gap-[100px]">
          {navbarItem.map((item) => {
            return (
              <li key={item.link}>
                <Link href={item.link}>
                  <span className=" text-gray-500 font-medium text-[15px] hover:text-black">
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* <button className="" onClick={() => setIsOpen(!isOpen)}>=</button> */}

        {/* <div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                exit="hidden"
                variants={NAVBAR_VARIANTS}
              >
                <NavbarItems navbarItem={navbarItem} />
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
      </nav>
    </>
  );
};
