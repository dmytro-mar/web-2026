# DevJobs

A job board for IT startups.

**Preview:** https://dmytro-mar.github.io/web-2026/

Data: jobs, companies and applications, served locally by json-server.

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| Jobs (search, filters, pagination) | `jobs.html` |
| Job details | `job.html` |
| Apply | `apply.html` |
| Application sent | `sent.html` |

## Stack
- Vite, with plain ES modules and classes (no UI frameworks, no TypeScript)
- EJS partials for repeated static blocks, rendered at build time by vite-plugin-ejs
- schema.org `JobPosting` microdata on job cards and the job details page
- i18n-ready markup: `data-i18n` keys with a dictionary in `src/i18n/en.json`
- SCSS with a 7-1 architecture and BEM naming
- axios and dayjs
- json-server 0.17 as the mock REST API
- ESLint (flat config)

## Quick start
Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev:vite
```
- App: http://localhost:5173
- API: http://localhost:5174

## Scripts
| Script | What it does |
|---|---|
| `npm run dev:vite` | Starts Vite and json-server together |
| `npm run build:vite` | Lints, then builds to `dist/` |
| `npm run preview:vite` | Lints, then serves the production build |
| `npm run lint` | Runs ESLint over the project |

## Deployment
Every push to `main` builds the site and publishes `dist/` to GitHub Pages (`.github/workflows/deploy.yml`).

## API
json-server reads `api/db.json`, and `api/routes.json` maps short routes onto its collections. Endpoints for this project:

| Endpoint | Collection |
|---|---|
| `GET /topic9/jobs`, `GET /topic9/jobs/:id` | `t9_jobs` |
| `GET /topic9/companies` | `t9_companies` |
| `GET, POST /topic9/applications` | `t9_applications` |
| `GET /topic9/jobs/:id/applications` | applications for one job |

Query parameters: `_page`, `_limit`, `_sort`, `_order`, `q`, and field filters such as `?level=Junior`. See [api/API_MAP.md](./api/API_MAP.md) for the full list.

## Structure
```
api/            db.json, routes.json (mock API)
src/           Vite root: every src/*.html is a page of the multi-page build
  *.html        pages: index, jobs, job, apply, sent
  partials/     EJS partials: head, footer, job-card, company-logo, company-tile
  data/         sample content for the static pages (used by EJS at build time)
  i18n/         en.json: UI text dictionary for data-i18n keys
  assets/img/   images (webp + jpg)
  styles/       SCSS 7-1: abstracts, base, components, layout, pages, themes, vendors, main.scss
  js/
    api/        http client and endpoints
    core/       store and utilities
    main.js     entry point
vite.config.js
eslint.config.js
```

## Labs
| Lab | Topic | Status |
|---|---|---|
| 1 | Figma design: design system and 4 pages at 390 / 768 / 1280 | done |
| 2 | Semantic HTML for the pages, navigation, responsive images, EJS partials, schema.org, i18n keys | done |
| 3 | SCSS 7-1, responsive layout for 3 breakpoints | planned |
| 4 | JS with json-server: lists, filters, search, sorting, pagination, forms | planned |
