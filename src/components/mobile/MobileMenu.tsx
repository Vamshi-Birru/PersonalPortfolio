"use client";

import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import React, { useRef } from "react";
import { menu } from "@/config/mobile";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function MobileMenu() {
  const [isActive, setIsActive] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="absolute top-[15px] right-[30px] z-40 rounded-3xl">
        <motion.div
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className="w-[240px] h-[475px] bg-background rounded-3xl relative transition-colors duration-700"
        >
          <MobileNav
            isActive={isActive}
            setIsActive={setIsActive}
            menuRef={menuRef}
          />
        </motion.div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="absolute top-1 right-0 w-[32px] h-[32px] flex justify-center items-center cursor-pointer rounded-3xl bg-background-highlights border-[2px] border-text-secondary overflow-hidden transition-colors duration-700"
        >
          <motion.div
            className="relative w-full h-full flex justify-center items-center flex-wrap mt-2"
            animate={{ top: isActive ? "-73%" : "0%" }}
          >
            <MenuIcon className="w-5 h-5 text-invert-accent-hightlights" />
            <X className="w-5 h-5 text-invert-accent-hightlights" />
          </motion.div>
        </button>
      </div>
      <div className="absolute top-[19px] right-[88px] z-30 rounded-3xl">
        <ThemeToggle />
      </div>
      <div className="absolute top-[11px] right-[22px] z-20 rounded-full w-[6.6rem] h-12 bg-background border-[2px] border-text-emphasis"></div>
    </div>
  );
}
