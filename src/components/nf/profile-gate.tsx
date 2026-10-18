"use client";

import { DATA, getLocalized } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";
import { useProfile } from "@/components/nf/profile-provider";
import { AvatarFace } from "@/components/nf/avatar-face";

const T = {
  en: { title: "Who's watching?", sayHi: "Say hi", email: "Email Adam", resume: "Download resume", lang: "FR" },
  fr: { title: "Qui regarde ?", sayHi: "Dire bonjour", email: "Écrire à Adam", resume: "Télécharger le CV", lang: "EN" },
};

export function ProfileGate() {
  const { locale, setLocale } = useLocale();
  const { setProfile } = useProfile();
  const t = T[locale];

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen flex-col bg-nf-ground text-white">
      <header className="flex h-20 items-center px-5 sm:px-[60px]">
        <span className="font-display text-[40px] leading-none tracking-[.06em] text-nf-red">ADAM</span>
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => setLocale(locale === "en" ? "fr" : "en")}
          className="min-h-[44px] px-3 text-[13px] font-medium text-nf-grey hover:text-white"
        >
          {t.lang}
        </button>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-10 px-4 pb-20 pt-10">
        <h1 className="m-0 text-center font-sans text-[40px] font-normal tracking-[-.01em] sm:text-[58px]">
          {t.title}
        </h1>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {DATA.profiles.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setProfile(p.id)}
              className="group flex w-[120px] flex-col items-center gap-3 sm:w-[160px]"
            >
              <AvatarFace
                face={p.face}
                color={p.color}
                size={148}
                className="h-[110px] w-[110px] border-[3px] border-transparent transition-colors group-hover:border-[#e5e5e5] group-focus-visible:border-[#e5e5e5] sm:h-[148px] sm:w-[148px]"
              />
              <span className="text-[18px] font-medium text-nf-grey group-hover:text-[#e5e5e5]">
                {getLocalized(p.name, locale)}
              </span>
              <span className="text-center text-[12px] font-medium leading-tight text-[#6b6b6b]">
                {getLocalized(p.sub, locale)}
              </span>
            </button>
          ))}

          <a
            href={`mailto:${DATA.contact.email}`}
            className="group flex w-[120px] flex-col items-center gap-3 sm:w-[160px]"
          >
            <span className="flex h-[110px] w-[110px] items-center justify-center rounded-md border-[3px] border-[#2a2a2a] bg-[#1f1f1f] transition-colors group-hover:border-[#e5e5e5] sm:h-[148px] sm:w-[148px]">
              <svg aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8c8c8c" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <span className="text-[18px] font-medium text-nf-grey group-hover:text-[#e5e5e5]">{t.sayHi}</span>
            <span className="text-center text-[12px] font-medium text-[#6b6b6b]">{t.email}</span>
          </a>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex h-11 items-center border border-nf-grey px-7 text-[15px] font-medium uppercase tracking-[.1em] text-nf-grey hover:border-white hover:text-white"
        >
          {t.resume}
        </a>
      </main>

      <footer className="flex flex-wrap justify-center gap-x-5 gap-y-1 px-5 pb-8 text-[12px] font-medium text-[#6b6b6b]">
        <span>{getLocalized(DATA.location, locale)}</span>
        <span aria-hidden="true">·</span>
        <span>{getLocalized(DATA.roleLine, locale)}</span>
      </footer>
    </div>
  );
}
