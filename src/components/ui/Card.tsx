"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className, glow = false, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-xl p-6 overflow-hidden relative",
        glow && "before:absolute before:-inset-px before:bg-gradient-to-r before:from-accent before:via-primary before:to-secondary before:opacity-0 before:transition-opacity hover:before:opacity-100 before:z-[-1]",
        className
      )}
      {...props}
    >
      <div className="z-10 relative">
        {children}
      </div>
    </motion.div>
  );
}
