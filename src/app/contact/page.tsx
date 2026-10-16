"use client";

import { fontBitMap, fontGrot, fontMono } from "@/lib/fonts";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { SiLeetcode } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
    return (
        <motion.div
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className="pb-20"
        >
            <div className="h-[15vh]"></div>

            <div className="flex flex-col justify-center items-center gap-8">
                <motion.h1
                    initial={anim.initial}
                    animate={anim.animate}
                    exit={anim.exit}
                    transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className={cn(
                        fontGrot.className,
                        "text-6xl sm:text-9xl text-invert-accent-hightlights font-bold text-center",
                    )}
                >
                    Contact
                </motion.h1>

                <p className="text-text-emphasis text-center max-w-md px-4 text-sm sm:text-base">
                    Feel free to reach out for distributed systems, backend engineering, or collaborative opportunities.
                </p>

                <div className="flex space-x-4 md:space-x-8">
                    {/* GitHub */}
                    <Link href={siteConfig.links.github} target="_blank">
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                ease: [0.76, 0, 0.24, 1],
                                duration: 0.5,
                            }}
                            className="size-[26vw] sm:size-40 bg-background border-text border-[2px] rounded-xl z-0 relative flex flex-col justify-center items-center group cursor-pointer"
                        >
                            <motion.div
                                className="bg-transparent flex flex-col justify-center items-center gap-2"
                                whileHover={{ scale: 1.15 }}
                            >
                                <GithubIcon className="h-7 w-7 sm:h-9 sm:w-9 text-invert-accent-hightlights group-hover:text-yellow dark:group-hover:text-cyan transition-colors" />
                                <span className={cn(fontMono.className, "text-[11px] font-bold text-text-secondary")}>
                                    GitHub
                                </span>
                            </motion.div>
                        </motion.div>
                    </Link>

                    {/* LinkedIn */}
                    <Link
                        href={siteConfig.links.linkedin}
                        target="_blank"
                    >
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                ease: [0.76, 0, 0.24, 1],
                                duration: 0.5,
                            }}
                            className="size-[26vw] sm:size-40 bg-background border-text border-[2px] rounded-xl z-0 relative flex flex-col justify-center items-center group cursor-pointer"
                        >
                            <motion.div
                                className="bg-transparent flex flex-col justify-center items-center gap-2"
                                whileHover={{ scale: 1.15 }}
                            >
                                <LinkedinIcon className="h-7 w-7 sm:h-9 sm:w-9 text-invert-accent-hightlights group-hover:text-yellow dark:group-hover:text-cyan transition-colors" />
                                <span className={cn(fontMono.className, "text-[11px] font-bold text-text-secondary")}>
                                    LinkedIn
                                </span>
                            </motion.div>
                        </motion.div>
                    </Link>

                    {/* LeetCode */}
                    <Link href={siteConfig.links.leetcode} target="_blank">
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                ease: [0.76, 0, 0.24, 1],
                                duration: 0.5,
                            }}
                            className="size-[26vw] sm:size-40 bg-background border-text border-[2px] rounded-xl z-0 relative flex flex-col justify-center items-center group cursor-pointer"
                        >
                            <motion.div
                                className="bg-transparent flex flex-col justify-center items-center gap-2"
                                whileHover={{ scale: 1.15 }}
                            >
                                <SiLeetcode className="h-7 w-7 sm:h-9 sm:w-9 text-invert-accent-hightlights group-hover:text-yellow dark:group-hover:text-cyan transition-colors" />
                                <span className={cn(fontMono.className, "text-[11px] font-bold text-text-secondary")}>
                                    LeetCode
                                </span>
                            </motion.div>
                        </motion.div>
                    </Link>
                </div>
            </div>

            <div className="h-16"></div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="relative">
                    <motion.button
                        whileHover={{ y: -7, x: -7 }}
                        whileTap={{ y: 0, x: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="z-10 relative hidden md:block"
                    >
                        <a href="mailto:vamshibirru8@gmail.com">
                            <span
                                className={cn(
                                    fontBitMap.className,
                                    "text-invert-accent-hightlights bg-background-highlights outline outline-text-emphasis p-4 text-xs inline-flex items-center gap-2",
                                )}
                            >
                                <Mail className="w-4 h-4" /> vamshibirru8@gmail.com
                            </span>
                        </a>
                    </motion.button>
                    <motion.button
                        whileTap={{ y: [-7, 0], x: [-7, 0] }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="z-10 relative md:hidden"
                    >
                        <a href="mailto:vamshibirru8@gmail.com">
                            <span
                                className={cn(
                                    fontBitMap.className,
                                    "text-invert-accent-hightlights bg-background-highlights outline p-4 text-xs inline-flex items-center gap-2",
                                )}
                            >
                                <Mail className="w-4 h-4" /> Email Me
                            </span>
                        </a>
                    </motion.button>
                    <div className="bg-invert-accent-hightlights inset-0 absolute z-0" />
                </div>

                <Link
                    href="/Birru_Vamshi_SDE.pdf"
                    target="_blank"
                    className={cn(
                        fontBitMap.className,
                        "text-xs px-6 py-4 rounded bg-invert-accent-hightlights text-background uppercase hover:opacity-90 transition-opacity",
                    )}
                >
                    View Resume (PDF)
                </Link>
            </div>
        </motion.div>
    );
}
