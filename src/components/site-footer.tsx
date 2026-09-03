"use client";

import Link from "next/link";
import { DATA } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";

export function SiteFooter() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();
  const builtWith =
    locale === "fr"
      ? "Conçu et développé avec Next.js et Tailwind CSS."
      : "Designed and built with Next.js and Tailwind CSS.";

  return (
    <footer className="border-t border-border/60">
      <div className="container-page flex flex-col gap-3 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {DATA.name}
        </p>
        <p>{builtWith}</p>
        <div className="flex items-center gap-4">
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
