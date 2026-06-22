# NutriTracker

Demo full-stack (frontend-first) project demonstrating a modern React + Vite dashboard for tracking nutrition.

Features
- React + Vite frontend
- Add / delete food entries (stored in Local Storage)
- Dashboard, Food Log, Progress, Profile pages
- Docker & Docker Compose
- Nginx production config
- Jenkinsfile and GitHub Actions CI

Quick start

Install dependencies:
```bash
npm ci
```

Run dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Run with Docker Compose:
```bash
docker compose up --build
```

Deployment notes
- See `nginx.conf` for production static hosting config.
- `Jenkinsfile` shows a minimal build and archive pipeline.
- Add any backend API integration by replacing Local Storage with HTTP service in `src/services`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
