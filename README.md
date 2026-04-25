# NiBTM 7.0

NiBTM 7.0 adalah web app edukasi dan riset untuk Nanoimmunobiotechnomedicine, RNA-seq, Nanoteknologi, Bioinformatics, Stem Cells, Imunologi, AI, IoT, dan topik biomedis masa depan.

## Tech Stack
- React
- Vite
- JavaScript
- CSS modern
- localStorage (tanpa backend/database eksternal)

## Struktur Folder

```bash
nibtm/
├─ index.html
├─ package.json
├─ vite.config.js
├─ vercel.json
├─ README.md
└─ src/
   ├─ App.jsx
   ├─ data.js
   ├─ main.jsx
   ├─ styles.css
   ├─ components/
   │  ├─ AiIotIdeaCard.jsx
   │  ├─ DashboardStats.jsx
   │  ├─ DatasetCard.jsx
   │  ├─ Footer.jsx
   │  ├─ Hero.jsx
   │  ├─ MentorCard.jsx
   │  ├─ Navbar.jsx
   │  ├─ ResearchIdeaForm.jsx
   │  ├─ SearchFilter.jsx
   │  ├─ TopicCard.jsx
   │  └─ UserSegmentCard.jsx
   └─ utils/
      └─ storage.js
```

## Menjalankan Project

```bash
npm install
npm run dev
```

Lalu buka URL lokal yang diberikan oleh Vite (biasanya `http://localhost:5173`).

## Build Production

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

1. Push repo ke GitHub/GitLab/Bitbucket.
2. Login ke Vercel dan klik **Add New Project**.
3. Import repository.
4. Framework preset pilih **Vite** (biasanya otomatis).
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Klik **Deploy**.

`vercel.json` sudah disiapkan untuk SPA rewrite ke `index.html`.

## Fitur LocalStorage

Aplikasi menggunakan key berikut:
- `savedTopics`
- `learnedTopics`
- `savedDatasets`
- `savedMentors`
- `researchIdeas`
- `savedAiIotIdeas`
- `communityNotes`
- `customTopics`
- `customDatasets`
- `customMentors`
- `customAiIotIdeas`
- `learningPathProgress`

Fitur utilitas data:
- Reset All Data
- Export Data as JSON
- Import Data from JSON

## Halaman Utama
1. Home
2. About NiBTM 7.0
3. Learning Paths
4. Topics
5. Dataset & Big Data
6. Tutors & Mentors
7. Student Community
8. Research Hub
9. AI & IoT Lab
10. Progress Dashboard
11. Admin Mini Panel

