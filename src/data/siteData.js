export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'paths', label: 'Learning Paths' },
  { id: 'topics', label: 'Topics' },
  { id: 'datasets', label: 'Datasets' },
  { id: 'mentors', label: 'Mentors' },
]

export const heroBadges = ['AI-ready', 'Biomedical Research', 'Structured Learning', 'Clinical Translation']

export const stats = [
  { label: 'Learning Modules', value: '120+' },
  { label: 'Biomedical Topics', value: '35+' },
  { label: 'Research Datasets', value: '20+' },
  { label: 'Expert Mentors', value: '15+' },
]

export const aboutHighlights = [
  { title: 'Bioinformatics Foundation', description: 'Foundational biomedical data literacy from genomics to multi-omics interpretation.' },
  { title: 'AI + IoT Biomedical Workflow', description: 'Applied pipeline from data ingestion, model training, monitoring, and reporting.' },
  { title: 'Clinical Translation Ready', description: 'Outcome-driven modules designed for clinical relevance and real-world deployment.' },
]

export const features = [
  { title: 'Adaptive Curriculum Engine', description: 'Personalized progression based on competency and learning velocity.', badge: 'Core' },
  { title: 'Lab-style Simulation', description: 'Hands-on biomedical scenarios with practical decision checkpoints.', badge: 'Practice' },
  { title: 'Research-grade Projects', description: 'Capstone experiences built around publishable biomedical workflows.', badge: 'Research' },
  { title: 'Evidence-centered Content', description: 'Curated modules with references aligned to biomedical standards.', badge: 'Validated' },
  { title: 'Mentor Feedback Loop', description: 'Structured expert review to sharpen analysis and communication.', badge: 'Mentored' },
  { title: 'Portfolio & Certification', description: 'Trackable outcomes for career, research, and institutional reporting.', badge: 'Career' },
]

export const learningPaths = [
  { id: 'beginner', level: 'Beginner', title: 'Biomedical Fundamentals', duration: '4 Weeks', modules: 18, progress: 72 },
  { id: 'intermediate', level: 'Intermediate', title: 'Bioinformatics & Data Analysis', duration: '6 Weeks', modules: 26, progress: 46 },
  { id: 'advanced', level: 'Advanced', title: 'AI for Clinical Decision Support', duration: '8 Weeks', modules: 34, progress: 28 },
  { id: 'certification', level: 'Certification', title: 'Translational Biomedical AI', duration: '10 Weeks', modules: 42, progress: 11 },
]

export const topics = [
  { title: 'Genomics AI', level: 'Beginner', modules: 8, duration: '6h', dataset: true, category: 'AI' },
  { title: 'Clinical NLP', level: 'Intermediate', modules: 10, duration: '8h', dataset: true, category: 'Clinical' },
  { title: 'Digital Pathology', level: 'Advanced', modules: 12, duration: '11h', dataset: true, category: 'Imaging' },
  { title: 'Drug Discovery ML', level: 'Advanced', modules: 14, duration: '12h', dataset: true, category: 'AI' },
  { title: 'Biostatistics Core', level: 'Beginner', modules: 7, duration: '5h', dataset: false, category: 'Foundation' },
  { title: 'Signal Processing ECG', level: 'Intermediate', modules: 9, duration: '7h', dataset: true, category: 'Clinical' },
  { title: 'Multi-omics Integration', level: 'Advanced', modules: 13, duration: '10h', dataset: true, category: 'Research' },
  { title: 'IoT Health Monitoring', level: 'Intermediate', modules: 8, duration: '6h', dataset: true, category: 'IoT' },
]

export const datasets = [
  { name: 'Cancer Genomics Atlas', category: 'Genomics', records: '2.1M', format: 'CSV/FASTQ' },
  { name: 'Chest X-Ray Cohort', category: 'Imaging', records: '890K', format: 'DICOM' },
  { name: 'ICU Time-series Bundle', category: 'Clinical', records: '4.7M', format: 'Parquet' },
  { name: 'Wearable Vitals Stream', category: 'IoT', records: '12.3M', format: 'JSON' },
]

export const mentors = [
  { name: 'Dr. Alya Rahman', expertise: 'Clinical AI', rating: 4.9, availability: 'Available', initials: 'AR' },
  { name: 'Prof. Mika Santoso', expertise: 'Bioinformatics', rating: 4.8, availability: 'Limited', initials: 'MS' },
  { name: 'Dr. Nara Wijaya', expertise: 'Medical Imaging', rating: 4.9, availability: 'Available', initials: 'NW' },
  { name: 'Dr. Rayhan Putra', expertise: 'Translational Medicine', rating: 4.7, availability: 'Available', initials: 'RP' },
]

export const footerColumns = {
  platform: ['Learning Paths', 'Topics', 'Datasets', 'Mentors'],
  resources: ['Documentation', 'Research Notes', 'Community', 'FAQ'],
  contact: ['hello@nibm7.ai', '+62 812-0000-000', 'Jakarta, Indonesia'],
}
