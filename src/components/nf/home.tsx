"use client";

import Image from "next/image";
import { useState } from "react";
import { DATA, getLocalized, type WorkItem } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";
import { useProfile } from "@/components/nf/profile-provider";
import { ProfileGate } from "@/components/nf/profile-gate";
import { Billboard } from "@/components/nf/billboard";
import { Row } from "@/components/nf/row";
import { WorkCard } from "@/components/nf/work-card";
import { OriginalCard } from "@/components/nf/original-card";
import { Top10 } from "@/components/nf/top10";
import { ExperienceModal } from "@/components/nf/experience-modal";

const T = {
  en: {
    work: "Work Experience",
    exploreAll: "Explore all",
    originals: "Originals · Built by Adam",
    originalTag: "ADAM ORIGINAL",
    top10: "Top 10 Skills in Montreal Today",
    education: "Education & Certifications",
    documentary: "DOCUMENTARY",
    certified: "Certified",
    audio: "AUDIO & SUBTITLES",
  },
  fr: {
    work: "Parcours professionnel",
    exploreAll: "Tout voir",
    originals: "Originaux · Créés par Adam",
    originalTag: "ORIGINAL ADAM",
    top10: "Top 10 des compétences à Montréal",
    education: "Formation et certifications",
    documentary: "DOCUMENTAIRE",
    certified: "Certifié",
    audio: "AUDIO ET SOUS-TITRES",
  },
};

export function NfHome() {
  const { locale } = useLocale();
  const { profile, hydrated } = useProfile();
  const [selected, setSelected] = useState<WorkItem | null>(null);
  const t = T[locale];
  const edu = DATA.education[0];
  const cert = DATA.certifications[0];

  if (!hydrated) return <div className="min-h-screen bg-nf-ground" />;
  if (!profile) return <ProfileGate />;

  return (
    <main className="flex min-h-screen flex-col bg-nf-ground text-white">
      <Billboard onMoreInfo={() => setSelected(DATA.work[0])} />

      <div className="relative z-[2] -mt-20 flex flex-col gap-2">
        <Row
          id="experience"
          title={t.work}
          align="start"
          aside={
            <a href="#experience" className="text-[13px] font-semibold text-[#54b9c5] hover:text-white">
              {t.exploreAll}
            </a>
          }
        >
          {DATA.work.map((w) => (
            <WorkCard key={w.poster} item={w} onOpen={() => setSelected(w)} />
          ))}
        </Row>

        <Row
          id="ventures"
          title={t.originals}
          aside={<span className="text-[10px] font-bold tracking-[.18em] text-nf-red">{t.originalTag}</span>}
        >
          {DATA.ventures.map((v) => (
            <OriginalCard key={v.name} item={v} />
          ))}
        </Row>

        <Row id="skills" title={t.top10} align="end">
          <Top10 />
        </Row>

        <Row id="education" title={t.education}>
          <a
            href={edu.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nf-card relative block aspect-video w-[260px] flex-none overflow-hidden rounded-[4px] bg-[#1a1a1a] transition-transform duration-300 hover:scale-[1.06] sm:w-[300px]"
          >
            <Image src={edu.poster} alt={getLocalized(edu.school, locale)} fill sizes="300px" className="object-cover object-[50%_40%]" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9)_0%,rgba(0,0,0,.45)_40%,rgba(0,0,0,0)_70%)]" />
            <div className="absolute inset-0 flex flex-col justify-end gap-0.5 p-4">
              <span className="text-[11px] font-bold tracking-[.2em] text-nf-grey">
                {getLocalized(edu.start, locale).slice(-4)} – {getLocalized(edu.end, locale).slice(-4)} · {t.documentary}
              </span>
              <span className="line-clamp-1 text-[14px] font-semibold text-white">{getLocalized(edu.degree, locale)}</span>
            </div>
          </a>

          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nf-card relative block aspect-video w-[260px] flex-none overflow-hidden rounded-[4px] bg-[#1f1340] transition-transform duration-300 hover:scale-[1.06] sm:w-[300px]"
          >
            <Image src={cert.poster} alt={cert.issuer} fill sizes="300px" className="object-cover object-[50%_30%]" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9)_0%,rgba(0,0,0,.45)_40%,rgba(0,0,0,0)_70%)]" />
            <div className="absolute inset-0 flex flex-col justify-end gap-0.5 p-4">
              <span className="text-[11px] font-bold tracking-[.2em] text-[#cfbff2]">
                {getLocalized(cert.date, locale).toUpperCase()} · {cert.issuer.toUpperCase()}
              </span>
              <span className="text-[14px] font-semibold text-white">{cert.name.replace(" - ", " · ")}</span>
            </div>
            <span className="absolute right-0 top-0 rounded-bl-[4px] bg-white px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[.08em] text-nf-ground">
              {t.certified}
            </span>
          </a>

          <div className="relative flex aspect-video w-[260px] flex-none flex-col justify-center gap-2.5 rounded-[4px] border border-[#2a2a2a] bg-[#1f1f1f] p-4 sm:w-[300px]">
            <span className="text-[11px] font-bold tracking-[.2em] text-nf-grey">{t.audio}</span>
            {DATA.spokenLanguages.map((l) => (
              <span key={l.flagUrl} className="text-[15px] font-medium text-white">
                {getLocalized(l.name, locale)} · {getLocalized(l.level, locale)}
              </span>
            ))}
          </div>
        </Row>
      </div>

      <ExperienceModal item={selected} onClose={() => setSelected(null)} onSelect={(w) => setSelected(w)} />
    </main>
  );
}
