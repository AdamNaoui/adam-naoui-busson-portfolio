"use client";

import Image from "next/image";
import { getLocalized, type Venture } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";

const BADGE: Record<string, { en: string; fr: string; light?: boolean }> = {
  "Call Next": { en: "On the App Store", fr: "Sur l'App Store", light: true },
  "Next Leagz": { en: "Live · real users", fr: "En prod · vrais utilisateurs" },
  Traveling2Gather: { en: "New original", fr: "Nouvel original", light: true },
};

export function OriginalCard({ item }: { item: Venture }) {
  const { locale } = useLocale();
  const badge = BADGE[item.name];
  const portrait = item.shotPortrait;

  return (
    <a
      href={item.appStoreUrl || item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="nf-card group/card relative block h-[200px] w-[340px] flex-none overflow-hidden rounded-[4px] bg-[#1f1f1f] transition-transform duration-300 hover:z-20 hover:scale-[1.05] hover:shadow-[0_14px_40px_rgba(0,0,0,.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-[259px] sm:w-[460px]"
    >
      <Image
        src={item.shot}
        alt={getLocalized(item.shotAlt, locale)}
        fill
        sizes="460px"
        className={portrait ? "object-cover object-[50%_12%]" : "object-cover object-[50%_0%]"}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.92)_0%,rgba(0,0,0,.25)_55%,rgba(0,0,0,0)_100%)]" />
      <div className={`absolute inset-0 flex flex-col justify-end gap-1.5 p-4 ${item.name === "Traveling2Gather" ? "pl-[90px] sm:pl-[120px]" : ""}`}>
        <div className="flex items-center gap-2.5">
          {item.logoUrl && (
            <Image src={item.logoUrl} alt="" width={34} height={34} className="h-[34px] w-[34px] rounded-lg" />
          )}
          <span className="font-display text-[32px] leading-none text-white sm:text-[40px]">{item.name}</span>
        </div>
        <span className="text-[13px] font-medium text-[#e5e5e5] sm:text-[14px]">
          {getLocalized(item.tagline, locale)} · {getLocalized(item.role, locale)}
        </span>
        <span className="text-[12px] font-medium text-nf-grey">{item.technologies.join(" · ")}</span>
      </div>
      {badge && (
        <span
          className={`absolute right-0 top-0 rounded-bl-[4px] px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[.08em] ${badge.light ? "bg-white text-nf-ground" : "bg-nf-red text-white"}`}
        >
          {badge[locale]}
        </span>
      )}
    </a>
  );
}
