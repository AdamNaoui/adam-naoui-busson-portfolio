import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  blur?: string;
}

/**
 * CSS-only fade-and-lift on load. Kept as a named export for the blog
 * pages. Content always ends visible (see .reveal-in in globals.css).
 */
const BlurFade = ({ children, className, delay = 0 }: BlurFadeProps) => {
  const style = delay
    ? ({ "--reveal-delay": `${delay * 1000}ms` } as CSSProperties)
    : undefined;
  return (
    <div className={cn("reveal-in", className)} style={style}>
      {children}
    </div>
  );
};

export default BlurFade;
