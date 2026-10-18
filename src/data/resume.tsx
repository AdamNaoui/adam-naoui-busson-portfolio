import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Adam Naoui-Busson",
  initials: "ANB",
  url: "https://www.adam-naoui-busson.com",
  location: {
    en: "Montreal (QC), Canada",
    fr: "Montréal (QC), Canada",
  },
  locationLink: "https://www.google.com/maps/place/montreal",
  description: {
    en: "Mobile and software engineer. I ship React Native and Expo apps end to end, and I run two live sports products in Montreal, Call Next and Next Leagz.",
    fr: "Ingénieur mobile et logiciel. Je livre des applications React Native et Expo de bout en bout, et je dirige deux produits sportifs en production à Montréal, Call Next et Next Leagz.",
  },
  roleLine: {
    en: "Mobile & Software Engineer. Founder of Call Next and Next Leagz.",
    fr: "Ingénieur mobile et logiciel. Fondateur de Call Next et Next Leagz.",
  },
  summary: {
    en: "I am a software engineer from Polytechnique Montreal with hands-on React Native and Expo experience shipping production apps end to end: mobile architecture, a fully TypeScript codebase, EAS builds, over-the-air updates and the full App Store and Google Play review cycle.\nMy full-stack background comes from delivering fintech-grade payment systems at Morgan Stanley and National Bank of Canada. Today I build and operate Call Next and Next Leagz, two live Expo apps on a Supabase backend, one already in production with real users.",
    fr: "Je suis ingénieur logiciel diplômé de Polytechnique Montréal, avec une expérience concrète en React Native et Expo pour livrer des applications en production de bout en bout : architecture mobile, base de code entièrement en TypeScript, builds EAS, mises à jour over-the-air et tout le cycle de revue App Store et Google Play.\nMon expérience full-stack vient de la livraison de systèmes de paiement de niveau fintech chez Morgan Stanley et à la Banque Nationale du Canada. Aujourd'hui je construis et opère Call Next et Next Leagz, deux applications Expo en production sur un backend Supabase, dont une déjà utilisée par de vrais utilisateurs.",
  },
  avatarUrl: "/me.png",
  skills: {
    mobile: [
      { name: "React Native", docUrl: "https://reactnative.dev/" },
      { name: "Expo", docUrl: "https://docs.expo.dev/" },
      { name: "EAS Build / Submit / Update", docUrl: "https://docs.expo.dev/eas/" },
      { name: "OTA updates", docUrl: "https://docs.expo.dev/eas-update/introduction/" },
      { name: "App Store & Google Play", docUrl: "https://docs.expo.dev/submit/introduction/" },
      { name: "TestFlight", docUrl: "https://developer.apple.com/testflight/" },
    ],
    languages: [
      { name: "TypeScript", docUrl: "https://www.typescriptlang.org/docs/" },
      { name: "JavaScript", docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", docUrl: "https://docs.python.org/3/" },
      { name: "Java", docUrl: "https://docs.oracle.com/en/java/" },
    ],
    frontend: [
      { name: "React", docUrl: "https://react.dev/" },
      { name: "Next.js", docUrl: "https://nextjs.org/docs" },
      { name: "Angular", docUrl: "https://angular.dev/" },
    ],
    backend: [
      { name: "Node.js", docUrl: "https://nodejs.org/docs" },
      { name: "Express", docUrl: "https://expressjs.com/" },
      { name: "Supabase", docUrl: "https://supabase.com/docs" },
      { name: "PostgreSQL", docUrl: "https://www.postgresql.org/docs/" },
      { name: "MongoDB", docUrl: "https://www.mongodb.com/docs/" },
      { name: "Apollo GraphQL", docUrl: "https://www.apollographql.com/docs/" },
      { name: "REST", docUrl: "https://restfulapi.net/" },
    ],
    cloud: [
      { name: "AWS", docUrl: "https://docs.aws.amazon.com/" },
      { name: "Microsoft Azure", docUrl: "https://learn.microsoft.com/en-us/azure/" },
      { name: "Docker", docUrl: "https://docs.docker.com/" },
      { name: "Kubernetes", docUrl: "https://kubernetes.io/docs/" },
      { name: "CI/CD (Jenkins)", docUrl: "https://www.jenkins.io/doc/" },
      { name: "Git", docUrl: "https://git-scm.com/doc" },
    ],
    testing: [
      { name: "Jest", docUrl: "https://jestjs.io/docs/getting-started" },
      { name: "Cypress", docUrl: "https://docs.cypress.io/" },
      { name: "Cucumber", docUrl: "https://cucumber.io/docs/cucumber/" },
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
      role: { en: "Founder & Mobile Engineer", fr: "Fondateur et ingénieur mobile" },
      href: "https://call-next.com",
      appStoreUrl: "https://apps.apple.com/us/app/call-next/id6744909379",
      logoUrl: "/assets/ventures/call-next.png",
      shot: "/assets/ventures/cn-explore.png",
      shotPortrait: true,
      shotAlt: {
        en: "Call Next live map of pickup basketball games across Montreal",
        fr: "Carte en temps réel des parties de basketball libres à Montréal dans Call Next",
      },
      period: { en: "2023", fr: "2023" },
      tagline: {
        en: "Find your next game.",
        fr: "Trouve ta prochaine partie.",
      },
      description: {
        en: "A live iOS app for discovering basketball playgrounds, starting pickup sessions and tracking games in real time. Built entirely in TypeScript with React Native and Expo, on a Supabase backend with auth and row-level security. I own the full release cycle, from code signing and TestFlight to App Store review and over-the-air fixes.",
        fr: "Une application iOS en production pour découvrir les terrains de basketball, lancer des parties libres et suivre les matchs en temps réel. Construite entièrement en TypeScript avec React Native et Expo, sur un backend Supabase avec authentification et sécurité au niveau des lignes. Je gère tout le cycle de publication, du code signing et TestFlight à la revue App Store et aux correctifs over-the-air.",
      },
      technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    },
    {
      name: "Next Leagz",
      role: { en: "Founder & Mobile Engineer", fr: "Fondateur et ingénieur mobile" },
      href: "https://next-leagz.com",
      appStoreUrl: "",
      logoUrl: "/assets/ventures/next-leagz.png",
      shot: "/assets/ventures/nl-scoreboard.png",
      shotPortrait: false,
      shotAlt: {
        en: "Next Leagz live scoreboard with play-by-play",
        fr: "Tableau de score en direct de Next Leagz avec jeu par jeu",
      },
      period: { en: "2023", fr: "2023" },
      tagline: {
        en: "Run your league like the big leagues.",
        fr: "Gère ta ligue comme les grandes ligues.",
      },
      description: {
        en: "A basketball league-management platform: scheduling, live scorekeeping, real-time stats and player registration in one app. In production with real users running the University of Montreal basketball league. React Native and Expo end to end, on a Supabase backend with real-time updates and secure multi-role access.",
        fr: "Une plateforme de gestion de ligue de basketball : horaires, pointage en direct, statistiques en temps réel et inscription des joueurs dans une seule application. En production avec de vrais utilisateurs qui gèrent la ligue de basketball de l'Université de Montréal. React Native et Expo de bout en bout, sur un backend Supabase avec mises à jour en temps réel et accès multi-rôles sécurisé.",
      },
      technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    },
    {
      name: "Traveling2Gather",
      role: { en: "Founder & Engineer", fr: "Fondateur et ingénieur" },
      href: "https://traveling2gather-wheat.vercel.app/",
      appStoreUrl: "",
      logoUrl: "",
      shot: "/assets/posters/traveling2gather.jpg",
      shotPortrait: false,
      shotAlt: {
        en: "Adam and Soraya sitting on a dune at sunrise in Huacachina",
        fr: "Adam et Soraya assis sur une dune au lever du soleil à Huacachina",
      },
      period: { en: "2025", fr: "2025" },
      tagline: {
        en: "Travel to come together.",
        fr: "Voyager pour se retrouver.",
      },
      description: {
        en: "A travel journal written by four hands, Adam and Soraya. Stories from the road about the people maps forget, by country but people first. Built with Next.js and TypeScript on Supabase.",
        fr: "Un carnet de voyage écrit à quatre mains, Adam et Soraya. Des récits de la route sur les gens que les cartes oublient, par pays mais les gens d'abord. Construit avec Next.js et TypeScript sur Supabase.",
      },
      technologies: ["Next.js", "TypeScript", "Supabase"],
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
      poster: "/assets/posters/morgan-stanley.jpg",
      season: 5,
      match: 98,
      duration: { en: "2y 8m", fr: "2 a 8 m" },
      start: { en: "Aug 2023", fr: "Août 2023" },
      end: { en: "Mar 2026", fr: "Mars 2026" },
      cast: ["Angular 19", "TypeScript", "Spring Boot", "PostgreSQL", "Azure", "Kubernetes", "Jenkins"],
      genres: { en: ["Payments", "Trading", "Full-stack", "Legacy migration"], fr: ["Paiements", "Trading", "Full-stack", "Migration legacy"] },
      vibe: { en: ["Fast-paced", "Production-critical", "Test-driven"], fr: ["Rythme soutenu", "Critique en production", "Piloté par les tests"] },
      description: {
        en: "Built and shipped features for an internal payments and trades dashboard used daily by traders to monitor and handle payments. Owned end-to-end delivery of new screens from implementation to production within a cross-functional squad.",
        fr: "Développement et livraison de fonctionnalités pour un tableau de bord interne de paiements et de transactions utilisé quotidiennement par les traders. Responsable de la livraison bout-en-bout de nouveaux écrans, de l'implémentation à la production, au sein d'une équipe cross-fonctionnelle.",
      },
      episodes: [
        { title: { en: "Legacy C# to Angular 19", fr: "Du C# legacy à Angular 19" }, body: { en: "Migrated a legacy C# application to a TypeScript and Angular 19 front end, improving average response time by 40% for about 100 internal users.", fr: "Migration d'une application legacy C# vers un front-end TypeScript et Angular 19, améliorant le temps de réponse moyen de 40% pour environ 100 utilisateurs internes." }, stat: { en: "40% faster", fr: "40% plus rapide" } },
        { title: { en: "500 ms to 150 ms", fr: "De 500 ms à 150 ms" }, body: { en: "Refactored and optimized Spring Boot REST APIs and PostgreSQL queries, cutting average latency from 500 ms to 150 ms.", fr: "Refactorisation et optimisation des APIs REST Spring Boot et des requêtes PostgreSQL, réduisant la latence moyenne de 500 ms à 150 ms." }, stat: { en: "3.3× lower latency", fr: "Latence 3,3× plus faible" } },
        { title: { en: "New screens, end to end", fr: "Nouveaux écrans, de bout en bout" }, body: { en: "Owned delivery of new dashboard screens from implementation to production inside a cross-functional squad of traders, PMs and engineers.", fr: "Responsable de la livraison de nouveaux écrans du tableau de bord, de l'implémentation à la production, dans une équipe cross-fonctionnelle de traders, PMs et ingénieurs." }, stat: { en: "Ship to prod", fr: "Livré en prod" } },
        { title: { en: "CI/CD on Azure, Kubernetes and Jenkins", fr: "CI/CD sur Azure, Kubernetes et Jenkins" }, body: { en: "Maintained the release pipeline enabling frequent, high-availability deployments of a production-critical payments system.", fr: "Maintenance du pipeline de release permettant des déploiements fréquents et hautement disponibles d'un système de paiement critique." }, stat: { en: "High availability", fr: "Haute disponibilité" } },
        { title: { en: "TDD on critical payment workflows", fr: "TDD sur les workflows de paiement critiques" }, body: { en: "Applied test-driven development to reach very high coverage on the workflows that move money.", fr: "Approche TDD pour atteindre une couverture très élevée sur les workflows qui déplacent de l'argent." }, stat: { en: "Very high coverage", fr: "Couverture très élevée" } },
      ],
    },
    {
      company: { en: "Marché Epipresto", fr: "Marché Epipresto" },
      badges: [],
      href: "https://www.onetrip.io/",
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: {
        en: "Full-Stack Mobile Developer (React Native / Expo)",
        fr: "Développeur Full-Stack Mobile (React Native / Expo)",
      },
      logoUrl: "/assets/logos/epipresto.png",
      poster: "/assets/posters/epipresto.jpg",
      season: 4,
      match: 93,
      duration: { en: "4 months", fr: "4 mois" },
      start: { en: "Sep 2022", fr: "Sep 2022" },
      end: { en: "Dec 2022", fr: "Déc 2022" },
      cast: ["React Native", "Expo", "Apollo GraphQL", "Node.js", "Stripe"],
      genres: { en: ["E-commerce", "Mobile", "Full-stack"], fr: ["E-commerce", "Mobile", "Full-stack"] },
      vibe: { en: ["Startup", "Hands-on", "Customer-facing"], fr: ["Startup", "Terrain", "Face client"] },
      description: {
        en: "Developed a mobile e-commerce app with Expo (React Native) for local grocery, meat, and vegetable stores, publishing 500+ products in 4 months. Worked across the full stack in a team of 5.",
        fr: "Développement d'une application mobile e-commerce avec Expo (React Native) pour des épiceries, boucheries et marchés de légumes locaux, publiant 500+ produits en 4 mois. Travail sur l'ensemble du stack dans une équipe de 5.",
      },
      episodes: [
        { title: { en: "500+ products in 4 months", fr: "500+ produits en 4 mois" }, body: { en: "Developed a mobile e-commerce app with Expo for local grocery, meat and vegetable stores.", fr: "Développement d'une application mobile e-commerce avec Expo pour des épiceries, boucheries et marchés de légumes locaux." }, stat: { en: "500+ products", fr: "500+ produits" } },
        { title: { en: "REST to Apollo GraphQL", fr: "De REST à Apollo GraphQL" }, body: { en: "Migrated the backend from REST to Apollo GraphQL, reducing server round-trips by 20% and improving average request speed by 40%.", fr: "Migration du backend de REST vers Apollo GraphQL, réduisant les allers-retours serveur de 20% et améliorant la vitesse moyenne des requêtes de 40%." }, stat: { en: "40% faster", fr: "40% plus rapide" } },
        { title: { en: "Stripe payments", fr: "Paiements Stripe" }, body: { en: "Integrated Stripe for secure payments and user flows, supporting 100+ active users on the platform.", fr: "Intégration de Stripe pour les paiements sécurisés et les flux utilisateurs, supportant 100+ utilisateurs actifs." }, stat: { en: "100+ users", fr: "100+ utilisateurs" } },
      ],
    },
    {
      company: { en: "National Bank of Canada", fr: "Banque Nationale du Canada" },
      href: "https://www.nbc.ca/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "Back-End Developer Intern", fr: "Stagiaire Développeur Back-End" },
      logoUrl: "/assets/logos/national-bank.svg",
      poster: "/assets/posters/national-bank.jpg",
      season: 3,
      match: 95,
      duration: { en: "5 months", fr: "5 mois" },
      start: { en: "May 2022", fr: "Mai 2022" },
      end: { en: "Sep 2022", fr: "Sep 2022" },
      cast: ["Spring Boot", "Java", "Cucumber", "REST"],
      genres: { en: ["Payments", "Banking", "Back-end"], fr: ["Paiements", "Banque", "Back-end"] },
      vibe: { en: ["Regulated", "Rigorous", "Autonomous"], fr: ["Réglementé", "Rigoureux", "Autonome"] },
      description: {
        en: "Designed and optimized 10+ Spring Boot REST APIs for internal payments management use cases, used by 50+ financial analysts and internal tools.",
        fr: "Conception et optimisation de 10+ APIs REST Spring Boot pour des cas d'utilisation de gestion de paiements internes, utilisées par 50+ analystes financiers et outils internes.",
      },
      episodes: [
        { title: { en: "10+ payment APIs", fr: "10+ APIs de paiement" }, body: { en: "Designed and optimized Spring Boot REST APIs for internal payments management, used by 50+ financial analysts and internal tools.", fr: "Conception et optimisation d'APIs REST Spring Boot pour la gestion de paiements internes, utilisées par 50+ analystes financiers et outils internes." }, stat: { en: "50+ analysts", fr: "50+ analystes" } },
        { title: { en: "BDD with Cucumber", fr: "BDD avec Cucumber" }, body: { en: "Implemented BDD test suites achieving 100% coverage on critical business scenarios and improving release confidence.", fr: "Implémentation de suites de tests BDD atteignant 100% de couverture sur les scénarios métier critiques." }, stat: { en: "100% coverage", fr: "100% de couverture" } },
        { title: { en: "Backlog, delivered", fr: "Backlog livré" }, body: { en: "Delivered backlog tasks independently, following internal coding standards and code review practices in a regulated environment.", fr: "Livraison de tâches du backlog de manière autonome, selon les standards internes et les pratiques de revue de code en environnement réglementé." }, stat: { en: "Regulated env", fr: "Env. réglementé" } },
      ],
    },
    {
      company: { en: "Thales Canada", fr: "Thales Canada" },
      href: "https://www.thalesgroup.com/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "Tools Developer Intern", fr: "Stagiaire Développeur Outils" },
      logoUrl: "/assets/logos/thales.svg",
      poster: "/assets/posters/thales.jpg",
      season: 2,
      match: 88,
      duration: { en: "4 months", fr: "4 mois" },
      start: { en: "Sep 2021", fr: "Sep 2021" },
      end: { en: "Dec 2021", fr: "Déc 2021" },
      cast: ["MATLAB", "Simulink", "Python"],
      genres: { en: ["Aerospace", "QA automation", "Tooling"], fr: ["Aérospatial", "Automatisation QA", "Outillage"] },
      vibe: { en: ["Precise", "Engineering-grade"], fr: ["Précis", "Qualité ingénierie"] },
      description: {
        en: "Automated about 80% of recurring QA tasks for electronic circuits modeled in MATLAB/Simulink, reducing test execution time from 4 hours to about 30 minutes.",
        fr: "Automatisation d'environ 80% des tâches QA récurrentes pour les circuits électroniques modélisés dans MATLAB/Simulink, réduisant le temps d'exécution des tests de 4 heures à environ 30 minutes.",
      },
      episodes: [
        { title: { en: "4 hours down to 30 minutes", fr: "De 4 heures à 30 minutes" }, body: { en: "Automated about 80% of recurring QA tasks for electronic circuits modeled in MATLAB/Simulink.", fr: "Automatisation d'environ 80% des tâches QA récurrentes pour les circuits électroniques modélisés dans MATLAB/Simulink." }, stat: { en: "80% automated", fr: "80% automatisé" } },
        { title: { en: "Simulation tool", fr: "Outil de simulation" }, body: { en: "Developed an internal electronic simulation tool that improved calculation accuracy by around 20%, increasing trust in validation results.", fr: "Développement d'un outil de simulation électronique interne qui a amélioré la précision des calculs d'environ 20%." }, stat: { en: "+20% accuracy", fr: "+20% de précision" } },
      ],
    },
    {
      company: { en: "SENTIOM inc.", fr: "SENTIOM inc." },
      href: "https://sentiom.com/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "IoT Developer Intern", fr: "Stagiaire Développeur IoT" },
      logoUrl: "/assets/logos/sentiom.png",
      poster: "/assets/posters/sentiom.jpg",
      season: 1,
      match: 85,
      duration: { en: "4 months", fr: "4 mois" },
      start: { en: "May 2021", fr: "Mai 2021" },
      end: { en: "Aug 2021", fr: "Août 2021" },
      cast: ["Raspberry Pi", "MQTT", "Python", "Bash", "Azure IoT Hub"],
      genres: { en: ["IoT", "Sensors", "Cloud"], fr: ["IoT", "Capteurs", "Cloud"] },
      vibe: { en: ["Hardware meets software", "Real-time"], fr: ["Matériel et logiciel", "Temps réel"] },
      description: {
        en: "Worked with Raspberry Pi-based devices and sensors to support SENTIOM's goal of reducing water damage in buildings through early detection.",
        fr: "Travail avec des appareils et capteurs basés sur Raspberry Pi pour soutenir l'objectif de SENTIOM de réduire les dégâts des eaux dans les bâtiments grâce à une détection précoce.",
      },
      episodes: [
        { title: { en: "MQTT bridge for 20 devices", fr: "Pont MQTT pour 20 appareils" }, body: { en: "Implemented an MQTT bridge for about 20 IoT devices, reducing message latency and improving the reliability of real-time sensor data.", fr: "Implémentation d'un pont MQTT pour environ 20 appareils IoT, réduisant la latence des messages et améliorant la fiabilité des données de capteurs en temps réel." }, stat: { en: "~20 devices", fr: "~20 appareils" } },
        { title: { en: "Scripted deployments", fr: "Déploiements scriptés" }, body: { en: "Automated messaging configuration using Bash/UNIX scripts, simplifying deployments and reducing manual setup errors.", fr: "Automatisation de la configuration de messagerie avec des scripts Bash/UNIX, simplifiant les déploiements et réduisant les erreurs manuelles." }, stat: { en: "Fewer setup errors", fr: "Moins d'erreurs" } },
        { title: { en: "Events to Azure IoT Hub", fr: "Événements vers Azure IoT Hub" }, body: { en: "Built Python scripts to send events to Azure IoT Hub, enabling centralized monitoring and downstream analytics on incoming sensor data.", fr: "Création de scripts Python pour envoyer des événements à Azure IoT Hub, permettant une surveillance centralisée et des analyses en aval." }, stat: { en: "Central monitoring", fr: "Surveillance centrale" } },
      ],
    },
  ],
  education: [
    {
      school: {
        en: "École Polytechnique de Montréal",
        fr: "École Polytechnique de Montréal",
      },
      href: "https://www.polymtl.ca/",
      degree: {
        en: "Bachelor of Computer Engineering (B.Eng.)",
        fr: "Baccalauréat en Génie Informatique (B.Ing.)",
      },
      logoUrl: "/assets/logos/polytechnique.png",
      poster: "/assets/posters/polytechnique.jpg",
      start: { en: "Sep 2018", fr: "Sep 2018" },
      end: { en: "May 2023", fr: "Mai 2023" },
    },
  ],
  certifications: [
    {
      name: "Graph Developer - Professional",
      issuer: "Apollo GraphQL",
      date: { en: "Jan 2024", fr: "Jan 2024" },
      url: "https://www.apollographql.com/tutorials/certifications/4dd19dad-1454-4bf8-a8df-affb051c127c",
      image: "/assets/certs/apollo-professional.svg",
      poster: "/assets/posters/apollo.jpg",
    },
  ],
  topSkills: [
    { name: "React Native", poster: "/assets/posters/react.png" },
    { name: "Expo · EAS", poster: "/assets/posters/expo.png" },
    { name: "TypeScript", poster: "/assets/posters/typescript.png" },
    { name: "Supabase", poster: "/assets/posters/supabase.png" },
    { name: "Node.js", poster: "/assets/posters/nodejs.png" },
    { name: "PostgreSQL", poster: "/assets/posters/postgresql.png" },
    { name: "Angular", poster: "/assets/posters/angular.png" },
    { name: "AWS · Azure", poster: "/assets/posters/aws-azure.png" },
    { name: "Docker · K8s", poster: "/assets/posters/docker-k8s.png" },
    { name: "Jest · Cypress", poster: "/assets/posters/jest-cypress.png" },
  ],
  profiles: [
    {
      id: "recruiter",
      name: { en: "Recruiter", fr: "Recruteur" },
      sub: { en: "Hiring for mobile or full-stack", fr: "Recrute en mobile ou full-stack" },
      color: "#1d7ee0",
      face: "smile",
      kicker: { en: "Top pick for recruiters", fr: "Premier choix des recruteurs" },
    },
    {
      id: "client",
      name: { en: "Client", fr: "Client" },
      sub: { en: "Need an app built end to end", fr: "Besoin d'une app de A à Z" },
      color: "#e50914",
      face: "serious",
      kicker: { en: "Recommended for clients", fr: "Recommandé pour les clients" },
    },
    {
      id: "developer",
      name: { en: "Developer", fr: "Développeur" },
      sub: { en: "Here for the stack and the code", fr: "Ici pour la stack et le code" },
      color: "#46d369",
      face: "glasses",
      kicker: { en: "Because you build things too", fr: "Parce que tu construis aussi" },
    },
    {
      id: "guest",
      name: { en: "Guest", fr: "Invité" },
      sub: { en: "Just browsing", fr: "Juste de passage" },
      color: "#f5c518",
      face: "wink",
      kicker: { en: "Trending now", fr: "Tendances actuelles" },
    },
  ] as Profile[],
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

export type Profile = {
  id: "recruiter" | "client" | "developer" | "guest";
  name: BilingualField;
  sub: BilingualField;
  color: string;
  face: "smile" | "serious" | "glasses" | "wink";
  kicker: BilingualField;
};

export type Episode = {
  title: BilingualField;
  body: BilingualField;
  stat: BilingualField;
};

export type WorkItem = (typeof DATA.work)[number];

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
