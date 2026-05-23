# NiBTM 7.0 Frontend-only Platform

## Install
```bash
npm install
```

## Run
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Main Features
- Modern SaaS biomedical landing and workspace.
- Interactive Learning Paths, Topics, Datasets, Mentors, and Workspace tabs.
- Local mock data only (no backend, no database).
- Local persistence via `localStorage` (active paths, saved topics/datasets, bookings, ideas, threads, theme, language).
- Export/import/reset local state from Admin Mini Panel.

## Frontend-only Note
This project is 100% frontend-only and suitable for Vercel/Netlify/static hosting.

## localStorage
State key: `nibtm7_local_state` using helper functions:
- `getLocalState()`
- `saveLocalState()`
- `resetLocalState()`
- `exportLocalState()`
- `importLocalState()`
- `calculatePortfolioScore()`

## Reset Local Data
Use **Workspace → Admin Mini Panel → Reset local progress**.
