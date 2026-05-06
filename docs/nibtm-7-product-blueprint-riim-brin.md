# Blueprint Konsep, Fitur, dan Arsitektur Produk NiBTM 7.0 untuk RIIM BRIN

## Catatan posisi produk

NiBTM 7.0 adalah purwarupa/dummy software berbasis website untuk ekosistem pembelajaran, riset, data, dan pengembangan kapasitas biomedis digital. Platform ini **bukan alat diagnosis medis**, **bukan pengganti psikolog/psikiater/dokter**, dan tidak boleh digunakan untuk menetapkan diagnosis atau terapi klinis. Seluruh modul kesehatan mental/depresi diposisikan untuk edukasi, literasi, screening awal non-klinis, dan riset berbasis data agregat anonim dengan validasi ahli serta kepatuhan etik penelitian.

Penulisan resmi adalah **NiBTM**. Huruf **i** ditulis kecil untuk merepresentasikan *immunology*/imunologi dan filosofi mikro pada tingkat seluler, molekuler, serta imunologis. Huruf **T** ditulis kapital untuk merepresentasikan *Technology*/Teknologi sebagai komponen dominan, termasuk website, AI/ML, IoT, analitik data, dan infrastruktur pembelajaran digital.

---

## 1. Ringkasan konsep fitur NiBTM 7.0 yang sudah dimaksimalkan

NiBTM 7.0 dirancang sebagai ekosistem digital biomedis yang menyatukan sepuluh komponen utama: materi pembelajaran, dataset/big data, sumber rujukan digital, tutor/dosen/mentor, pelajar/mahasiswa/pengguna umum, komunitas pembelajaran, modul riset, AI/ML, gamifikasi edukatif, dan roadmap pengembangan menuju skala nasional. Dengan pendekatan tersebut, NiBTM 7.0 tidak hanya menjadi website informasi, tetapi menjadi purwarupa platform nasional untuk memperkuat literasi dan kompetensi biomedis digital.

Substansi platform mencakup RNA-seq, nanoteknologi, bioinformatika, stem cells, imunologi, AI, IoT, multi-omik, biomedical big data, digital health, kedokteran presisi, serta kesehatan mental/depresi sebagai salah satu use case awal yang realistis untuk pilot pada siswa SMA. Use case kesehatan mental ditempatkan secara hati-hati sebagai modul edukasi dan riset non-diagnostik, dengan instrumen psikologis yang harus divalidasi oleh psikolog/psikiater dan didukung informed consent, anonimisasi data, serta rujukan informasi bantuan profesional.

Prinsip pengembangan utama NiBTM 7.0 adalah **“data dulu, baru AI”**. AI/ML tidak dijadikan klaim utama sejak awal, tetapi dikembangkan bertahap setelah struktur data, instrumen, standar metadata, validasi ahli, dan tata kelola etik tersedia. Pada tahun pertama, fokus diarahkan pada MVP/purwarupa, learning path bertingkat, dataset hub dasar, AI tutor berbasis knowledge base terkurasi, dashboard pengguna, pilot siswa SMA, validasi usability, HKI software, dan artikel ilmiah.

---

## 2. Daftar fitur utama dan subfitur

### 2.1 Learning Path Bertingkat

| Komponen | Subfitur | Sasaran pengguna | Catatan implementasi |
|---|---|---|---|
| Segmentasi pengguna | Jalur siswa SMA, mahasiswa, guru/dosen, peneliti pemula, profesional kesehatan/biomedis | Semua target | Onboarding memilih profil pengguna dan minat topik. |
| Level pembelajaran | Beginner, intermediate, advanced, researcher | Semua target | Setiap level memiliki capaian pembelajaran dan prasyarat. |
| Struktur modul | Materi, kuis, studi kasus, dataset contoh, rekomendasi bacaan | Pelajar, mahasiswa, dosen, peneliti | Konten divalidasi ahli bioinformatika/biomedis. |
| Topik biomedis | RNA-seq, nanoteknologi, bioinformatika, stem cells, imunologi, AI, IoT, multi-omik, digital health, kedokteran presisi | Semua target | Topik disusun dari literasi dasar sampai riset terapan. |
| Evaluasi belajar | Pre-test, post-test, kuis per modul, rubrik mini project | Siswa/mahasiswa | Data digunakan untuk learning analytics, bukan diagnosis. |

### 2.2 Edu-Entertainment dan Gamifikasi Ilmiah

| Fitur | Deskripsi | Prinsip batasan |
|---|---|---|
| Badge kompetensi | Badge untuk capaian seperti “RNA-seq Beginner”, “Bioinformatics Explorer”, “Data Ethics Learner” | Badge merepresentasikan penyelesaian pembelajaran, bukan kompetensi klinis. |
| Poin belajar | Poin dari membaca materi, menyelesaikan kuis, mengunggah catatan, mengikuti misi | Poin tidak menggantikan penilaian akademik formal. |
| Level pengguna | Level literasi berdasarkan progres learning path | Transparan dan dapat dijelaskan kepada pengguna. |
| Leaderboard edukatif | Peringkat berbasis kontribusi belajar atau kelompok | Hindari kompetisi berlebihan; dapat dibuat berbasis tim/sekolah. |
| Mission/challenge | Tantangan analisis dataset dummy, studi kasus bioinformatika, kuis literasi mental health | Challenge harus aman, edukatif, dan non-diagnostik. |
| Progress tracker | Persentase modul selesai, skor kuis, dataset yang dipelajari | Tersedia di dashboard pengguna. |
| Sertifikat modul | Sertifikat penyelesaian modul atau workshop | Sertifikat menyatakan partisipasi/penyelesaian, bukan lisensi klinis. |
| Simulasi kasus sederhana | Simulasi alur interpretasi data, pipeline RNA-seq, atau skenario literasi kesehatan mental | Simulasi tidak memberi keputusan diagnosis/terapi. |

### 2.3 Dataset dan Big Data Hub

| Fitur | Subfitur | Keterangan |
|---|---|---|
| Katalog dataset | Dataset dummy, publik, edukatif, pilot, non-klinis, kuesioner tervalidasi | Metadata menjelaskan sumber, format, lisensi, dan batas penggunaan. |
| Dataset pembelajaran | Dataset kecil untuk latihan RNA-seq, multi-omik, IoT, dan kuesioner edukatif | Aman digunakan untuk siswa/mahasiswa. |
| Dataset pilot | Data pre-test/post-test, usability, minat belajar, kuesioner non-klinis | Wajib informed consent dan anonimisasi. |
| Metadata dan kualitas data | Kamus data, versi dataset, status validasi, kelengkapan variabel | Fondasi sebelum AI/ML. |
| Data governance | Role-based access, audit log, anonimisasi, retensi data | Menyesuaikan protokol etik dan kebutuhan RIIM. |

### 2.4 Modul Kesehatan Mental/Depresi sebagai Use Case Awal

| Fitur | Subfitur | Batasan penting |
|---|---|---|
| Edukasi depresi dan kesehatan mental | Materi literasi, faktor risiko umum, mitos dan fakta, kapan mencari bantuan | Tidak menggantikan konsultasi profesional. |
| Kuesioner tervalidasi | Instrumen yang dipilih dan disetujui psikolog/psikiater | Digunakan untuk edukasi/screening awal non-klinis dan riset, bukan diagnosis. |
| Dashboard agregat anonim | Statistik tren kelompok, distribusi respons, pre-test/post-test literasi | Tidak menampilkan identitas individu. |
| Rekomendasi edukasi | Modul lanjutan, bacaan, video literasi, tips mencari bantuan | Hindari rekomendasi terapi personal. |
| Rujukan bantuan profesional | Informasi umum layanan konseling/sekolah/fasilitas kesehatan | Disusun bersama ahli klinis dan lembaga terkait. |
| Analisis tren non-klinis | Pola literasi, engagement, dan kebutuhan edukasi | Tidak menyimpulkan penyakit individu. |

### 2.5 AI Tutor dan Mentor Digital

AI tutor NiBTM 7.0 dirancang sebagai asisten pembelajaran berbasis knowledge base terkurasi. Fitur utamanya meliputi:

1. menjawab pertanyaan berdasarkan materi resmi NiBTM;
2. mengarahkan pengguna ke modul yang relevan;
3. menjelaskan istilah RNA-seq, bioinformatika, imunologi, AI, IoT, multi-omik, nanoteknologi, stem cells, dan kedokteran presisi;
4. memberikan rekomendasi learning path sesuai profil pengguna;
5. memberi rangkuman materi dan latihan kuis;
6. menampilkan disclaimer edukatif pada interaksi kesehatan;
7. menolak permintaan diagnosis, terapi, atau interpretasi klinis individual;
8. menyimpan log interaksi secara aman untuk evaluasi fitur, dengan anonimisasi sesuai protokol.

### 2.6 AI/ML Analytics Bertahap

| Tahap | Fokus | Output realistis | Status prioritas |
|---|---|---|---|
| Tahap 1 | Pengumpulan dan strukturisasi data | Form data, metadata, validasi input, kamus data | Prioritas tahun 1 |
| Tahap 2 | Analisis deskriptif dan dashboard | Statistik pengguna, pre-test/post-test, engagement, tren agregat | Prioritas tahun 1-2 |
| Tahap 3 | Model prediktif/klasifikasi sederhana | Model awal untuk rekomendasi belajar atau pola risiko non-klinis jika data cukup | Tahun 2 dengan validasi |
| Tahap 4 | Personalisasi pembelajaran | Rekomendasi modul berdasarkan progres dan minat | Tahun 2-3 |
| Tahap 5 | Digital twin/simulasi lanjutan | Simulasi parameter biologis/psikologis edukatif, integrasi IoT | Roadmap tahun 3+ |

Kegunaan AI perlu dinyatakan eksplisit: edukasi, rekomendasi pembelajaran, screening awal non-klinis, analisis pola agregat, prediksi risiko berbasis riset jika data memadai, atau simulasi edukatif. Untuk tahun pertama, AI sebaiknya difokuskan pada edukasi, rekomendasi learning path, dan dashboard deskriptif.

### 2.7 Computer Vision dan Digital Twin sebagai Roadmap Lanjutan

Fitur lanjutan yang dapat disiapkan dalam desain arsitektur, tetapi tidak dijadikan beban MVP tahun pertama, meliputi:

- AI + computer vision untuk pengenalan citra biomedis edukatif;
- digital twin modeling untuk simulasi parameter biologis/psikologis secara edukatif;
- dashboard simulasi perubahan parameter;
- integrasi IoT kesehatan atau wearable untuk data non-klinis;
- visualisasi multi-omik, citra, sinyal, dan data longitudinal;
- simulasi kondisi biologis/psikologis sebagai alat pembelajaran, bukan diagnosis.

### 2.8 Tutor, Dosen, dan Expert Directory

Subfitur direktori ahli:

- profil tutor/dosen/mentor;
- bidang kepakaran;
- materi yang diampu;
- jadwal mentoring;
- topik riset;
- tautan publikasi;
- peluang kolaborasi;
- label validasi keahlian;
- fitur permintaan mentoring atau diskusi kelompok.

### 2.9 Research Hub

Subfitur Research Hub:

- pencatatan ide riset;
- template mini proposal;
- pencocokan mahasiswa dengan mentor;
- manajemen referensi;
- kelompok belajar dan kelompok riset;
- penghubung dataset dengan topik riset;
- ruang kolaborasi nasional dan internasional;
- log progres riset;
- repositori output seperti poster, ringkasan, dan draft artikel.

### 2.10 Dashboard Pengguna dan Admin/Peneliti

| Dashboard | Fitur | Tujuan |
|---|---|---|
| Pengguna | Progress belajar, modul selesai, skor kuis, dataset dipelajari, ide riset, interaksi AI tutor | Meningkatkan keterlibatan dan refleksi belajar. |
| Admin/peneliti | Statistik pengguna, sebaran responden, hasil kuesioner agregat, pre-test/post-test, engagement fitur, laporan RIIM | Evaluasi pilot, pelaporan riset, dan perbaikan sistem. |

### 2.11 Validasi Ahli dan Etik

Prosedur wajib:

- validasi materi oleh ahli bioinformatika, biomedis, imunologi, AI, dan topik terkait;
- validasi instrumen psikologis oleh psikolog/psikiater;
- informed consent, termasuk persetujuan orang tua/wali bila melibatkan siswa di bawah umur sesuai ketentuan etik;
- anonimisasi/pseudonimisasi data;
- perlindungan data pengguna dan pembatasan akses;
- disclaimer non-diagnostik;
- review etik penelitian sebelum pengumpulan data responden;
- mekanisme eskalasi informasi bantuan profesional bila pengguna membutuhkan dukungan.

---

## 3. User journey

### 3.1 Siswa SMA

1. Membuka NiBTM 7.0 dan membaca penjelasan bahwa platform bersifat edukatif dan non-diagnostik.
2. Mendaftar sebagai siswa, mengisi persetujuan sesuai protokol, dan memilih minat awal: biomedis dasar, bioinformatika, AI kesehatan, atau kesehatan mental.
3. Mengikuti pre-test literasi biomedis/digital health.
4. Masuk ke Learning Path Beginner untuk siswa SMA.
5. Menyelesaikan materi pendek, kuis, studi kasus sederhana, dan dataset dummy.
6. Mengikuti mission edukatif, memperoleh badge, dan memantau progress tracker.
7. Bila mengikuti modul kesehatan mental, siswa mengisi kuesioner tervalidasi hanya untuk edukasi/screening awal non-klinis sesuai izin dan protokol etik.
8. Menerima rekomendasi modul edukasi dan informasi bantuan profesional secara umum bila relevan.
9. Mengikuti post-test dan survei usability.
10. Data digunakan secara agregat anonim untuk evaluasi pilot dan pengembangan platform.

### 3.2 Mahasiswa

1. Mendaftar sebagai mahasiswa dan memilih bidang minat: RNA-seq, multi-omik, AI/ML, imunologi, digital health, atau research methods.
2. Mengambil learning path intermediate/advanced.
3. Mengakses dataset publik/dummy dan notebook atau panduan analisis.
4. Menggunakan AI tutor untuk memahami istilah dan alur analisis.
5. Mencatat ide riset di Research Hub.
6. Memilih mentor dari Expert Directory.
7. Menyusun mini proposal dan menghubungkannya dengan dataset.
8. Mendapat umpan balik mentor dan sertifikat penyelesaian modul.

### 3.3 Dosen/Mentor

1. Membuat profil kepakaran, topik mentoring, jadwal, dan tautan publikasi.
2. Mengampu modul pembelajaran atau melakukan validasi materi.
3. Melihat daftar mahasiswa/kelompok belajar yang meminta mentoring.
4. Memberikan umpan balik pada mini proposal, dataset pilihan, dan hasil analisis.
5. Mengusulkan topik riset kolaboratif atau materi baru.
6. Berkontribusi pada peningkatan kualitas konten dan kurasi referensi.

### 3.4 Peneliti

1. Mengakses Research Hub dan Dataset Hub.
2. Meninjau metadata dataset, status validasi, dan batas penggunaan.
3. Mendesain studi pilot atau analisis pembelajaran.
4. Melihat dashboard agregat anonim terkait penggunaan, pre-test/post-test, dan engagement.
5. Mengunduh laporan terkurasi sesuai izin akses dan protokol etik.
6. Menghasilkan luaran berupa artikel, policy brief, HKI software, atau modul diseminasi.

### 3.5 Admin

1. Mengelola role pengguna, modul, dataset, dan mentor.
2. Memastikan konten memiliki status validasi ahli.
3. Mengaktifkan/mematikan modul sensitif seperti kuesioner kesehatan mental sesuai protokol.
4. Memantau statistik pengguna, sebaran responden, performa kuis, dan engagement.
5. Menghasilkan laporan evaluasi RIIM.
6. Mengelola keamanan data, audit log, dan permintaan penghapusan data.

---

## 4. Arsitektur modul sistem

### 4.1 Lapisan arsitektur konseptual

| Lapisan | Modul | Fungsi |
|---|---|---|
| Presentation layer | Website, landing page, dashboard, responsive UI | Akses pengguna melalui browser. |
| Learning layer | Learning Path, kuis, studi kasus, sertifikat | Pembelajaran bertingkat berbasis segmentasi pengguna. |
| Data layer | Dataset Hub, metadata, kamus data, consent record, anonimisasi | Fondasi “data dulu, baru AI”. |
| Research layer | Research Hub, mini proposal, referensi, kolaborasi | Menghubungkan pembelajaran dengan riset. |
| Expert layer | Expert Directory, mentoring, validasi konten | Menjaga mutu ilmiah dan pendampingan. |
| AI/ML layer | AI tutor, rekomendasi belajar, analytics, model awal | Bertahap sesuai kesiapan data dan validasi. |
| Governance layer | Etik, informed consent, role-based access, audit log, disclaimer | Perlindungan pengguna dan kepatuhan riset. |
| Reporting layer | Dashboard admin/peneliti, laporan RIIM, ekspor agregat | Evaluasi pilot dan luaran program. |

### 4.2 Modul utama untuk tim software development

1. **Frontend Web App**: landing page, navigasi, halaman learning path, dataset hub, mentor directory, research hub, dashboard pengguna, dashboard admin.
2. **Content Management**: manajemen materi, kuis, bacaan, studi kasus, status validasi ahli, versi konten.
3. **User and Role Management**: role siswa, mahasiswa, dosen/mentor, peneliti, admin; izin akses berbasis role.
4. **Learning Engine**: progres modul, skor kuis, badge, poin, sertifikat, rekomendasi learning path.
5. **Dataset Management**: katalog dataset, metadata, kamus data, data dummy/publik/pilot, status lisensi, status validasi.
6. **Mental Health Use Case Module**: edukasi, kuesioner tervalidasi, consent, dashboard agregat anonim, rujukan bantuan profesional.
7. **AI Tutor Service**: knowledge base terkurasi, retrieval, guardrail non-diagnostik, log interaksi anonim.
8. **Analytics Service**: statistik deskriptif, pre-test/post-test, engagement, learning analytics, ekspor laporan.
9. **Research Collaboration Service**: ide riset, mini proposal, grup belajar, pencocokan mentor, referensi.
10. **Governance and Security**: consent, anonimisasi, audit log, retensi data, hak akses, backup, kebijakan privasi.
11. **Roadmap Extension**: integrasi IoT, computer vision, digital twin, visualisasi multi-modal.

### 4.3 Alur data prioritas

1. Pengguna melakukan onboarding dan memberikan consent bila terlibat riset.
2. Sistem menyimpan profil minimal dan preferensi pembelajaran.
3. Pengguna mengikuti learning path, kuis, dan studi kasus.
4. Sistem mencatat progres, skor, dan engagement.
5. Bila modul pilot aktif, pengguna mengisi instrumen tervalidasi sesuai protokol.
6. Data dipseudonimkan/diagregasi untuk dashboard peneliti/admin.
7. AI tutor menggunakan knowledge base materi, bukan data sensitif individual.
8. AI/ML prediktif hanya dikembangkan bila data sudah cukup, berkualitas, tervalidasi, dan disetujui etik.

---

## 5. Roadmap pengembangan fitur tahun 1-3

| Tahun | Fokus | Fitur utama | Luaran |
|---|---|---|---|
| Tahun 1 | MVP/purwarupa dan validasi awal | Landing page NiBTM 7.0, learning path bertingkat, dataset hub dasar, AI tutor dasar berbasis knowledge base, dashboard pengguna, gamifikasi ringan, pilot siswa SMA, pre-test/post-test, usability testing, prosedur validasi ahli dan etik | MVP, modul pembelajaran, katalog dataset awal, laporan pilot, dokumen arsitektur, HKI software, artikel ilmiah awal |
| Tahun 2 | Penguatan backend, data, dan analytics | Backend dan user management, learning analytics, dashboard admin/peneliti, modul psikologi/kesehatan mental tervalidasi, AI/ML model awal untuk rekomendasi belajar atau pola agregat, perluasan mitra sekolah/kampus | Sistem lebih stabil, dataset pilot lebih matang, model awal tervalidasi, laporan evaluasi multi-mitra, artikel lanjutan |
| Tahun 3 | Ekspansi dan integrasi lanjutan | Ekspansi regional/nasional, integrasi IoT/digital twin, computer vision edukatif, kolaborasi internasional, model keberlanjutan, platform skala institusi | Platform siap adopsi institusi, kolaborasi nasional/internasional, model bisnis/keberlanjutan, luaran hilirisasi |

---

## 6. Prioritas MVP tahun pertama

### 6.1 Must-have

1. Landing page resmi dengan filosofi nama NiBTM dan disclaimer non-diagnostik.
2. Learning path untuk siswa SMA dan mahasiswa level beginner-intermediate.
3. Modul topik awal: biomedis dasar, RNA-seq pengantar, bioinformatika pengantar, AI kesehatan pengantar, kesehatan mental edukatif.
4. Kuis, pre-test/post-test, progress tracker, badge sederhana.
5. Dataset Hub dasar berisi dataset dummy, publik, dan edukatif dengan metadata.
6. Research Hub sederhana untuk ide riset dan mini proposal.
7. Expert Directory sederhana.
8. AI tutor dasar berbasis knowledge base terkurasi dan guardrail non-diagnostik.
9. Dashboard pengguna.
10. Dashboard admin minimal untuk agregat pengguna, pre-test/post-test, dan engagement.
11. Consent, anonimisasi, kebijakan privasi, dan prosedur validasi konten.
12. Pilot siswa SMA dan evaluasi usability.

### 6.2 Should-have

1. Sertifikat penyelesaian modul.
2. Leaderboard edukatif berbasis kelompok.
3. Dashboard agregat kesehatan mental non-klinis.
4. Manajemen versi konten dan status validasi ahli.
5. Ekspor laporan RIIM sederhana.

### 6.3 Could-have

1. Rekomendasi learning path berbasis aturan sederhana.
2. Simulasi pipeline RNA-seq sederhana.
3. Integrasi notebook edukatif eksternal.
4. Komunitas diskusi terbatas.

### 6.4 Not for year 1

1. Diagnosis otomatis kesehatan mental atau penyakit apa pun.
2. Model prediktif risiko klinis individual.
3. Digital twin penuh.
4. Integrasi IoT real-time skala besar.
5. Computer vision klinis untuk keputusan medis.

---

## 7. Risiko fitur dan mitigasinya

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Klaim klinis berlebihan pada modul kesehatan mental | Risiko etik, hukum, dan reputasi | Tegaskan disclaimer non-diagnostik, validasi psikolog/psikiater, rujukan bantuan profesional, protokol etik. |
| Data belum cukup untuk AI/ML | Model bias atau tidak valid | Terapkan prinsip “data dulu, baru AI”; mulai dari dashboard deskriptif dan rekomendasi berbasis aturan. |
| Kualitas konten tidak seragam | Pembelajaran tidak konsisten | Workflow validasi ahli, versi konten, rubrik penilaian materi. |
| Privasi data siswa | Risiko pelanggaran data pribadi | Consent, anonimisasi, role-based access, minimisasi data, audit log, retensi data. |
| Gamifikasi terlalu kompetitif | Stres atau distorsi tujuan belajar | Gunakan badge dan mission edukatif, leaderboard opsional/kelompok, fokus refleksi belajar. |
| Keterbatasan adopsi sekolah | Pilot tidak optimal | Libatkan guru, modul pendek, jadwal fleksibel, laporan manfaat untuk sekolah. |
| AI tutor memberikan jawaban medis | Risiko salah informasi | Knowledge base terkurasi, guardrail, refusal policy untuk diagnosis/terapi, monitoring log. |
| Scope creep tahun pertama | MVP terlambat | Prioritasi must-have, jadwal sprint, backlog untuk tahun 2-3. |
| Ketergantungan pada dataset publik | Risiko lisensi dan keberlanjutan | Catat lisensi, buat dataset dummy edukatif, bangun dataset pilot teretik. |
| Integrasi IoT/digital twin terlalu dini | Beban teknis tinggi | Tempatkan sebagai roadmap tahun 3 setelah data dan backend matang. |

---

## 8. Narasi singkat untuk proposal RIIM BRIN

NiBTM 7.0 merupakan purwarupa platform digital pembelajaran dan riset biomedis yang dirancang untuk memperkuat kapasitas SDM nasional dalam bidang bioinformatika, multi-omik, biomedical big data, AI, IoT, digital health, dan kedokteran presisi. Platform ini mengintegrasikan learning path bertingkat, dataset hub, AI tutor berbasis knowledge base terkurasi, research hub, direktori mentor, gamifikasi ilmiah, serta dashboard evaluasi pembelajaran dan riset. Dengan pendekatan tersebut, NiBTM 7.0 tidak hanya berfungsi sebagai website informasi, tetapi sebagai ekosistem edukasi-riset yang mempertemukan pelajar, mahasiswa, dosen, peneliti, ahli klinis, dan komunitas pembelajaran.

Fokus awal implementasi diarahkan pada siswa SMA sebagai target pilot, dengan perluasan bertahap kepada mahasiswa dan populasi umum. Salah satu use case awal adalah edukasi kesehatan mental/depresi pada remaja, yang diposisikan secara ketat sebagai literasi, screening awal non-klinis, dan riset agregat anonim. NiBTM 7.0 bukan alat diagnosis medis dan bukan pengganti psikolog/psikiater/dokter. Instrumen psikologis yang digunakan harus divalidasi oleh ahli, disertai informed consent, anonimisasi data, dan kepatuhan etik penelitian.

Pengembangan AI/ML pada NiBTM 7.0 mengikuti prinsip “data dulu, baru AI”. Tahun pertama difokuskan pada pembangunan MVP, struktur data, konten tervalidasi, dataset hub dasar, dashboard deskriptif, AI tutor edukatif, pilot siswa SMA, validasi usability, HKI software, dan artikel ilmiah. Pada tahun kedua dan ketiga, platform ditingkatkan melalui backend dan user management, learning analytics, dashboard admin/peneliti, model AI/ML awal yang tervalidasi, perluasan mitra, serta integrasi lanjutan seperti IoT, computer vision, dan digital twin edukatif. Dengan roadmap tersebut, NiBTM 7.0 mendukung agenda Renstranas/BRIN dalam peningkatan kapasitas riset dan inovasi, kemandirian teknologi digital kesehatan, penguatan biomedical big data, serta hilirisasi software berbasis riset.

---

## 9. Tabel kesesuaian fitur dengan Renstranas/BRIN

| Arah strategis Renstranas/BRIN | Fitur NiBTM 7.0 | Bentuk kontribusi |
|---|---|---|
| Peningkatan kapasitas SDM riset dan inovasi | Learning path bertingkat, sertifikat modul, mentor directory | Meningkatkan literasi dan keterampilan biomedis digital sejak siswa SMA hingga peneliti pemula. |
| Penguatan teknologi kesehatan | Modul digital health, AI tutor, dashboard pembelajaran, use case kesehatan mental | Mengembangkan purwarupa teknologi edukasi-riset kesehatan berbasis web. |
| Pengembangan bioinformatika dan biomedical big data | Dataset Hub, RNA-seq, multi-omik, metadata, kamus data | Membiasakan pengguna mengakses, memahami, dan mengolah data biomedis terkurasi. |
| Penguasaan AI dan IoT | AI tutor, AI/ML analytics bertahap, roadmap IoT | Membangun fondasi kompetensi AI/IoT kesehatan secara realistis dan bertahap. |
| Dukungan kedokteran presisi | Modul multi-omik, bioinformatika, imunologi, data analytics | Memperkenalkan konsep integrasi data biologis untuk pemahaman kedokteran presisi. |
| Kemandirian teknologi digital kesehatan | Web platform NiBTM 7.0, backend roadmap, data governance | Mengarah pada software nasional yang dapat dikembangkan dan disesuaikan kebutuhan lokal. |
| Pengembangan platform edukasi-riset nasional | Research Hub, komunitas pembelajaran, expert directory | Memfasilitasi kolaborasi pelajar, mahasiswa, dosen, peneliti, dan institusi. |
| Hilirisasi software berbasis riset | MVP, HKI software, artikel ilmiah, pilot sekolah | Menghasilkan luaran riset yang dapat didiseminasikan dan ditingkatkan menuju adopsi institusional. |
| Penguatan etik dan tata kelola data | Consent, anonimisasi, role-based access, validasi ahli | Menjamin pengumpulan dan pemanfaatan data dilakukan secara bertanggung jawab. |

---

## 10. Rekomendasi nama menu di website NiBTM 7.0

| Menu utama | Submenu rekomendasi | Tujuan |
|---|---|---|
| Beranda | Tentang NiBTM, Filosofi Nama, Disclaimer Edukatif | Memperkenalkan posisi platform dan batas non-diagnostik. |
| Learning Path | Siswa SMA, Mahasiswa, Guru/Dosen, Peneliti Pemula, Profesional Biomedis | Navigasi pembelajaran bertingkat. |
| Modul Biomedis | RNA-seq, Bioinformatika, Imunologi, Nanoteknologi, Stem Cells, Multi-Omik | Akses materi inti biomedis. |
| AI & Digital Health | AI Tutor, AI/ML Analytics, IoT Kesehatan, Kedokteran Presisi | Mengelompokkan fitur teknologi. |
| Mental Health Literacy | Edukasi Depresi, Kuesioner Tervalidasi, Rujukan Bantuan, Dashboard Agregat | Use case awal yang aman dan non-diagnostik. |
| Dataset Hub | Dataset Dummy, Dataset Publik, Dataset Edukatif, Dataset Pilot, Metadata | Katalog data untuk pembelajaran dan riset. |
| Research Hub | Ide Riset, Mini Proposal, Referensi, Kelompok Riset, Kolaborasi | Menghubungkan pembelajaran dengan riset. |
| Mentor & Expert | Direktori Ahli, Jadwal Mentoring, Publikasi, Peluang Kolaborasi | Akses tutor/dosen/mentor. |
| Komunitas | Forum Belajar, Challenge, Leaderboard Edukatif, Showcase Project | Interaksi dan gamifikasi ilmiah. |
| Dashboard Saya | Progress, Kuis, Badge, Dataset, Ide Riset, Riwayat AI Tutor | Monitoring pengguna. |
| Admin/Research Console | Statistik Pengguna, Pre-test/Post-test, Kuesioner Agregat, Laporan RIIM, Validasi Konten | Monitoring pilot dan pelaporan riset. |
| Roadmap | Tahun 1, Tahun 2, Tahun 3, Rencana Nasional | Menjelaskan arah pengembangan bertahap. |
| Etik & Privasi | Informed Consent, Anonimisasi, Kebijakan Data, Batas Penggunaan | Membangun kepercayaan dan kepatuhan. |

---

## Ringkasan keputusan desain untuk tim development

1. **Tahun pertama harus berorientasi MVP**, bukan sistem klinis penuh.
2. **AI tutor digunakan untuk edukasi**, bukan diagnosis atau terapi.
3. **AI/ML prediktif ditunda** sampai data cukup, valid, dan memiliki persetujuan etik.
4. **Use case kesehatan mental harus melibatkan psikolog/psikiater** serta validasi instrumen.
5. **Dataset Hub adalah fondasi utama** karena kualitas AI bergantung pada kualitas data.
6. **Gamifikasi harus ilmiah dan moderat**, mendukung motivasi tanpa menciptakan tekanan berlebihan.
7. **Dashboard admin/peneliti harus berbasis agregat anonim** untuk evaluasi pilot RIIM.
8. **Digital twin, computer vision, dan IoT** ditempatkan sebagai roadmap tahun ketiga atau setelah infrastruktur data matang.
