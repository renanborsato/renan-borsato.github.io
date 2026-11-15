# GitHub Pages Portfolio

Renan Borsato’s continuous-page portfolio, built with Next.js 14, React, and Tailwind CSS and exported as a static site for GitHub Pages.

The page contains an introduction, an IT résumé, three project and experience descriptions, guiding principles with eight spiritual readings, an ethics analysis, a personal reflection, references, and contact links. Navigation uses native URL fragments (`#home`, `#about`, `#projects`, `#faith`, `#ethics`, `#reflection`, `#references`, and `#contact`). Individual project entries and references also support direct links.

Personal content comes from the supplied portfolio draft and confirmed follow-up details. No named full stack application is included because its details have not been supplied. Future additions may include robot photos/code and permitted teaching resources; do not substitute sample achievements or invented evidence.

## Content and components

- `src/app/page.jsx` sets the section order.
- `src/app/data/portfolio.js` holds the introduction, project descriptions, guiding principles, and spiritual readings.
- `src/app/components/About.jsx` contains the résumé; `Ethics.jsx`, `Reflection.jsx`, and `References.jsx` contain their respective sections.
- `src/app/components/Navbar.jsx` provides the sticky navigation, active-section indicator, mobile menu with Escape-key support, and persistent dark-mode toggle.
- `src/app/globals.css` sets responsive layouts, focus indicators, readable text widths, and header clearance for anchors. Smooth scrolling is disabled when the visitor requests reduced motion.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the server on http://localhost:3000:

```bash
npm run dev
```

Run checks and generate the static export:

```bash
npm run lint
npm run build
```

The production build writes the deployable site to `out/`; no separate export step is needed. Review desktop and mobile layouts, fragment navigation, and external source links when changing content.

## GitHub Actions

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment is triggered when a new
commit is pushed to the `main` branch.
