# Person viewer Frontend DevOps

![Build](https://github.com/Torokzoliii/person-viewer-frontend-devops/actions/workflows/ci.yml/badge.svg)

Local development
- Install: `npm ci`
- Start dev server: `npm run start` (opens browser)

Testing
- Run tests once: `npm run test`
- Watch mode: `npm run test:watch`

Lint & formatting
- Lint: `npm run lint` (requires Angular ESLint packages)
- Format: `npm run format`

Docker build & run (local)
- Build: `docker build -t person-viewer-frontend-devops:latest .`
- Run: `docker run -p 4200:80 person-viewer-frontend-devops:latest`
- The container serves the built SPA on port 80 (mapped to host 8080 above).

CI (GitHub Actions)
- The provided workflow runs on pushes/PRs to `main` and executes: install → lint → test → build → docker build (tags with commit sha).
- To push images to a registry, add authentication steps and set `push: true` in the workflow; provide registry credentials via GitHub secrets.

Notes
- Dockerfile copies `dist/frontend`. If your Angular project has a different output path or project name, update the Dockerfile accordingly.
- For ESLint you should add `@angular-eslint/*` packages and run the ESLint schematic or install the packages listed in `.eslintrc.json`.
