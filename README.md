# Murad Gakhramanov — Frontend Developer & Tech Lead

A React and TypeScript portfolio focused on commercial frontend work, technical leadership and product delivery. The owner's summary reflects 5+ years of frontend development experience. The site presents experience in banking products, selected delivery case studies, skills, earlier learning projects and downloadable resumes.

[Portfolio](https://wakeupmurad.github.io/murad.gakhraman.cv/) · [LinkedIn](https://www.linkedin.com/in/murad-gakhramanov/) · [GitHub](https://github.com/WakeUpMurad)

## Local development

Use Node.js 22.13+ on the 22.x branch, Node.js 24.x, or Node.js 26+. The project has been checked with Node.js 22.22.0 and npm 10.9.4. `.nvmrc` selects Node.js 22.

```sh
npm ci
npm run dev
```

Open the address printed by Vite, normally `http://localhost:5173/`. `npm start` is also available as an alias. Local development uses the root URL; the production build uses `/murad.gakhraman.cv/` for GitHub Pages.

## Checks and production build

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

- `typecheck` checks application, test and Vite configuration types.
- `test` runs Vitest once with jsdom, React Testing Library and jest-dom. `npm run test:watch` starts watch mode.
- `build` checks types and creates the production site in `dist/`.
- `preview` serves the built site locally at the address Vite prints. Use `/murad.gakhraman.cv/` when previewing the GitHub Pages build.

The Quality checks workflow runs the same checks on pull requests and pushes to `main` or `master`. It can also be started manually.

## Publish to GitHub Pages

Publishing is a separate manual action. After reviewing and committing the desired site:

1. In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
2. Open **Actions → Publish to GitHub Pages → Run workflow** and choose the branch to publish.
3. The workflow installs the lockfile dependencies, runs checks, builds `dist/`, and publishes that artifact.

The publication workflow is only triggered through `workflow_dispatch`; pushing a commit does not publish the site. This repository is configured for `https://wakeupmurad.github.io/murad.gakhraman.cv/`. If the repository or domain changes, update the build base in `vite.config.ts`, canonical/social URLs in `index.html`, and `public/sitemap.xml` and `public/robots.txt` together.

See the [Vite static deployment guide](https://vite.dev/guide/static-deploy.html#github-pages) and [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Content and assets

- `src/` contains the React interface, content and styles. Navigation uses in-page anchors.
- `public/resume/` contains the downloadable English and Russian PDFs.
- `applications/` contains editable resume/profile copy and application preparation notes. These files are not bundled into the public site.
- `index.html` contains the page title, description, canonical URL, social metadata and Person structured data.
- `public/favicon.svg` contains the MG mark; `public/social-card.svg` is the editable source for the 1200 × 630 PNG social preview.
- `test/setup.ts` provides shared DOM matchers, cleanup and local-storage isolation.

The portfolio uses owner-provided experience and achievements: frontend development at Sberbank and RSHB-Intech; leadership of a frontend team of four within a product cluster; an insurance frontend delivered from scratch in 1.5 months and launched to production; more than five insurance products in production; modernization with Zustand and TanStack Query; a reusable FullCalendar wrapper; contributions to CRM systems and website builders; code review and mentoring. The owner also confirmed active use of AI tools in daily development; the content describes this with responsibility for reviewing the resulting code.

Numbers are limited to the supplied achievements. The site does not claim unprovided revenue, traffic, test coverage or performance percentages. Commercial case studies describe responsibilities and outcomes without publishing internal source code or private product data. Learning projects are presented separately from commercial work.

When updating experience, keep dates, role wording and measurable outcomes consistent across the site, resumes and LinkedIn. Regenerate the PDFs after changing their source text and check the rendered pages.

## Stack

React 18 · TypeScript · Vite · CSS · Vitest · React Testing Library

React is retained at version 18.3.1. The original Create React App, UI library and router dependencies have been replaced with a small Vite setup and native React/CSS interface. Runtime dependencies are React and React DOM.
