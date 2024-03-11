import { NavbarItemProp } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";

export const NavbarItems = ({ navbarItem }: NavbarItemProp) => {
  const NAV_LIST_VARIANTS = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const NAV_ITEM_VARIANTS = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          stiffness: 1000,
          velocity: -100,
        },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: {
          stiffness: 1000,
          velocity: -100,
        },
      },
    },
  };

  return (
    <>
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={NAV_LIST_VARIANTS}
      >
        {navbarItem.map((item) => (
          <motion.li key={item.link} variants={NAV_ITEM_VARIANTS}>
            <Link href={item.link}>
              <p>{item.name}</p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};
