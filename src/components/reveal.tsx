import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}

/**
 * CSS-only entrance. Content is always in the DOM and always ends visible;
 * the fade-and-lift is a keyframe that runs on load (see globals.css
 * .reveal-in) and is disabled under prefers-reduced-motion. No JS, so it
 * cannot get stuck at opacity 0.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const style = delay
    ? ({ "--reveal-delay": `${delay * 1000}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag className={cn("reveal-in", className)} style={style}>
      {children}
    </Tag>
  );
}
