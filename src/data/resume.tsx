import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Adam Naoui-Busson",
  initials: "ANB",
  url: "https://www.linkedin.com/in/adam-naoui/",
  location: "Montreal (QC), Canada",
  locationLink: "https://www.google.com/maps/place/montreal",
  description: "Software Engineer with full-stack expertise in modern web technologies and cloud platforms.",
  summary: "I am a Software Engineer with a Computer Engineering from Polytechnique School of Montreal. \n I have experience building and optimizing full-stack applications using modern frameworks like Angular, React, and Spring Boot, with a strong focus on cloud platforms (Azure, AWS) and CI/CD practices. I thrive in fast-paced environments where I can deliver impactful solutions and continuously improve system performance.",
  avatarUrl: "/me.png",
  skills: {
    languages: [
      { name: "TypeScript", iconUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", docUrl: "https://www.typescriptlang.org/docs/" },
      { name: "JavaScript", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png", docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", docUrl: "https://docs.python.org/3/" },
      { name: "Java", iconUrl: "https://static.vecteezy.com/system/resources/thumbnails/048/332/150/small_2x/java-programming-language-java-logo-free-png.png", docUrl: "https://docs.oracle.com/en/java/" },
    ],
    frontend: [
      { name: "React", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", docUrl: "https://react.dev/" },
      { name: "Expo", iconUrl: "https://cdn.creazilla.com/icons/3243981/expo-icon-lg.png", docUrl: "https://docs.expo.dev/" },
      { name: "Angular", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1024px-Angular_gradient_logo.png", docUrl: "https://angular.dev/" },
      { name: "Next.js", iconUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg", docUrl: "https://nextjs.org/docs" },
    ],
    backend: [
      { name: "Node.js", iconUrl: "https://plugins.jetbrains.com/files/6098/899654/icon/default.png", docUrl: "https://nodejs.org/docs" },
      { name: "Flask", iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s", docUrl: "https://flask.palletsprojects.com/" },
      { name: "Apollo Server", iconUrl: "https://w7.pngwing.com/pngs/238/408/png-transparent-apollo-graphql-compact-hd-logo.png", docUrl: "https://www.apollographql.com/docs/apollo-server/" },
      { name: "Spring Boot", iconUrl: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/spring-boot-logo-icon-hd.png", docUrl: "https://spring.io/projects/spring-boot" },
    ],
    apis: [
      { name: "GraphQL", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png", docUrl: "https://graphql.org/learn/" },
      { name: "REST", iconUrl: "https://freepngimg.com/download/icon/web/7955-rest-api.png", docUrl: "https://restfulapi.net/" },
    ],
    databases: [
      { name: "PostgreSQL", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png", docUrl: "https://www.postgresql.org/docs/" },
      { name: "MongoDB", iconUrl: "https://www.golden-team.org/static/services/mongodb.webp", docUrl: "https://www.mongodb.com/docs/" },
    ],
    devops: [
      { name: "Docker", iconUrl: "https://cdn.worldvectorlogo.com/logos/docker-4.svg", docUrl: "https://docs.docker.com/" },
      { name: "Kubernetes", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1055px-Kubernetes_logo_without_workmark.svg.png", docUrl: "https://kubernetes.io/docs/" },
      { name: "Git", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png", docUrl: "https://git-scm.com/doc" },
      { name: "Jest", iconUrl: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png", docUrl: "https://jestjs.io/docs/getting-started" },
      { name: "Cypress", iconUrl: "https://cdn.worldvectorlogo.com/logos/cypress-1.svg", docUrl: "https://docs.cypress.io/" },
      { name: "Cucumber", iconUrl: "https://pic.vsixhub.com/84/18/laurence79.cucumber-js-test-explorer-logo.webp", docUrl: "https://cucumber.io/docs/cucumber/" },
    ],
    cloud: [
      { name: "AWS", iconUrl: "https://us-east-2.signin.aws.amazon.com/v2/assets/_next/static/media/aws-logo@2x.7c50e6f9.png", docUrl: "https://docs.aws.amazon.com/" },
      { name: "Microsoft Azure", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png", docUrl: "https://learn.microsoft.com/en-us/azure/" },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adam.naoui.busson@gmail.com",
    tel: "+1 514 591 2506",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/", // TODO: Add your GitHub URL
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adam-naoui/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:adam.naoui.busson@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Morgan Stanley",
      href: "https://www.morganstanley.com/",
      badges: [],
      location: "Montreal, QC",
      title: "Software Engineer II",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag118ifLpCEx2fNF5xRNCPOP7ACQIOmk9UQ&s",
      start: "Aug 2023",
      end: "Present",
      description: "Migrated a C# application to Angular 19, improving response time by 40% for ~100 internal users. Optimized REST APIs with Spring Boot, reducing latency from 500ms to 150ms. Deployed every 2 weeks via CI/CD on Azure with 99.9% availability, using TDD to achieve 100% code coverage on new features.",
    },
    {
      company: "Marché Epipresto",
      badges: [],
      href: "https://www.onetrip.io/",
      location: "Montreal, QC",
      title: "Full-Stack Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA15YqZM4wqqaUUXiCSoCEpCxuTySS53lDvw&s",
      start: "Sep 2022",
      end: "Dec 2022",
      description: "Built a mobile e-commerce platform with Expo (React Native) featuring 500+ products in 4 months. Migrated REST API to Apollo GraphQL, reducing server requests by 20% and improving request speed by 40%. Integrated Stripe payments for 100+ active users.",
    },
    {
      company: "National Bank of Canada",
      href: "https://www.nbc.ca/",
      badges: [],
      location: "Montreal, QC",
      title: "Back-End Developer Intern",
      logoUrl: "https://www.bnc.ca/content/dam/global/logo/bnc-logo.png",
      start: "May 2022",
      end: "Sep 2022",
      description: "Developed and optimized 10+ REST APIs with Spring Boot, used by 50+ financial analysts. Automated BDD testing with Cucumber, achieving 100% coverage of critical branches.",
    },
    {
      company: "Thales Canada",
      href: "https://www.thalesgroup.com/",
      badges: [],
      location: "Montreal, QC",
      title: "Tools Developer Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQEqo6pG3uct-Q/company-logo_200_200/company-logo_200_200/0/1630610177498/thalesesecurity_logo?e=2147483647&v=beta&t=uJyY6IbKpMZvNqN1MloB3nVJe_A-lukiv_1aSsbwBGo",
      start: "Sep 2021",
      end: "Dec 2021",
      description: "Automated 80% of QA tasks using MATLAB and Simulink, cutting test time from 4 hours to 30 minutes. Built an in-house electronic simulation tool that improved calculation accuracy by 20%.",
    },
    {
      company: "SENTIOM inc.",
      href: "https://sentiom.com/",
      badges: [],
      location: "Montreal, QC",
      title: "IoT Developer Intern",
      logoUrl: "https://www.sentiom.com/hs-fs/hubfs/Logos%20Sentiom%20(SANS%20bordure%20-%20AVEC%20fond)%20PNG/Logo%20Sentiom%20HORIZONTAL%20-%20COULEUR.png?width=800&height=800&name=Logo%20Sentiom%20HORIZONTAL%20-%20COULEUR.png",
      start: "May 2021",
      end: "Aug 2021",
      description: "Set up an MQTT bridge for 20 IoT devices to reduce communication latency. Automated messaging configurations via UNIX scripts and sent events to Azure IoT Hub via Python.",
    },
  ],
  education: [
    {
      school: "École Polytechnique de Montréal",
      href: "https://www.polymtl.ca/",
      degree: "Bachelor of Computer Engineering (B.Eng.)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQu5sDEYjbsszAQZXcnuBXYdjnFiOmr3dww&s",
      start: "Sep 2018",
      end: "May 2023",
    },
  ],
  certifications: [
    {
      name: "Graph Developer - Associate",
      issuer: "Apollo GraphQL",
      date: "Jan 2024",
      url: "https://www.apollographql.com/tutorials/certifications/308df5cd-c118-463f-9024-d9ba27e7c5ea",
      image: "https://res.cloudinary.com/apollographql/image/upload/v1632844693/badge_sfsiin.svg",
    },
    {
      name: "Graph Developer - Professional",
      issuer: "Apollo GraphQL",
      date: "Jan 2024",
      url: "https://www.apollographql.com/tutorials/certifications/4dd19dad-1454-4bf8-a8df-affb051c127c",
      image: "https://res.cloudinary.com/apollographql/image/upload/v1654200365/odyssey/certifications/graph_professional_badge.svg",
    },
  ],
  languages: [
    { name: "French", level: "Native", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png" },
    { name: "English", level: "Fluent", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1024px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" },
  ],
  projects: [
    {
      title: "My Portfolio",
      description: "My portfolio website built with Next.js and Tailwind CSS.",
      image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      href: "https://www.adamnaoui.com",
      dates: "2023",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      links: [
        {
          icon: <Icons.github />,
          type: "GitHub",
          href: "https://github.com/adamnaoui/portfolio",
        },
      ],
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "My Portfolio",
      description: "My portfolio website built with Next.js and Tailwind CSS.",
      image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      href: "https://www.adamnaoui.com",
      dates: "2023",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      links: [
        {
          icon: <Icons.github />,
          type: "GitHub",
          href: "https://github.com/adamnaoui/portfolio",
        },
      ],
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
  hackathons: [] as any[],
};
