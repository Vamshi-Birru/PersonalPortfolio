"use client";

import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TerminalIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
      <Link href="/" className="flex items-center space-x-2 transition-all duration-700">
        <TerminalIcon className="h-4 w-4 sm:h-5 sm:w-5 text-invert-accent-hightlights" />
        <span className={cn(fontMono.className, "inline-block font-bold text-md sm:text-xl text-invert-accent-hightlights")}>Vamshi</span>
      </Link>
)
}
