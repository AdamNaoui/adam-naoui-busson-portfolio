"use client";

import { DATA } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";

export function NfFooter() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="mt-10 flex flex-col gap-5 border-t border-[#2a2a2a] px-4 pb-16 pt-10 text-[13px] font-medium text-[#808080] sm:px-[60px]">
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <a href={`mailto:${DATA.contact.email}`} className="text-nf-grey hover:text-white">
          {DATA.contact.email}
        </a>
        <a href={`tel:${DATA.contact.tel.replace(/\s/g, "")}`} className="text-nf-grey hover:text-white">
          {DATA.contact.tel}
        </a>
        <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer" className="text-nf-grey hover:text-white">
          LinkedIn
        </a>
        <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="text-nf-grey hover:text-white">
          GitHub
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-nf-grey hover:text-white">
          {locale === "fr" ? "CV (PDF)" : "Resume (PDF)"}
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-sm border border-[#808080] px-2.5 py-1.5">{locale === "fr" ? "Code de service" : "Service code"}</span>
        <span>
          © {year} {DATA.name} · Montréal
        </span>
      </div>
    </footer>
  );
}
