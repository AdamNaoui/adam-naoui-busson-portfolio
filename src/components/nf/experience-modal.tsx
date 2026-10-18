"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { DATA, getLocalized, type WorkItem } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";
import { PlayIcon, PlusIcon, ThumbIcon, CloseIcon, ExternalIcon } from "@/components/nf/icons";

const T = {
  en: { season: "S E A S O N", play: "Play", episodes: "Episodes", episodesN: "Episodes", match: "Match", cast: "Cast:", genres: "Genres:", vibe: "This show is:", more: "More like this", close: "Close", open: "Open" },
  fr: { season: "S A I S O N", play: "Lire", episodes: "Épisodes", episodesN: "épisodes", match: "Compatible", cast: "Distribution :", genres: "Genres :", vibe: "Cette série est :", more: "Dans le même genre", close: "Fermer", open: "Ouvrir" },
};

export function ExperienceModal({ item, onClose, onSelect }: { item: WorkItem | null; onClose: () => void; onSelect: (w: WorkItem) => void }) {
  const { locale } = useLocale();
  const t = T[locale];
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
  }, [item]);

  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  const company = item ? getLocalized(item.company, locale) : "";
  const others = item ? DATA.work.filter((w) => w !== item).slice(0, 3) : [];

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="nf-dialog m-0 max-h-none max-w-none bg-transparent p-0 text-white backdrop:bg-black/70"
    >
      {item && (
        <div className="flex min-h-full w-full justify-center px-0 pb-0 pt-0 sm:px-4 sm:pb-16 sm:pt-8">
          <article className="relative flex w-full max-w-[860px] flex-col overflow-hidden bg-[#181818] shadow-[0_30px_80px_rgba(0,0,0,.8)] sm:rounded-lg">
            <div className="relative h-[360px] overflow-hidden bg-[#0b1f4b] sm:h-[480px]">
              <Image src={item.poster} alt={company} fill sizes="860px" className="object-cover object-[50%_20%]" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,#181818_0%,rgba(24,24,24,.75)_35%,rgba(24,24,24,.15)_70%)]" />
              <button
                type="button"
                onClick={onClose}
                aria-label={t.close}
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#181818] text-white hover:bg-[#2a2a2a]"
              >
                <CloseIcon />
              </button>
              <div className="absolute inset-x-5 bottom-8 flex flex-col gap-4 sm:inset-x-12">
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-[24px] leading-none text-nf-red">A</span>
                  <span className="text-[12px] font-bold tracking-[.32em] text-[#e5e5e5]">{t.season} {item.season}</span>
                </div>
                <h2 className="m-0 font-display text-[56px] font-normal leading-[.9] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,.5)] sm:text-[96px]">{company}</h2>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nf-btn h-[46px] bg-white text-nf-ground hover:bg-[#e5e5e5]">
                    <PlayIcon size={22} />
                    {t.play}
                  </a>
                  <span className="nf-circ"><PlusIcon size={18} /></span>
                  <span className="nf-circ"><ThumbIcon size={18} /></span>
                  <span className="flex-1" />
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="nf-circ hover:border-white" aria-label={`${t.open} ${item.href}`}>
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 px-5 pb-2 pt-5 sm:grid-cols-[2fr_1fr] sm:gap-8 sm:px-12">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-wrap items-center gap-3 text-[15px] font-semibold">
                  <span className="text-nf-green">{item.match}% {t.match}</span>
                  <span className="text-[#d2d2d2]">{getLocalized(item.start, locale)} – {getLocalized(item.end, locale)}</span>
                  <span className="text-[#d2d2d2]">{item.episodes.length} {t.episodesN}</span>
                  <span className="rounded-sm border border-[#8c8c8c] px-1.5 text-[11px] text-[#d2d2d2]">HD</span>
                </div>
                <div className="text-[18px] font-bold text-white">
                  {getLocalized(item.title, locale)} · {getLocalized(item.location, locale)}
                </div>
                <p className="m-0 text-[16px] leading-[1.55] text-white">{getLocalized(item.description, locale)}</p>
              </div>
              <div className="flex flex-col gap-3 text-[14px] leading-[1.5] text-[#d2d2d2]">
                <div><span className="text-[#777777]">{t.cast} </span>{item.cast.join(", ")}</div>
                <div><span className="text-[#777777]">{t.genres} </span>{item.genres[locale].join(", ")}</div>
                <div><span className="text-[#777777]">{t.vibe} </span>{item.vibe[locale].join(", ")}</div>
              </div>
            </div>

            <section className="flex flex-col gap-2 px-5 pb-10 pt-6 sm:px-12">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="m-0 font-sans text-[24px] font-semibold text-white">{t.episodes}</h3>
                <span className="rounded-sm border border-[#4d4d4d] bg-[#242424] px-3.5 py-2 text-[14px] font-semibold text-white">
                  {t.season.replace(/ /g, "")} {item.season} · {company}
                </span>
              </div>
              {item.episodes.map((ep, i) => (
                <div key={i} className="flex items-start gap-5 rounded-md border-b border-[#2f2f2f] px-4 py-5 last:border-b-0 hover:bg-[#2a2a2a]">
                  <span className="w-8 flex-none pt-1 text-center text-[24px] font-medium text-[#d2d2d2]">{i + 1}</span>
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <b className="text-[16px] font-bold text-white">{getLocalized(ep.title, locale)}</b>
                    <p className="m-0 text-[14px] leading-[1.5] text-[#d2d2d2]">{getLocalized(ep.body, locale)}</p>
                  </div>
                  <span className="hidden flex-none pt-0.5 text-[14px] font-medium text-[#d2d2d2] sm:block">{getLocalized(ep.stat, locale)}</span>
                </div>
              ))}
            </section>

            <section className="flex flex-col gap-3.5 px-5 pb-12 sm:px-12">
              <h3 className="m-0 font-sans text-[24px] font-semibold text-white">{t.more}</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {others.map((w) => (
                  <button
                    key={w.poster}
                    type="button"
                    onClick={() => onSelect(w)}
                    className="flex flex-col overflow-hidden rounded-[4px] bg-[#2f2f2f] text-left hover:bg-[#3a3a3a]"
                  >
                    <div className="relative h-[130px] overflow-hidden">
                      <Image src={w.poster} alt={getLocalized(w.company, locale)} fill sizes="280px" className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-1.5 p-3">
                      <span className="text-[13px] font-semibold text-nf-green">{w.match}% {t.match}</span>
                      <span className="text-[13px] leading-[1.4] text-[#d2d2d2]">{getLocalized(w.episodes[0].body, locale)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </article>
        </div>
      )}
    </dialog>
  );
}
