"use client";

import { fontBitMap, fontNerd } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<any>([]);
  const terminalRef = useRef<HTMLDivElement>(null); // For automatic scrolling
  const inputRef = useRef<HTMLInputElement>(null); // For input element reference
  const [isClear, setClear] = useState(true);

  useEffect(() => {
    if (isClear) {
      setOutput([]);
    }
  }, [command]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, []);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (event: any) => {
    setCommand(event.target.value);
  };
  const path = usePathname();
  const handleKeyDown = (event: any) => {
    switch (command.toLowerCase().trim()) {
      case "resume":
        window.open("/Birru_Vamshi_SDE.pdf", "_blank");
        break;
      case "clear":
        setClear(true);
        break;
      default:
        setClear(false);
    }
    if (event.key === "Enter") {
      // Process the command
      let newOutput = processCommand(command);
      setOutput([...output, newOutput]);
      scrollTerminalToBottom();

      // Clear the input field
      setCommand("");
      setTimeout(scrollTerminalToBottom, 0);
    }
  };

  const scrollTerminalToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const processCommand = (command: string) => {
    switch (command.toLowerCase().trim()) {
      case "help":
        return (
          <div className="space-y-1">
            <div><span className="text-yellow">help</span> - Displays a list of available commands</div>
            <div><span className="text-yellow">clear</span> - Clears the terminal</div>
            <div><span className="text-yellow">about</span> - About me & background</div>
            <div><span className="text-yellow">experience</span> - Flipkart SDE-1 role & impact</div>
            <div><span className="text-yellow">resume</span> - Open my updated Resume PDF</div>
            <div><span className="text-yellow">socials</span> - Links to connect (GitHub, LinkedIn, LeetCode)</div>
          </div>
        );
      case "about":
        return (
          <div>
            I'm Birru Vamshi, Software Development Engineer at Flipkart (SDE-1).
            I specialize in Backend Engineering, Distributed Systems, Java Spark workloads,
            and GCP Dataproc infrastructure. Graduated from NIT Raipur (B.Tech in IT, GPA 8.76/10).
          </div>
        );
      case "experience":
        return (
          <div className="space-y-1">
            <div className="font-bold text-cyan">Flipkart | Software Development Engineer - 1 (Sep 2024 - Present)</div>
            <div>• Architected distributed job orchestration service scheduling Java Spark on GCP Dataproc (1,000+ jobs/day).</div>
            <div>• Engineered fault-tolerant reconciler (10s cadence) for zero-drop stalled workload pickups.</div>
            <div>• Built real-time Kafka alerting engine eliminating 100% manual UI polling across 3 teams.</div>
            <div>• Slashed SLA pipeline runtime by 60-70% (16h down to 4h) via data window optimizations.</div>
          </div>
        );
      case "socials":
        return (
          <div className="space-y-1">
            <div>
              Github:{" "}
              <Link
                className="underline text-[#268BD2]"
                href="https://github.com/Vamshi-Birru"
                target="_blank"
              >
                https://github.com/Vamshi-Birru
              </Link>
            </div>
            <div>
              Linkedin:{" "}
              <Link
                className="underline text-[#268BD2]"
                href="https://www.linkedin.com/in/birruvamshi/"
                target="_blank"
              >
                https://www.linkedin.com/in/birruvamshi/
              </Link>
            </div>
            <div>
              LeetCode (Knight 2008):{" "}
              <Link
                className="underline text-[#268BD2]"
                href="https://leetcode.com/vamshi-8/"
                target="_blank"
              >
                https://leetcode.com/vamshi-8/
              </Link>
            </div>
            <div>
              Email:{" "}
              <Link
                className="underline text-[#268BD2]"
                href="mailto:vamshibirru8@gmail.com"
              >
                vamshibirru8@gmail.com
              </Link>
            </div>
          </div>
        );
      case "resume":
        return <div>Opening /Birru_Vamshi_SDE.pdf in a new tab...</div>;
      // ... Add other command cases
      case "clear":
        return "";
      default:
        return <div>bash: {command}: command not found. Try 'help'.</div>;
    }
  };

  return (
    <div
      className={cn(
        fontNerd.className,
        "bg-background text-text p-[1.5em] text-xs transition-all duration-700 rounded-xl h-[40vh] overflow-y-auto",
      )}
      ref={terminalRef}
      onClick={handleClick}
    >
      <div className="mb-[1em]">
        <div>
          <h1
            className={cn(
              fontBitMap.className,
              "text-lg xl:text-4xl font-black uppercase",
            )}
          >
            Terminal
          </h1>
        </div>
        <div className="md:block hidden">Type 'help' to see the list of available commands.</div>
        <div className="md:hidden">Tap below and Type 'help' to see the list of available commands.</div>
        {output.map((item: any, index: any) => (
          <div className="mb-[0.2em]" key={index}>
            <h1 className={cn(fontNerd.className, "mb-[0.1em] text-sm")}>
              <span className="text-[#859900]">vamshi@flipkart</span>:
              <span className="text-[#268BD2]">~</span>{" "}
              <span className="text-[#268BD2]">{path}</span>
            </h1>
            {item}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-start">
        <h1 className="w-fit">
          <span className="text-[#859900]">vamshi@flipkart</span>:
          <span className="text-[#268BD2]">~</span>
          {""}
          <span className="text-[#268BD2]">{path}</span>
        </h1>
        <input
          ref={inputRef}
          className="outline-none text-text bg-background transition-all duration-700 w-[154px] pl-2"
          value={command}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="h-[10vh]" />
    </div>
  );
}
