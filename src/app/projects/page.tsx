"use client";

import { fontBitMap, fontGrot, fontMono } from "@/lib/fonts";
import { GeistSans } from "geist/font/sans";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, CheckCircle2, Cpu, ExternalLink, Github, Sparkles, Terminal } from "lucide-react";

export default function ProjectsPage() {
  const project = siteConfig.projects[0];

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
        className="text-center px-4"
      >
        <span
          className={cn(
            fontBitMap.className,
            "text-xs uppercase tracking-wider text-yellow dark:text-cyan block mb-2",
          )}
        >
          Flagship Project
        </span>
        <h1
          className={cn(
            fontGrot.className,
            "text-6xl sm:text-7xl font-bold text-invert-accent-hightlights",
          )}
        >
          Featured Work
        </h1>
        <p
          className={cn(
            GeistSans.className,
            "text-center text-sm sm:text-base text-text-emphasis max-w-xl mx-auto mt-4 px-6",
          )}
        >
          Full-stack engineering, distributed systems, and AI infrastructure built for real-world reliability.
        </p>
      </motion.div>

      <div className="h-[5vh]" />

      <div className="w-full mx-auto px-6 sm:px-12 md:px-20 min-[1400px]:max-w-[1200px]">
        {/* Main ResumeTailor Showcase Card */}
        <motion.div
          initial={anim.initial}
          animate={anim.animate}
          exit={anim.exit}
          transition={{
            delay: 0.05,
            ease: [0.76, 0, 0.24, 1],
            duration: 0.7,
          }}
          className="relative group"
        >
          {/* Cyberpunk polygon background */}
          <div
            className="absolute bg-invert-accent-hightlights inset-0"
            style={{
              clipPath:
                "polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)",
            }}
          />

          <div
            className="border-[2px] border-invert-accent-hightlights relative p-6 sm:p-10 transition-all bg-background -translate-x-1.5 -translate-y-1.5 flex flex-col justify-between"
            style={{
              clipPath:
                "polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)",
            }}
          >
            {/* Header section */}
            <div className="border-b border-text/20 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="outline-[1px] rounded-full bg-green/15 text-green border border-green/30 px-3 py-1 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                    {project.badge || "Live Project"}
                  </span>
                  <span className="text-xs text-text-secondary font-mono">Render Cloud</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={project.href}
                    target="_blank"
                    className={cn(
                      fontBitMap.className,
                      "text-[11px] px-4 py-2 rounded bg-invert-accent-hightlights text-background uppercase inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity",
                    )}
                  >
                    Open Live Platform <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={project.github || siteConfig.links.github}
                    target="_blank"
                    className="p-2 rounded border border-text/20 hover:border-yellow transition-colors text-invert-accent-hightlights"
                    title="View GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <h2
                className={cn(
                  fontGrot.className,
                  "text-3xl sm:text-5xl font-black text-invert-accent-hightlights tracking-tight mb-3",
                )}
              >
                {project.title}
              </h2>

              <p
                className={cn(
                  GeistSans.className,
                  "text-base sm:text-lg text-text-emphasis leading-relaxed",
                )}
              >
                {project.brief}
              </p>
            </div>

            {/* Technical Highlights */}
            {project.bullets && (
              <div className="my-8">
                <h3
                  className={cn(
                    fontMono.className,
                    "text-xs uppercase text-text-secondary tracking-widest mb-4 flex items-center gap-2",
                  )}
                >
                  <Cpu className="w-4 h-4 text-yellow dark:text-cyan" />
                  Core Architecture & Engineering Highlights
                </h3>
                <ul className="space-y-3.5">
                  {project.bullets.map((bullet: string, idx: number) => (
                    <li
                      key={idx}
                      className={cn(
                        GeistSans.className,
                        "text-sm sm:text-base text-text flex items-start gap-3",
                      )}
                    >
                      <CheckCircle2 className="w-5 h-5 text-yellow dark:text-cyan shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-6 border-t border-text/20">
              <h4
                className={cn(
                  fontMono.className,
                  "text-xs uppercase text-text-secondary tracking-widest mb-3",
                )}
              >
                Technology Stack
              </h4>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, idx: number) => (
                  <li
                    key={idx}
                    className={cn(
                      fontMono.className,
                      "outline-[1px] rounded-full bg-background-highlights px-3 py-1 shadow-sm border border-text/20 text-xs font-semibold text-text-emphasis",
                    )}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
