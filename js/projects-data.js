// ============================================================
// Project Data
// ============================================================
const projectData = {
  0: {
    tag: 'Python · Dash · World Bank API',
    tag_fr: 'Python · Dash · API Banque Mondiale',
    title: 'Renewable Energy Investment Analyzer',
    title_fr: "Renewable Energy Investment Analyzer",
    challenge: '20 emerging markets, 13 different indicators, and no standardized way to compare them.',
    challenge_fr: "20 marchés émergents, 13 indicateurs différents et aucune méthode standardisée pour les comparer.",
    solution: 'Built an end-to-end Python pipeline that fetches 13 World Bank indicators, scores markets across 4 dimensions (Market Potential, Infrastructure, Macro Stability, Enabling Environment), tests 4 investor scenarios, and segments markets into 3 investment archetypes.',
    solution_fr: "Construction d'un pipeline Python de bout en bout qui récupère 13 indicateurs de la Banque Mondiale, note les marchés sur 4 dimensions (Potentiel de Marché, Infrastructure, Stabilité Macro, Environnement Favorable), teste 4 scénarios d'investissement et segmente les marchés en 3 archétypes.",
    result: 'Interactive Dash dashboard with real-time scenario builder. Comprehensive Quarto report with foldable code. Only 2 of 20 markets qualified as investable across all scenarios.',
    result_fr: "Dashboard interactif avec générateur de scénarios en temps réel. Rapport Quarto complet en anglais avec codes. Seuls 2 des 20 marchés se sont qualifiés comme investissables sur tous les scénarios.",
    tools: ['Python', 'Dash', 'Quarto', 'World Bank API', 'Scikit-learn', 'Plotly', 'Pandas'],
    links: [
      { label_key: 'link.live-report', icon: 'fa-regular fa-file-lines', url: '/projects/renewable_energy_analyzer/index.html', type: 'primary' },
      { label_key: 'link.live-dashboard', icon: 'fa-solid fa-chart-line', url: 'https://renewable-energy-analyzer.onrender.com', type: 'secondary' },
      { label_key: 'link.github-repo', icon: 'fa-brands fa-github', url: 'https://github.com/IbrahimaFikry/renewable-energy-analyzer', type: 'secondary' }
    ]
  },
  1: {
    tag: 'EDA · HR Analytics · R',
    tag_fr: 'EDA · HR Analytics · R',
    title: 'Analyzing Performance Gaps Between Departments',
    title_fr: 'Analyzing Performance Gaps Between Departments',
    challenge: 'Understand drivers of turnover, performance disparities, and compensation equity across departments.',
    challenge_fr: "Comprendre les facteurs de turnover, les disparités de performance et l'équité salariale entre départements.",
    solution: 'Comprehensive EDA of 100,000 employee records across 20 variables (satisfaction scores, performance ratings, salary data, work habits, education level...) structured around three pillars: retention & turnover, performance & productivity, compensation equity.',
    solution_fr: "EDA complète sur 100 000 données de salariés à travers 20 variables (scores de satisfaction, évaluations de performance, données salariales, habitudes de travail, niveau d'éducation...) structurée autour de trois piliers : rétention & turnover, performance & productivité, équité salariale.",
    result: 'Identified key resignation drivers, uncovered performance patterns correlated with work habits and education, examined salary disparities across departments.',
    result_fr: "Rapport Quarto complet en anglais avec codes. Identification des principaux facteurs de démission, mise en évidence de patterns de performance corrélés aux habitudes de travail et à l'éducation, examen des disparités salariales entre départements.",
    tools: ['R', 'tidyverse', 'ggplot2', 'dplyr', 'Quarto'],
    links: [
      { label_key: 'link.live-report', icon: 'fa-regular fa-file-lines', url: 'https://ibrahimafikry.github.io/Analyzing-Performance-Gaps-Between-Departments/', type: 'primary' },
      { label_key: 'link.github-repo', icon: 'fa-brands fa-github', url: 'https://github.com/ibrahimafikry/Analyzing-Performance-Gaps-Between-Departments', type: 'secondary' }
    ]
  },
  2: {
    tag: 'Time Series · Machine Learning · R',
    tag_fr: 'Séries Temporelles · Machine Learning · R',
    title: 'Predictive Demand Analytics on the Phosphate Market — OCP Group',
    title_fr: 'Analyse prédictive de la Demande sur le Marché des Phosphates — Groupe OCP',
    challenge: "OCP Group, one of Africa's largest multinationals, needed accurate demand forecasts across 14 global market variables to optimize production and logistics.",
    challenge_fr: "Le Groupe OCP, l'une des plus grandes multinationales d'Afrique avait besoin de prévisions de demande précises sur 14 variables de marché pour optimiser sa production et sa logistique.",
    solution: 'Combined ARCH/GARCH models for volatility capture, XGBoost for baseline accuracy, and LSTM deep learning for sequential pattern recognition. Deployed interactive R Shiny application for business stakeholders.',
    solution_fr: "Utilisation des modèles ARCH/GARCH pour capter la volatilité, de XGBoost pour la précision de base, et de deep learning LSTM pour la reconnaissance de patterns séquentiels. Déploiement d'une application R Shiny interactive pour les parties prenantes métier.",
    result: '97% accuracy with XGBoost, 99% accuracy with LSTM. Deployed interactive R Shiny application for scenario analysis.',
    result_fr: "97 % de précision avec XGBoost, 99 % avec LSTM. Application R Shiny interactive déployée pour l'analyse de scénarios.",
    tools: ['R', 'XGBoost', 'LSTM', 'ARCH/GARCH', 'R Shiny', 'tidyverse'],
    links: [{ label_key: 'link.request-details', icon: 'fa-regular fa-envelope', url: '#contact', type: 'primary' }]
  },
  3: {
    tag: 'Feasibility · Benchmarking · Africa',
    tag_fr: 'Faisabilité · Benchmarking · Afrique',
    title: 'Intercity Transport Feasibility — Guinea & DRC',
    title_fr: 'Faisabilité du Transport Intercity — Guinée & RDC',
    challenge: 'Large-scale infrastructure investment required rigorous feasibility analysis across multiple countries and stakeholders.',
    challenge_fr: "Un investissement d'infrastructure de grande envergure nécessitait une analyse de faisabilité rigoureuse.",
    solution: 'Business analysis for intercity transportation infrastructure with SOGEPA SARL (Guinea, DRC) and JTP Transport (Brazil). Benchmarked international best practices for similar projects.',
    solution_fr: "Analyse d'affaires pour une infrastructure de transport avec SOGEPA SARL (Guinée, RDC) et JTP Transport (Brésil). Benchmark des meilleures pratiques internationales pour des projets similaires.",
    result: 'Comprehensive feasibility analysis for intercity transport deployment scenarios, international benchmarking study.',
    result_fr: "Analyse de faisabilité complète pour les scénarios de déploiement du transport, benchmarking international.",
    tools: ['Business Analysis', 'Benchmarking', 'Feasibility Analysis'],
    links: [{ label_key: 'link.request-details', icon: 'fa-regular fa-envelope', url: '#contact', type: 'primary' }]
  },
  4: {
    tag: 'Python · NLP · Behavioral Analytics',
    tag_fr: 'Python · NLP · Analytics Comportemental',
    title: 'Consumer Sentiment & Facial Coding Analysis',
    title_fr: 'Analyse du Sentiment Consommateur & Codage Facial',
    challenge: 'Clients at Thinkone needed deeper understanding of consumer emotional responses beyond standard survey data.',
    challenge_fr: "Les clients de Thinkone avaient besoin d'une compréhension plus fine des réponses émotionnelles des consommateurs, au-delà des données d'enquêtes classiques.",
    solution: 'Developed sentiment analysis pipeline to extract emotional patterns from consumer data. Implemented facial coding pipeline for non-verbal consumer response analysis.',
    solution_fr: "Développement d'un pipeline d'analyse de sentiment pour extraire les patterns émotionnels des données consommateurs. Mise en place d'un algorithme de codage facial pour l'analyse des réponses non verbales.",
    result: 'Accelerated consumer behavior analysis, provided emotional insights beyond traditional survey data.',
    result_fr: "Analyse du comportement consommateur accélérée, insights émotionnels fournis au-delà des enquêtes traditionnelles.",
    tools: ['Python', 'OpenCV', 'Sentiment Analysis', 'Facial Coding', 'Excel'],
    links: [{ label_key: 'link.request-details', icon: 'fa-regular fa-envelope', url: '#contact', type: 'primary' }]
  },
};

// Project Modal Content Generator
function openProject(id) {
  const p = projectData[id];
  if (!p) return;

  window.currentProjectId = id;
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  const pick = (field) => (lang === 'fr' && p[field + '_fr']) ? p[field + '_fr'] : p[field];
  const tr = (key) => (typeof t === 'function') ? t(key) : key;

  const linksHtml = p.links.map(l => {
    const cls = l.type === 'primary' ? 'btn-primary' : 'btn-secondary';
    const tgt = l.url.startsWith('#') ? '_self' : '_blank';
    const label = tr(l.label_key);
    return `<a href="${l.url}" class="${cls}" target="${tgt}" style="display:inline-flex;align-items:center;gap:0.5rem;text-decoration:none;margin-right:0.5rem;margin-bottom:0.5rem;"><i class="${l.icon}"></i> ${label}</a>`;
  }).join('');

  const content = `
    <div class="case-tag">${pick('tag')}</div>
    <h2 class="case-title">${pick('title')}</h2>
    <div class="case-section"><h4>${tr('modal.challenge')}</h4><p>${pick('challenge')}</p></div>
    <div class="case-section"><h4>${tr('modal.solution')}</h4><p>${pick('solution')}</p></div>
    <div class="case-section"><h4>${tr('modal.result')}</h4><p>${pick('result')}</p></div>
    <div class="case-tools">${p.tools.map(tool => `<span class="case-tool">${tool}</span>`).join('')}</div>
    <div class="case-section" style="margin-top:1.5rem;">${linksHtml}</div>
  `;

  const caseContent = document.getElementById('case-content');
  const overlay = document.getElementById('proj-overlay');
  if (caseContent && overlay) {
    caseContent.innerHTML = content;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

// Attach click handlers to project cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.work-card[data-pid]').forEach(card => {
    card.addEventListener('click', () => openProject(parseInt(card.dataset.pid)));
  });

  // Expose openProject globally for any inline needs
  window.openProject = openProject;
});
