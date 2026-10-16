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
            <div className="h-[12vh] sm:h-[15vh]"></div>

            <div className="flex flex-col justify-center items-center gap-6 px-4">
                <span
                    className={cn(
                        fontBitMap.className,
                        "text-xs uppercase tracking-wider text-yellow dark:text-cyan block",
                    )}
                >
                    Get in Touch
                </span>
                <motion.h1
                    initial={anim.initial}
                    animate={anim.animate}
                    exit={anim.exit}
                    transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 0.5,
                    }}
                    className={cn(
                        fontGrot.className,
                        "text-5xl sm:text-7xl font-bold text-invert-accent-hightlights text-center tracking-tight",
                    )}
                >
                    Contact
                </motion.h1>

                <p className="text-text-emphasis text-center max-w-md text-sm sm:text-base leading-relaxed">
                    Feel free to reach out for distributed systems, backend engineering, or collaborative opportunities.
                </p>

                <div className="flex space-x-4 md:space-x-8 mt-4">
                    {/* GitHub */}
                    <Link href={siteConfig.links.github} target="_blank">
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                            className="w-28 h-28 sm:w-36 sm:h-36 bg-background border-[2px] border-invert-accent-hightlights rounded-xl flex flex-col justify-center items-center group cursor-pointer shadow-md hover:border-yellow dark:hover:border-cyan transition-colors"
                        >
                            <GithubIcon className="h-8 w-8 sm:h-10 sm:w-10 text-invert-accent-hightlights group-hover:text-yellow dark:group-hover:text-cyan transition-colors mb-2" />
                            <span className={cn(fontMono.className, "text-xs font-bold text-text-emphasis")}>
                                GitHub
                            </span>
                        </motion.div>
                    </Link>

                    {/* LinkedIn */}
                    <Link href={siteConfig.links.linkedin} target="_blank">
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                            className="w-28 h-28 sm:w-36 sm:h-36 bg-background border-[2px] border-invert-accent-hightlights rounded-xl flex flex-col justify-center items-center group cursor-pointer shadow-md hover:border-yellow dark:hover:border-cyan transition-colors"
                        >
                            <LinkedinIcon className="h-8 w-8 sm:h-10 sm:w-10 text-invert-accent-hightlights group-hover:text-yellow dark:group-hover:text-cyan transition-colors mb-2" />
                            <span className={cn(fontMono.className, "text-xs font-bold text-text-emphasis")}>
                                LinkedIn
                            </span>
                        </motion.div>
                    </Link>

                    {/* LeetCode */}
                    <Link href={siteConfig.links.leetcode} target="_blank">
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                            className="w-28 h-28 sm:w-36 sm:h-36 bg-background border-[2px] border-invert-accent-hightlights rounded-xl flex flex-col justify-center items-center group cursor-pointer shadow-md hover:border-yellow dark:hover:border-cyan transition-colors"
                        >
                            <SiLeetcode className="h-8 w-8 sm:h-10 sm:w-10 text-invert-accent-hightlights group-hover:text-yellow dark:group-hover:text-cyan transition-colors mb-2" />
                            <span className={cn(fontMono.className, "text-xs font-bold text-text-emphasis")}>
                                LeetCode
                            </span>
                        </motion.div>
                    </Link>
                </div>
            </div>

            <div className="h-12"></div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                    href="mailto:vamshibirru8@gmail.com"
                    className={cn(
                        fontBitMap.className,
                        "text-xs px-6 py-4 rounded bg-background border-[2px] border-invert-accent-hightlights text-invert-accent-hightlights hover:bg-background-highlights transition-colors inline-flex items-center gap-2",
                    )}
                >
                    <Mail className="w-4 h-4 text-yellow dark:text-cyan" /> vamshibirru8@gmail.com
                </a>

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
