"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA, getLocalized } from "@/data/resume";
import { useLocale } from "@/components/locale-provider";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

// UI translations for section headers
const uiTranslations = {
  en: {
    hero_greeting: "Hi, I'm",
    about: "About",
    work_experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    certifications: "Certifications",
    spoken_languages: "Languages",
    my_projects: "My Projects",
    check_out_work: "Check out my latest work",
    projects_description: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    hackathons: "Hackathons",
    i_like_building: "I like building things",
    hackathons_description: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    contact: "Contact",
    get_in_touch: "Get in Touch",
    contact_description: "Want to connect? Feel free to reach out via",
    or_send_email: "or send me an",
    email: "email",
    always_open: "I'm always open to discussing new opportunities.",
    // Skill categories
    languages_skill: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    apis: "APIs",
    databases: "Databases",
    devops: "DevOps & Testing",
    cloud: "Cloud",
  },
  fr: {
    hero_greeting: "Salut, je suis",
    about: "À propos",
    work_experience: "Expérience Professionnelle",
    education: "Formation",
    skills: "Compétences",
    certifications: "Certifications",
    spoken_languages: "Langues",
    my_projects: "Mes Projets",
    check_out_work: "Découvrez mes derniers travaux",
    projects_description: "J'ai travaillé sur divers projets, des sites web simples aux applications web complexes. Voici quelques-uns de mes favoris.",
    hackathons: "Hackathons",
    i_like_building: "J'aime construire des choses",
    hackathons_description: "Pendant mes études universitaires, j'ai participé à {count}+ hackathons. Des gens de tout le pays se réunissaient pour créer des choses incroyables en 2-3 jours. C'était révélateur de voir les possibilités infinies réalisées par un groupe de personnes motivées et passionnées.",
    contact: "Contact",
    get_in_touch: "Contactez-moi",
    contact_description: "Vous souhaitez échanger ? N'hésitez pas à me contacter via",
    or_send_email: "ou envoyez-moi un",
    email: "courriel",
    always_open: "Je suis toujours ouvert à discuter de nouvelles opportunités.",
    // Skill categories
    languages_skill: "Langages",
    frontend: "Frontend",
    backend: "Backend",
    apis: "APIs",
    databases: "Bases de données",
    devops: "DevOps & Tests",
    cloud: "Cloud",
  },
};

export default function PageContent() {
  const { locale } = useLocale();
  const t = uiTranslations[locale];
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Mark as animated after the first render
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  // Use delay only for first animation, 0 for subsequent renders
  const getDelay = (delay: number) => (hasAnimated ? 0 : delay);

  const getSkillCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      languages: t.languages_skill,
      frontend: t.frontend,
      backend: t.backend,
      apis: t.apis,
      databases: t.databases,
      devops: t.devops,
      cloud: t.cloud,
    };
    return labels[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText delay={getDelay(BLUR_FADE_DELAY)} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" yOffset={8} text={`${t.hero_greeting} ${DATA.name.split(" ")[0]}`} />
              <BlurFadeText className="max-w-[600px] md:text-xl" delay={getDelay(BLUR_FADE_DELAY)} text={getLocalized(DATA.description, locale)} />
            </div>
            <BlurFade delay={getDelay(BLUR_FADE_DELAY)}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={getDelay(BLUR_FADE_DELAY * 3)}>
          <h2 className="text-xl font-bold">{t.about}</h2>
        </BlurFade>
        <BlurFade delay={getDelay(BLUR_FADE_DELAY * 4)}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">{getLocalized(DATA.summary, locale)}</Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={getDelay(BLUR_FADE_DELAY * 5)}>
            <h2 className="text-xl font-bold">{t.work_experience}</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={`work-${id}`} delay={getDelay(BLUR_FADE_DELAY * 6 + id * 0.05)}>
              <ResumeCard key={`work-${id}`} logoUrl={work.logoUrl} altText={getLocalized(work.company, locale)} title={getLocalized(work.company, locale)} subtitle={getLocalized(work.title, locale)} href={work.href} badges={work.badges} period={`${getLocalized(work.start, locale)} - ${getLocalized(work.end, locale)}`} description={getLocalized(work.description, locale)} />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={getDelay(BLUR_FADE_DELAY * 7)}>
            <h2 className="text-xl font-bold">{t.education}</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={`education-${id}`} delay={getDelay(BLUR_FADE_DELAY * 8 + id * 0.05)}>
              <ResumeCard key={`education-${id}`} href={education.href} logoUrl={education.logoUrl} altText={getLocalized(education.school, locale)} title={getLocalized(education.school, locale)} subtitle={getLocalized(education.degree, locale)} period={`${getLocalized(education.start, locale)} - ${getLocalized(education.end, locale)}`} />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={getDelay(BLUR_FADE_DELAY * 9)}>
            <h2 className="text-xl font-bold">{t.skills}</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
              <BlurFade key={category} delay={getDelay(BLUR_FADE_DELAY * 10 + categoryIndex * 0.05)}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="font-semibold text-sm min-w-[120px] text-muted-foreground">{getSkillCategoryLabel(category)}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Link key={skill.name} href={skill.docUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-sm hover:bg-secondary/80 transition-colors">
                        {skill.iconUrl && <Image src={skill.iconUrl} alt={skill.name} width={16} height={16} className="size-4" />}
                        <span>{skill.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={getDelay(BLUR_FADE_DELAY * 11)}>
            <h2 className="text-xl font-bold">{t.certifications}</h2>
          </BlurFade>
          {DATA.certifications.map((cert, id) => (
            <BlurFade key={cert.name} delay={getDelay(BLUR_FADE_DELAY * 12 + id * 0.05)}>
              <div className="flex items-center gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                {cert.image && (
                  <div className="flex-shrink-0">
                    <Image src={cert.image} alt={cert.name} width={64} height={64} className="size-16 object-contain" />
                  </div>
                )}
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm sm:text-base">
                      {cert.url ? (
                        <Link href={cert.url} target="_blank" className="hover:underline">
                          {cert.name}
                        </Link>
                      ) : (
                        cert.name
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground whitespace-nowrap">{getLocalized(cert.date, locale)}</div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="languages">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={getDelay(BLUR_FADE_DELAY * 13)}>
            <h2 className="text-xl font-bold">{t.spoken_languages}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.spokenLanguages.map((lang, id) => (
              <BlurFade key={`lang-${id}`} delay={getDelay(BLUR_FADE_DELAY * 14 + id * 0.05)}>
                <div className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-sm">
                  {lang.flagUrl && <Image src={lang.flagUrl} alt={getLocalized(lang.name, locale)} width={20} height={15} className="w-5 h-auto rounded-sm" />}
                  <span className="font-medium">{getLocalized(lang.name, locale)}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{getLocalized(lang.level, locale)}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {DATA.projects.length > 0 && (
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={getDelay(BLUR_FADE_DELAY * 15)}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">{t.my_projects}</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.check_out_work}</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{t.projects_description}</p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade key={`project-${id}`} delay={getDelay(BLUR_FADE_DELAY * 16 + id * 0.05)}>
                  <ProjectCard href={project.href} key={`project-${id}`} title={getLocalized(project.title, locale)} description={getLocalized(project.description, locale)} dates={getLocalized(project.dates, locale)} tags={project.technologies} image={project.image} video={project.video} links={project.links} />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}
      {DATA.hackathons.length > 0 && (
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={getDelay(BLUR_FADE_DELAY * 17)}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">{t.hackathons}</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.i_like_building}</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{t.hackathons_description.replace("{count}", String(DATA.hackathons.length))}</p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={getDelay(BLUR_FADE_DELAY * 18)}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade key={`hackathon-${id}`} delay={getDelay(BLUR_FADE_DELAY * 19 + id * 0.05)}>
                    <HackathonCard title={getLocalized(project.title, locale)} description={getLocalized(project.description, locale)} location={getLocalized(project.location, locale)} dates={getLocalized(project.dates, locale)} image={project.image} links={project.links} />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      )}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={getDelay(BLUR_FADE_DELAY * 20)}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">{t.contact}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.get_in_touch}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.contact_description}{" "}
                <Link href={DATA.contact.social.LinkedIn.url} className="text-blue-500 hover:underline">
                  LinkedIn
                </Link>{" "}
                {t.or_send_email}{" "}
                <Link href={`mailto:${DATA.contact.email}`} className="text-blue-500 hover:underline">
                  {t.email}
                </Link>
                . {t.always_open}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
