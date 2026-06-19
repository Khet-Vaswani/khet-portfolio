import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-24", className)} 
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl text-lg" style={centered ? { margin: "0 auto" } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
