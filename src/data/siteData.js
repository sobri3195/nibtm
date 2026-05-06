import aiWorkflow from '../assets/illustrations/ai-workflow.svg'
import clinicalTranslation from '../assets/illustrations/clinical-translation.svg'
import datasetVisual from '../assets/illustrations/dataset-visual.svg'
import dnaNetwork from '../assets/illustrations/dna-network.svg'
import learningPathVisual from '../assets/illustrations/learning-path.svg'

export const languages = [
  { code: 'en', label: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'id', label: 'Indonesian', nativeName: 'Indonesia', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  { code: 'zh', label: 'Chinese', nativeName: '中文', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
]

const categoryKeys = ['All', 'Genomics', 'Clinical', 'Imaging', 'Foundation', 'IoT', 'AI', 'Herbal', 'Pharmacology']
const datasetCategoryKeys = ['All', 'Genomics', 'Clinical', 'Imaging', 'IoT']

const translations = {
  en: {
    navLinks: [
      { id: 'about', label: 'About' },
      { id: 'features', label: 'Features' },
      { id: 'paths', label: 'Learning Paths' },
      { id: 'topics', label: 'Topics' },
      { id: 'datasets', label: 'Datasets' },
      { id: 'mentors', label: 'Mentors' },
    ],
    ui: {
      toggleDarkMode: 'Toggle dark mode', openMenu: 'Open menu', languageLabel: 'Language', startLearning: 'Start Learning', exploreTopics: 'Explore Topics', modules: 'modules', records: 'records', dataHealth: 'Data health', openDataset: 'Open Dataset', viewPath: 'View Path', bookSession: 'Book Session', searchTopic: 'Search topic...', datasetAvailable: 'Dataset Available', noDataset: 'No Dataset', startLearningNow: 'Start Learning Now', exploreCurriculum: 'Explore Curriculum', biomedicalDashboardPreview: 'Biomedical dashboard preview', moduleRoadmap: 'AI-assisted module roadmap', footerPlatform: 'Platform', footerResources: 'Resources', footerContact: 'Contact' },
    hero: { badge: 'Biomedical Learning Platform', title: 'Advance biomedical skills with structured AI-ready learning.', description: 'NIBM 7.0 unifies bioinformatics, translational AI, research datasets, and expert mentoring into one premium learning workflow.', trustBadges: ['Trusted by 12+ biomedical labs', 'Industry-aligned curriculum', 'Mentor-guided outcomes'] },
    sections: {
      about: { badge: 'About NIBM 7.0', title: 'From foundation to clinical translation in one connected learning system.', description: 'Build scientific confidence first, operationalize AI workflows second, and deliver clinically meaningful impact third.' },
      features: { badge: 'Platform Features', title: 'Premium learning experience for biomedical professionals.' },
      paths: { badge: 'Learning Paths', title: 'Actionable tracks for every biomedical career stage.' },
      topics: { badge: 'Topics', title: 'Explore modules by domain, level, and data availability.' },
      datasets: { badge: 'Datasets', title: 'Research-grade datasets with clear health and format status.' },
      mentors: { badge: 'Mentors', title: 'Learn with experienced biomedical researchers and practitioners.' },
    },
    stats: ['Active Learners', 'Structured Modules', 'Research Datasets', 'Mentor Hours / Month'],
    aboutCards: [
      ['Foundation', 'Master bioinformatics, biostatistics, and biomedical data literacy with guided tracks.'],
      ['AI Workflow', 'Build, validate, and monitor models with practical workflow templates from real labs.'],
      ['Clinical Translation', 'Bridge model insight into patient-impact thinking through translational case studies.'],
    ],
    features: [
      ['Adaptive Learning Intelligence', 'Core Engine', 'NIBM 7.0 personalizes module order and difficulty based on mastery and performance data.'],
      ['Biomedical Sandbox Lab', 'Hands-on', 'Run practical experiments on genomics, signals, imaging, and translational workflows.'],
      ['Clinical-ready Case Simulations', 'Practice', 'Train with guided decision checkpoints inspired by clinical and research realities.'],
      ['Research Portfolio Builder', 'Career', 'Package projects into evidence-backed portfolios for graduate study, labs, or industry.'],
      ['Mentor Feedback Loop', 'Mentoring', 'Receive structured reviews from biomedical experts to improve rigor and communication.'],
      ['Progress Analytics', 'Insights', 'Track competency growth with outcome-based analytics and skill-gap recommendations.'],
    ],
    tabs: ['Beginner', 'Intermediate', 'Advanced', 'Certification'],
    pathData: {
      Beginner: [['Biomedical Foundations', 'Fundamentals of molecular biology, biostatistics, and data thinking.', 'Beginner'], ['Intro to Bioinformatics', 'Sequence data basics, quality control, and interpretation fundamentals.', 'Beginner']],
      Intermediate: [['Clinical Data Analytics', 'Transform and analyze EHR-like datasets using reproducible workflows.', 'Intermediate'], ['AI Biomedical Workflow', 'Build robust models for diagnosis support with explainability checkpoints.', 'Intermediate']],
      Advanced: [['Multimodal Biomedical AI', 'Fuse omics, imaging, and clinical data for real translational use cases.', 'Advanced'], ['Clinical Translation', 'Leverage machine learning for trial optimization and patient stratification.', 'Advanced']],
      Certification: [['Translational Biomedical AI Professional', 'End-to-end capstone with publication-style documentation and mentor defense.', 'Certification']],
    },
    topicTitles: ['Genomic Variant Intelligence', 'Clinical NLP Pipeline', 'Digital Pathology AI', 'Biostatistics Essentials', 'Wearable Signal Interpretation', 'Drug Discovery Modeling', 'Herbal Therapeutics Fundamentals', 'Applied Pharmacology for Biomedical Innovation', 'Artificial Intelligence for Precision Medicine', 'Proteomics Data Workflow', 'Clinical Decision Support'],
    categories: categoryKeys,
    datasetCategories: datasetCategoryKeys,
    datasets: ['Cancer Multi-Omics Atlas', 'ICU Waveform Bundle', 'Histopathology Slide Set', 'Remote Vitals Stream'],
    mentors: { fields: ['Clinical AI', 'Bioinformatics', 'Medical Imaging'], availability: ['Open this week', '2 slots left', 'Open this week'], tags: [['Model Validation', 'Healthcare AI'], ['Genomics', 'Omics Pipeline'], ['Computer Vision', 'Radiology']] },
    footer: { description: 'Premium biomedical learning platform for data, AI, and clinical translation.', platform: ['Learning Paths', 'Topics', 'Datasets', 'Mentoring'], resources: ['Documentation', 'Research Notes', 'Community', 'FAQ'], contact: ['hello@nibm7.ai', '+62 812-0000-000', 'Jakarta, Indonesia'] },
    finalCta: { title: 'Ready to advance your biomedical learning journey?', description: 'Start your structured path with datasets, mentors, and hands-on biomedical AI workflows.' },
  },
  id: {
    navLinks: [{ id: 'about', label: 'Tentang' }, { id: 'features', label: 'Fitur' }, { id: 'paths', label: 'Jalur Belajar' }, { id: 'topics', label: 'Topik' }, { id: 'datasets', label: 'Dataset' }, { id: 'mentors', label: 'Mentor' }],
    ui: { toggleDarkMode: 'Ubah mode gelap', openMenu: 'Buka menu', languageLabel: 'Bahasa', startLearning: 'Mulai Belajar', exploreTopics: 'Jelajahi Topik', modules: 'modul', records: 'rekaman', dataHealth: 'Kesehatan data', openDataset: 'Buka Dataset', viewPath: 'Lihat Jalur', bookSession: 'Pesan Sesi', searchTopic: 'Cari topik...', datasetAvailable: 'Dataset Tersedia', noDataset: 'Tanpa Dataset', startLearningNow: 'Mulai Belajar Sekarang', exploreCurriculum: 'Jelajahi Kurikulum', biomedicalDashboardPreview: 'Pratinjau dasbor biomedis', moduleRoadmap: 'Peta modul berbantuan AI', footerPlatform: 'Platform', footerResources: 'Sumber Daya', footerContact: 'Kontak' },
    hero: { badge: 'Platform Pembelajaran Biomedis', title: 'Tingkatkan keterampilan biomedis dengan pembelajaran terstruktur siap AI.', description: 'NIBM 7.0 menyatukan bioinformatika, AI translasi, dataset riset, dan mentoring pakar dalam satu alur belajar premium.', trustBadges: ['Dipercaya 12+ laboratorium biomedis', 'Kurikulum selaras industri', 'Hasil dipandu mentor'] },
    sections: { about: { badge: 'Tentang NIBM 7.0', title: 'Dari fondasi hingga translasi klinis dalam satu sistem belajar terhubung.', description: 'Bangun kepercayaan ilmiah, operasionalkan alur kerja AI, lalu hasilkan dampak klinis bermakna.' }, features: { badge: 'Fitur Platform', title: 'Pengalaman belajar premium untuk profesional biomedis.' }, paths: { badge: 'Jalur Belajar', title: 'Jalur praktis untuk setiap tahap karier biomedis.' }, topics: { badge: 'Topik', title: 'Jelajahi modul berdasarkan domain, level, dan ketersediaan data.' }, datasets: { badge: 'Dataset', title: 'Dataset kelas riset dengan status kesehatan dan format yang jelas.' }, mentors: { badge: 'Mentor', title: 'Belajar bersama peneliti dan praktisi biomedis berpengalaman.' } },
    stats: ['Pembelajar Aktif', 'Modul Terstruktur', 'Dataset Riset', 'Jam Mentor / Bulan'],
    aboutCards: [['Fondasi', 'Kuasai bioinformatika, biostatistika, dan literasi data biomedis dengan jalur terpandu.'], ['Alur Kerja AI', 'Bangun, validasi, dan pantau model dengan templat praktis dari laboratorium nyata.'], ['Translasi Klinis', 'Hubungkan wawasan model dengan dampak pasien melalui studi kasus translasi.']],
    features: [['Kecerdasan Belajar Adaptif', 'Mesin Inti', 'NIBM 7.0 menyesuaikan urutan dan tingkat kesulitan modul berdasarkan penguasaan serta data performa.'], ['Lab Sandbox Biomedis', 'Praktik', 'Jalankan eksperimen genomik, sinyal, pencitraan, dan alur translasi.'], ['Simulasi Kasus Siap Klinis', 'Latihan', 'Berlatih dengan titik keputusan terpandu yang terinspirasi realitas klinis dan riset.'], ['Pembuat Portofolio Riset', 'Karier', 'Kemas proyek menjadi portofolio berbasis bukti untuk studi lanjut, lab, atau industri.'], ['Putaran Umpan Balik Mentor', 'Mentoring', 'Terima ulasan terstruktur dari pakar biomedis untuk meningkatkan rigor dan komunikasi.'], ['Analitik Kemajuan', 'Wawasan', 'Pantau pertumbuhan kompetensi dengan analitik berbasis hasil dan rekomendasi gap keterampilan.']],
    tabs: ['Pemula', 'Menengah', 'Lanjutan', 'Sertifikasi'],
    pathData: { Beginner: [['Fondasi Biomedis', 'Dasar biologi molekuler, biostatistika, dan cara berpikir data.', 'Pemula'], ['Pengantar Bioinformatika', 'Dasar data sekuens, kontrol kualitas, dan interpretasi.', 'Pemula']], Intermediate: [['Analitik Data Klinis', 'Transformasi dan analisis dataset mirip EHR dengan alur kerja reproducible.', 'Menengah'], ['Alur Kerja AI Biomedis', 'Bangun model kuat untuk dukungan diagnosis dengan checkpoint explainability.', 'Menengah']], Advanced: [['AI Biomedis Multimodal', 'Gabungkan omics, pencitraan, dan data klinis untuk use case translasi nyata.', 'Lanjutan'], ['Translasi Klinis', 'Manfaatkan machine learning untuk optimasi uji klinis dan stratifikasi pasien.', 'Lanjutan']], Certification: [['Profesional AI Biomedis Translasi', 'Capstone end-to-end dengan dokumentasi gaya publikasi dan defense mentor.', 'Sertifikasi']] },
    topicTitles: ['Intelijen Varian Genomik', 'Pipeline NLP Klinis', 'AI Patologi Digital', 'Esensi Biostatistika', 'Interpretasi Sinyal Wearable', 'Pemodelan Penemuan Obat', 'Dasar Terapi Herbal', 'Farmakologi Terapan untuk Inovasi Biomedis', 'AI untuk Kedokteran Presisi', 'Alur Data Proteomik', 'Dukungan Keputusan Klinis'],
    categories: ['Semua', 'Genomik', 'Klinis', 'Pencitraan', 'Fondasi', 'IoT', 'AI', 'Herbal', 'Farmakologi'], datasetCategories: ['Semua', 'Genomik', 'Klinis', 'Pencitraan', 'IoT'],
    datasets: ['Atlas Multi-Omics Kanker', 'Bundel Gelombang ICU', 'Set Slide Histopatologi', 'Stream Vital Jarak Jauh'],
    mentors: { fields: ['AI Klinis', 'Bioinformatika', 'Pencitraan Medis'], availability: ['Tersedia minggu ini', 'Sisa 2 slot', 'Tersedia minggu ini'], tags: [['Validasi Model', 'AI Kesehatan'], ['Genomik', 'Pipeline Omics'], ['Computer Vision', 'Radiologi']] },
    footer: { description: 'Platform pembelajaran biomedis premium untuk data, AI, dan translasi klinis.', platform: ['Jalur Belajar', 'Topik', 'Dataset', 'Mentoring'], resources: ['Dokumentasi', 'Catatan Riset', 'Komunitas', 'FAQ'], contact: ['hello@nibm7.ai', '+62 812-0000-000', 'Jakarta, Indonesia'] },
    finalCta: { title: 'Siap meningkatkan perjalanan belajar biomedis Anda?', description: 'Mulai jalur terstruktur dengan dataset, mentor, dan alur kerja AI biomedis praktik langsung.' },
  },
}

const makeVariant = (code, overrides) => ({ ...translations.en, ...overrides, ui: { ...translations.en.ui, ...overrides.ui }, sections: { ...translations.en.sections, ...overrides.sections }, hero: { ...translations.en.hero, ...overrides.hero }, footer: { ...translations.en.footer, ...overrides.footer }, finalCta: { ...translations.en.finalCta, ...overrides.finalCta } })

translations.es = makeVariant('es', {
  navLinks: [{ id: 'about', label: 'Acerca' }, { id: 'features', label: 'Funciones' }, { id: 'paths', label: 'Rutas' }, { id: 'topics', label: 'Temas' }, { id: 'datasets', label: 'Datos' }, { id: 'mentors', label: 'Mentores' }],
  ui: { toggleDarkMode: 'Cambiar modo oscuro', openMenu: 'Abrir menú', languageLabel: 'Idioma', startLearning: 'Comenzar', exploreTopics: 'Explorar temas', modules: 'módulos', records: 'registros', dataHealth: 'Salud de datos', openDataset: 'Abrir dataset', viewPath: 'Ver ruta', bookSession: 'Reservar sesión', searchTopic: 'Buscar tema...', datasetAvailable: 'Dataset disponible', noDataset: 'Sin dataset', startLearningNow: 'Comenzar ahora', exploreCurriculum: 'Explorar currículo', footerResources: 'Recursos', footerContact: 'Contacto' },
  hero: { badge: 'Plataforma de aprendizaje biomédico', title: 'Impulsa habilidades biomédicas con aprendizaje estructurado listo para IA.', description: 'NIBM 7.0 integra bioinformática, IA traslacional, datasets de investigación y mentoría experta en un flujo premium.', trustBadges: ['Confiado por 12+ laboratorios biomédicos', 'Currículo alineado con la industria', 'Resultados guiados por mentores'] },
  sections: { about: { badge: 'Acerca de NIBM 7.0', title: 'De fundamentos a traducción clínica en un sistema conectado.', description: 'Construye confianza científica, opera flujos de IA y entrega impacto clínico significativo.' }, features: { badge: 'Funciones de la plataforma', title: 'Experiencia premium para profesionales biomédicos.' }, paths: { badge: 'Rutas de aprendizaje', title: 'Rutas accionables para cada etapa profesional biomédica.' }, topics: { badge: 'Temas', title: 'Explora módulos por dominio, nivel y disponibilidad de datos.' }, datasets: { badge: 'Datasets', title: 'Datasets de grado investigativo con estado y formato claros.' }, mentors: { badge: 'Mentores', title: 'Aprende con investigadores y profesionales biomédicos experimentados.' } },
  stats: ['Estudiantes activos', 'Módulos estructurados', 'Datasets de investigación', 'Horas de mentor / mes'],
  aboutCards: [['Fundamentos', 'Domina bioinformática, bioestadística y alfabetización de datos biomédicos con rutas guiadas.'], ['Flujo de IA', 'Construye, valida y monitorea modelos con plantillas prácticas de laboratorios reales.'], ['Traducción clínica', 'Conecta el insight del modelo con el impacto en pacientes mediante casos traslacionales.']],
  features: [['Inteligencia de aprendizaje adaptativo', 'Motor central', 'NIBM 7.0 personaliza el orden y dificultad de módulos según dominio y rendimiento.'], ['Laboratorio biomédico sandbox', 'Práctico', 'Ejecuta experimentos en genómica, señales, imagen y flujos traslacionales.'], ['Simulaciones clínicas listas', 'Práctica', 'Entrena con decisiones guiadas inspiradas en realidades clínicas y de investigación.'], ['Constructor de portafolio de investigación', 'Carrera', 'Convierte proyectos en portafolios con evidencia para estudios, laboratorios o industria.'], ['Ciclo de feedback de mentores', 'Mentoría', 'Recibe revisiones estructuradas de expertos biomédicos para mejorar rigor y comunicación.'], ['Analítica de progreso', 'Insights', 'Monitorea competencias con analítica basada en resultados y recomendaciones de brechas.']],
  tabs: ['Inicial', 'Intermedio', 'Avanzado', 'Certificación'],
  pathData: { Beginner: [['Fundamentos biomédicos', 'Fundamentos de biología molecular, bioestadística y pensamiento de datos.', 'Inicial'], ['Introducción a bioinformática', 'Bases de datos de secuenciación, control de calidad e interpretación.', 'Inicial']], Intermediate: [['Analítica de datos clínicos', 'Transforma y analiza datasets tipo EHR con flujos reproducibles.', 'Intermedio'], ['Flujo de IA biomédica', 'Construye modelos robustos de apoyo diagnóstico con explainability.', 'Intermedio']], Advanced: [['IA biomédica multimodal', 'Fusiona ómicas, imagen y datos clínicos para casos traslacionales reales.', 'Avanzado'], ['Traducción clínica', 'Usa machine learning para optimizar ensayos y estratificar pacientes.', 'Avanzado']], Certification: [['Profesional en IA biomédica traslacional', 'Capstone integral con documentación estilo publicación y defensa con mentor.', 'Certificación']] },
  topicTitles: ['Inteligencia de variantes genómicas', 'Pipeline de NLP clínico', 'IA de patología digital', 'Esenciales de bioestadística', 'Interpretación de señales wearable', 'Modelado para descubrimiento de fármacos', 'Fundamentos terapéuticos herbales', 'Farmacología aplicada para innovación biomédica', 'IA para medicina de precisión', 'Flujo de datos proteómicos', 'Soporte a decisiones clínicas'],
  datasets: ['Atlas multi-ómico de cáncer', 'Paquete de ondas UCI', 'Conjunto de láminas histopatológicas', 'Flujo remoto de signos vitales'],
  mentors: { fields: ['IA clínica', 'Bioinformática', 'Imagen médica'], availability: ['Disponible esta semana', 'Quedan 2 cupos', 'Disponible esta semana'], tags: [['Validación de modelos', 'IA en salud'], ['Genómica', 'Pipeline ómico'], ['Visión computacional', 'Radiología']] },
  categories: ['Todos', 'Genómica', 'Clínico', 'Imagen', 'Fundamentos', 'IoT', 'IA', 'Herbal', 'Farmacología'], datasetCategories: ['Todos', 'Genómica', 'Clínico', 'Imagen', 'IoT'],
  footer: { description: 'Plataforma premium de aprendizaje biomédico para datos, IA y traducción clínica.' },
  finalCta: { title: '¿Listo para avanzar en tu aprendizaje biomédico?', description: 'Inicia una ruta estructurada con datasets, mentores y flujos biomédicos de IA.' },
})

translations.zh = makeVariant('zh', {
  navLinks: [{ id: 'about', label: '关于' }, { id: 'features', label: '功能' }, { id: 'paths', label: '学习路径' }, { id: 'topics', label: '主题' }, { id: 'datasets', label: '数据集' }, { id: 'mentors', label: '导师' }],
  ui: { toggleDarkMode: '切换深色模式', openMenu: '打开菜单', languageLabel: '语言', startLearning: '开始学习', exploreTopics: '探索主题', modules: '模块', records: '记录', dataHealth: '数据健康度', openDataset: '打开数据集', viewPath: '查看路径', bookSession: '预约课程', searchTopic: '搜索主题...', datasetAvailable: '有可用数据集', noDataset: '无数据集', startLearningNow: '立即开始学习', exploreCurriculum: '探索课程', footerResources: '资源', footerContact: '联系' },
  hero: { badge: '生物医学学习平台', title: '通过结构化、AI 就绪的学习提升生物医学能力。', description: 'NIBM 7.0 将生物信息学、转化 AI、研究数据集和专家指导整合为一个高级学习流程。', trustBadges: ['12+ 生物医学实验室信赖', '贴合行业的课程', '导师指导成果'] },
  sections: { about: { badge: '关于 NIBM 7.0', title: '从基础到临床转化，尽在一个互联学习系统。', description: '先建立科学信心，再运行 AI 工作流，最终实现有意义的临床影响。' }, features: { badge: '平台功能', title: '面向生物医学专业人士的高级学习体验。' }, paths: { badge: '学习路径', title: '适合每个生物医学职业阶段的行动路径。' }, topics: { badge: '主题', title: '按领域、级别和数据可用性探索模块。' }, datasets: { badge: '数据集', title: '研究级数据集，健康状态和格式清晰。' }, mentors: { badge: '导师', title: '与经验丰富的生物医学研究者和实践者一起学习。' } },
  stats: ['活跃学习者', '结构化模块', '研究数据集', '导师小时 / 月'],
  aboutCards: [['基础', '通过引导路径掌握生物信息学、生物统计学和生物医学数据素养。'], ['AI 工作流', '使用真实实验室模板构建、验证并监控模型。'], ['临床转化', '通过转化案例把模型洞察连接到患者影响。']],
  features: [['自适应学习智能', '核心引擎', 'NIBM 7.0 根据掌握度和表现数据个性化模块顺序与难度。'], ['生物医学沙盒实验室', '实践', '开展基因组、信号、影像和转化工作流实验。'], ['临床就绪案例模拟', '练习', '通过贴近临床和研究现实的决策检查点进行训练。'], ['研究作品集构建器', '职业', '将项目整理为面向深造、实验室或行业的循证作品集。'], ['导师反馈闭环', '导师制', '接受生物医学专家的结构化评审，提升严谨性与表达。'], ['进度分析', '洞察', '用结果导向分析和技能差距建议跟踪能力成长。']],
  tabs: ['初级', '中级', '高级', '认证'],
  pathData: { Beginner: [['生物医学基础', '分子生物学、生物统计学和数据思维基础。', '初级'], ['生物信息学入门', '序列数据基础、质量控制和解释基础。', '初级']], Intermediate: [['临床数据分析', '用可复现工作流转换和分析类 EHR 数据集。', '中级'], ['AI 生物医学工作流', '构建具备可解释性检查点的诊断支持模型。', '中级']], Advanced: [['多模态生物医学 AI', '融合组学、影像和临床数据以支持真实转化用例。', '高级'], ['临床转化', '利用机器学习优化试验并进行患者分层。', '高级']], Certification: [['转化生物医学 AI 专业认证', '端到端 capstone，含论文式文档和导师答辩。', '认证']] },
  topicTitles: ['基因组变异智能', '临床 NLP 管线', '数字病理 AI', '生物统计学基础', '可穿戴信号解读', '药物发现建模', '草药疗法基础', '生物医学创新应用药理学', '精准医学人工智能', '蛋白质组数据工作流', '临床决策支持'],
  datasets: ['癌症多组学图谱', 'ICU 波形包', '组织病理切片集', '远程生命体征流'],
  mentors: { fields: ['临床 AI', '生物信息学', '医学影像'], availability: ['本周开放', '剩余 2 个名额', '本周开放'], tags: [['模型验证', '医疗 AI'], ['基因组学', '组学管线'], ['计算机视觉', '放射学']] },
  categories: ['全部', '基因组学', '临床', '影像', '基础', 'IoT', 'AI', '草药', '药理学'], datasetCategories: ['全部', '基因组学', '临床', '影像', 'IoT'],
  footer: { description: '面向数据、AI 和临床转化的高级生物医学学习平台。' },
  finalCta: { title: '准备推进你的生物医学学习之旅了吗？', description: '从数据集、导师和实践型生物医学 AI 工作流开始结构化路径。' },
})

translations.ar = makeVariant('ar', {
  navLinks: [{ id: 'about', label: 'حول' }, { id: 'features', label: 'الميزات' }, { id: 'paths', label: 'مسارات التعلم' }, { id: 'topics', label: 'الموضوعات' }, { id: 'datasets', label: 'مجموعات البيانات' }, { id: 'mentors', label: 'المرشدون' }],
  ui: { toggleDarkMode: 'تبديل الوضع الداكن', openMenu: 'فتح القائمة', languageLabel: 'اللغة', startLearning: 'ابدأ التعلم', exploreTopics: 'استكشف الموضوعات', modules: 'وحدات', records: 'سجلات', dataHealth: 'صحة البيانات', openDataset: 'فتح البيانات', viewPath: 'عرض المسار', bookSession: 'احجز جلسة', searchTopic: 'ابحث عن موضوع...', datasetAvailable: 'بيانات متاحة', noDataset: 'لا توجد بيانات', startLearningNow: 'ابدأ الآن', exploreCurriculum: 'استكشف المنهج', footerResources: 'الموارد', footerContact: 'التواصل' },
  hero: { badge: 'منصة تعلم الطب الحيوي', title: 'طوّر مهارات الطب الحيوي بتعلم منظم وجاهز للذكاء الاصطناعي.', description: 'تجمع NIBM 7.0 المعلوماتية الحيوية والذكاء الاصطناعي الانتقالي وبيانات البحث وإرشاد الخبراء في مسار تعلم واحد.', trustBadges: ['موثوقة لدى أكثر من 12 مختبراً', 'منهج متوافق مع الصناعة', 'نتائج بإرشاد الخبراء'] },
  sections: { about: { badge: 'حول NIBM 7.0', title: 'من الأساسيات إلى الترجمة السريرية في نظام تعلم مترابط.', description: 'ابنِ الثقة العلمية، ثم شغّل سير عمل الذكاء الاصطناعي، ثم قدّم أثراً سريرياً ملموساً.' }, features: { badge: 'ميزات المنصة', title: 'تجربة تعلم متميزة لمحترفي الطب الحيوي.' }, paths: { badge: 'مسارات التعلم', title: 'مسارات عملية لكل مرحلة مهنية في الطب الحيوي.' }, topics: { badge: 'الموضوعات', title: 'استكشف الوحدات حسب المجال والمستوى وتوفر البيانات.' }, datasets: { badge: 'مجموعات البيانات', title: 'بيانات بحثية بحالة صحية وتنسيق واضحين.' }, mentors: { badge: 'المرشدون', title: 'تعلّم مع باحثين وممارسين ذوي خبرة في الطب الحيوي.' } },
  stats: ['متعلمين نشطين', 'وحدات منظمة', 'بيانات بحثية', 'ساعات إرشاد / شهر'],
  aboutCards: [['الأساسيات', 'أتقن المعلوماتية الحيوية والإحصاء الحيوي وقراءة بيانات الطب الحيوي عبر مسارات موجهة.'], ['سير عمل الذكاء الاصطناعي', 'ابنِ النماذج وتحقق منها وراقبها بقوالب عملية من مختبرات حقيقية.'], ['الترجمة السريرية', 'اربط رؤى النماذج بتأثير المرضى من خلال دراسات حالة انتقالية.']],
  features: [['ذكاء تعلم تكيفي', 'المحرك الأساسي', 'تخصص NIBM 7.0 ترتيب الوحدات وصعوبتها وفق الإتقان وبيانات الأداء.'], ['مختبر تجريبي طبي حيوي', 'عملي', 'نفذ تجارب في الجينوم والإشارات والتصوير وسير العمل الانتقالي.'], ['محاكاة حالات جاهزة سريرياً', 'تدريب', 'تدرب بنقاط قرار موجهة مستوحاة من الواقع السريري والبحثي.'], ['منشئ ملف أبحاث', 'مسار مهني', 'حوّل المشاريع إلى ملف مدعوم بالأدلة للدراسة أو المختبرات أو الصناعة.'], ['حلقة ملاحظات المرشد', 'إرشاد', 'احصل على مراجعات منظمة من خبراء الطب الحيوي لتحسين الدقة والتواصل.'], ['تحليلات التقدم', 'رؤى', 'تتبع نمو الكفاءة بتحليلات مبنية على النتائج وتوصيات فجوات المهارات.']],
  tabs: ['مبتدئ', 'متوسط', 'متقدم', 'شهادة'],
  pathData: { Beginner: [['أساسيات الطب الحيوي', 'أساسيات الأحياء الجزيئية والإحصاء الحيوي والتفكير بالبيانات.', 'مبتدئ'], ['مقدمة في المعلوماتية الحيوية', 'أساسيات بيانات التسلسل وضبط الجودة والتفسير.', 'مبتدئ']], Intermediate: [['تحليلات البيانات السريرية', 'حوّل وحلل بيانات تشبه السجلات الصحية بسير عمل قابل للتكرار.', 'متوسط'], ['سير عمل AI طبي حيوي', 'ابنِ نماذج قوية لدعم التشخيص مع نقاط تحقق للتفسير.', 'متوسط']], Advanced: [['ذكاء اصطناعي طبي حيوي متعدد الوسائط', 'ادمج الأوميكس والتصوير والبيانات السريرية لحالات انتقالية واقعية.', 'متقدم'], ['الترجمة السريرية', 'استخدم تعلم الآلة لتحسين التجارب وتقسيم المرضى.', 'متقدم']], Certification: [['محترف AI طبي حيوي انتقالي', 'مشروع نهائي شامل بتوثيق شبيه بالنشر ودفاع مع المرشد.', 'شهادة']] },
  topicTitles: ['ذكاء المتغيرات الجينومية', 'خط NLP سريري', 'AI لعلم الأمراض الرقمي', 'أساسيات الإحصاء الحيوي', 'تفسير إشارات الأجهزة القابلة للارتداء', 'نمذجة اكتشاف الأدوية', 'أساسيات العلاجات العشبية', 'علم الأدوية التطبيقي للابتكار الطبي الحيوي', 'AI للطب الدقيق', 'سير عمل بيانات البروتيوميات', 'دعم القرار السريري'],
  datasets: ['أطلس السرطان متعدد الأوميكس', 'حزمة موجات العناية المركزة', 'مجموعة شرائح الأنسجة المرضية', 'تدفق العلامات الحيوية عن بعد'],
  mentors: { fields: ['AI سريري', 'معلوماتية حيوية', 'تصوير طبي'], availability: ['متاح هذا الأسبوع', 'تبقى مقعدان', 'متاح هذا الأسبوع'], tags: [['تحقق النماذج', 'AI صحي'], ['الجينوم', 'خط الأوميكس'], ['رؤية حاسوبية', 'أشعة']] },
  categories: ['الكل', 'الجينوم', 'سريري', 'تصوير', 'أساسيات', 'IoT', 'AI', 'عشبي', 'علم الأدوية'], datasetCategories: ['الكل', 'الجينوم', 'سريري', 'تصوير', 'IoT'],
  footer: { description: 'منصة تعلم طبية حيوية متميزة للبيانات والذكاء الاصطناعي والترجمة السريرية.' },
  finalCta: { title: 'هل أنت مستعد لتطوير رحلة تعلمك في الطب الحيوي؟', description: 'ابدأ مساراً منظماً مع البيانات والمرشدين وسير عمل الذكاء الاصطناعي العملي.' },
})

const statValues = ['18K+', '140+', '32', '900+']
const statIcons = ['Users', 'BookOpen', 'Database', 'Timer']
const aboutImages = [learningPathVisual, aiWorkflow, clinicalTranslation]
const featureMeta = [
  ['Sparkles', 'neural', aiWorkflow], ['FlaskConical', 'molecule', dnaNetwork], ['HeartPulse', 'clinical', clinicalTranslation, true], ['BriefcaseBusiness', 'portfolio', datasetVisual], ['MessageCircleHeart', 'mentor', aiWorkflow], ['ChartNoAxesCombined', 'analytics', datasetVisual],
]
const pathMeta = {
  Beginner: [[16, '4 weeks', 65, 'dna', dnaNetwork], [14, '5 weeks', 48, 'pipeline', learningPathVisual]],
  Intermediate: [[20, '6 weeks', 42, 'data', datasetVisual], [22, '7 weeks', 35, 'neural', aiWorkflow]],
  Advanced: [[26, '8 weeks', 21, 'multimodal', aiWorkflow], [24, '8 weeks', 18, 'clinical', clinicalTranslation]],
  Certification: [[30, '10 weeks', 12, 'capstone', clinicalTranslation]],
}
const topicsMeta = [
  ['Genomics', 9, '7h', true, 'Intermediate', 'Dna', 'dna', dnaNetwork], ['Clinical', 10, '8h', true, 'Intermediate', 'Stethoscope', 'clinical', clinicalTranslation], ['Imaging', 12, '10h', true, 'Advanced', 'ScanHeart', 'imaging', aiWorkflow], ['Foundation', 7, '5h', false, 'Beginner', 'FlaskConical', 'foundation', learningPathVisual], ['IoT', 8, '6h', true, 'Intermediate', 'Activity', 'iot', datasetVisual], ['AI', 13, '11h', true, 'Advanced', 'BrainCircuit', 'ai', aiWorkflow], ['Herbal', 8, '6h', false, 'Beginner', 'Leaf', 'foundation', learningPathVisual], ['Pharmacology', 12, '9h', true, 'Intermediate', 'Pill', 'clinical', clinicalTranslation], ['AI', 14, '12h', true, 'Advanced', 'BrainCircuit', 'neural', aiWorkflow], ['Genomics', 9, '8h', true, 'Advanced', 'Dna', 'proteomics', dnaNetwork], ['Clinical', 11, '9h', true, 'Advanced', 'HeartPulse', 'decision', clinicalTranslation],
]
const datasetsMeta = [
  ['Genomics', 'Parquet', '2.5M', 92, 'omics', datasetVisual, [24, 28, 34, 44, 56, 72]], ['Clinical', 'CSV', '4.1M', 88, 'waveform', aiWorkflow, [12, 24, 20, 42, 54, 67]], ['Imaging', 'DICOM', '980K', 95, 'imaging', clinicalTranslation, [18, 26, 30, 48, 64, 80]], ['IoT', 'JSON', '13.2M', 83, 'iot', datasetVisual, [20, 28, 36, 32, 46, 58]],
]
const mentorNames = ['Dr. Alya Rahman', 'Prof. Mika Santoso', 'Dr. Nara Wijaya']
const mentorRatings = [4.9, 4.8, 4.9]
const mentorInitials = ['AR', 'MS', 'NW']

export function getSiteData(languageCode = 'en') {
  const t = translations[languageCode] || translations.en
  const categoryLabelByKey = Object.fromEntries(categoryKeys.map((key, index) => [key, t.categories[index] || key]))
  const datasetCategoryLabelByKey = Object.fromEntries(datasetCategoryKeys.map((key, index) => [key, t.datasetCategories[index] || key]))

  const learningPaths = Object.fromEntries(Object.entries(t.pathData).map(([key, paths]) => [key, paths.map(([title, description, difficulty], index) => {
    const [modules, duration, progress, visualType, image] = pathMeta[key][index]
    return { title, description, modules, duration, difficulty, progress, visualType, image }
  })]))

  return {
    ...t,
    language: languages.find((item) => item.code === languageCode) || languages[0],
    navLinks: t.navLinks,
    stats: t.stats.map((label, index) => ({ label, value: statValues[index], icon: statIcons[index] })),
    aboutCards: t.aboutCards.map(([title, description], index) => ({ title, description, image: aboutImages[index] })),
    features: t.features.map(([title, label, description], index) => {
      const [icon, visualType, image, featured] = featureMeta[index]
      return { title, label, description, icon, visualType, image, featured: Boolean(featured) }
    }),
    pathTabs: t.tabs.map((label, index) => ({ key: Object.keys(pathMeta)[index], label })),
    learningPaths,
    topics: t.topicTitles.map((title, index) => {
      const [categoryKey, modules, duration, dataset, levelKey, icon, visualType, image] = topicsMeta[index]
      return { title, categoryKey, category: categoryLabelByKey[categoryKey], modules, duration, dataset, level: categoryLabelByKey[levelKey] || levelKey, icon, visualType, image }
    }),
    topicCategories: categoryKeys.map((key) => ({ key, label: categoryLabelByKey[key] })),
    datasets: t.datasets.map((name, index) => {
      const [categoryKey, format, records, health, visualType, image, trend] = datasetsMeta[index]
      return { name, categoryKey, category: datasetCategoryLabelByKey[categoryKey], format, records, health, visualType, image, trend }
    }),
    datasetCategories: datasetCategoryKeys.map((key) => ({ key, label: datasetCategoryLabelByKey[key] })),
    mentors: mentorNames.map((name, index) => ({ name, field: t.mentors.fields[index], rating: mentorRatings[index], availability: t.mentors.availability[index], tags: t.mentors.tags[index], initials: mentorInitials[index], image: null, visualType: ['clinical', 'bioinformatics', 'imaging'][index] })),
  }
}

export const defaultLanguage = 'en'
export const siteData = getSiteData(defaultLanguage)
export const navLinks = siteData.navLinks
export const heroTrustBadges = siteData.hero.trustBadges
export const stats = siteData.stats
export const aboutCards = siteData.aboutCards
export const features = siteData.features
export const pathTabs = siteData.pathTabs.map((tab) => tab.key)
export const learningPaths = siteData.learningPaths
export const topics = siteData.topics
export const topicCategories = siteData.topicCategories.map((item) => item.key)
export const datasets = siteData.datasets
export const datasetCategories = siteData.datasetCategories.map((item) => item.key)
export const mentors = siteData.mentors
export const footer = siteData.footer
