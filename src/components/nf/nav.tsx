"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/locale-provider";
import { useProfile } from "@/components/nf/profile-provider";
import { AvatarFace } from "@/components/nf/avatar-face";

const T = {
  en: { home: "Home", work: "Work Experience", ventures: "Originals", skills: "Skills", education: "Education", contact: "Contact", resume: "Resume", switch: "Switch profile", lang: "FR" },
  fr: { home: "Accueil", work: "Parcours", ventures: "Originaux", skills: "Compétences", education: "Formation", contact: "Contact", resume: "CV", switch: "Changer de profil", lang: "EN" },
};

export function NfNav() {
  const { locale, setLocale } = useLocale();
  const { profile, clearProfile } = useProfile();
  const [scrolled, setScrolled] = useState(false);
  const t = T[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#experience", label: t.work },
    { href: "/#ventures", label: t.ventures },
    { href: "/#skills", label: t.skills },
    { href: "/#education", label: t.education },
    { href: `/#contact`, label: t.contact },
  ];

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-[68px] items-center gap-5 px-4 transition-colors duration-300 sm:gap-7 sm:px-[60px]",
        scrolled ? "bg-nf-ground" : "bg-gradient-to-b from-black/75 to-transparent"
      )}
    >
      <Link href="/" aria-label="Adam home" className="font-display text-[34px] leading-none tracking-[.06em] text-nf-red">
        ADAM
      </Link>
      <div className="hidden items-center gap-5 lg:flex">
        <Link href="/" className="text-[14px] font-bold text-white">
          {t.home}
        </Link>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-[14px] font-medium text-[#e5e5e5] hover:text-nf-grey">
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex-1" />
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] font-medium text-[#e5e5e5] hover:text-nf-grey"
      >
        {t.resume}
      </a>
      <button
        type="button"
        onClick={() => setLocale(locale === "en" ? "fr" : "en")}
        className="min-h-[44px] px-1 text-[14px] font-medium text-[#e5e5e5] hover:text-nf-grey"
        aria-label={locale === "en" ? "Passer en français" : "Switch to English"}
      >
        {t.lang}
      </button>
      {profile && (
        <button
          type="button"
          onClick={clearProfile}
          aria-label={t.switch}
          title={t.switch}
          className="flex min-h-[44px] items-center gap-2"
        >
          <AvatarFace face={profile.face} color={profile.color} size={32} />
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </nav>
  );
}
