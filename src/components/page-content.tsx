"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DATA, getLocalized } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ResumeCard } from "@/components/resume-card";
import { VentureCard } from "@/components/venture-card";

const T = {
  en: {
    heroCtaContact: "Get in touch",
    heroCtaVentures: "See the ventures",
    currently: "Currently",
    previously: "Previously",
    aboutTitle: "About",
    venturesKicker: "Founder",
    venturesTitle: "Building for Montréal sports",
    venturesIntro:
      "Two live Expo apps on a Supabase backend: a pickup app players open every week, and the platform that runs the organized leagues.",
    workTitle: "Work",
    workIntro:
      "Six years across payments, mobile and IoT. Most of it building and shipping to production.",
    education: "Education",
    stackTitle: "Stack",
    stackIntro:
      "What I reach for. Deepest in TypeScript with React Native and Expo. Full-stack background in Angular, Spring Boot and Postgres, plus Supabase for the apps I run now.",
    certifications: "Certifications",
    languages: "Languages",
    contactTitle: "Let's talk",
    contactBody:
      "I am building Call Next and Next Leagz and I am always up for a conversation about mobile, product or payments infrastructure.",
    contactVia: "Find me on",
    catLabels: {
      mobile: "Mobile",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend & data",
      cloud: "Cloud & DevOps",
      testing: "Testing",
    } as Record<string, string>,
  },
  fr: {
    heroCtaContact: "Me contacter",
    heroCtaVentures: "Voir les entreprises",
    currently: "En ce moment",
    previously: "Auparavant",
    aboutTitle: "Profil",
    venturesKicker: "Fondateur",
    venturesTitle: "Bâtir pour le sport montréalais",
    venturesIntro:
      "Deux applications Expo en production sur un backend Supabase : une application de sport libre ouverte chaque semaine, et la plateforme qui gère les ligues organisées.",
    workTitle: "Parcours",
    workIntro:
      "Six ans dans les paiements, le mobile et l'IoT. Surtout à construire et livrer en production.",
    education: "Formation",
    stackTitle: "Stack",
    stackIntro:
      "Ce que j'utilise. Surtout TypeScript avec React Native et Expo. Expérience full-stack en Angular, Spring Boot et Postgres, plus Supabase pour les applications que je dirige.",
    certifications: "Certifications",
    languages: "Langues",
    contactTitle: "Parlons-en",
    contactBody:
      "Je construis Call Next et Next Leagz, et je suis toujours partant pour une discussion sur le mobile, le produit ou l'infrastructure de paiement.",
    contactVia: "Retrouvez-moi sur",
    catLabels: {
      mobile: "Mobile",
      languages: "Langages",
      frontend: "Frontend",
      backend: "Backend et données",
      cloud: "Cloud et DevOps",
      testing: "Tests",
    } as Record<string, string>,
  },
};

export default function PageContent() {
  const { locale } = useLocale();
  const t = T[locale];
  const [first, ...rest] = DATA.name.split(" ");

  return (
    <main id="top">
      {/* Hero */}
      <section className="container-page grid min-h-[92vh] items-center gap-12 pb-20 pt-32 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
        <div className="flex flex-col gap-6">
          <p className="reveal-in kicker">
            {getLocalized(DATA.location, locale)}
          </p>
          <h1
            className="reveal-in text-[clamp(2.5rem,6.4vw,4.75rem)] font-semibold leading-[0.98] tracking-tight [text-wrap:balance]"
            style={{ ["--reveal-delay" as string]: "60ms" }}
          >
            {first}
            <br />
            {rest.join(" ")}
          </h1>
          <p
            className="reveal-in max-w-[40ch] text-pretty text-lg leading-relaxed text-foreground/80 sm:text-xl"
            style={{ ["--reveal-delay" as string]: "140ms" }}
          >
            {getLocalized(DATA.description, locale)}
          </p>
          <div
            className="reveal-in mt-3 flex flex-wrap items-center gap-3"
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary py-2.5 pl-5 pr-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
            >
              {t.heroCtaContact}
              <span className="flex size-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-3.5" />
              </span>
            </a>
            <a
              href="#ventures"
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.heroCtaVentures}
            </a>
          </div>
        </div>

        <Reveal
          className="mx-auto w-full max-w-[18rem] lg:mx-0 lg:mt-8"
          delay={0.15}
        >
          <div className="surface overflow-hidden p-2">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              width={480}
              height={600}
              priority
              className="aspect-[4/5] w-full rounded-[6px] object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section
        id="about"
        className="container-page border-t border-border py-24 sm:py-32"
      >
        <div className="grid gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
          <Reveal className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight">
              {t.aboutTitle}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="kicker">{t.currently}</span>
                <span className="text-sm text-foreground/80">
                  Call Next, Next Leagz
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="kicker">{t.previously}</span>
                <span className="text-sm text-foreground/80">Morgan Stanley</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-5">
            {getLocalized(DATA.summary, locale)
              .split("\n")
              .map((para, i) => (
                <p
                  key={i}
                  className="max-w-[58ch] text-pretty text-lg leading-relaxed text-foreground/85"
                >
                  {para}
                </p>
              ))}
          </Reveal>
        </div>
      </section>

      {/* Ventures */}
      <section
        id="ventures"
        className="container-page border-t border-border py-24 sm:py-32"
      >
        <SectionHeading
          kicker={t.venturesKicker}
          title={t.venturesTitle}
          intro={t.venturesIntro}
        />
        <div className="mt-16 flex flex-col gap-24 sm:gap-28">
          {DATA.ventures.map((venture, i) => (
            <Reveal key={venture.name} delay={0.04}>
              <VentureCard
                venture={venture}
                locale={locale}
                index={String(i + 1).padStart(2, "0")}
                reversed={i % 2 === 1}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="container-page border-t border-border py-24 sm:py-32"
      >
        <SectionHeading title={t.workTitle} intro={t.workIntro} />

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {DATA.work.map((work, i) => (
            <ResumeCard
              key={`work-${i}`}
              logoUrl={work.logoUrl}
              altText={getLocalized(work.company, locale)}
              title={getLocalized(work.company, locale)}
              subtitle={getLocalized(work.title, locale)}
              href={work.href}
              period={`${getLocalized(work.start, locale)} - ${getLocalized(
                work.end,
                locale
              )}`}
              description={getLocalized(work.description, locale)}
              locale={locale}
            />
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-col gap-3">
          <span className="kicker">{t.education}</span>
          {DATA.education.map((edu, i) => (
            <div
              key={`edu-${i}`}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <Link
                href={edu.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[15px] font-semibold"
              >
                {getLocalized(edu.school, locale)}
              </Link>
              <span className="text-sm text-muted-foreground">
                {getLocalized(edu.degree, locale)}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {getLocalized(edu.start, locale)} - {getLocalized(edu.end, locale)}
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Stack */}
      <section
        id="stack"
        className="container-page border-t border-border py-24 sm:py-32"
      >
        <SectionHeading title={t.stackTitle} intro={t.stackIntro} />

        <div className="mt-14 flex flex-col divide-y divide-border border-y border-border">
          {Object.entries(DATA.skills).map(([category, skills]) => (
            <Reveal
              key={category}
              className="grid gap-x-6 gap-y-3 py-5 sm:grid-cols-[10rem_1fr]"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t.catLabels[category] ?? category}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                {skills.map((skill) => (
                  <Link
                    key={skill.name}
                    href={skill.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-foreground/85 transition-colors hover:text-foreground"
                  >
                    {skill.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <span className="kicker">{t.certifications}</span>
            {DATA.certifications.map((cert) => (
              <Link
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-2 text-sm"
              >
                <span className="link-underline font-medium">{cert.name}</span>
                <span className="text-muted-foreground">{cert.issuer}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="kicker">{t.languages}</span>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
              {DATA.spokenLanguages.map((lang) => (
                <span key={getLocalized(lang.name, locale)}>
                  <span className="font-medium">
                    {getLocalized(lang.name, locale)}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {getLocalized(lang.level, locale)}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="container-page border-t border-border py-28 sm:py-36"
      >
        <Reveal className="flex max-w-2xl flex-col gap-8">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {t.contactTitle}
          </h2>
          <p className="max-w-[46ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.contactBody}
          </p>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="link-underline w-fit font-display text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {DATA.contact.email}
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="kicker">{t.contactVia}</span>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
