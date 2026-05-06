# NiBTM 7.0

NiBTM 7.0 adalah platform pembelajaran dan ekosistem digital biomedis untuk Nanoimmunobiotechnomedicine, RNA-seq, nanoteknologi, bioinformatika, stem cells, imunologi, AI, IoT, multi-omik, kedokteran presisi, biomedical big data, dan topik biomedis digital masa depan. Penulisan resmi adalah NiBTM: huruf “i” kecil merepresentasikan immunology/imunologi dan filosofi “mikro”, sedangkan huruf “T” kapital merepresentasikan Technology/Teknologi sebagai komponen dominan platform.

## Proposal RIIM Kompetisi

Dokumen proposal RIIM Kompetisi yang telah diperkuat narasinya tersedia di [`docs/proposal-riim-nibtm-7.md`](docs/proposal-riim-nibtm-7.md). Blueprint konsep, fitur, arsitektur produk, roadmap, risiko, user journey, dan pemetaan Renstranas/BRIN tersedia di [`docs/nibtm-7-product-blueprint-riim-brin.md`](docs/nibtm-7-product-blueprint-riim-brin.md). Keduanya menegaskan NiBTM 7.0 sebagai ekosistem pembelajaran, dataset/big data, website, tutor/dosen/mentor, pelajar/mahasiswa/pengguna, komunitas, dan riset digital biomedis yang selaras dengan Renstranas serta agenda kemandirian teknologi nasional.

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

