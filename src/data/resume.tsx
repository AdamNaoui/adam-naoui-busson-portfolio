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
    en: "Software Engineer with full-stack expertise in modern web technologies and cloud platforms.",
    fr: "Ingénieur logiciel avec une expertise full-stack dans les technologies web modernes et les plateformes cloud.",
  },
  summary: {
    en: "I am a Software Engineer with a Computer Engineering from Polytechnique School of Montreal. \n I have experience building and optimizing full-stack applications using modern frameworks like Angular, React, and Spring Boot, with a strong focus on cloud platforms (Azure, AWS) and CI/CD practices. I thrive in fast-paced environments where I can deliver impactful solutions and continuously improve system performance.",
    fr: "Je suis un Ingénieur Logiciel diplômé en Génie Informatique de l'École Polytechnique de Montréal. \n J'ai de l'expérience dans la construction et l'optimisation d'applications full-stack utilisant des frameworks modernes comme Angular, React et Spring Boot, avec un focus sur les plateformes cloud (Azure, AWS) et les pratiques CI/CD. Je m'épanouis dans des environnements dynamiques où je peux livrer des solutions impactantes et améliorer continuellement les performances des systèmes.",
  },
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

  work: [
    {
      company: { en: "Morgan Stanley", fr: "Morgan Stanley" },
      href: "https://www.morganstanley.com/",
      badges: [],
      location: { en: "Montreal, Canada", fr: "Montréal, Canada" },
      title: { en: "Software Engineer II", fr: "Ingénieur Logiciel II" },
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag118ifLpCEx2fNF5xRNCPOP7ACQIOmk9UQ&s",
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
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA15YqZM4wqqaUUXiCSoCEpCxuTySS53lDvw&s",
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
      logoUrl: "https://www.bnc.ca/content/dam/global/logo/bnc-logo.png",
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
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQEqo6pG3uct-Q/company-logo_200_200/company-logo_200_200/0/1630610177498/thalesesecurity_logo?e=2147483647&v=beta&t=uJyY6IbKpMZvNqN1MloB3nVJe_A-lukiv_1aSsbwBGo",
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
      logoUrl: "https://www.sentiom.com/hs-fs/hubfs/Logos%20Sentiom%20(SANS%20bordure%20-%20AVEC%20fond)%20PNG/Logo%20Sentiom%20HORIZONTAL%20-%20COULEUR.png?width=800&height=800&name=Logo%20Sentiom%20HORIZONTAL%20-%20COULEUR.png",
      start: { en: "May 2021", fr: "Mai 2021" },
      end: { en: "Aug 2021", fr: "Août 2021" },
      description: {
        en: "Worked with Raspberry Pi–based devices and sensors to support SENTIOM's goal of reducing water damage in buildings through early detection. Implemented an MQTT bridge for ~20 IoT devices, reducing message latency and improving the reliability of real-time sensor data. Automated messaging configuration using Bash/UNIX scripts, simplifying deployments and reducing manual setup errors. Built Python scripts to send events to Azure IoT Hub, enabling centralized monitoring and downstream analytics on incoming sensor data.",
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
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQu5sDEYjbsszAQZXcnuBXYdjnFiOmr3dww&s",
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
      image: "https://res.cloudinary.com/apollographql/image/upload/v1632844693/badge_sfsiin.svg",
    },
    {
      name: "Graph Developer - Professional",
      issuer: "Apollo GraphQL",
      date: { en: "Jan 2024", fr: "Jan 2024" },
      url: "https://www.apollographql.com/tutorials/certifications/4dd19dad-1454-4bf8-a8df-affb051c127c",
      image: "https://res.cloudinary.com/apollographql/image/upload/v1654200365/odyssey/certifications/graph_professional_badge.svg",
    },
  ],
  spokenLanguages: [
    {
      name: { en: "French", fr: "Français" },
      level: { en: "Native", fr: "Natif" },
      flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png",
    },
    {
      name: { en: "English", fr: "Anglais" },
      level: { en: "Fluent", fr: "Courant" },
      flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1024px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
    },
  ],
  projects: [] as any[],
  hackathons: [] as any[],
};

// Helper type for bilingual fields
export type BilingualField = { en: string; fr: string };

// Helper function to get localized value
export const getLocalized = (field: BilingualField | string, locale: "en" | "fr"): string => {
  if (typeof field === "string") return field;
  return field[locale] || field.en;
};
