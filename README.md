# NutriTracker

Full-stack nutrition tracker with food logging, progress tracking, and user profiles.

## Project structure

| Folder | Description |
|--------|-------------|
| `backend/` | Express + MongoDB API (`http://localhost:5000/api`) |
| `frontend/` | **Main app** — React + Vite, JWT auth, API integration |
| `nutritracker/` | Offline demo — React + Vite, localStorage only (no backend) |
| `prototype/` | Static HTML/CSS/JS UI mock |

## Quick start (full stack)

**Backend**

```bash
cd backend
cp .env.example .env   # already created if you cloned a prepared copy
npm install
npm run seed
npm run dev
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

Demo login after seeding: `demo@example.com` / `password`

## Offline demo

```bash
cd nutritracker
npm install
npm run dev
```

No MongoDB or backend required — data is stored in the browser.
