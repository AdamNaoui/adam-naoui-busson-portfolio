import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}

/**
 * Editorial section header. An optional index sits in a hanging left column
 * on wide screens; the title and intro stack normally.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-col gap-4", className)}>
      {(index || kicker) && (
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-mono text-xs text-primary">{index}</span>
          )}
          {kicker && <span className="kicker">{kicker}</span>}
        </div>
      )}
      <h2 className="max-w-[16ch] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="max-w-[52ch] text-pretty text-[15px] leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
