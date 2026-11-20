# DevJobs

A job board for IT startups.

Pages: **Home**, **Jobs**, **Job details** and **Apply**.
Data: jobs, companies and applications, served locally by json-server.

## Stack
- Vite, with plain ES modules and classes (no UI frameworks, no TypeScript)
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

Webpack equivalents (`*:webpack`) are kept from the course template.

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
src/
  styles/       SCSS 7-1: abstracts, base, components, layout, pages, themes, vendors, main.scss
  js/
    api/        http client and endpoints
    core/       store and utilities
    main.js     entry point
index.html
vite.config.js
eslint.config.js
```

## Labs
| Lab | Topic | Status |
|---|---|---|
| 1 | Figma design: design system and 4 pages at 390 / 768 / 1280 | done |
| 2 | Semantic HTML for the 4 pages, navigation, responsive images | planned |
| 3 | SCSS 7-1, responsive layout for 3 breakpoints | planned |
| 4 | JS with json-server: lists, filters, search, sorting, pagination, forms | planned |
