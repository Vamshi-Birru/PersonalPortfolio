"use client";

import { fontGrot, fontMono } from "@/lib/fonts";
import { GeistSans } from "geist/font/sans";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ExternalLink, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const projectData = siteConfig.projects;
  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={anim.exit}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.7,
      }}
      key={"projects"}
      className="pb-24"
    >
      <div className="h-[12vh] sm:h-[15vh]" />

      <motion.div
        initial={anim.initial}
        animate={anim.animate}
        exit={anim.exit}
        transition={{
          delay: 0.01,
          ease: [0.76, 0, 0.24, 1],
          duration: 0.7,
        }}
        className={cn(
          fontGrot.className,
          "text-6xl sm:text-7xl text-center font-bold text-invert-accent-hightlights px-4",
        )}
      >
        Projects
      </motion.div>

      <p
        className={cn(
          GeistSans.className,
          "text-center text-sm sm:text-base text-text-emphasis max-w-xl mx-auto mt-4 px-6",
        )}
      >
        A curated selection of distributed systems, AI platforms, and backend services built for scale and resilience.
      </p>

      <div className="h-[4vh]" />

      <div className="w-full mx-auto px-6 sm:px-12 md:px-20 min-[1400px]:max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none p-0 mt-[30px] gap-[35px] relative">
          {projectData.map((project: any, i) => (
            <motion.div
              className="relative group"
              initial={anim.initial}
              animate={anim.animate}
              exit={anim.exit}
              transition={{
                delay: 0.05 * i,
                ease: [0.76, 0, 0.24, 1],
                duration: 0.7,
              }}
              key={i}
            >
              <div
                className="absolute bg-invert-accent-hightlights inset-0 group"
                style={{
                  clipPath:
                    "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                }}
              ></div>

              {/* Desktop View */}
              <motion.div
                whileHover={{ y: -9, x: -9 }}
                whileTap={{ y: 0, x: 0 }}
                className="md:block hidden h-full"
              >
                <motion.div
                  className="border-[2px] border-invert-accent-hightlights relative h-full py-8 px-7 transition-all bg-background flex flex-col justify-between"
                  style={{
                    clipPath:
                      "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                  }}
                >
                  <span
                    className="absolute block origin-top-right rotate-45 object-cover z-20 bg-invert-accent-hightlights"
                    style={{
                      right: "-2px",
                      top: "10px",
                      width: "16.9706px",
                      height: "2px",
                    }}
                  ></span>
                  <Link href={project.href} target="_blank">
                    <div className="flex flex-col items-start justify-between h-full">
                      <header className="w-full">
                        {project.badge && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-yellow/15 dark:bg-cyan/15 text-yellow dark:text-cyan border border-yellow/30 dark:border-cyan/30 mb-3">
                            <Sparkles className="w-3 h-3" />
                            {project.badge}
                          </div>
                        )}
                        <div className="flex items-center justify-between w-full mb-[10px]">
                          <h3
                            className={cn(
                              fontGrot.className,
                              "group-hover:font-bold group-hover:text-yellow dark:group-hover:text-cyan text-2xl font-extrabold text-invert-accent-hightlights group transition-colors duration-500",
                            )}
                          >
                            {project.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div
                          className={cn(
                            GeistSans.className,
                            "text-sm text-text-emphasis leading-relaxed",
                          )}
                        >
                          {project.brief}
                        </div>
                      </header>
                      <footer>
                        <ul
                          className={cn(
                            fontMono.className,
                            "flex items-end flex-1 flex-wrap p-0 mt-[20px] list-none flex-grow gap-[10px] text-xs",
                          )}
                        >
                          {project.tags.map((tag: string, idx: number) => (
                            <li
                              key={idx}
                              className="outline-[1px] rounded-full bg-background-highlights px-2.5 py-1 shadow-sm border border-text/15 text-text-emphasis font-bold"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </footer>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Mobile View */}
              <motion.div
                whileTap={{ y: 0, x: 0 }}
                initial={{ y: -7, x: -7 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="md:hidden"
              >
                <motion.div
                  className="border-[2px] border-invert-accent-hightlights flex justify-between flex-col items-start relative h-full py-8 px-7 transition-all bg-background group"
                  style={{
                    clipPath:
                      "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                  }}
                >
                  <span
                    className="absolute block origin-top-right rotate-45 object-cover z-20 bg-invert-accent-hightlights group"
                    style={{
                      right: "-2px",
                      top: "10px",
                      width: "16.9706px",
                      height: "2px",
                    }}
                  ></span>
                  <Link
                    className="text-2xl font-semibold w-full"
                    href={project.href}
                    target="_blank"
                  >
                    <header>
                      {project.badge && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-yellow/15 dark:bg-cyan/15 text-yellow dark:text-cyan border border-yellow/30 dark:border-cyan/30 mb-2">
                          {project.badge}
                        </div>
                      )}
                      <h3 className="mb-[10px] text-xl font-bold dark:group-hover:text-cyan group-hover:text-yellow text-invert-accent-hightlights">
                        {project.title}
                      </h3>
                      <div className="text-sm font-normal text-text-emphasis leading-relaxed">
                        {project.brief}
                      </div>
                    </header>
                    <footer>
                      <ul
                        className={cn(
                          fontMono.className,
                          "flex items-end flex-1 flex-wrap p-0 mt-[20px] list-none flex-grow gap-[10px] text-xs font-normal",
                        )}
                      >
                        {project.tags.map((tag: string, idx: number) => (
                          <li
                            key={idx}
                            className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm border border-text/15 text-text-emphasis"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
