// ============================================================
// Certificate Data
// level: "course" | "track" | "program" | "simulation"
// ============================================================

const certificateCategories = {
  analytics: {
    name: "Data Analytics",
    name_fr: "Data Analytics",
    icon: "fa-solid fa-chart-line",
    description: "Python, R, SQL, Excel — complete data analytics toolkit",
    description_fr: "Python, R, SQL, Excel — boîte à outils complète pour l'analyse de données",
    certificates: [
      {
        id: "datacamp-r-analyst",
        title: "Data Analyst in R",
        issuer: "DataCamp · Career Track",
        issuerCode: "datacamp",
        level: "track",
        date: "November 2, 2024 · 36 hours",
        description: "Comprehensive 36-hour career track covering the full R data analysis workflow: data manipulation with dplyr, statistical analysis, hypothesis testing, sampling theory, and visualization with ggplot2.",
        description_fr: "Parcours complet de 36 heures couvrant tout le workflow d'analyse de données avec R: manipulation de données avec dplyr, analyse statistique, tests d'hypothèses, théorie de l'échantillonnage et visualisation avec ggplot2.",
        image: "img/certificates/data-analyst-r.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/f978d9d603d7e845bbb452e143f12bfee16711be"
      },
      {
        id: "excel-fundamentals",
        title: "Excel Fundamentals",
        issuer: "DataCamp · Skill Track",
        issuerCode: "datacamp",
        level: "track",
        date: "October 4, 2024 · 14 hours",
        description: "Complete Excel analytical workflow: data preparation, lookup functions, PivotTables, analysis, and visualization.",
        description_fr: "Workflow analytique Excel complet: préparation des données, fonctions de recherche, tableaux croisés dynamiques, analyse et visualisation.",
        image: "img/certificates/excel-fundamentals.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/ee17c58febabb444d19cb905ddc551277e55c532"
      },
      {
        id: "intermediate-sql",
        title: "Intermediate SQL",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "November 5, 2024 · 4 hours",
        description: "Intermediate SQL covering filtering, aggregate functions, grouping, sorting, and subqueries for real-world data analysis tasks.",
        description_fr: "SQL intermédiaire couvrant le filtrage, les fonctions d'agrégation, le regroupement, le tri et les sous-requêtes pour des cas d'analyse de données réels.",
        image: "img/certificates/intermediate-sql.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0abec17b4dee21c98eaa39f6d85e56c5e4120806"
      },
      {
        id: "intermediate-python",
        title: "Intermediate Python",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "October 26, 2022 · 4 hours",
        description: "Intermediate Python covering Matplotlib, pandas DataFrames, Boolean logic, control flow, filtering, and loops.",
        description_fr: "Python intermédiaire couvrant Matplotlib, pandas, la logique booléenne, le control flow, le filtrage et les boucles.",
        image: "img/certificates/intermediate-python.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/901441f5c49e1c5b7d751e530b6ee16c64470717"
      },
      {
        id: "data-analysis-excel",
        title: "Data Analysis in Excel",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "October 4, 2024 · 3 hours",
        description: "PivotTables, customer segmentation, What-If Analysis, forecasting with moving averages and trendlines.",
        description_fr: "Tableaux croisés dynamiques, segmentation client, analyse de scénarios, prévision par moyennes mobiles et courbes de tendance.",
        image: "img/certificates/data-analysis-excel.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/90ecbfd45ad3d0327a01654add1e8bbcdbe509e7"
      },
      {
        id: "financial-modeling-excel",
        title: "Financial Modeling in Excel",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "October 9, 2024 · 3 hours",
        description: "Income statements, cash flow modeling, scenario analysis, time value of money, NPV and IRR for capital budgeting.",
        description_fr: "Comptes de résultat, modélisation des flux de trésorerie, analyse de scénarios, valeur temps de l'argent, VAN et TRI pour le choix d'investissements.",
        image: "img/certificates/financial-modeling-excel.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/37e4f698544f12c84eb26e6673f7f5b8a25f5245"
      },
      {
        id: "cleaning-data-r",
        title: "Cleaning Data in R",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "March 4, 2024 · 4 hours",
        description: "Type conversion, range constraints, duplicate removal, missing data handling, and record linkage.",
        description_fr: "Conversion de types, contraintes de plage, suppression des doublons, traitement des données manquantes et appariement d'enregistrements.",
        image: "img/certificates/cleaning-data-r.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6a25699bb9505bc4d9162bdf93b9436d540cc444"
      },
      {
        id: "eda-r",
        title: "Exploratory Data Analysis in R",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "April 29, 2024 · 4 hours",
        description: "Graphical and numerical techniques to uncover structure, identify relationships, detect unusual observations.",
        description_fr: "Techniques graphiques et numériques pour révéler des structures, identifier des relations et détecter des observations atypiques.",
        image: "img/certificates/eda-r.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c89079087c9b89b8d031462730d96d5e1f7ee0e5"
      },
      {
        id: "ggplot2-intermediate",
        title: "Intermediate Data Visualization with ggplot2",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "December 7, 2023 · 4 hours",
        description: "Advanced ggplot2: explanatory plots, statistical calculations, facets, and custom plotting functions.",
        description_fr: "ggplot2 avancé : graphiques explicatifs, calculs statistiques, facettes et fonctions personnalisées.",
        image: "img/certificates/ggplot2-intermediate.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9318046c8f4b2837c1b8be75a842f1a4a8d6fb61"
      },
      {
        id: "data-visualization-excel",
        title: "Data Visualization in Excel",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "October 2, 2024 · 3 hours",
        description: "Bullet, Waterfall, Scatter charts, data visualization best practices, PivotCharts and dynamic dashboards.",
        description_fr: "Graphiques à puces, en cascade, nuages de points, bonnes pratiques de visualisation, PivotCharts et dashboards dynamiques.",
        image: "img/certificates/data-visualization-excel.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/1c04a89fa4785738e6b5e3f4d5edcff4ffa6d740"
      },
      {
        id: "data-preparation-excel",
        title: "Data Preparation in Excel",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "October 1, 2024 · 3 hours",
        description: "Importing and cleaning raw data, date and text functions, nested logical functions, VLOOKUP and XLOOKUP.",
        description_fr: "Importation et nettoyage de données brutes, fonctions de date et de texte, fonctions logiques imbriquées, VLOOKUP et XLOOKUP.",
        image: "img/certificates/data-preparation-excel.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/e8e0075fe03a47b87093d1bb0649898bf58d1a17"
      },
      {
        id: "ibm-data-analytics",
        title: "Introduction to Data Analytics",
        issuer: "Coursera · IBM",
        issuerCode: "coursera",
        level: "course",
        date: "March 28, 2021",
        description: "End-to-end analytics: collecting, wrangling, mining, and visualizing data. Data roles and data structures.",
        description_fr: "Analytics de bout en bout : collecte, structuration, exploration et visualisation des données. Rôles dans la data analytics et structures de données.",
        image: "img/certificates/intro-data-analytics-coursera.webp",
        link: "https://www.coursera.org/account/accomplishments/certificate/RBL5HCGYLGUR"
      }
    ]
  },

  consulting: {
    name: "Consulting & Strategy",
    name_fr: "Conseil & Stratégie",
    icon: "fa-solid fa-briefcase",
    description: "McKinsey, BCG, PwC:strategy frameworks and problem-solving",
    description_fr: "McKinsey, BCG, PwC: frameworks et résolution de problèmes", 
    certificates: [
      {
        id: "mckinsey-forward",
        title: "McKinsey Forward Program",
        issuer: "McKinsey & Company",
        issuerCode: "mckinsey",
        level: "program",
        date: "Dec 2022 — May 2023 · 5 months",
        description: "A 5-month (now reduced to 11 weeks) online learning program designed to equip emerging talent with practical skills for the future of work. Modules: Adaptability & Resilience, Problem Solving, Communicating for Impact, Design Thinking, and Agile.",
        description_fr: "Programme de formation en ligne de 5 mois (maintenant réduit à 11 semaines) conçu pour doter les jeunes talents de compétences pratiques pour l'avenir du travail. Modules : Adaptabilité & Résilience, Résolution de problèmes, Communication d'impact, Design Thinking et Agile.",
        image: "img/certificates/mckinsey-forward.webp",
        link: "https://www.credly.com/badges/9a2d4e45-496d-4b94-b00e-b8d66bce2c51/public_url"
      },
      {
        id: "bcg-digital-transformation",
        title: "Digital Transformation",
        issuer: "BCG · Forage",
        issuerCode: "bcg",
        level: "simulation",
        date: "September 27, 2024",
        description: "Developed a new app to help a hypothetical client combat declining sales; conducted market research, analyzed customer pain points, reviewed and prioritized features, used Trello for agile project management.",
        description_fr: "Développement d'une nouvelle application pour aider un client fictif à enrayer la baisse de ses ventes ; étude de marché, analyse des points de friction clients, priorisation des fonctionnalités, gestion de projet agile avec Trello.",
        image: "img/certificates/bcg-digital-transformation.webp",
        link: "https://www.theforage.com/completion-certificates/BCG%20/cT6tMKSaMryk6PGaF_BCG_HPtsWCfwiY6XtrRB5_1727436152833_completion_certificate.pdf"
      },
      {
        id: "bcg-strategy-consulting",
        title: "Strategy Consulting",
        issuer: "BCG · Forage",
        issuerCode: "bcg",
        level: "simulation",
        date: "September 22, 2022",
        description: "BCG strategy consulting simulation: strategic pricing options, market research, competitor analysis, customer survey design.",
        description_fr: "Simulation de conseil en stratégie de BCG : options de tarification stratégique, étude de marché, analyse concurrentielle, conception d'enquêtes clients.",
        image: "img/certificates/bcg-strategy-consulting.webp",
        link: "https://www.theforage.com/completion-certificates/BCG%20/ntTvo6ru6Tq3A2JPq_BCG_HPtsWCfwiY6XtrRB5_1707884472037_completion_certificate.pdf"
      },
      {
        id: "pwc-management-consulting",
        title: "Management Consulting",
        issuer: "PwC · Forage",
        issuerCode: "pwc",
        level: "simulation",
        date: "March 1, 2024",
        description: "PwC business transaction diligence simulation: synergy presentation, financial model, executive summary.",
        description_fr: "Simulation de due diligence de PwC : présentation des synergies, modèle financier, résumé exécutif.",
        image: "img/certificates/pwc-management-consulting.webp",
        link: "https://www.theforage.com/completion-certificates/PwC%20US/douE8ih9jWMQ2P7sS_PwC%20US_HPtsWCfwiY6XtrRB5_1709321245133_completion_certificate.pdf"
      },
      {
        id: "bcg-digital-transformation-coursera",
        title: "Digital Transformation",
        issuer: "Coursera · BCG",
        issuerCode: "coursera",
        level: "course",
        date: "April 9, 2021",
        description: "Economics and strategy of digital transformation: innovation mechanics, technology disruption, BCG framework.",
        description_fr: "Économie et stratégie de la transformation digitale : mécanismes de l'innovation, disruption technologique, cadre BCG.",
        image: "img/certificates/digital-transformation-coursera.webp",
        link: "https://www.coursera.org/account/accomplishments/certificate/WKAWRGLFJM4G"
      }
    ]
  },

  statistics: {
    name: "Statistics & Econometrics",
    name_fr: "Statistiques & Économétrie",
    icon: "fa-solid fa-chart-simple",
    description: "Statistical inference, regression, hypothesis testing, sampling...",
    description_fr: "Inférence statistique, régression, tests d'hypothèses, échantillonnage...",
    certificates: [
        {
          id: "reproducible-research-fundamentals",
          title: "Reproducible Research Fundamentals",
          issuer: "World Bank Institute",
          issuerCode: "worldbank",
          level: "course",
          date: "May 14, 2026 · 30 hours",
          description: "Best practices for transparent and reproducible research workflows: data management, cleaning, analysis, and secure reproducible outputs using coding software (R, Python, Stata, etc.).",
          description_fr: "Bonnes pratiques pour des workflows transparents et reproductibles dans la recherche: gestion des données, nettoyage, analyse et production de résultats reproductibles et sécurisés avec des logiciels de code (R, Python, Stata, etc.).",
          image: "img/certificates/reproducible-research.webp",
          link: "https://mycourse.app/85ku7mjBT315EJ7zH"
        },

      {
        id: "statistics-fundamentals-r",
        title: "Statistics Fundamentals in R",
        issuer: "DataCamp · Skill Track",
        issuerCode: "datacamp",
        level: "track",
        date: "November 2, 2024 · 20 hours",
        description: "Core statistics for data science: probability theory, distributions, sampling, confidence intervals, hypothesis testing, and statistical inference in R.",
        description_fr: "Statistiques fondamentales pour la data science: théorie des probabilités, distributions, échantillonnage, intervalles de confiance, tests d'hypothèses et inférence statistique avec R.",
        image: "img/certificates/statistics-fundamentals.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/46171958576820fba621eea3372e537208485d52"
      },
      {
        id: "intermediate-regression-r",
        title: "Intermediate Regression in R",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "October 15, 2024 · 4 hours",
        description: "Multiple linear and logistic regression with interaction effects, applied to Taiwan house prices and customer churn modeling.",
        description_fr: "Régression linéaire multiple et logistique avec effets d'interaction, appliquées aux prix immobiliers à Taïwan et à la modélisation du churn client.",
        image: "img/certificates/intermediate-regression-r.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cf8de5dfca46de8243c13b92ab70591c33385397"
      },
      {
        id: "hypothesis-testing-r",
        title: "Hypothesis Testing in R",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "November 2, 2024 · 4 hours",
        description: "T-tests, proportion tests, chi-square tests, and non-parametric alternatives applied to real-world datasets.",
        description_fr: "Tests t, tests de proportion, tests du chi-carré et alternatives non paramétriques appliqués à des jeux de données réels.",
        image: "img/certificates/hypothesis-testing-r.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/d9a72c8c0342cb88dfa8f880e39ef97c013a043f"
      },
      {
        id: "sampling-r",
        title: "Sampling in R",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "October 18, 2024 · 4 hours",
        description: "Simple random, stratified, and cluster sampling methods, estimating population statistics, and bootstrap distributions.",
        description_fr: "Méthodes d'échantillonnage aléatoire simple, stratifié et en grappes, estimation des statistiques de population et distributions bootstrap.",
        image: "img/certificates/sampling-r.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/db2b63eb387cdba62331aee70de95e5c59ad04db"
      }
    ]
  },

  powerbi: {
    name: "Power BI",
    name_fr: "Power BI",
    icon: "fa-solid fa-chart-pie",
    description: "Interactive dashboards, DAX, data modeling, and visualization",
    description_fr: "Dashboards interactifs, DAX, modélisation de données et visualisation",
    certificates: [
    {
      id: "dax-fundamentals-power-bi",
      title: "DAX Fundamentals in Power BI",
      issuer: "DataCamp",
      issuerCode: "datacamp",
      level: "course",
      date: "May 19, 2026 · 3 hours",
      description: "Fundamental concepts and best practices for implementing DAX in Power BI: calculated columns, measures, tables, context, and time-intelligence functions.",
      description_fr: "Concepts fondamentaux et bonnes pratiques pour implémenter DAX dans Power BI: colonnes calculées, mesures, tables, contexte et fonctions de time intelligence.",
      image: "img/certificates/dax-fundamentals.webp",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/96ee4b8cb3d0271a4f90249a9db7632d5e6b2ee8"
    },

    {
      id: "data-visualization-power-bi",
      title: "Data Visualization in Power BI",
      issuer: "DataCamp",
      issuerCode: "datacamp",
      level: "course",
      date: "May 20, 2026 · 3 hours",
      description: "Creating insightful visualizations in Power BI: built-in and customized charts, conditional formatting, scatter plots, tornado charts, and gauges.",
      description_fr: "Création de visualisations pertinentes dans Power BI: graphiques natifs et personnalisés, mise en forme conditionnelle, nuages de points, tornado charts et jauges.",
      image: "img/certificates/data-visualization-power-bi.webp",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/96ee4b8cb3d0271a4f90249a9db7632d5e6b2ee8"
    },
    {
  id: "case-study-analyzing-customer-churn-power-bi",
  title: "Analyzing Customer Churn in Power BI",
  issuer: "DataCamp",
  issuerCode: "datacamp",
  level: "course",
  date: "May 20, 2026 · 3 hours",
  description: "Applied Power BI skills to a real-world telecom case study: investigating churn rates, creating measures and calculated columns, and designing eye-catching report pages.",
  description_fr: "Application de Power BI à une étude de cas télécom réelle: analyse du taux de churn, création de mesures et colonnes calculées, conception de pages de rapport percutantes.",
  image: "img/certificates/case-study-churn-power-bi.webp",
  link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/96ee4b8cb3d0271a4f90249a9db7632d5e6b2ee8"
}
    ]
  },

  tech: {
    name: "Tech & Cloud",
    name_fr: "Tech & Cloud",
    icon: "fa-solid fa-cloud",
    description: "Cloud computing, Git, version control, development tools",
    description_fr: "Cloud computing, Git, contrôle de version, outils de développement",
    certificates: [
      {
        id: "cloud-computing",
        title: "Understanding Cloud Computing",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "November 6, 2025 · 2 hours",
        description: "Cloud fundamentals: scalability, latency, high-availability, service models, AWS, Azure, Google Cloud.",
        description_fr: "Fondamentaux du cloud : scalabilité, latence, haute disponibilité, modèles de service, AWS, Azure, Google Cloud.",
        image: "img/certificates/cloud-computing.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f1b4a863df4ba3b3c4de057888c56c6dbdf568ee"
      },
      {
        id: "git-foundations",
        title: "Foundations of Git",
        issuer: "DataCamp",
        issuerCode: "datacamp",
        level: "course",
        date: "March 21, 2024 · 4 hours",
        description: "Version control with Git: tracking changes, saving and undoing modifications, branching, conflict resolution.",
        description_fr: "Version control avec Git : suivi des modifications, sauvegarde et annulation des changements, branches, résolution de conflits.",
        image: "img/certificates/foundations-git.webp",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/5a7f2b8e291e08eb4810a4c9df211e2a68d6892a"
      }
    ]
  }
};

// ============================================================
// Level metadata — label, icon, tooltip
// ============================================================

const levelMeta = {
  program:    { label: 'Program',    icon: 'fa-solid fa-medal',       tip: 'Multi-month structured program' },
  course:     { label: 'Course',     icon: 'fa-solid fa-book-open',   tip: 'Single standalone course' },
  track:      { label: 'Track',      icon: 'fa-solid fa-layer-group', tip: 'Multi-course skill or career track' },
  simulation: { label: 'Simulation', icon: 'fa-solid fa-tasks',       tip: 'Industry virtual experience / case simulation' },
  
};

// ============================================================
// Helpers
// ============================================================

let totalCertificates = 0;
Object.values(certificateCategories).forEach(cat => {
  totalCertificates += cat.certificates.length;
});

function certText(obj, field) {
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const frField = field + '_fr';
  if (lang === 'fr' && obj[frField]) return obj[frField];
  return obj[field];
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getIssuerCode(issuer) {
  const l = issuer.toLowerCase();
  if (l.includes('mckinsey')) return 'mckinsey';
  if (l.includes('bcg'))      return 'bcg';
  if (l.includes('pwc'))      return 'pwc';
  if (l.includes('ibm'))      return 'ibm';
  if (l.includes('coursera')) return 'coursera';
  return 'datacamp';
}

// ============================================================
// State  —  two independent filters
// ============================================================

let activeIssuer = 'all';
let activeLevel  = 'all';

function certMatchesFilters(cert) {
  const issuerOk = activeIssuer === 'all' || (cert.issuerCode || getIssuerCode(cert.issuer)) === activeIssuer;
  const levelOk  = activeLevel  === 'all' || cert.level === activeLevel;
  return issuerOk && levelOk;
}

// ============================================================
// Render entry point
// ============================================================

function renderCertifications() {
  renderIssuerTabs();
  renderLevelTabs();
  renderCategories();
  updateTotalCount();
}

function updateTotalCount() {
  const el = document.getElementById('cert-count');
  if (el) el.textContent = `${totalCertificates}+ ${t('cert.count-suffix')}`;
}

// ============================================================
// Stats Bar
// ============================================================

function renderStatsBar() {
  const container = document.getElementById('cert-stats');
  if (!container) return;

  const issuerSet = new Set();
  let totalHours = 0;
  Object.values(certificateCategories).forEach(cat => {
    cat.certificates.forEach(c => {
      issuerSet.add(c.issuerCode);
      const match = c.date.match(/(\d+)\s*hour/i);
      if (match) totalHours += parseInt(match[1]);
    });
  });

  container.innerHTML = `
    <div class="cert-stat-pill">
      <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
      <strong>${Object.keys(certificateCategories).length}</strong> ${escapeHtml(t('cert.categories'))}
    </div>
    <div class="cert-stat-pill">
      <i class="fa-solid fa-building" aria-hidden="true"></i>
      <strong>${issuerSet.size}</strong> ${escapeHtml(t('cert.issuers'))}
    </div>
    <!-- <div class="cert-stat-pill">
      <i class="fa-regular fa-clock" aria-hidden="true"></i>
      <strong>${totalHours}+</strong> hours
    </div> -->
  `;
}

// ============================================================
// Issuer Filter Tabs (row 1)
// ============================================================

function renderIssuerTabs() {
  const container = document.getElementById('cert-filters');
  if (!container) return;

  const issuers = [
    { code: 'all',      label: t('cert.filter-all-issuers') },
    { code: 'worldbank',      label: 'World Bank' },
    { code: 'datacamp', label: 'DataCamp' },
    { code: 'mckinsey', label: 'McKinsey' },
    { code: 'bcg',      label: 'BCG' },
    { code: 'pwc',      label: 'PwC' },
    { code: 'coursera', label: 'Coursera' },
  ];

  container.innerHTML = issuers.map(({ code, label }) => `
    <button
      class="cert-filter-tab${activeIssuer === code ? ' active' : ''}"
      data-filter="${code}"
      aria-pressed="${activeIssuer === code}"
    >${label}</button>
  `).join('');

  container.querySelectorAll('.cert-filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeIssuer = btn.dataset.filter;
      renderCertifications();
    });
  });
}

// ============================================================
// Level Filter Tabs (row 2)
// ============================================================

function renderLevelTabs() {
  const container = document.getElementById('cert-level-filters');
  if (!container) return;

  const levels = [
    { code: 'all',        label: t('cert.filter-all-levels') },
    { code: 'program',    label: t('cert.level-program') },
    { code: 'course',     label: t('cert.level-course') },
    { code: 'track',      label: t('cert.level-track') },
    { code: 'simulation', label: t('cert.level-simulation') },
  ];

  container.innerHTML = levels.map(({ code, label }) => {
    const meta = levelMeta[code];
    const iconHtml = meta ? `<i class="${meta.icon}" aria-hidden="true"></i> ` : '';
    const tip = code !== 'all' ? t('cert.tip-' + code) : '';
    return `
      <button
        class="cert-filter-tab cert-filter-tab--level${activeLevel === code ? ' active' : ''}"
        data-level="${code}"
        aria-pressed="${activeLevel === code}"
        ${tip ? `title="${escapeHtml(tip)}"` : ''}
      >${iconHtml}${label}</button>
    `;
  }).join('');

  container.querySelectorAll('.cert-filter-tab--level').forEach(btn => {
    btn.addEventListener('click', () => {
      activeLevel = btn.dataset.level;
      renderCertifications();
    });
  });
}

// ============================================================
// Category Accordion
// ============================================================

function renderCategories() {
  const container = document.getElementById('cert-categories');
  if (!container) return;

  // Preserve open state across re-renders
  const openKeys = new Set();
  container.querySelectorAll('.cert-category.open').forEach(el => {
    openKeys.add(el.dataset.category);
  });

  let html = '';

  for (const [key, category] of Object.entries(certificateCategories)) {
    const visibleCerts = category.certificates.filter(certMatchesFilters);
    if (visibleCerts.length === 0) continue;

    const isOpen = openKeys.has(key);

    const certItemsHtml = visibleCerts.map(cert => {
      const issuerCode = cert.issuerCode || getIssuerCode(cert.issuer);
      const isSoon     = !!cert.comingSoon;
      const lvl        = levelMeta[cert.level];
      const levelLabel = lvl ? t('cert.level-' + cert.level) : '';
      const levelTip   = lvl ? t('cert.tip-' + cert.level) : '';
      const levelBadge = lvl
        ? `<span class="cert-level-badge cert-level-badge--${escapeHtml(cert.level)}" title="${escapeHtml(levelTip)}">
             <i class="${escapeHtml(lvl.icon)}" aria-hidden="true"></i>${escapeHtml(levelLabel)}
           </span>`
        : '';
      const certTitle = certText(cert, 'title');

      return `
        <div
          class="cert-item${isSoon ? ' cert-item--soon' : ''}"
          data-cert-id="${escapeHtml(cert.id)}"
          data-category="${escapeHtml(key)}"
          data-cert-index="${category.certificates.indexOf(cert)}"
          data-issuer="${escapeHtml(issuerCode)}"
          role="${isSoon ? 'presentation' : 'button'}"
          tabindex="${isSoon ? '-1' : '0'}"
          aria-label="${isSoon ? '' : t('cert.view-aria') + ' ' + escapeHtml(certTitle)}"
        >
          <div class="cert-item-image">
            ${cert.image && cert.image !== ''
              ? `<img src="${escapeHtml(cert.image)}" alt="${escapeHtml(certTitle)}" loading="lazy" onerror="this.parentElement.innerHTML='<i class=\\'fa-solid fa-certificate cert-placeholder-icon\\'></i>'">`
              : `<i class="fa-solid fa-certificate cert-placeholder-icon"></i>`
            }
          </div>
          <div class="cert-item-info">
            <div class="cert-item-title">${escapeHtml(certTitle)}</div>
            <div class="cert-item-issuer" data-issuer="${escapeHtml(issuerCode)}">${escapeHtml(cert.issuer)}</div>
            <div class="cert-item-meta">
              ${levelBadge}
              <span class="cert-item-date">${escapeHtml(cert.date)}</span>
            </div>
            ${isSoon ? `<span class="cert-soon-badge">${escapeHtml(t('cert.coming-soon'))}</span>` : ''}
          </div>
          ${!isSoon ? '<div class="cert-item-arrow"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></div>' : ''}
        </div>
      `;
    }).join('');

    const categoryName = certText(category, 'name');
    const categoryDesc = certText(category, 'description');

    html += `
      <div class="cert-category${isOpen ? ' open' : ''}" data-category="${escapeHtml(key)}">
        <div class="cert-category-header" role="button" tabindex="0" aria-expanded="${isOpen}" aria-controls="cert-body-${escapeHtml(key)}">
          <div class="cert-category-icon" data-cat="${escapeHtml(key)}">
            <i class="${escapeHtml(category.icon)}" aria-hidden="true"></i>
          </div>
          <div class="cert-category-meta">
            <div class="cert-category-name">
              ${escapeHtml(categoryName)}
              <span class="cert-category-count">${visibleCerts.length}</span>
            </div>
            <div class="cert-category-desc">${escapeHtml(categoryDesc)}</div>
          </div>
          <div class="cert-category-toggle" aria-hidden="true">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="cert-category-body" id="cert-body-${escapeHtml(key)}">
          <div class="cert-items-grid">
            ${certItemsHtml}
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html || `<p class="cert-empty">${escapeHtml(t('cert.empty'))}</p>`;

  attachCategoryHandlers();
  attachCertItemHandlers();
}

// ============================================================
// Event Handlers
// ============================================================

function attachCategoryHandlers() {
  document.querySelectorAll('.cert-category-header').forEach(header => {
    const toggle = () => {
      const card    = header.closest('.cert-category');
      const isNowOpen = card.classList.toggle('open');
      header.setAttribute('aria-expanded', isNowOpen);
    };
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}

function attachCertItemHandlers() {
  document.querySelectorAll('.cert-item:not(.cert-item--soon)').forEach(item => {
    const open = () => {
      const categoryKey = item.dataset.category;
      const certIndex   = parseInt(item.dataset.certIndex, 10);
      const category    = certificateCategories[categoryKey];
      if (category && category.certificates[certIndex]) {
        openCertModal(category.certificates[certIndex]);
      }
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

// ============================================================
// Modal
// ============================================================

function openCertModal(cert) {
  window.currentCert = cert;
  const certContent = document.getElementById('cert-content');
  const overlay     = document.getElementById('cert-overlay');
  if (!certContent || !overlay) return;

  const issuerCode = cert.issuerCode || getIssuerCode(cert.issuer);
  const lvl        = levelMeta[cert.level];
  const levelBadgeHtml = lvl
    ? `<span class="cert-level-badge cert-level-badge--${escapeHtml(cert.level)}">
         <i class="${escapeHtml(lvl.icon)}" aria-hidden="true"></i>${escapeHtml(t('cert.level-' + cert.level))}
       </span>`
    : '';
  const certTitle = certText(cert, 'title');
  const certDesc  = certText(cert, 'description');

  certContent.innerHTML = `
    <div class="cert-modal-issuer-tag" data-issuer="${escapeHtml(issuerCode)}">${escapeHtml(cert.issuer)}</div>
    <h2 class="cert-modal-title" id="cert-modal-heading">${escapeHtml(certTitle)}</h2>
    <div class="cert-modal-date">
      ${levelBadgeHtml}
      <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${escapeHtml(cert.date)}</span>
    </div>

    ${cert.image && cert.image !== ''
      ? `<div class="cert-modal-image-wrap">
           <img src="${escapeHtml(cert.image)}" alt="${escapeHtml(certTitle)} certificate" loading="lazy" onerror="this.parentElement.style.display='none'">
         </div>`
      : `<div class="cert-modal-image-placeholder"><i class="fa-solid fa-certificate" aria-hidden="true"></i></div>`
    }

    <div class="cert-modal-desc">${escapeHtml(certDesc)}</div>

    ${cert.link && cert.link !== '#'
      ? `<a href="${escapeHtml(cert.link)}" target="_blank" rel="noopener noreferrer" class="cert-modal-verify-btn">
           <i class="fa-solid fa-shield-check" aria-hidden="true"></i> ${escapeHtml(t('cert.verify'))}
           <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
         </a>`
      : `<div class="cert-modal-no-link">${escapeHtml(t('cert.no-link'))}</div>`
    }
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('cm-close');
  if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
}

function closeCertModal() {
  const overlay = document.getElementById('cert-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ============================================================
// Init
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderStatsBar();
  renderCertifications();

  const overlay  = document.getElementById('cert-overlay');
  const closeBtn = document.getElementById('cm-close');

  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeCertModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCertModal);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCertModal();
  });

  window.openCertModal  = openCertModal;
  window.closeCertModal = closeCertModal;
});
