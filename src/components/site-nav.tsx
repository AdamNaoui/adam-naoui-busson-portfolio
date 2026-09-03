"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/locale-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { LocaleToggle } from "@/components/locale-toggle";

const LABELS = {
  en: {
    about: "About",
    ventures: "Ventures",
    work: "Work",
    stack: "Stack",
    contact: "Contact",
    resume: "Résumé",
    menu: "Menu",
    close: "Close",
  },
  fr: {
    about: "Profil",
    ventures: "Entreprises",
    work: "Parcours",
    stack: "Stack",
    contact: "Contact",
    resume: "CV",
    menu: "Menu",
    close: "Fermer",
  },
};

const SECTIONS = ["about", "ventures", "work", "stack", "contact"] as const;

export function SiteNav() {
  const { locale } = useLocale();
  const t = LABELS[locale];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById("nav-sentinel");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
        <nav
          className={cn(
            "pointer-events-auto mt-4 flex items-center gap-1 rounded-full border px-2 py-2 transition-all duration-500",
            scrolled
              ? "glass border-border/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
              : "border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="px-3 font-display text-sm font-bold tracking-tight"
          >
            AN<span className="text-primary">B</span>
          </a>

          <span className="hidden h-4 w-px bg-border md:block" />

          <div className="hidden items-center md:flex">
            {SECTIONS.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t[s]}
              </a>
            ))}
          </div>

          <span className="hidden h-4 w-px bg-border md:block" />

          <a
            href="/resume.pdf"
            download="Adam_Naoui-Busson_Resume.pdf"
            className="hidden rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary md:block"
          >
            {t.resume}
          </a>

          <LocaleToggle />
          <ModeToggle />

          <button
            type="button"
            aria-label={open ? t.close : t.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative ml-0.5 flex size-9 items-center justify-center md:hidden"
          >
            <span
              className={cn(
                "absolute block h-px w-4 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "rotate-45" : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "absolute block h-px w-4 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "-rotate-45" : "translate-y-1"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center gap-2 px-8 transition-all duration-500 md:hidden",
          open
            ? "glass pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {SECTIONS.map((s, i) => (
          <a
            key={s}
            href={`#${s}`}
            onClick={() => setOpen(false)}
            className={cn(
              "font-display text-4xl font-semibold tracking-tight transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
          >
            {t[s]}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Adam_Naoui-Busson_Resume.pdf"
          onClick={() => setOpen(false)}
          className={cn(
            "mt-4 font-mono text-sm uppercase tracking-[0.2em] text-primary transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
          style={{ transitionDelay: open ? `${100 + SECTIONS.length * 60}ms` : "0ms" }}
        >
          {t.resume}
        </a>
      </div>
    </>
  );
}
