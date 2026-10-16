import { fontBitMap } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function ResumeButton() {
  return (
    <div className="relative">
      <Link
        href="/Birru_Vamshi_SDE.pdf"
        target="_blank"
      >
        <motion.button
          initial={{ y: 0}}
          whileHover={{ y: -7 }}
          whileTap={{ y: 0 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
          className="bg-background text-invert-accent-hightlights px-6 py-2 rounded-md overflow-hidden transition-colors duration-700 border-dotted border-text border-[2px] z-10 relative"
        >
          <span className={cn(fontBitMap.className, "text-xs uppercase")}>
            Resume
          </span>
        </motion.button>
        <div className="absolute inset-0 bg-invert-accent-hightlights px-6 py-2 rounded-md text-invert-accent-hightlights">
          <span className={cn(fontBitMap.className, "text-xs uppercase")}>
            Resume
          </span>
        </div>
      </Link>
    </div>
  );
}
