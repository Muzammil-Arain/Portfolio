# Muhammad Muzammil — Portfolio

Premium personal portfolio for **Muhammad Muzammil**, React Native Developer (Karachi, Pakistan).

Built with **HTML5**, **CSS3**, and **vanilla JavaScript** (no React/Vue/Angular/Bootstrap/Tailwind).

## Quick start

The live site is served from the `public/` folder (Firebase Hosting).

### Option A — open locally

1. Open `public/index.html` in a modern browser  
   **or** open the repo root `index.html` (redirects to `public/`).

### Option B — local static server (recommended)

```bash
# From the repository root
npx serve public
```

Then visit the URL shown in the terminal (usually `http://localhost:3000`).

### Option C — Firebase Hosting

```bash
firebase login
firebase deploy --only hosting
```

Project ID is configured in `.firebaserc`.

---

## Project structure

```
Portfolio/
├── backup-old-portfolio/     # Snapshot of the previous site
├── public/                   # Deployable website (Firebase "public")
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/
│       │   ├── config.js     # ★ Edit content here
│       │   └── main.js
│       ├── images/
│       │   ├── profile.png   # Profile photo
│       │   ├── about.jpg
│       │   └── projects/     # Project screenshots
│       ├── resume/
│       │   └── Muhammad-Muzammil-CV.pdf
│       └── icons/favicon.jpg
├── firebase.json
└── README.md
```

The previous portfolio is also preserved on git branch `backup/old-portfolio-pre-redesign`.

---

## Editing content (central config)

Almost all content lives in:

**`public/assets/js/config.js`**

Update:

| Field | Purpose |
| --- | --- |
| `name`, `title`, `experienceYears`, `location` | Profile basics |
| `availability` | Hero status text |
| `contact.*` | Email, WhatsApp, LinkedIn, GitHub |
| `resumePath` | CV download path |
| `skills`, `services`, `process`, `whyHire` | Section content |
| `experience`, `education` | Career timeline |
| `projects` | Featured work + case studies |
| `testimonials` | Only add **genuine** quotes |
| `form.formEndpoint` | Formspree URL |

After editing `config.js`, refresh the browser. No build step required.

---

## Update profile photo

1. Replace `public/assets/images/profile.png` (or add `profile.jpg`).
2. If you change the filename, update `profileImage` in `config.js`.
3. Recommended size: square, at least 800×800.

About section image: `public/assets/images/about.jpg` (`aboutImage` in config).

---

## Replace CV / resume

1. Export your real CV as PDF.
2. Save it as:

```text
public/assets/resume/Muhammad-Muzammil-CV.pdf
```

3. Or change `resumePath` in `config.js` to match your filename.

Do not invent credentials in the PDF.

---

## Add or update projects

In `config.js` → `projects` array, add an object:

```js
{
  id: "my-app",
  title: "My App",
  category: ["mobile", "business"], // used by filters
  categoryLabel: "Mobile Application",
  image: "assets/images/projects/my-app.jpg",
  shortDescription: "Short card summary.",
  technologies: ["React Native", "Firebase"],
  features: ["Feature one", "Feature two"],
  liveUrl: "https://play.google.com/...",
  githubUrl: "", // optional
  overview: "...",
  problem: "...",
  role: "...",
  solution: "...",
  challenges: "...",
  screenshots: ["assets/images/projects/my-app.jpg"],
}
```

Place screenshots in `public/assets/images/projects/`.

Fields starting with `/* EDITABLE` are intentional placeholders — replace them with real case-study details.

---

## Update experience

Edit `experience` (and optionally `education`) in `config.js`.  
Do not invent employers or dates. The current entries were preserved from the previous portfolio:

- Intellexal Solutions — Mobile App Developer (2024 — Present)
- Parallel Solution — Jr Mobile App Developer (2022 — 2024)
- Ayan Tech — Web & Mobile App Development (2021 — 2022)

---

## Contact information

Edit `contact` in `config.js`:

```js
contact: {
  email: "muzammilarain912@gmail.com",
  phone: "+923100012746",
  whatsapp: "923100012746", // digits only, country code included
  linkedin: "https://www.linkedin.com/in/muhammad-muzammil-2b9212217/",
  github: "https://github.com/Muzammil-Arain",
}
```

WhatsApp inquiry uses `whatsappPrefill` for the prefilled message.

---

## Configure the contact form

Frontend validation works out of the box. Email delivery needs a provider.

### Formspree

1. Create a form at [formspree.io](https://formspree.io/).
2. Copy the endpoint (e.g. `https://formspree.io/f/xxxxxxxx`).
3. In `config.js`:

```js
form: {
  formProvider: "formspree",
  formEndpoint: "https://formspree.io/f/xxxxxxxx",
}
```

Until this is set, the form shows a clear setup message and does **not** claim successful email delivery.

---

## Theme system

- Default: **dark premium blue**
- First visit: respects `prefers-color-scheme` when no saved preference exists
- Toggle persists in `localStorage` key `portfolio-theme`
- Anti-flash script runs in `index.html` `<head>`

---

## Features included

- Sticky responsive navigation + hamburger menu
- Dark / light themes
- Skills, services, process, why-hire sections
- Project filters + detail modal case studies
- Experience timeline
- Testimonials empty state (no fabricated quotes)
- Contact form validation + WhatsApp CTA
- CV download links
- Scroll reveal, active section, back-to-top
- SEO meta tags, Open Graph, accessibility basics
- Reduced-motion support

---

## Genuine projects preserved

From the previous portfolio (Play Store links kept):

| Project | Company context |
| --- | --- |
| Dispute | Parallel Solution |
| Fit For All | Parallel Solution |
| Rapid Beauty | Parallel Solution |
| Sail | Parallel Solution |
| My Score | Parallel Solution |
| eViale | Intellexal Solutions |

---

## Notes

- Testimonials were **not** carried over from commented template placeholders in the old site.
- Some case-study fields are marked editable — fill them with real details when ready.
- Old CSS/JS (including Swiper) remains under `public/assets` legacy paths but is unused by the redesign; safe to delete later if desired.
- Backup copy: `backup-old-portfolio/` and git branch `backup/old-portfolio-pre-redesign`.
