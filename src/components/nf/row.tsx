"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Row({
  id,
  title,
  aside,
  children,
  className,
  align = "stretch",
}: {
  id?: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "stretch" | "start" | "end";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id={id} className={cn("group/row relative flex scroll-mt-20 flex-col gap-1", className)}>
      <div className="flex items-baseline gap-3.5 px-4 sm:px-[60px]">
        <h2 className="m-0 font-sans text-[20px] font-semibold text-[#e5e5e5]">{title}</h2>
        {aside}
      </div>
      <div className="relative">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          className="absolute left-0 top-2 z-10 hidden h-[calc(100%-32px)] w-[60px] items-center justify-center bg-gradient-to-r from-nf-ground/90 to-transparent text-white opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
        >
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <div
          ref={ref}
          className={cn(
            "nf-scroll flex gap-2 overflow-x-auto px-4 pb-6 pt-2 sm:px-[60px]",
            align === "start" && "items-start",
            align === "end" && "items-end"
          )}
        >
          {children}
        </div>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          className="absolute right-0 top-2 z-10 hidden h-[calc(100%-32px)] w-[60px] items-center justify-center bg-gradient-to-l from-nf-ground/90 to-transparent text-white opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
        >
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
}
