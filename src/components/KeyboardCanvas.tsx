"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import KeyBoardHR from "./Keyboard";
import Loader from "./Loader";
import { cn } from "@/lib/utils";
import { fontBitMap, fontMono } from "@/lib/fonts";
import { Terminal } from "lucide-react";

class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn("Caught 3D WebGL Canvas error gracefully:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function WebGLFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-text/20 rounded-2xl bg-background/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 dark:from-cyan/5 to-transparent pointer-events-none" />
      <div className="p-4 rounded-xl bg-background-highlights border border-text/20 shadow-lg mb-4 text-yellow dark:text-cyan">
        <Terminal className="w-12 h-12" />
      </div>
      <span className={cn(fontBitMap.className, "text-xs uppercase text-text-secondary mb-1")}>
        Distributed Systems
      </span>
      <h4 className={cn(fontMono.className, "text-lg font-bold text-invert-accent-hightlights")}>
        Java Spark • GCP Dataproc
      </h4>
      <div className="flex gap-2 mt-4">
        {["Kafka", "Kubernetes", "Docker"].map((item) => (
          <span
            key={item}
            className={cn(
              fontMono.className,
              "text-[10px] px-2 py-0.5 rounded bg-background border border-text/15 text-text-emphasis",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function KeyboardCanvas() {
  const [mounted, setMounted] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setSupportsWebGL(Boolean(gl));
    } catch (e) {
      setSupportsWebGL(false);
    }
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  if (!supportsWebGL) {
    return <WebGLFallback />;
  }

  return (
    <CanvasErrorBoundary fallback={<WebGLFallback />}>
      <Suspense fallback={<Loader />}>
        <Canvas className="w-full h-full">
          <KeyBoardHR />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate={true}
          />
          <ambientLight intensity={1.2} />
          <directionalLight position={[Math.sqrt(3), 0, 1]} intensity={2} />
          <directionalLight position={[-Math.sqrt(3), 0, 1]} intensity={2} />
          <directionalLight position={[Math.sqrt(3), -1, -1]} intensity={0.9} />
          <directionalLight position={[-Math.sqrt(3), -1, -1]} intensity={0.9} />
        </Canvas>
      </Suspense>
    </CanvasErrorBoundary>
  );
}
