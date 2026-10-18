"use client";

import Image from "next/image";
import { DATA, getLocalized } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";
import { useProfile } from "@/components/nf/profile-provider";
import { PlayIcon, InfoIcon } from "@/components/nf/icons";

const T = {
  en: { portfolio: "P O R T F O L I O", seasons: "5 Seasons", play: "Play resume", info: "More info", trending: "Trending now" },
  fr: { portfolio: "P O R T F O L I O", seasons: "5 saisons", play: "Lire le CV", info: "Plus d'infos", trending: "Tendances actuelles" },
};

export function Billboard({ onMoreInfo }: { onMoreInfo: () => void }) {
  const { locale } = useLocale();
  const { profile } = useProfile();
  const t = T[locale];
  const kicker = profile ? getLocalized(profile.kicker, locale) : t.trending;

  return (
    <section
      id="home"
      className="relative flex min-h-[640px] items-center overflow-hidden bg-gradient-to-r from-nf-ground via-[#1b1b1b] to-[#262626] sm:min-h-[760px]"
    >
      <Image
        src={DATA.avatarUrl}
        alt={DATA.name}
        fill
        priority
        sizes="(max-width: 760px) 100vw, 62vw"
        className="nf-hero-photo object-cover object-[50%_20%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,#141414_0%,rgba(20,20,20,0)_35%),linear-gradient(to_right,rgba(20,20,20,.9)_30%,rgba(20,20,20,0)_65%)] max-[760px]:bg-[linear-gradient(to_top,#141414_0%,rgba(20,20,20,.55)_45%,rgba(20,20,20,.2)_100%)]"
      />

      <div className="relative flex max-w-[620px] flex-col gap-4 px-4 pb-20 pt-[120px] max-[760px]:justify-end max-[760px]:self-end sm:px-[60px]">
        <div className="flex items-center gap-2.5">
          <span className="font-display text-[26px] leading-none text-nf-red">A</span>
          <span className="text-[13px] font-bold tracking-[.32em] text-nf-grey">{t.portfolio}</span>
        </div>
        <h1 className="m-0 font-display text-[64px] font-normal leading-[.9] tracking-[.01em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,.5)] sm:text-[118px]">
          Adam
          <br />
          Naoui-Busson
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-[15px] font-semibold">
          <span className="text-nf-green">{kicker}</span>
          <span className="text-[#e5e5e5]">2021 – 2026</span>
          <span className="text-[#e5e5e5]">{t.seasons}</span>
          <span className="rounded-sm border border-[#8c8c8c] px-1.5 text-[11px] text-[#e5e5e5]">HD</span>
          <span className="rounded-sm border border-[#8c8c8c] px-1.5 text-[11px] text-[#e5e5e5]">FR · EN</span>
        </div>
        <p className="m-0 max-w-[560px] text-[17px] font-medium leading-[1.45] text-white drop-shadow-[0_1px_12px_rgba(0,0,0,.6)] sm:text-[19px]">
          {getLocalized(DATA.description, locale)}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nf-btn bg-white text-nf-ground hover:bg-[#e5e5e5]"
          >
            <PlayIcon />
            {t.play}
          </a>
          <button type="button" onClick={onMoreInfo} className="nf-btn bg-[rgba(109,109,110,.7)] text-white hover:bg-[rgba(109,109,110,.5)]">
            <InfoIcon />
            {t.info}
          </button>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-[13px] font-medium text-nf-grey">
          <span>{getLocalized(DATA.location, locale)}</span>
          <span aria-hidden="true">·</span>
          <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
