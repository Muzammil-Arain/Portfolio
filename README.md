# Muhammad Muzammil — Portfolio

Premium personal portfolio for **Muhammad Muzammil**, positioned as:

**React Native Developer | AI-Assisted Software Engineer** (Karachi, Pakistan)

Built with **HTML5**, **CSS3**, and **vanilla JavaScript** only (no React / Next.js / Vue / Angular / Bootstrap / Tailwind).

---

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
├── backup-old-portfolio/              # Snapshot of the original legacy site
├── backup-pre-ai-upgrade-*/           # Snapshot taken before this AI upgrade
├── public/                            # Deployable website (Firebase "public")
│   ├── index.html
│   └── assets/
│       ├── css/styles.css             # Dark/light design system
│       ├── js/
│       │   ├── config.js              # ★ Edit all content here
│       │   └── main.js                # Interactions & rendering
│       ├── images/
│       │   ├── profile.jpg
│       │   ├── about.jpg
│       │   └── projects/              # Project screenshots
│       ├── resume/
│       │   └── Muhammad-Muzammil-CV.pdf
│       └── icons/favicon.jpg
├── firebase.json
└── README.md
```

---

## Editing content (central config)

Almost all content lives in:

**`public/assets/js/config.js`**

| Field | Purpose |
| --- | --- |
| `name`, `title`, `experienceYears`, `location` | Profile basics |
| `availability` | Hero status text |
| `contact.*` | Email, WhatsApp, LinkedIn, GitHub |
| `resumePath` | CV download path |
| `skills` | Technical skills by category |
| `aiTools` | AI-Powered Development & Modern Tools |
| `aiWorkflow` | AI-Assisted Development Workflow |
| `services`, `process`, `whyHire` | Services / process / value props |
| `experience`, `education` | Career timeline (from latest CV) |
| `projects` | Featured work + case studies |
| `form.formEndpoint` | Formspree URL |

After editing `config.js`, refresh the browser. No build step required.

---

## Website sections

1. Hero  
2. About Me  
3. Technical Skills  
4. AI-Powered Development & Modern Tools  
5. AI-Assisted Development Workflow  
6. Services  
7. Featured Projects  
8. Professional Experience  
9. Development Process  
10. Why Hire Me?  
11. Contact + Downloadable CV  
12. Footer  

---

## Theme system

- Default preference: **dark premium blue** (`#080D18` palette)
- Optional **light mode** toggle
- First visit: respects `prefers-color-scheme` when no saved preference exists
- Toggle persists in `localStorage` key `portfolio-theme`
- Anti-flash script runs in `index.html` `<head>`

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

## Contact information

Edit `contact` in `config.js`:

```js
contact: {
  email: "muzammilarain912@gmail.com",
  phone: "+923100012746",
  whatsapp: "923100012746",
  linkedin: "https://www.linkedin.com/in/muhammad-muzammil-2b9212217/",
  github: "https://github.com/Muzammil-Arain",
}
```

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

## Experience (from latest CV)

- **CMolds** — React Native Developer (July 2025 — Present)
- **Intellexal Solutions** — Mid-Level React Native Developer (March 2022 — June 2025)

Education:

- Intermediate (Commerce) — Karachi Board
- Web & App Development Course

---

## Genuine projects preserved

Play Store apps kept from the existing portfolio:

| Project | Notes |
| --- | --- |
| Dispute | Google Play listing preserved |
| Fit For All | Google Play listing preserved |
| Rapid Beauty | Google Play listing preserved |
| Sail | Google Play listing preserved |
| My Score | Google Play listing preserved |
| eViale | Intellexal Solutions (CV + portfolio verified) |
| Hylpers | Live — `com.app.hylpers` |
| Walk Plus | CMolds — `com.cmolds.walkplus` |
| SyncdFlow | CMolds — `com.cmolds.syncedflow` |

Some case-study fields are marked editable in `config.js` — fill them with real details when ready.

---

## AI tools presented as professional workflow tools

- Cursor, GitHub Copilot  
- ChatGPT, Google Gemini, Grok, DeepSeek  
- Pyright, Git, GitHub, VS Code  

These are shown as tools you **use**, not products you built.

---

## Notes

- Formspree/EmailJS is not fake-wired — add your endpoint when ready.
- Backups: `backup-old-portfolio/` and `backup-pre-ai-upgrade-*`.
