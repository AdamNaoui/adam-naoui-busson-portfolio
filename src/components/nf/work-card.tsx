"use client";

import Image from "next/image";
import { getLocalized, type WorkItem } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";
import { PlayIcon, PlusIcon, ThumbIcon, ChevronDownIcon } from "@/components/nf/icons";

const T = {
  en: { season: "SEASON", match: "Match", latest: "Latest season", open: "Open details for" },
  fr: { season: "SAISON", match: "Compatible", latest: "Dernière saison", open: "Ouvrir les détails de" },
};

export function WorkCard({ item, onOpen, featured = false }: { item: WorkItem; onOpen: () => void; featured?: boolean }) {
  const { locale } = useLocale();
  const t = T[locale];
  const company = getLocalized(item.company, locale);
  const isCurrent = item.season === 5;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${t.open} ${company}`}
      className="nf-card group/card relative flex w-[260px] flex-none flex-col overflow-hidden rounded-[4px] bg-[#181818] text-left transition-transform duration-300 hover:z-20 hover:scale-[1.08] hover:shadow-[0_14px_40px_rgba(0,0,0,.7)] focus-visible:scale-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-[300px]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#1f1f1f]">
        <Image src={item.poster} alt={company} fill sizes="300px" className="object-cover object-[50%_35%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9)_0%,rgba(0,0,0,.45)_40%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-0 flex flex-col justify-end gap-0.5 p-4">
          <span className="text-[11px] font-bold tracking-[.2em] text-[#d2d2d2]">
            {t.season} {item.season} · {getLocalized(item.start, locale)} – {getLocalized(item.end, locale)}
          </span>
          <span className="line-clamp-1 text-[14px] font-semibold text-white">{getLocalized(item.title, locale)}</span>
        </div>
        {isCurrent && (
          <span className="absolute right-0 top-0 rounded-bl-[4px] bg-nf-red px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[.08em] text-white">
            {t.latest}
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white/30">
          <i className="block h-[3px] bg-nf-red" style={{ width: isCurrent ? "92%" : "100%" }} />
        </span>
      </div>

      <div className="hidden flex-col gap-3 px-4 pb-4 pt-3.5 group-hover/card:flex group-focus-visible/card:flex">
        <div className="flex items-center gap-2">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-nf-ground"><PlayIcon size={16} /></span>
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#8c8c8c] text-white"><PlusIcon /></span>
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#8c8c8c] text-white"><ThumbIcon /></span>
          <span className="flex-1" />
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#8c8c8c] text-white"><ChevronDownIcon /></span>
        </div>
        <div className="flex items-center gap-2.5 text-[13px] font-semibold">
          <span className="text-nf-green">{item.match}% {t.match}</span>
          <span className="rounded-sm border border-[#8c8c8c] px-1 text-[10px] text-nf-grey">{getLocalized(item.duration, locale)}</span>
          <span className="text-[#e5e5e5]">{getLocalized(item.location, locale).split(",")[0]}</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-[12px] font-medium text-[#e5e5e5]">
          {item.cast.slice(0, 4).map((c, i) => (
            <span key={c} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true" className="text-[#6b6b6b]">•</span>}
              {c}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
