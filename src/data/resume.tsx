import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Adam Naoui-Busson",
  initials: "ANB",
  url: "https://www.linkedin.com/in/adam-naoui/",
  location: {
    en: "Montreal (QC), Canada",
    fr: "Montréal (QC), Canada",
  },
  locationLink: "https://www.google.com/maps/place/montreal",
  description: {
    en: "I build payment systems at Morgan Stanley and run two sports products in Montreal, Call Next and Next Leagz.",
    fr: "Je construis des systèmes de paiement chez Morgan Stanley et je dirige deux produits sportifs à Montréal, Call Next et Next Leagz.",
  },
  roleLine: {
    en: "Software Engineer II at Morgan Stanley. Founder of Call Next and Next Leagz.",
    fr: "Ingénieur Logiciel II chez Morgan Stanley. Fondateur de Call Next et Next Leagz.",
  },
  summary: {
    en: "I am a software engineer from Polytechnique Montreal. At Morgan Stanley I own screens on an internal payments and trades platform, from an Angular front end down to Spring Boot APIs and an Azure and Kubernetes pipeline.\nOutside of that I found and run Call Next and Next Leagz: a pickup-sports app and a league-management platform that share one ecosystem across Montreal.",
    fr: "Je suis ingénieur logiciel, diplômé de Polytechnique Montréal. Chez Morgan Stanley, je suis responsable d'écrans sur une plateforme interne de paiements et de transactions, du front-end Angular jusqu'aux APIs Spring Boot et à un pipeline Azure et Kubernetes.\nEn parallèle, je fonde et dirige Call Next et Next Leagz : une application de sport libre et une plateforme de gestion de ligues qui partagent un même écosystème à travers Montréal.",
  },
  avatarUrl: "/me.png",
  skills: {
    languages: [
      { name: "TypeScript", iconUrl: "/assets/skills/typescript.svg", docUrl: "https://www.typescriptlang.org/docs/" },
      { name: "JavaScript", iconUrl: "/assets/skills/javascript.svg", docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", iconUrl: "/assets/skills/python.svg", docUrl: "https://docs.python.org/3/" },
      { name: "Java", iconUrl: "/assets/skills/java.svg", docUrl: "https://docs.oracle.com/en/java/" },
    ],
    frontend: [
      { name: "React", iconUrl: "/assets/skills/react.svg", docUrl: "https://react.dev/" },
      { name: "Expo", iconUrl: "/assets/skills/expo.svg", docUrl: "https://docs.expo.dev/" },
      { name: "Angular", iconUrl: "/assets/skills/angular.svg", docUrl: "https://angular.dev/" },
      { name: "Next.js", iconUrl: "/assets/skills/nextjs.svg", docUrl: "https://nextjs.org/docs" },
    ],
    backend: [
      { name: "Node.js", iconUrl: "/assets/skills/nodejs.svg", docUrl: "https://nodejs.org/docs" },
      { name: "Flask", iconUrl: "/assets/skills/flask.svg", docUrl: "https://flask.palletsprojects.com/" },
      { name: "Apollo Server", iconUrl: "/assets/skills/apollo.svg", docUrl: "https://www.apollographql.com/docs/apollo-server/" },
      { name: "Spring Boot", iconUrl: "/assets/skills/spring.svg", docUrl: "https://spring.io/projects/spring-boot" },
    ],
    apis: [
      { name: "GraphQL", iconUrl: "/assets/skills/graphql.svg", docUrl: "https://graphql.org/learn/" },
      { name: "REST", iconUrl: "", docUrl: "https://restfulapi.net/" },
    ],
    databases: [
      { name: "PostgreSQL", iconUrl: "/assets/skills/postgresql.svg", docUrl: "https://www.postgresql.org/docs/" },
      { name: "MongoDB", iconUrl: "/assets/skills/mongodb.svg", docUrl: "https://www.mongodb.com/docs/" },
    ],
    devops: [
      { name: "Docker", iconUrl: "/assets/skills/docker.svg", docUrl: "https://docs.docker.com/" },
      { name: "Kubernetes", iconUrl: "/assets/skills/kubernetes.svg", docUrl: "https://kubernetes.io/docs/" },
      { name: "Git", iconUrl: "/assets/skills/git.svg", docUrl: "https://git-scm.com/doc" },
      { name: "Jest", iconUrl: "/assets/skills/jest.svg", docUrl: "https://jestjs.io/docs/getting-started" },
      { name: "Cypress", iconUrl: "/assets/skills/cypress.svg", docUrl: "https://docs.cypress.io/" },
      { name: "Cucumber", iconUrl: "/assets/skills/cucumber.svg", docUrl: "https://cucumber.io/docs/cucumber/" },
    ],
    cloud: [
      { name: "AWS", iconUrl: "/assets/skills/aws.svg", docUrl: "https://docs.aws.amazon.com/" },
      { name: "Microsoft Azure", iconUrl: "/assets/skills/azure.svg", docUrl: "https://learn.microsoft.com/en-us/azure/" },
    ],
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "adam.naoui.busson@gmail.com",
    tel: "+1 514 591 2506",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
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

  ventures: [
    {
      name: "Call Next",
      role: { en: "Founder & CEO", fr: "Fondateur et PDG" },
      href: "https://call-next.com",
      appStoreUrl: "https://apps.apple.com/us/app/call-next/id6744909379",
      logoUrl: "/assets/ventures/call-next.png",
      shot: "/assets/ventures/cn-explore.png",
      shotPortrait: true,
      shotAlt: {
        en: "Call Next live map of pickup games across Montreal",
        fr: "Carte en temps réel des parties libres à Montréal dans Call Next",
      },
      period: { en: "2024", fr: "2024" },
      tagline: {
        en: "Find your next game.",
        fr: "Trouve ta prochaine partie.",
      },
      description: {
        en: "A pickup app for basketball, soccer and volleyball. One live map of 100+ Montreal courts shows who is playing right now, so you can join a run tonight and keep a record of every game, stat and rating. Live on the App Store.",
        fr: "Une application de sport libre pour le basketball, le soccer et le volleyball. Une carte en temps réel de plus de 100 terrains montréalais montre qui joue maintenant, pour rejoindre une partie ce soir et garder une trace de chaque match, statistique et cote. Disponible sur l'App Store.",
      },
      technologies: ["React Native", "Expo", "Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      name: "Next Leagz",
      role: { en: "Founder & CEO", fr: "Fondateur et PDG" },
      href: "https://next-leagz.com",
      appStoreUrl: "",
      logoUrl: "/assets/ventures/next-leagz.png",
      shot: "/assets/ventures/nl-scoreboard.png",
      shotPortrait: false,
      shotAlt: {
        en: "Next Leagz live scoreboard with play-by-play",
        fr: "Tableau de score en direct de Next Leagz avec jeu par jeu",
      },
      period: { en: "2025", fr: "2025" },
      tagline: {
        en: "Run your league like the big leagues.",
        fr: "Gère ta ligue comme les grandes ligues.",
      },
      description: {
        en: "League management for owners: scheduling, live scorekeeping, real-time stats and player registration in one platform. It plugs into the Call Next ecosystem, so players get league schedules, standings and stats in the app they already use.",
        fr: "Gestion de ligue pour les propriétaires : horaires, pointage en direct, statistiques en temps réel et inscription des joueurs sur une seule plateforme. Elle se branche à l'écosystème Call Next, pour que les joueurs retrouvent horaires, classements et statistiques dans l'application qu'ils utilisent déjà.",
      },
      technologies: ["React Native", "Expo", "TypeScript", "Node.js"],
    },
  ] as Venture[],

  work: [
    {
      company: { en: "Morgan Stanley", fr: "Morgan Stanley" },
      href: "https://www.morganstanley.com/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "Software Engineer II", fr: "Ingénieur Logiciel II" },
      logoUrl: "/assets/logos/morgan-stanley.svg",
      start: { en: "Aug 2023", fr: "Août 2023" },
      end: { en: "Present", fr: "Présent" },
      description: {
        en: "Contribute to an internal payments and trades dashboard used daily by traders to monitor and handle payments. Migrated a legacy C# application to an Angular 19 front end, improving average response time by 40% for ~100 internal users. Refactored and optimized Spring Boot REST APIs and database queries, reducing average latency from 500 ms to 150 ms. Own end-to-end delivery of new screens (from implementation to production), while collaborating within a cross-functional squad. Help maintain a CI/CD pipeline on Azure + Kubernetes, enabling bi-weekly releases with high availability for business users. Apply a TDD approach on new features, achieving very high test coverage on critical payment workflows.",
        fr: "Contribution à un tableau de bord interne de paiements et transactions utilisé quotidiennement par les traders pour surveiller et gérer les paiements. Migration d'une application legacy C# vers un front-end Angular 19, améliorant le temps de réponse moyen de 40% pour ~100 utilisateurs internes. Refactorisation et optimisation des APIs REST Spring Boot et des requêtes de base de données, réduisant la latence moyenne de 500 ms à 150 ms. Responsable de la livraison bout-en-bout de nouveaux écrans (de l'implémentation à la production), tout en collaborant au sein d'une équipe cross-fonctionnelle. Maintenance d'un pipeline CI/CD sur Azure + Kubernetes, permettant des releases bi-hebdomadaires avec haute disponibilité. Application d'une approche TDD sur les nouvelles fonctionnalités, atteignant une couverture de tests très élevée sur les workflows de paiement critiques.",
      },
    },
    {
      company: { en: "Marché Epipresto", fr: "Marché Epipresto" },
      badges: [],
      href: "https://www.onetrip.io/",
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "Full-Stack Developer", fr: "Développeur Full-Stack" },
      logoUrl: "/assets/logos/epipresto.png",
      start: { en: "Sep 2022", fr: "Sep 2022" },
      end: { en: "Dec 2022", fr: "Déc 2022" },
      description: {
        en: "Developed a mobile e-commerce app with Expo (React Native) for local grocery, meat, and vegetable stores, publishing 500+ products in 4 months. Worked across the full stack in a team of 5 (mobile app, backend, and integrations), taking ownership of both front-end and back-end features. Migrated the backend from REST to Apollo GraphQL, reducing server round-trips by 20% and improving average request speed by 40%. Integrated Stripe for secure payments and user flows, supporting 100+ active users on the platform.",
        fr: "Développement d'une application mobile e-commerce avec Expo (React Native) pour des épiceries, boucheries et marchés de légumes locaux, publiant 500+ produits en 4 mois. Travail sur l'ensemble du stack dans une équipe de 5 (application mobile, backend et intégrations), prenant la responsabilité des fonctionnalités front-end et back-end. Migration du backend de REST vers Apollo GraphQL, réduisant les allers-retours serveur de 20% et améliorant la vitesse moyenne des requêtes de 40%. Intégration de Stripe pour les paiements sécurisés et les flux utilisateurs, supportant 100+ utilisateurs actifs sur la plateforme.",
      },
    },
    {
      company: { en: "National Bank of Canada", fr: "Banque Nationale du Canada" },
      href: "https://www.nbc.ca/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "Back-End Developer Intern", fr: "Stagiaire Développeur Back-End" },
      logoUrl: "/assets/logos/national-bank.svg",
      start: { en: "May 2022", fr: "Mai 2022" },
      end: { en: "Sep 2022", fr: "Sep 2022" },
      description: {
        en: "Designed and optimized 10+ Spring Boot REST APIs for internal payments management use cases, used by 50+ financial analysts and internal tools. Implemented BDD test suites with Cucumber, achieving 100% coverage on critical business scenarios and improving release confidence. Delivered backlog tasks independently, following internal coding standards and code review practices in a regulated environment.",
        fr: "Conception et optimisation de 10+ APIs REST Spring Boot pour des cas d'utilisation de gestion de paiements internes, utilisées par 50+ analystes financiers et outils internes. Implémentation de suites de tests BDD avec Cucumber, atteignant 100% de couverture sur les scénarios métier critiques et améliorant la confiance dans les releases. Livraison de tâches du backlog de manière autonome, suivant les standards de codage internes et les pratiques de revue de code dans un environnement réglementé.",
      },
    },
    {
      company: { en: "Thales Canada", fr: "Thales Canada" },
      href: "https://www.thalesgroup.com/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "Tools Developer Intern", fr: "Stagiaire Développeur Outils" },
      logoUrl: "/assets/logos/thales.svg",
      start: { en: "Sep 2021", fr: "Sep 2021" },
      end: { en: "Dec 2021", fr: "Déc 2021" },
      description: {
        en: "Automated about 80% of recurring QA tasks for electronic circuits modeled in MATLAB/Simulink, reducing test execution time from 4 hours to ~30 minutes. Developed an internal electronic simulation tool that improved calculation accuracy by around 20%, increasing trust in validation results for engineers.",
        fr: "Automatisation d'environ 80% des tâches QA récurrentes pour les circuits électroniques modélisés dans MATLAB/Simulink, réduisant le temps d'exécution des tests de 4 heures à ~30 minutes. Développement d'un outil de simulation électronique interne qui a amélioré la précision des calculs d'environ 20%, augmentant la confiance dans les résultats de validation pour les ingénieurs.",
      },
    },
    {
      company: { en: "SENTIOM inc.", fr: "SENTIOM inc." },
      href: "https://sentiom.com/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "IoT Developer Intern", fr: "Stagiaire Développeur IoT" },
      logoUrl: "/assets/logos/sentiom.png",
      start: { en: "May 2021", fr: "Mai 2021" },
      end: { en: "Aug 2021", fr: "Août 2021" },
      description: {
        en: "Worked with Raspberry Pi-based devices and sensors to support SENTIOM's goal of reducing water damage in buildings through early detection. Implemented an MQTT bridge for ~20 IoT devices, reducing message latency and improving the reliability of real-time sensor data. Automated messaging configuration using Bash/UNIX scripts, simplifying deployments and reducing manual setup errors. Built Python scripts to send events to Azure IoT Hub, enabling centralized monitoring and downstream analytics on incoming sensor data.",
        fr: "Travail avec des appareils et capteurs basés sur Raspberry Pi pour soutenir l'objectif de SENTIOM de réduire les dégâts des eaux dans les bâtiments grâce à une détection précoce. Implémentation d'un pont MQTT pour ~20 appareils IoT, réduisant la latence des messages et améliorant la fiabilité des données de capteurs en temps réel. Automatisation de la configuration de messagerie avec des scripts Bash/UNIX, simplifiant les déploiements et réduisant les erreurs de configuration manuelle. Création de scripts Python pour envoyer des événements à Azure IoT Hub, permettant une surveillance centralisée et des analyses en aval sur les données de capteurs entrantes.",
      },
    },
  ],
  education: [
    {
      school: { en: "Polytechnique Montréal", fr: "Polytechnique Montréal" },
      href: "https://www.polymtl.ca/",
      degree: {
        en: "Bachelor of Computer Engineering (B.Eng.)",
        fr: "Baccalauréat en Génie Informatique (B.Ing.)",
      },
      logoUrl: "/assets/logos/polytechnique.png",
      start: { en: "Sep 2018", fr: "Sep 2018" },
      end: { en: "May 2023", fr: "Mai 2023" },
    },
  ],
  certifications: [
    {
      name: "Graph Developer - Associate",
      issuer: "Apollo GraphQL",
      date: { en: "Jan 2024", fr: "Jan 2024" },
      url: "https://www.apollographql.com/tutorials/certifications/308df5cd-c118-463f-9024-d9ba27e7c5ea",
      image: "/assets/certs/apollo-associate.svg",
    },
    {
      name: "Graph Developer - Professional",
      issuer: "Apollo GraphQL",
      date: { en: "Jan 2024", fr: "Jan 2024" },
      url: "https://www.apollographql.com/tutorials/certifications/4dd19dad-1454-4bf8-a8df-affb051c127c",
      image: "/assets/certs/apollo-professional.svg",
    },
  ],
  spokenLanguages: [
    {
      name: { en: "French", fr: "Français" },
      level: { en: "Native", fr: "Natif" },
      flagUrl: "/assets/flags/fr.svg",
    },
    {
      name: { en: "English", fr: "Anglais" },
      level: { en: "Fluent", fr: "Courant" },
      flagUrl: "/assets/flags/gb.svg",
    },
  ],
  projects: [] as any[],
  hackathons: [] as any[],
};

// Helper type for bilingual fields
export type BilingualField = { en: string; fr: string };

export type Venture = {
  name: string;
  role: BilingualField;
  href: string;
  appStoreUrl: string;
  logoUrl: string;
  shot: string;
  shotPortrait: boolean;
  shotAlt: BilingualField;
  period: BilingualField;
  tagline: BilingualField;
  description: BilingualField;
  technologies: string[];
};

// Helper function to get localized value
export const getLocalized = (
  field: BilingualField | string,
  locale: "en" | "fr"
): string => {
  if (typeof field === "string") return field;
  return field[locale] || field.en;
};
