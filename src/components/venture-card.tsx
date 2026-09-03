import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocalized, type Venture } from "@/data/resume";
import { cn } from "@/lib/utils";

interface VentureCardProps {
  venture: Venture;
  locale: "en" | "fr";
  index: string;
  reversed?: boolean;
}

export function VentureCard({ venture, locale, index, reversed }: VentureCardProps) {
  const role = getLocalized(venture.role, locale);
  const tagline = getLocalized(venture.tagline, locale);
  const description = getLocalized(venture.description, locale);
  const shotAlt = getLocalized(venture.shotAlt, locale);
  const visitLabel = locale === "fr" ? "Visiter le site" : "Visit the site";

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
      {/* Visual */}
      <div className={cn("relative", reversed && "lg:order-2")}>
        <span className="pointer-events-none absolute -left-1 -top-8 -z-10 select-none font-mono text-[5rem] font-medium leading-none text-foreground/[0.07] sm:-left-4 sm:text-[6.5rem]">
          {index}
        </span>
        <div
          className={cn(
            "surface overflow-hidden p-2.5 sm:p-3",
            venture.shotPortrait ? "mx-auto max-w-[260px]" : "max-w-[520px]"
          )}
        >
          <Image
            src={venture.shot}
            alt={shotAlt}
            width={venture.shotPortrait ? 420 : 1200}
            height={venture.shotPortrait ? 900 : 620}
            className="h-auto w-full rounded-[5px]"
          />
        </div>
      </div>

      {/* Content */}
      <div className={cn("flex flex-col gap-5", reversed && "lg:order-1")}>
        <div className="flex items-center gap-3">
          <Image
            src={venture.logoUrl}
            alt=""
            width={40}
            height={40}
            className="size-9 rounded-lg ring-1 ring-white/10"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold tracking-tight">
              {venture.name}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {role} · {getLocalized(venture.period, locale)}
            </span>
          </div>
        </div>

        <p className="max-w-[20ch] text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-[2.1rem]">
          {tagline}
        </p>

        <p className="max-w-[46ch] text-pretty text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>

        <p className="font-mono text-xs text-muted-foreground/80">
          {venture.technologies.join("  /  ")}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          <Link
            href={venture.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-medium text-primary-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
          >
            {visitLabel}
            <span className="flex size-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-3.5" />
            </span>
          </Link>
          {venture.appStoreUrl && (
            <Link
              href={venture.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {locale === "fr" ? "App Store" : "Get it on the App Store"}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
