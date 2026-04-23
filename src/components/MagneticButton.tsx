"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  type,
  href,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleMouse = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (disabled) return;
    if (href) {
      router.push(href);
    }
    if (onClick) {
      onClick();
    }
  };

  // If it's a submit button, we use motion.button
  if (type === "submit") {
    return (
      <motion.button
        ref={ref as any}
        type="submit"
        disabled={disabled}
        onMouseMove={handleMouse as any}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={`relative inline-flex items-center justify-center transition-colors duration-300 ${className}`}
        onClick={handleClick}
      >
        {children}
      </motion.button>
    );
  }

  // Otherwise we use a div to allow wrapping in Links or direct navigation without HTML conflicts
  return (
    <motion.div
      ref={ref as any}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center transition-colors duration-300 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
}
