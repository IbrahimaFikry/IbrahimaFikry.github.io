// ============================================================
// DOM Elements Cache
// ============================================================
const dom = {
  prog: document.getElementById('prog'),
  btt: document.getElementById('btt'),
  nav: document.getElementById('site-nav'),
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  themeToggle: document.getElementById('theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),
  navBackdrop: document.getElementById('nav-backdrop'),
  navDrawer: document.getElementById('nav-drawer'),
  projOverlay: document.getElementById('proj-overlay'),
  certOverlay: document.getElementById('cert-overlay'),
  pmClose: document.getElementById('pm-close'),
  cmClose: document.getElementById('cm-close'),
  caseContent: document.getElementById('case-content'),
  certContent: document.getElementById('cert-content'),
  contactForm: document.getElementById('contact-form'),
  formStatus: document.getElementById('form-status'),
  submitBtn: document.getElementById('submit-btn'),
  certShowAll: document.getElementById('cert-show-all')
};

// ============================================================
// Utility Functions
// ============================================================
let scrollTimeout;
let certsExpanded = false;

function showToast(message, type = 'info') {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// Progress Bar & Scroll Handler
// ============================================================
function handleScroll() {
  if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
  scrollTimeout = requestAnimationFrame(() => {
    if (dom.prog) {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      dom.prog.style.width = pct + '%';
    }
    if (dom.btt) dom.btt.classList.toggle('show', window.scrollY > 400);
    if (dom.nav) dom.nav.classList.toggle('sc', window.scrollY > 60);
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });

if (dom.btt) {
  dom.btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// Scroll Reveal Observer
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '50px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================================
// THEME MANAGEMENT - Dark mode default with smooth transitions
// ============================================================

// Sync theme icon with current state
function syncThemeIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (dom.themeIcon) {
    dom.themeIcon.className = isDark ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
  }
}

// Initialize theme - DEFAULT TO DARK MODE
function initTheme() {
  const saved = localStorage.getItem('theme');
  
  // If no saved preference, default to dark mode
  if (!saved) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (dom.themeIcon) dom.themeIcon.className = 'fa-regular fa-moon';
  } else if (saved === 'light') {
    document.documentElement.removeAttribute('data-theme');
    if (dom.themeIcon) dom.themeIcon.className = 'fa-regular fa-sun';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (dom.themeIcon) dom.themeIcon.className = 'fa-regular fa-moon';
  }
  
  syncThemeIcon();
}

// Toggle theme with proper hero repaint
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  
  // Add transition class to prevent flicker
  document.body.classList.add('theme-transitioning');
  
  if (isDark) {
    // Switching to light mode
    html.setAttribute('data-theme', 'light');
    if (dom.themeIcon) dom.themeIcon.className = 'fa-regular fa-sun';
    localStorage.setItem('theme', 'light');
  } else {
    // Switching to dark mode
    html.setAttribute('data-theme', 'dark');
    if (dom.themeIcon) dom.themeIcon.className = 'fa-regular fa-moon';
    localStorage.setItem('theme', 'dark');
  }
  
  // Force repaint of hero section to apply gradients correctly
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.display = 'none';
    hero.offsetHeight; // Force reflow
    hero.style.display = '';
  }
  
  // Force repaint of trust bar
  const trustBar = document.querySelector('.trust-bar');
  if (trustBar) {
    trustBar.style.opacity = '0.99';
    setTimeout(() => { trustBar.style.opacity = ''; }, 10);
  }
  
  // Remove transition class after repaint
  setTimeout(() => {
    document.body.classList.remove('theme-transitioning');
  }, 50);
}

// ============================================================
// Mobile Menu Toggle
// ============================================================
function toggleMenu() {
  if (!dom.navDrawer || !dom.navBackdrop) return;
  const isOpen = dom.navDrawer.classList.contains('open');
  
  dom.navDrawer.classList.toggle('open');
  dom.navBackdrop.classList.toggle('open');
  if (dom.mobileMenuBtn) dom.mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
  document.body.style.overflow = !isOpen ? 'hidden' : '';
}

function closeMenu() {
  if (dom.navDrawer) dom.navDrawer.classList.remove('open');
  if (dom.navBackdrop) dom.navBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// Navigation Active State & Smooth Scroll
// ============================================================
const navSections = ['about', 'work', 'certifications', 'offers', 'services', 'contact'];
const navLinks = document.querySelectorAll('.nav-links a, .nav-drawer a');

function updateActiveNav() {
  let current = '';
  const scrollPosition = window.scrollY + 150;
  
  navSections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        current = sectionId;
      }
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active-nav');
    const href = link.getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('active-nav');
    }
  });
}

document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    }
  });
});

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ============================================================
// Modal Functions
// ============================================================
function closeProject() {
  if (dom.projOverlay) {
    dom.projOverlay.classList.remove('open');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  }
}

function closeCert() {
  if (dom.certOverlay) {
    dom.certOverlay.classList.remove('open');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  }
}

if (dom.projOverlay) {
  dom.projOverlay.addEventListener('click', (e) => {
    if (e.target === dom.projOverlay) closeProject();
  });
}

if (dom.certOverlay) {
  dom.certOverlay.addEventListener('click', (e) => {
    if (e.target === dom.certOverlay) closeCert();
  });
}

if (dom.pmClose) dom.pmClose.addEventListener('click', closeProject);
if (dom.cmClose) dom.cmClose.addEventListener('click', closeCert);

// ============================================================
// ESC Key Handler
// ============================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProject();
    closeCert();
    closeMenu();
  }
});

// ============================================================
// Portfolio Filter
// ============================================================
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    
    document.querySelectorAll('.work-card[data-pid]').forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.style.display = show ? 'block' : 'none';
      if (show) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 40);
      }
    });
  });
});

// ============================================================
// Certificate Category Filter
// ============================================================
document.querySelectorAll('[data-cf]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-cf]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.cf;
    
    document.querySelectorAll('.cert-card').forEach(card => {
      const show = filter === 'all' || card.dataset.cc?.includes(filter);
      card.style.display = show ? 'block' : 'none';
    });
  });
});

// ============================================================
// Certificate Expand/Collapse
// ============================================================
function toggleAllCerts() {
  certsExpanded = !certsExpanded;
  const extras = document.querySelectorAll('.cert-extra');
  
  extras.forEach(el => {
    if (certsExpanded) {
      el.style.display = 'block';
      el.classList.add('cert-revealed');
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 10);
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      setTimeout(() => {
        el.style.display = 'none';
        el.classList.remove('cert-revealed');
      }, 300);
    }
  });
  
  if (dom.certShowAll) {
    dom.certShowAll.textContent = certsExpanded ? 'SHOW FEWER CERTIFICATES ↑' : 'SHOW ALL 23+ CERTIFICATES →';
  }
}

if (dom.certShowAll) {
  dom.certShowAll.addEventListener('click', toggleAllCerts);
}

// ============================================================
// Contact Form Handler
// ============================================================
if (dom.contactForm) {
  dom.contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();
    
    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    
    const originalText = dom.submitBtn?.innerHTML;
    if (dom.submitBtn) {
      dom.submitBtn.disabled = true;
      dom.submitBtn.innerHTML = 'SENDING...';
    }
    
    showToast('Sending your message…', 'info');
    
    try {
      const response = await fetch(dom.contactForm.action, {
        method: 'POST',
        body: new FormData(dom.contactForm),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        showToast("✓ Thanks! I'll respond within 24 hours.", 'success');
        dom.contactForm.reset();
      } else {
        const data = await response.json();
        showToast(data.errors ? `❌ ${data.errors.map(e => e.message).join(', ')}` : '❌ Something went wrong. Please email me directly.', 'error');
      }
    } catch (error) {
      showToast('❌ Network error. Please check your connection or email me directly.', 'error');
    } finally {
      if (dom.submitBtn) {
        dom.submitBtn.disabled = false;
        dom.submitBtn.innerHTML = originalText;
      }
    }
  });
}

// ============================================================
// Clarity Graphic Animation
// ============================================================
function initClarity() {
  const beforeCard = document.querySelector('.cl-before');
  const afterCard  = document.querySelector('.cl-after');
  const arrowCol   = document.querySelector('.cl-arrow-col');
  const arrowFill  = document.querySelector('.cl-arrow-fill');
  const arrowHead  = document.querySelector('.cl-arrow-head');
  const statement  = document.querySelector('.cl-statement');
  const scanLine   = document.querySelector('.cl-scan-line');
  const confBar    = document.querySelector('.cl-conf-bar-fill');
  const s1El       = document.querySelector('.cl-statement-line:first-child');
  const s2El       = document.querySelector('.cl-statement-line:last-child');

  if (!beforeCard) return;

  const afterRows = [
    { row: document.getElementById('cl-row-q'),    val: document.getElementById('cl-val-q'),    text: 'Defined ✓' },
    { row: document.getElementById('cl-row-d'),    val: document.getElementById('cl-val-d'),    text: 'Clean ✓'   },
    { row: document.getElementById('cl-row-dir'),  val: document.getElementById('cl-val-dir'),  text: 'Clear ✓'   },
  ];
  const confRow = document.getElementById('cl-row-conf');
  const confVal = document.getElementById('cl-val-conf');
  const beforeVals = document.querySelectorAll('.cn-val');

  let confTimer = null;

  function typewrite(el, text, speed, cb) {
    let i = 0;
    el.textContent = '';
    const t = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(t); if (cb) cb(); }
    }, speed);
  }

  function countUp(el, target, duration) {
    if (confTimer) clearInterval(confTimer);
    let v = 0;
    const steps = 60;
    const inc = target / steps;
    const interval = duration / steps;
    confTimer = setInterval(() => {
      v = Math.min(v + inc, target);
      el.textContent = Math.round(v) + '%';
      if (v >= target) clearInterval(confTimer);
    }, interval);
  }

  function reset() {
    beforeCard.classList.remove('visible');
    afterCard.classList.remove('visible');
    if (arrowCol)  arrowCol.classList.remove('visible');
    if (arrowFill) arrowFill.classList.remove('visible');
    if (arrowHead) arrowHead.classList.remove('visible');
    if (scanLine) {
      scanLine.classList.remove('run');
      scanLine.style.left = '-60%';
    }
    if (s1El) s1El.textContent = '';
    if (s2El) s2El.textContent = '';
    if (statement) statement.classList.remove('visible');
    afterRows.forEach(r => {
      if (r.val) r.val.textContent = '';
      if (r.row) r.row.classList.remove('cl-row-flash');
    });
    if (confRow) confRow.classList.remove('cl-row-flash');
    if (confVal) confVal.textContent = '0%';
    if (confBar) confBar.style.width = '0%';
  }

  function runSequence() {
    reset();
    setTimeout(() => beforeCard.classList.add('visible'), 80);
    setTimeout(() => {
      beforeVals.forEach((v, i) => {
        setTimeout(() => {
          v.classList.add('cl-glitch');
          setTimeout(() => v.classList.remove('cl-glitch'), 220);
        }, i * 60);
      });
    }, 420);
    setTimeout(() => {
      if (arrowCol)  arrowCol.classList.add('visible');
      if (arrowFill) arrowFill.classList.add('visible');
    }, 640);
    setTimeout(() => {
      if (scanLine) {
        scanLine.classList.add('run');
        scanLine.style.left = '160%';
      }
    }, 720);
    setTimeout(() => {
      if (arrowHead) arrowHead.classList.add('visible');
    }, 950);
    setTimeout(() => afterCard.classList.add('visible'), 1020);
    
    const rowDelays = [1200, 1420, 1640];
    afterRows.forEach((r, i) => {
      setTimeout(() => {
        if (!r.row || !r.val) return;
        r.row.classList.add('cl-row-flash');
        typewrite(r.val, r.text, 36);
        setTimeout(() => r.row.classList.remove('cl-row-flash'), 550);
      }, rowDelays[i]);
    });
    
    setTimeout(() => {
      if (confRow) confRow.classList.add('cl-row-flash');
      if (confVal) countUp(confVal, 100, 900);
      if (confBar) confBar.style.width = '100%';
      setTimeout(() => { if (confRow) confRow.classList.remove('cl-row-flash'); }, 750);
    }, 1860);
    
    setTimeout(() => {
      if (statement) statement.classList.add('visible');
      if (s1El) typewrite(s1El, 'From ambiguity to action', 28);
      setTimeout(() => {
        if (s2El) typewrite(s2El, 'Data that drives decisions', 28);
      }, 800);
    }, 2100);
  }

  runSequence();
}

// ============================================================
// Cursor Effect for Cards
// ============================================================
document.querySelectorAll('.work-card, .service-card, .offer-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', e.clientX - rect.left);
    card.style.setProperty('--y', e.clientY - rect.top);
  });
});

// ============================================================
// Stat Numbers Animation
// ============================================================
const numberObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      if (isNaN(target)) return;
      
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 20);
      numberObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => numberObserver.observe(el));

// ============================================================
// Initialize Everything
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initClarity();
  
  if (typeof initPhilosophyTimeline === 'function') {
    initPhilosophyTimeline();
  }
  
  // Expose global functions needed for inline onclick
  window.toggleTheme = toggleTheme;
  window.toggleMenu = toggleMenu;
  window.closeProject = closeProject;
  window.closeCert = closeCert;
  window.toggleAllCerts = toggleAllCerts;
});