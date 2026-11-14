/* =========================================================
   Portfolio interactions — driven by PORTFOLIO_CONFIG
   ========================================================= */

(function () {
  "use strict";

  const cfg = window.PORTFOLIO_CONFIG;
  if (!cfg) {
    console.error("PORTFOLIO_CONFIG is missing. Load config.js before main.js.");
    return;
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Icons (inline SVG) ---------- */
  const ICONS = {
    smartphone:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
    database:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    plug:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 0 1-12 0V8z"/></svg>',
    layout:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    devices:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="14" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><rect x="16" y="10" width="6" height="10" rx="1"/></svg>',
    flame:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3c2 3 2 5 0 7 3-1 6 1 6 5a6 6 0 1 1-12 0c0-3 2-5 3-7 1 2 2 2 3-5z"/></svg>',
    api:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h6"/><path d="M4 12h10"/><path d="M4 17h8"/><circle cx="18" cy="7" r="2"/><circle cx="18" cy="17" r="2"/></svg>',
    "credit-card":
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    bell:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 7 3 7H3s3 0 3-7"/><path d="M10 21h4"/></svg>',
    video:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m16 10 5-3v10l-5-3"/><rect x="2" y="7" width="14" height="10" rx="2"/></svg>',
    puzzle:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 4a2 2 0 0 1 4 0v2h2a2 2 0 1 1 0 4h-2v2a2 2 0 1 1-4 0v-2H8v2a2 2 0 1 1-4 0v-2H2V8h2a2 2 0 1 1 0-4h2V4a2 2 0 0 1 4 0v2h2z"/></svg>',
    wrench:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18.4 5.6 21l6.7-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z"/></svg>',
    gauge:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 14 16 8"/><path d="M5 19a9 9 0 1 1 14 0"/></svg>',
    award:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="M8.5 13 7 22l5-2 5 2-1.5-9"/></svg>',
    code:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6 2 12l6 6"/></svg>',
    "file-code":
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M10 13l-2 2 2 2M14 13l2 2-2 2"/></svg>',
    message:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
    "check-circle":
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg>',
    "life-buoy":
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m7 7 2.2 2.2M17 7l-2.2 2.2M7 17l2.2-2.2M17 17l-2.2-2.2"/></svg>',
    sparkles:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/><path d="M5 15l.6 1.6L7.2 17.2 5.6 17.8 5 19.4l-.6-1.6L2.8 17.2l1.6-.6L5 15z"/></svg>',
    bug:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 9h8"/><path d="M8 15h8"/><rect x="7" y="6" width="10" height="14" rx="5"/><path d="M12 6V3"/><path d="m4 9 3 1"/><path d="m20 9-3 1"/><path d="m4 16 3-1"/><path d="m20 16-3-1"/></svg>',
    refresh:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/></svg>',
    layers:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
    search:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    eye:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    zap:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
    cursor:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4l7 16 2.5-6.5L20 11 4 4z"/></svg>',
    copilot:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="9" cy="10" r="3"/><circle cx="15" cy="10" r="3"/><path d="M4 19c1.5-3 4-4.5 8-4.5S18.5 16 20 19"/></svg>',
    chatgpt:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3a4.5 4.5 0 0 1 4 6.5A4.5 4.5 0 0 1 14 18.8V21l-3-1.5A4.5 4.5 0 0 1 8 9.5 4.5 4.5 0 0 1 12 3z"/></svg>',
    gemini:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2v20M4.5 6.5 19.5 17.5M4.5 17.5 19.5 6.5"/></svg>',
    grok:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>',
    deepseek:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M12 8v8l4-4"/></svg>',
    pyright:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 11 2 2 4-5"/><rect x="4" y="3" width="16" height="18" rx="2"/></svg>',
    git:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="12" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M6 8.5v7"/><path d="M8.2 7.2 15.8 11"/></svg>',
    vscode:
      '<svg class="icon icon--lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m4 6 7-3 9 4v10l-9 4-7-3V6z"/><path d="m11 3v18"/><path d="m4 6 7 4 9-4"/></svg>',
    linkedin:
      '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V23h-4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V23h-4V8.5z"/></svg>',
    github:
      '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 8.2 22.9c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.7 3.6 18.7 3.9 18.7 3.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
    mail:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>',
    phone:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>',
    map:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || ICONS.smartphone;
  }

  function isEditablePlaceholder(text) {
    return typeof text === "string" && text.trim().startsWith("/* EDITABLE");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function whatsappUrl() {
    const phone = cfg.contact.whatsapp.replace(/[^\d]/g, "");
    const text = encodeURIComponent(cfg.whatsappPrefill || "");
    return `https://wa.me/${phone}?text=${text}`;
  }

  /* ---------- Apply static config to DOM ---------- */
  function applyProfile() {
    document.title = cfg.seo?.title || `${cfg.name} | ${cfg.title}`;

    const metaDesc = $('meta[name="description"]');
    if (metaDesc && cfg.seo?.description) metaDesc.setAttribute("content", cfg.seo.description);

    $("#nav-logo").textContent = cfg.shortName || "Muzammil";
    $("#hero-name").textContent = cfg.name;
    $("#hero-headline").textContent = cfg.heroHeadline;
    $("#hero-description").textContent = cfg.heroDescription;
    $("#availability-text").textContent = cfg.availability;
    $("#hero-years").textContent = String(cfg.experienceYears);
    $("#hero-title-chip").textContent = cfg.title;
    $("#hero-location").innerHTML = `${icon("map")} ${escapeHtml(cfg.location)}`;

    const photo = $("#hero-photo");
    if (photo) {
      photo.src = cfg.profileImage;
      photo.alt = `Portrait of ${cfg.name}, ${cfg.title}`;
    }

    const aboutImg = $("#about-image");
    if (aboutImg) {
      aboutImg.src = cfg.aboutImage || cfg.profileImage;
      aboutImg.alt = `${cfg.name} — ${cfg.title}`;
    }

    $("#about-subheading").textContent = cfg.aboutSubheading;
    $("#about-years").textContent = `${cfg.experienceYears}+`;
    $("#about-projects").textContent = `${Math.max(cfg.projects.length, 1)}+`;

    const aboutText = $("#about-text");
    aboutText.innerHTML = (cfg.aboutText || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("");

    ["#hero-cv", "#about-cv", "#contact-cv", "#footer-cv"].forEach((sel) => {
      const el = $(sel);
      if (el) {
        el.setAttribute("href", cfg.resumePath);
        el.setAttribute("download", "Muhammad-Muzammil-CV.pdf");
      }
    });

    const statusDot = $(".hero__status-dot");
    if (statusDot) {
      statusDot.style.background = cfg.availabilityAvailable ? "var(--success)" : "var(--warning)";
    }

    $("#footer-name").textContent = cfg.name;
    $("#footer-title").textContent = cfg.title;
    $("#footer-tagline").textContent = cfg.footerTagline;
    $("#footer-built").textContent = cfg.footerTagline;
    $("#copyright-year").textContent = String(new Date().getFullYear());

    renderSocials();
    renderContactPanel();
  }

  function socialLinks() {
    return [
      { href: cfg.contact.linkedin, label: "LinkedIn", icon: "linkedin" },
      { href: cfg.contact.github, label: "GitHub", icon: "github" },
      { href: `mailto:${cfg.contact.email}`, label: "Email", icon: "mail" },
    ].filter((l) => l.href);
  }

  function renderSocials() {
    const html = socialLinks()
      .map(
        (l) =>
          `<a class="icon-link" href="${escapeHtml(l.href)}" target="_blank" rel="noopener noreferrer" aria-label="${l.label}">${icon(l.icon)}</a>`
      )
      .join("");
    const hero = $("#hero-social");
    const footer = $("#footer-social");
    if (hero) hero.innerHTML = html;
    if (footer) footer.innerHTML = html;
  }

  function renderContactPanel() {
    const list = $("#contact-list");
    list.innerHTML = `
      <div class="contact__item">
        <div class="contact__item-icon">${icon("mail")}</div>
        <div><span>Email</span><a href="mailto:${escapeHtml(cfg.contact.email)}">${escapeHtml(cfg.contact.email)}</a></div>
      </div>
      <div class="contact__item">
        <div class="contact__item-icon">${icon("phone")}</div>
        <div><span>WhatsApp / Phone</span><a href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer">${escapeHtml(cfg.contact.phone)}</a></div>
      </div>
      <div class="contact__item">
        <div class="contact__item-icon">${icon("map")}</div>
        <div><span>Location</span><strong>${escapeHtml(cfg.location)}</strong></div>
      </div>
      <div class="contact__item">
        <div class="contact__item-icon">${icon("linkedin")}</div>
        <div><span>LinkedIn</span><a href="${escapeHtml(cfg.contact.linkedin)}" target="_blank" rel="noopener noreferrer">View profile</a></div>
      </div>
      <div class="contact__item">
        <div class="contact__item-icon">${icon("github")}</div>
        <div><span>GitHub</span><a href="${escapeHtml(cfg.contact.github)}" target="_blank" rel="noopener noreferrer">View repositories</a></div>
      </div>
    `;

    const wa = $("#whatsapp-btn");
    if (wa) {
      wa.href = whatsappUrl();
    }

    $("#footer-contact").innerHTML = `
      <a href="mailto:${escapeHtml(cfg.contact.email)}">${escapeHtml(cfg.contact.email)}</a>
      <a href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer">WhatsApp ${escapeHtml(cfg.contact.phone)}</a>
      <a href="${escapeHtml(cfg.contact.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="${escapeHtml(cfg.contact.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>
    `;
  }

  /* ---------- Skills / AI Tools / Workflow / Services ---------- */
  function renderSkills() {
    $("#skills-grid").innerHTML = cfg.skills
      .map(
        (s) => `
      <article class="skill-card reveal">
        <div class="skill-card__head">
          <div class="skill-card__icon">${icon(s.icon)}</div>
          <h3>${escapeHtml(s.category)}</h3>
        </div>
        <div class="skill-card__tags">
          ${s.items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>`
      )
      .join("");
  }

  function renderAiTools() {
    const grid = $("#ai-tools-grid");
    if (!grid) return;
    const tools = cfg.aiTools || [];
    grid.innerHTML = tools
      .map(
        (t) => `
      <article class="ai-tool-card reveal">
        <div class="ai-tool-card__top">
          <div class="ai-tool-card__icon">${icon(t.icon || "sparkles")}</div>
          <div>
            <p class="ai-tool-card__category">${escapeHtml(t.category)}</p>
            <h3>${escapeHtml(t.name)}</h3>
          </div>
        </div>
        <p class="ai-tool-card__desc">${escapeHtml(t.description)}</p>
        <p class="ai-tool-card__usage"><strong>How I use it:</strong> ${escapeHtml(t.usage)}</p>
      </article>`
      )
      .join("");
  }

  function renderAiWorkflow() {
    const note = $("#ai-workflow-note");
    const grid = $("#ai-workflow-grid");
    if (note) {
      note.innerHTML = `<p>${escapeHtml(cfg.aiWorkflowNote || "")}</p>`;
    }
    if (!grid) return;
    grid.innerHTML = (cfg.aiWorkflow || [])
      .map(
        (w) => `
      <article class="ai-workflow-card reveal">
        <div class="ai-workflow-card__icon">${icon(w.icon || "sparkles")}</div>
        <h3>${escapeHtml(w.title)}</h3>
        <p>${escapeHtml(w.description)}</p>
      </article>`
      )
      .join("");
  }

  function renderServices() {
    $("#services-grid").innerHTML = cfg.services
      .map(
        (s) => `
      <article class="service-card reveal">
        <div class="service-card__icon">${icon(s.icon)}</div>
        <h3>${escapeHtml(s.title)}</h3>
        <p>${escapeHtml(s.description)}</p>
        <a class="btn btn--ghost" href="#contact">Contact Me</a>
      </article>`
      )
      .join("");
  }

  function renderProcess() {
    $("#process-grid").innerHTML = cfg.process
      .map(
        (p) => `
      <article class="process-card reveal">
        <div class="process-card__step">${escapeHtml(p.step)}</div>
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description)}</p>
      </article>`
      )
      .join("");
  }

  function renderWhy() {
    $("#why-grid").innerHTML = cfg.whyHire
      .map(
        (w) => `
      <article class="why-card reveal">
        <div class="why-card__icon">${icon(w.icon)}</div>
        <h3>${escapeHtml(w.title)}</h3>
        <p>${escapeHtml(w.text)}</p>
      </article>`
      )
      .join("");
  }

  /* ---------- Experience ---------- */
  function renderExperience() {
    const timeline = $("#experience-timeline");
    timeline.innerHTML = cfg.experience
      .map((job) => {
        const responsibilities = (job.responsibilities || [])
          .filter((r) => r && !isEditablePlaceholder(r))
          .map((r) => `<li>${escapeHtml(r)}</li>`)
          .join("");
        const achievements = (job.achievements || [])
          .filter((a) => a && !isEditablePlaceholder(a))
          .map((a) => `<li>${escapeHtml(a)}</li>`)
          .join("");
        const tech = (job.technologies || [])
          .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
          .join("");

        return `
        <article class="timeline-item reveal">
          <div class="timeline-card">
            <p class="timeline-card__dates">${escapeHtml(job.dates)}</p>
            <h3>${escapeHtml(job.title)}</h3>
            <p class="timeline-card__company">${escapeHtml(job.company)}${job.location ? ` · ${escapeHtml(job.location)}` : ""}</p>
            ${responsibilities ? `<ul>${responsibilities}</ul>` : ""}
            ${achievements ? `<ul>${achievements}</ul>` : ""}
            <div class="skill-card__tags">${tech}</div>
          </div>
        </article>`;
      })
      .join("");

    const edu = cfg.education || [];
    const note = $("#education-note");
    if (edu.length) {
      note.innerHTML = `<strong>Education:</strong> ${edu
        .map((e) => `${escapeHtml(e.title)} — ${escapeHtml(e.institution)} (${escapeHtml(e.dates)})`)
        .join(" · ")}`;
    } else {
      note.hidden = true;
    }
  }

  /* ---------- Projects ---------- */
  let activeFilter = "all";

  function renderFilters() {
    const filters = $("#project-filters");
    filters.innerHTML = cfg.projectFilters
      .map(
        (f, i) => `
      <button type="button" class="filter-btn${i === 0 ? " is-active" : ""}" data-filter="${escapeHtml(f.id)}" role="tab" aria-selected="${i === 0}">
        ${escapeHtml(f.label)}
      </button>`
      )
      .join("");

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      $$(".filter-btn", filters).forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      renderProjects();
    });
  }

  function filteredProjects() {
    if (activeFilter === "all") return cfg.projects;
    return cfg.projects.filter((p) => (p.category || []).includes(activeFilter));
  }

  function renderProjects() {
    const grid = $("#projects-grid");
    const empty = $("#projects-empty");
    const items = filteredProjects();

    if (!items.length) {
      grid.innerHTML = "";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    grid.innerHTML = items
      .map((p) => {
        const tech = (p.technologies || [])
          .slice(0, 4)
          .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
          .join("");
        const live = p.liveUrl
          ? `<a class="btn btn--ghost" href="${escapeHtml(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Live App</a>`
          : "";
        const gh = p.githubUrl
          ? `<a class="btn btn--ghost" href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub</a>`
          : "";

        return `
        <article class="project-card reveal" data-categories="${escapeHtml((p.category || []).join(" "))}">
          <div class="project-card__media">
            <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)} application screenshot" loading="lazy" width="640" height="400" />
          </div>
          <div class="project-card__body">
            <p class="project-card__category">${escapeHtml(p.categoryLabel || "Project")}</p>
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.shortDescription)}</p>
            <div class="project-card__tech">${tech}</div>
            <div class="project-card__actions">
              <button type="button" class="btn btn--primary" data-project-id="${escapeHtml(p.id)}">View Details</button>
              ${live}
              ${gh}
            </div>
          </div>
        </article>`;
      })
      .join("");

    observeReveals();
  }

  /* ---------- Modal ---------- */
  const modal = $("#project-modal");
  const modalContent = $("#modal-content");
  let lastFocus = null;

  function openModal(projectId) {
    const project = cfg.projects.find((p) => p.id === projectId);
    if (!project) return;

    lastFocus = document.activeElement;

    const features = (project.features || []).map((f) => `<li>${escapeHtml(f)}</li>`).join("");
    const tech = (project.technologies || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");

    const section = (title, body) => {
      if (!body || isEditablePlaceholder(body)) {
        return `
          <div class="modal__section">
            <h3>${escapeHtml(title)}</h3>
            <p class="placeholder-note">Editable placeholder — update this in assets/js/config.js</p>
          </div>`;
      }
      return `
        <div class="modal__section">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(body)}</p>
        </div>`;
    };

    const shots = (project.screenshots || [project.image])
      .map(
        (src) =>
          `<div class="modal__media"><img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} screenshot" loading="lazy" /></div>`
      )
      .join("");

    const live = project.liveUrl
      ? `<a class="btn btn--primary" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">Open Live App</a>`
      : "";
    const gh = project.githubUrl
      ? `<a class="btn btn--secondary" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">View GitHub</a>`
      : "";

    modalContent.innerHTML = `
      <p class="modal__category">${escapeHtml(project.categoryLabel || "Project")}</p>
      <h2 id="modal-title">${escapeHtml(project.title)}</h2>
      ${shots}
      ${section("Project Overview", project.overview)}
      ${section("Problem Statement", project.problem)}
      ${section("My Role", project.role)}
      ${section("Solution", project.solution)}
      <div class="modal__section">
        <h3>Key Features</h3>
        <ul>${features || "<li>Details coming soon</li>"}</ul>
      </div>
      <div class="modal__section">
        <h3>Technologies Used</h3>
        <div class="skill-card__tags">${tech}</div>
      </div>
      ${
        (project.integrations || []).length
          ? `<div class="modal__section"><h3>Integrations</h3><ul>${(project.integrations || [])
              .map((i) => `<li>${escapeHtml(i)}</li>`)
              .join("")}</ul></div>`
          : ""
      }
      ${section("Challenges & Solutions", project.challenges)}
      ${
        project.outcome && !isEditablePlaceholder(project.outcome)
          ? section("Project Outcome", project.outcome)
          : ""
      }
      <div class="modal__actions">${live}${gh}<button type="button" class="btn btn--ghost" data-close-modal>Close</button></div>
    `;

    modal.hidden = false;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    $(".modal__dialog", modal).focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modal.hidden = true;
    modalContent.innerHTML = "";
    document.body.classList.remove("modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function bindModal() {
    document.addEventListener("click", (e) => {
      const openBtn = e.target.closest("[data-project-id]");
      if (openBtn) {
        openModal(openBtn.dataset.projectId);
        return;
      }
      if (e.target.closest("[data-close-modal]")) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  /* ---------- Navigation ---------- */
  function bindNavigation() {
    const menu = $("#nav-menu");
    const toggle = $("#nav-toggle");
    const close = $("#nav-close");
    const overlay = $("#nav-overlay");

    function openMenu() {
      menu.classList.add("is-open");
      overlay.classList.add("is-visible");
      overlay.hidden = false;
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      menu.classList.remove("is-open");
      overlay.classList.remove("is-visible");
      overlay.hidden = true;
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    $$(".nav__link, .nav__mobile-cta").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
    });
  }

  function bindActiveSection() {
    const links = $$(".nav__link");
    const sections = links
      .map((l) => {
        const id = l.getAttribute("href");
        return id && id.startsWith("#") ? $(id) : null;
      })
      .filter(Boolean);

    const header = $("#header");

    function onScroll() {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 12);
      $("#back-to-top").classList.toggle("is-visible", y > 500);

      let current = sections[0];
      sections.forEach((sec) => {
        if (y >= sec.offsetTop - 120) current = sec;
      });

      links.forEach((link) => {
        const match = link.getAttribute("href") === `#${current.id}`;
        link.classList.toggle("is-active", match);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Theme ---------- */
  function bindTheme() {
    const btn = $("#theme-toggle");
    const moon = $(".theme-icon-moon", btn);
    const sun = $(".theme-icon-sun", btn);

    function syncIcons(theme) {
      const isLight = theme === "light";
      // Show icon for the theme you can switch to
      moon.hidden = !isLight;
      sun.hidden = isLight;
      btn.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", isLight ? "#F8FAFC" : "#080D18");
    }

    syncIcons(document.documentElement.getAttribute("data-theme") || "dark");

    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch (e) {}
      syncIcons(next);
    });
  }

  /* ---------- Contact form ---------- */
  function bindContactForm() {
    const form = $("#contact-form");
    const feedback = $("#form-feedback");
    const submitBtn = $("#form-submit");

    function setFeedback(type, message) {
      feedback.className = `form-feedback is-${type}`;
      feedback.textContent = message;
    }

    function validate() {
      const fields = {
        fullName: $("#fullName").value.trim().length >= 2,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#email").value.trim()),
        projectType: Boolean($("#projectType").value),
        message: $("#message").value.trim().length >= 20,
      };

      Object.keys(fields).forEach((key) => {
        const wrap = $(`#${key}`).closest(".form-field");
        wrap.classList.toggle("is-invalid", !fields[key]);
      });

      return Object.values(fields).every(Boolean);
    }

    ["fullName", "email", "projectType", "message"].forEach((id) => {
      $(`#${id}`).addEventListener("input", () => {
        $(`#${id}`).closest(".form-field").classList.remove("is-invalid");
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!validate()) {
        setFeedback("error", "Please fix the highlighted fields and try again.");
        return;
      }

      const payload = {
        fullName: $("#fullName").value.trim(),
        email: $("#email").value.trim(),
        projectType: $("#projectType").value,
        budget: $("#budget").value || "Not specified",
        message: $("#message").value.trim(),
      };

      const endpoint = cfg.form?.formEndpoint;
      if (!endpoint) {
        setFeedback(
          "info",
          "Form validation works. Configure Formspree/EmailJS in assets/js/config.js (form.formEndpoint) to enable email delivery. Meanwhile, use WhatsApp or email to reach me."
        );
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
      setFeedback("info", "Sending your message…");

      try {
        if (cfg.form.formProvider === "formspree") {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error("Form submission failed");
        } else {
          throw new Error("Unsupported form provider");
        }

        form.reset();
        setFeedback("success", "Thank you! Your message has been sent. I'll get back to you soon.");
      } catch (err) {
        setFeedback(
          "error",
          "Something went wrong sending the form. Please email me directly or try WhatsApp."
        );
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    });
  }

  /* ---------- Reveal ---------- */
  let revealObserver;

  function observeReveals() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = $$(".reveal:not(.is-visible)");
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }
    els.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Back to top ---------- */
  function bindBackToTop() {
    $("#back-to-top").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    applyProfile();
    renderSkills();
    renderAiTools();
    renderAiWorkflow();
    renderServices();
    renderProcess();
    renderWhy();
    renderExperience();
    renderFilters();
    renderProjects();
    bindNavigation();
    bindActiveSection();
    bindTheme();
    bindModal();
    bindContactForm();
    bindBackToTop();
    observeReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
