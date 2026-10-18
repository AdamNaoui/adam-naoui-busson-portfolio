"use client";

import Image from "next/image";
import { DATA } from "@/data/resume";

export function Top10() {
  return (
    <>
      {DATA.topSkills.map((s, i) => (
        <div key={s.name} className="flex flex-none items-end" style={{ width: i === 9 ? 280 : 236 }}>
          <span
            aria-hidden="true"
            className="nf-top10-number relative z-0 -mr-[22px] font-display text-[190px] leading-[.78] text-nf-ground"
            style={i === 9 ? { letterSpacing: "-.06em" } : undefined}
          >
            {i + 1}
          </span>
          <div className="nf-card relative z-[1] flex h-[210px] w-[150px] flex-none flex-col justify-end overflow-hidden rounded-[4px] bg-[#1f1f1f] p-3 transition-transform duration-300 hover:scale-[1.06]">
            <Image src={s.poster} alt="" fill sizes="150px" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.9)_0%,rgba(0,0,0,.45)_40%,rgba(0,0,0,0)_70%)]" />
            <span className="relative font-display text-[24px] leading-none text-white">{s.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}
