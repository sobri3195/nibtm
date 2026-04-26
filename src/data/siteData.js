import aiWorkflow from '../assets/illustrations/ai-workflow.svg'
import clinicalTranslation from '../assets/illustrations/clinical-translation.svg'
import datasetVisual from '../assets/illustrations/dataset-visual.svg'
import dnaNetwork from '../assets/illustrations/dna-network.svg'
import learningPathVisual from '../assets/illustrations/learning-path.svg'

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'paths', label: 'Learning Paths' },
  { id: 'topics', label: 'Topics' },
  { id: 'datasets', label: 'Datasets' },
  { id: 'mentors', label: 'Mentors' },
]

export const heroTrustBadges = ['Trusted by 12+ biomedical labs', 'Industry-aligned curriculum', 'Mentor-guided outcomes']

export const stats = [
  { label: 'Active Learners', value: '18K+', icon: 'Users' },
  { label: 'Structured Modules', value: '140+', icon: 'BookOpen' },
  { label: 'Research Datasets', value: '32', icon: 'Database' },
  { label: 'Mentor Hours / Month', value: '900+', icon: 'Timer' },
]

export const aboutCards = [
  { title: 'Foundation', description: 'Master bioinformatics, biostatistics, and biomedical data literacy with guided tracks.', image: learningPathVisual },
  { title: 'AI Workflow', description: 'Build, validate, and monitor models with practical workflow templates from real labs.', image: aiWorkflow },
  { title: 'Clinical Translation', description: 'Bridge model insight into patient-impact thinking through translational case studies.', image: clinicalTranslation },
]

export const features = [
  { title: 'Adaptive Learning Intelligence', label: 'Core Engine', description: 'NIBM 7.0 personalizes module order and difficulty based on mastery and performance data.', icon: 'Sparkles', visualType: 'neural', image: aiWorkflow },
  { title: 'Biomedical Sandbox Lab', label: 'Hands-on', description: 'Run practical experiments on genomics, signals, imaging, and translational workflows.', icon: 'FlaskConical', visualType: 'molecule', image: dnaNetwork },
  { title: 'Clinical-ready Case Simulations', label: 'Practice', description: 'Train with guided decision checkpoints inspired by clinical and research realities.', icon: 'HeartPulse', visualType: 'clinical', image: clinicalTranslation, featured: true },
  { title: 'Research Portfolio Builder', label: 'Career', description: 'Package projects into evidence-backed portfolios for graduate study, labs, or industry.', icon: 'BriefcaseBusiness', visualType: 'portfolio', image: datasetVisual },
  { title: 'Mentor Feedback Loop', label: 'Mentoring', description: 'Receive structured reviews from biomedical experts to improve rigor and communication.', icon: 'MessageCircleHeart', visualType: 'mentor', image: aiWorkflow },
  { title: 'Progress Analytics', label: 'Insights', description: 'Track competency growth with outcome-based analytics and skill-gap recommendations.', icon: 'ChartNoAxesCombined', visualType: 'analytics', image: datasetVisual },
]

export const pathTabs = ['Beginner', 'Intermediate', 'Advanced', 'Certification']

export const learningPaths = {
  Beginner: [
    { title: 'Biomedical Foundations', description: 'Fundamentals of molecular biology, biostatistics, and data thinking.', modules: 16, duration: '4 weeks', difficulty: 'Beginner', progress: 65, visualType: 'dna', image: dnaNetwork },
    { title: 'Intro to Bioinformatics', description: 'Sequence data basics, quality control, and interpretation fundamentals.', modules: 14, duration: '5 weeks', difficulty: 'Beginner', progress: 48, visualType: 'pipeline', image: learningPathVisual },
  ],
  Intermediate: [
    { title: 'Clinical Data Analytics', description: 'Transform and analyze EHR-like datasets using reproducible workflows.', modules: 20, duration: '6 weeks', difficulty: 'Intermediate', progress: 42, visualType: 'data', image: datasetVisual },
    { title: 'AI Biomedical Workflow', description: 'Build robust models for diagnosis support with explainability checkpoints.', modules: 22, duration: '7 weeks', difficulty: 'Intermediate', progress: 35, visualType: 'neural', image: aiWorkflow },
  ],
  Advanced: [
    { title: 'Multimodal Biomedical AI', description: 'Fuse omics, imaging, and clinical data for real translational use cases.', modules: 26, duration: '8 weeks', difficulty: 'Advanced', progress: 21, visualType: 'multimodal', image: aiWorkflow },
    { title: 'Clinical Translation', description: 'Leverage machine learning for trial optimization and patient stratification.', modules: 24, duration: '8 weeks', difficulty: 'Advanced', progress: 18, visualType: 'clinical', image: clinicalTranslation },
  ],
  Certification: [
    { title: 'Translational Biomedical AI Professional', description: 'End-to-end capstone with publication-style documentation and mentor defense.', modules: 30, duration: '10 weeks', difficulty: 'Certification', progress: 12, visualType: 'capstone', image: clinicalTranslation },
  ],
}

export const topics = [
  { title: 'Genomic Variant Intelligence', category: 'Genomics', modules: 9, duration: '7h', dataset: true, level: 'Intermediate', icon: 'Dna', visualType: 'dna', image: dnaNetwork },
  { title: 'Clinical NLP Pipeline', category: 'Clinical', modules: 10, duration: '8h', dataset: true, level: 'Intermediate', icon: 'Stethoscope', visualType: 'clinical', image: clinicalTranslation },
  { title: 'Digital Pathology AI', category: 'Imaging', modules: 12, duration: '10h', dataset: true, level: 'Advanced', icon: 'ScanHeart', visualType: 'imaging', image: aiWorkflow },
  { title: 'Biostatistics Essentials', category: 'Foundation', modules: 7, duration: '5h', dataset: false, level: 'Beginner', icon: 'FlaskConical', visualType: 'foundation', image: learningPathVisual },
  { title: 'Wearable Signal Interpretation', category: 'IoT', modules: 8, duration: '6h', dataset: true, level: 'Intermediate', icon: 'Activity', visualType: 'iot', image: datasetVisual },
  { title: 'Drug Discovery Modeling', category: 'AI', modules: 13, duration: '11h', dataset: true, level: 'Advanced', icon: 'BrainCircuit', visualType: 'ai', image: aiWorkflow },
  { title: 'Proteomics Data Workflow', category: 'Genomics', modules: 9, duration: '8h', dataset: true, level: 'Advanced', icon: 'Dna', visualType: 'proteomics', image: dnaNetwork },
  { title: 'Clinical Decision Support', category: 'Clinical', modules: 11, duration: '9h', dataset: true, level: 'Advanced', icon: 'HeartPulse', visualType: 'decision', image: clinicalTranslation },
]

export const topicCategories = ['All', 'Genomics', 'Clinical', 'Imaging', 'Foundation', 'IoT', 'AI']

export const datasets = [
  { name: 'Cancer Multi-Omics Atlas', category: 'Genomics', format: 'Parquet', records: '2.5M', health: 92, visualType: 'omics', image: datasetVisual, trend: [24, 28, 34, 44, 56, 72] },
  { name: 'ICU Waveform Bundle', category: 'Clinical', format: 'CSV', records: '4.1M', health: 88, visualType: 'waveform', image: aiWorkflow, trend: [12, 24, 20, 42, 54, 67] },
  { name: 'Histopathology Slide Set', category: 'Imaging', format: 'DICOM', records: '980K', health: 95, visualType: 'imaging', image: clinicalTranslation, trend: [18, 26, 30, 48, 64, 80] },
  { name: 'Remote Vitals Stream', category: 'IoT', format: 'JSON', records: '13.2M', health: 83, visualType: 'iot', image: datasetVisual, trend: [20, 28, 36, 32, 46, 58] },
]

export const datasetCategories = ['All', 'Genomics', 'Clinical', 'Imaging', 'IoT']

export const mentors = [
  { name: 'Dr. Alya Rahman', field: 'Clinical AI', rating: 4.9, availability: 'Open this week', tags: ['Model Validation', 'Healthcare AI'], initials: 'AR', image: null, visualType: 'clinical' },
  { name: 'Prof. Mika Santoso', field: 'Bioinformatics', rating: 4.8, availability: '2 slots left', tags: ['Genomics', 'Omics Pipeline'], initials: 'MS', image: null, visualType: 'bioinformatics' },
  { name: 'Dr. Nara Wijaya', field: 'Medical Imaging', rating: 4.9, availability: 'Open this week', tags: ['Computer Vision', 'Radiology'], initials: 'NW', image: null, visualType: 'imaging' },
]

export const footer = {
  platform: ['Learning Paths', 'Topics', 'Datasets', 'Mentoring'],
  resources: ['Documentation', 'Research Notes', 'Community', 'FAQ'],
  contact: ['hello@nibm7.ai', '+62 812-0000-000', 'Jakarta, Indonesia'],
}
