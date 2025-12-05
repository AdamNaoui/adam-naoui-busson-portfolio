import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText delay={BLUR_FADE_DELAY} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" yOffset={8} text={`Hi, I'm ${DATA.name.split(" ")[0]}`} />
              <BlurFadeText className="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY} text={DATA.description} />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">{DATA.summary}</Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard key={work.company} logoUrl={work.logoUrl} altText={work.company} title={work.company} subtitle={work.title} href={work.href} badges={work.badges} period={`${work.start} - ${work.end ?? "Present"}`} description={work.description} />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard key={education.school} href={education.href} logoUrl={education.logoUrl} altText={education.school} title={education.school} subtitle={education.degree} period={`${education.start} - ${education.end}`} />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
              <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <h3 className="font-semibold text-sm min-w-[120px] text-muted-foreground">{category === "apis" ? "APIs" : category === "devops" ? "DevOps & Testing" : category.charAt(0).toUpperCase() + category.slice(1)}</h3>
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
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Certifications</h2>
          </BlurFade>
          {DATA.certifications.map((cert, id) => (
            <BlurFade key={cert.name} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
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
                  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground whitespace-nowrap">{cert.date}</div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="languages">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Languages</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.languages.map((lang, id) => (
              <BlurFade key={lang.name} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                <div className="flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-sm">
                  {lang.flagUrl && <Image src={lang.flagUrl} alt={lang.name} width={20} height={15} className="w-5 h-auto rounded-sm" />}
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {DATA.projects.length > 0 && (
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
                  <ProjectCard href={project.href} key={project.title} title={project.title} description={project.description} dates={project.dates} tags={project.technologies} image={project.image} video={project.video} links={project.links} />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}
      {DATA.hackathons.length > 0 && (
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Hackathons</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">During my time in university, I attended {DATA.hackathons.length}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.</p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 19 + id * 0.05}>
                    <HackathonCard title={project.title} description={project.description} location={project.location} dates={project.dates} image={project.image} links={project.links} />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      )}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to connect? Feel free to reach out via{" "}
                <Link href={DATA.contact.social.LinkedIn.url} className="text-blue-500 hover:underline">
                  LinkedIn
                </Link>{" "}
                or send me an{" "}
                <Link href={`mailto:${DATA.contact.email}`} className="text-blue-500 hover:underline">
                  email
                </Link>
                . I&apos;m always open to discussing new opportunities.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
