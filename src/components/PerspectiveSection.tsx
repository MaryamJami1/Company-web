"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PerspectiveSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PerspectiveSection({ children, className = "" }: PerspectiveSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Check if we are on mobile to disable heavy transforms
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{
        perspective: isMobile ? "none" : "1000px",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          opacity,
          scale: isMobile ? 1 : scale,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
