"use client";

import { fontBitMap, fontGrot, fontMono } from "@/lib/fonts";
import { GeistSans } from "geist/font/sans";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Award, Briefcase, Calendar, CheckCircle2, Cpu, GraduationCap, MapPin, Terminal, TrendingUp } from "lucide-react";

export default function ExperiencePage() {
  const exp = siteConfig.experience[0];
  const edu = siteConfig.education;
  const achievements = siteConfig.achievements;

  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={anim.exit}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.7,
      }}
      key={"experience"}
      className="pb-24"
    >
      <div className="h-[12vh] sm:h-[15vh]" />

      {/* Header */}
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
          Career & Impact
        </span>
        <h1
          className={cn(
            fontGrot.className,
            "text-6xl sm:text-7xl font-bold text-invert-accent-hightlights",
          )}
        >
          Experience
        </h1>
        <p
          className={cn(
            GeistSans.className,
            "mt-4 text-text-emphasis max-w-2xl mx-auto text-sm sm:text-base",
          )}
        >
          2 years as a Software Development Engineer at Flipkart, building distributed batch orchestration platforms, event-driven streaming pipelines, and fault-tolerant infrastructure.
        </p>
      </motion.div>

      <div className="h-[5vh]" />

      <div className="w-full mx-auto px-6 sm:px-12 md:px-20 min-[1400px]:max-w-[1400px]">
        {/* Flipkart Primary Card */}
        <motion.div
          initial={anim.initial}
          animate={anim.animate}
          exit={anim.exit}
          transition={{
            delay: 0.05,
            ease: [0.76, 0, 0.24, 1],
            duration: 0.7,
          }}
          className="relative group mb-12"
        >
          {/* Cyberpunk background cut */}
          <div
            className="absolute bg-invert-accent-hightlights inset-0"
            style={{
              clipPath:
                "polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)",
            }}
          />

          <div
            className="border-[2px] border-invert-accent-hightlights relative p-6 sm:p-10 transition-all bg-background -translate-x-1.5 -translate-y-1.5"
            style={{
              clipPath:
                "polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)",
            }}
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-text/20">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2
                    className={cn(
                      fontGrot.className,
                      "text-3xl sm:text-4xl font-extrabold text-invert-accent-hightlights tracking-tight",
                    )}
                  >
                    {exp.company}
                  </h2>
                  <span className="outline-[1px] rounded-full bg-yellow/15 dark:bg-cyan/15 text-yellow dark:text-cyan border border-yellow/40 dark:border-cyan/40 px-3 py-0.5 text-xs font-bold">
                    SDE-1
                  </span>
                </div>
                <p
                  className={cn(
                    GeistSans.className,
                    "text-lg text-text-emphasis font-medium mt-1",
                  )}
                >
                  {exp.role} <span className="text-text/50">•</span> {exp.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1 text-xs text-text-secondary">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {exp.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-background-highlights p-4 rounded-lg border border-text/10 flex flex-col justify-between"
                >
                  <span
                    className={cn(
                      fontGrot.className,
                      "text-2xl sm:text-3xl font-black text-yellow dark:text-cyan",
                    )}
                  >
                    {metric.value}
                  </span>
                  <span
                    className={cn(
                      GeistSans.className,
                      "text-xs text-text-emphasis font-medium mt-1 leading-snug",
                    )}
                  >
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h3
                className={cn(
                  fontMono.className,
                  "text-xs uppercase text-text-secondary tracking-widest mb-3 flex items-center gap-2",
                )}
              >
                <Cpu className="w-4 h-4 text-yellow dark:text-cyan" />
                Key Architectural Achievements & Contributions
              </h3>
              <ul className="space-y-3.5">
                {exp.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      GeistSans.className,
                      "text-sm sm:text-base text-text flex items-start gap-3",
                    )}
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow dark:text-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-6 border-t border-text/20">
              <h4
                className={cn(
                  fontMono.className,
                  "text-xs uppercase text-text-secondary tracking-widest mb-3",
                )}
              >
                Technologies & Tools
              </h4>
              <ul className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      fontMono.className,
                      "outline-[1px] rounded-full bg-background-highlights px-3 py-1 shadow-sm border border-text/20 text-xs font-semibold text-text-emphasis",
                    )}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom Split: Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
              duration: 0.7,
            }}
            className="border-[2px] border-invert-accent-hightlights bg-background p-6 sm:p-8 rounded-xl relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-background-highlights text-yellow dark:text-cyan">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3
                  className={cn(
                    fontGrot.className,
                    "text-xl sm:text-2xl font-bold text-invert-accent-hightlights",
                  )}
                >
                  Education
                </h3>
                <span className="text-xs text-text-secondary font-mono">{edu.period}</span>
              </div>
            </div>

            <div className={cn(GeistSans.className, "space-y-2 mt-4")}>
              <h4 className="text-base sm:text-lg font-semibold text-text-emphasis">
                {edu.institution}
              </h4>
              <p className="text-sm text-text">
                {edu.degree} in {edu.branch}
              </p>
              <div className="inline-block mt-2 px-3 py-1 rounded bg-background-highlights text-xs font-mono font-bold text-yellow dark:text-cyan border border-text/10">
                GPA: {edu.gpa}
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{
              delay: 0.15,
              ease: [0.76, 0, 0.24, 1],
              duration: 0.7,
            }}
            className="border-[2px] border-invert-accent-hightlights bg-background p-6 sm:p-8 rounded-xl relative"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-background-highlights text-yellow dark:text-cyan">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3
                  className={cn(
                    fontGrot.className,
                    "text-xl sm:text-2xl font-bold text-invert-accent-hightlights",
                  )}
                >
                  Competitive Programming
                </h3>
                <span className="text-xs text-text-secondary font-mono">Algorithms & Problem Solving</span>
              </div>
            </div>

            <ul className={cn(GeistSans.className, "space-y-3 mt-4")}>
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text">
                  <TrendingUp className="w-4 h-4 text-yellow dark:text-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-text/10 flex items-center gap-3">
              <Link
                href={siteConfig.links.leetcode}
                target="_blank"
                className="text-xs font-mono text-yellow dark:text-cyan hover:underline flex items-center gap-1 font-bold"
              >
                LeetCode Profile <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/Birru_Vamshi_SDE.pdf"
            target="_blank"
            className={cn(
              fontBitMap.className,
              "text-xs px-6 py-3 rounded-md bg-invert-accent-hightlights text-background hover:opacity-90 transition-opacity uppercase",
            )}
          >
            Download Full Resume (PDF)
          </Link>
          <Link
            href="/projects"
            className={cn(
              fontBitMap.className,
              "text-xs px-6 py-3 rounded-md border-[2px] border-invert-accent-hightlights text-invert-accent-hightlights hover:bg-background-highlights transition-colors uppercase",
            )}
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
