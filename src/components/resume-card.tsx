"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  period: string;
  description?: string;
  locale?: "en" | "fr";
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
}: ResumeCardProps) => {
  const [open, setOpen] = React.useState(false);

  const bullets = description
    ? description
        .split(/\.\s+(?=[A-Z])/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => (s.endsWith(".") ? s : s + "."))
    : [];

  return (
    <li className="group py-5">
      <div className="grid gap-x-6 gap-y-3 sm:grid-cols-[6.5rem_1fr]">
        <div className="pt-1 font-mono text-xs tabular-nums text-muted-foreground">
          {period}
        </div>

        <div>
          <button
            type="button"
            disabled={!description}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex w-full items-start justify-between gap-4 text-left",
              description && "cursor-pointer"
            )}
          >
            <span className="flex items-start gap-3">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-black/5">
                <Image
                  src={logoUrl}
                  alt={altText}
                  width={22}
                  height={22}
                  className="size-[18px] object-contain"
                />
              </span>
              <span>
                <span className="flex items-center gap-1.5 text-[15px] font-semibold sm:text-base">
                  {title}
                  {href && (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${title} website`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  )}
                </span>
                {subtitle && (
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {subtitle}
                  </span>
                )}
              </span>
            </span>

            {description && (
              <Plus
                className={cn(
                  "mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open ? "rotate-45 text-primary" : "rotate-0"
                )}
              />
            )}
          </button>

          {description && open && (
            <ul className="ml-11 mt-3 space-y-2 border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground">
              {bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};
