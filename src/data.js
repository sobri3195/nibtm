export const userSegments = [
  {
    title: 'For Beginner',
    desc: 'Mulai dari dasar biologi, data, dan teknologi kesehatan dengan bahasa mudah dipahami.',
  },
  {
    title: 'For Students',
    desc: 'Belajar terstruktur untuk tugas sekolah, kuliah, hingga project ilmiah mahasiswa.',
  },
  {
    title: 'For Professional',
    desc: 'Tingkatkan skill praktis biomedis digital untuk kebutuhan klinis dan industri.',
  },
  {
    title: 'For Researcher',
    desc: 'Eksplorasi topik lanjutan, kolaborasi lintas bidang, dan ide riset masa depan.',
  },
]

export const learningPaths = [
  {
    id: 'beginner-path',
    name: 'Beginner Path',
    duration: '4 weeks',
    description: 'Pondasi biomedis modern untuk pelajar SMP/SMA dan pemula.',
    materials: ['Dasar Biologi Sel', 'Pengantar Genomik', 'Dasar AI untuk Sains', 'Etika Biomedis'],
  },
  {
    id: 'student-path',
    name: 'Student Path',
    duration: '6 weeks',
    description: 'Jalur belajar mahasiswa dari teori menuju mini project riset.',
    materials: ['RNA-seq Basics', 'Bioinformatics Workflow', 'Data Visualization', 'Scientific Writing'],
  },
  {
    id: 'professional-path',
    name: 'Professional Path',
    duration: '8 weeks',
    description: 'Skill terapan untuk tenaga kesehatan dan profesional biomedis.',
    materials: ['Precision Medicine', 'Clinical Data Integration', 'AI Decision Support', 'Regulasi Data Medis'],
  },
  {
    id: 'researcher-path',
    name: 'Researcher Path',
    duration: '12 weeks',
    description: 'Pendalaman riset translasi, multi-omics, dan kolaborasi antar disiplin.',
    materials: ['Advanced Multi-Omics', 'Immunotherapy Research Design', 'Grant Strategy', 'Publication Pipeline'],
  },
]

export const topics = [
  ['RNA-seq', 'Mempelajari ekspresi gen berbasis sequencing RNA.', 'Intermediate', 'Research'],
  ['Nanotechnology', 'Teknologi partikel skala nano untuk aplikasi kesehatan.', 'Intermediate', 'Technology'],
  ['Bioinformatics', 'Analisis data biologi menggunakan komputasi.', 'Beginner', 'AI'],
  ['Stem Cells', 'Sel punca untuk regenerasi jaringan dan terapi masa depan.', 'Intermediate', 'Biology'],
  ['Immunology', 'Memahami sistem imun tubuh dan respon terhadap penyakit.', 'Beginner', 'Biology'],
  ['Artificial Intelligence', 'Pemanfaatan AI untuk diagnosis, prediksi, dan riset.', 'Beginner', 'AI'],
  ['Internet of Things', 'Sensor dan perangkat pintar untuk monitoring kesehatan.', 'Beginner', 'Technology'],
  ['Multi-Omics', 'Integrasi data genomik, proteomik, dan metabolomik.', 'Advanced', 'Research'],
  ['Precision Medicine', 'Pengobatan yang dipersonalisasi berdasarkan data pasien.', 'Advanced', 'Medicine'],
  ['Cancer Research', 'Strategi riset kanker dari biomarker hingga terapi.', 'Advanced', 'Research'],
  ['Exosomes', 'Vesikel seluler untuk biomarker dan penghantaran obat.', 'Advanced', 'Medicine'],
  ['Immunotherapy', 'Terapi yang memanfaatkan sistem imun melawan penyakit.', 'Advanced', 'Medicine'],
  ['Biomedical Big Data', 'Manajemen dan analisis data biomedis skala besar.', 'Intermediate', 'Technology'],
].map(([title, description, level, category], idx) => ({ id: `topic-${idx + 1}`, title, description, level, category }))

export const datasets = [
  ['RNA-seq Dataset', 'Dataset ekspresi gen dari berbagai jaringan.', 'FASTQ/CSV', 1200, 'Genomics'],
  ['Cancer Multi-Omics Dataset', 'Data gabungan genomik, proteomik, klinis kanker.', 'CSV/TSV', 950, 'Oncology'],
  ['Nanomedicine Dataset', 'Data karakterisasi nanopartikel dan uji biologis.', 'CSV/JSON', 480, 'Nanotechnology'],
  ['Immunology Dataset', 'Profil sitokin dan respon imun pasien.', 'XLSX/CSV', 620, 'Immunology'],
  ['Stem Cell Dataset', 'Data diferensiasi stem cell dan marker molekuler.', 'CSV', 510, 'Regenerative Medicine'],
  ['AI-IoT Health Monitoring Dataset', 'Data sensor wearable untuk monitoring kesehatan.', 'JSON/Parquet', 5000, 'Digital Health'],
].map(([name, description, format, samples, category], idx) => ({
  id: `dataset-${idx + 1}`,
  name,
  description,
  format,
  samples,
  category,
}))

export const mentors = [
  {
    id: 'mentor-1',
    name: 'Dr. Rina Pratama',
    expertise: 'Bioinformatics & RNA-seq',
    guidanceLevel: 'Student - Researcher',
    topics: 'RNA-seq, Multi-Omics, Biomedical Big Data',
  },
  {
    id: 'mentor-2',
    name: 'Prof. Arif Nugraha',
    expertise: 'Immunology & Immunotherapy',
    guidanceLevel: 'Professional - Researcher',
    topics: 'Immunology, Immunotherapy, Cancer Research',
  },
  {
    id: 'mentor-3',
    name: 'Dr. Maya Lestari',
    expertise: 'Nanotechnology & Drug Delivery',
    guidanceLevel: 'Beginner - Professional',
    topics: 'Nanotechnology, Exosomes, Precision Medicine',
  },
  {
    id: 'mentor-4',
    name: 'Ir. Bima Saputra, M.Kom.',
    expertise: 'AI & IoT Healthcare Systems',
    guidanceLevel: 'Beginner - Researcher',
    topics: 'Artificial Intelligence, Internet of Things, Smart Monitoring',
  },
]

export const communities = [
  'NiBTM Junior Explorer (SMP)',
  'NiBTM Senior Innovator (SMA)',
  'NiBTM Campus Research Circle',
  'Biomedical Teacher Forum',
  'Future Clinician & Data Science Club',
]

export const aiIotIdeas = [
  'Smart Health Monitoring System',
  'AI-IoT Cancer Patient Monitoring',
  'Smart Laboratory Monitoring System',
  'AI-IoT Sample Tracking System',
  'Smart Incubator for Cell Culture',
  'NanoTheranostics Lab Assistant',
  'AI-IoT Telemedicine Kiosk',
  'Smart Medication Reminder',
  'AI-IoT Environmental Health Monitor',
  'Smart Hospital Asset Tracking',
  'Smart Pharmacy Inventory System',
  'AI-IoT Elderly Care Monitoring',
  'Smart Vaccine Cold Chain Monitoring',
  'AI-IoT Medical Waste Monitoring',
  'Smart Hospital Room Monitoring',
].map((name, idx) => ({
  id: `aiiot-${idx + 1}`,
  name,
  description: `${name} untuk meningkatkan efisiensi layanan dan keselamatan pasien.`,
  targetUsers: 'Pelajar, tenaga kesehatan, dan peneliti',
  sensors: 'Wearable sensor, temperature, humidity, GPS, camera',
  aiRole: 'Prediksi risiko, deteksi anomali, dan rekomendasi otomatis',
  difficulty: idx < 5 ? 'Intermediate' : 'Advanced',
  category: 'AI-IoT',
}))
