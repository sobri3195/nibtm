import { useEffect, useMemo, useState } from 'react'
import { CalendarCheck2, Database, X } from 'lucide-react'
import About from './components/About'
import Datasets from './components/Datasets'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import InteractiveWorkspace from './components/InteractiveWorkspace'
import LearningPaths from './components/LearningPaths'
import Mentors from './components/Mentors'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Topics from './components/Topics'
import Button from './components/ui/Button'
import { defaultLanguage, getSiteData, languages } from './data/siteData'

const getStoredValue = (key, fallback) => {
  if (typeof window === 'undefined') return fallback
  return window.localStorage.getItem(key) || fallback
}

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return false
  const saved = window.localStorage.getItem('theme')
  return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [language, setLanguage] = useState(() => getStoredValue('language', defaultLanguage))
  const [startLearningSignal, setStartLearningSignal] = useState(0)
  const [action, setAction] = useState(null)
  const data = useMemo(() => getSiteData(language), [language])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleStartLearning = () => {
    setStartLearningSignal((value) => value + 1)
    setAction({
      type: 'learning',
      title: data.ui.startLearningNow,
      description: 'Your first learning path is now active. Continue with the recommended module roadmap below.',
      cta: data.ui.exploreCurriculum,
      sectionId: 'paths',
    })
    scrollToSection('paths')
  }

  const handleOpenDataset = (dataset) => {
    setAction({
      type: 'dataset',
      title: dataset.name,
      description: `${dataset.format} • ${dataset.records} ${data.ui.records} • ${data.ui.dataHealth} ${dataset.health}%`,
      cta: data.ui.openDataset,
      sectionId: 'datasets',
    })
  }

  const handleBookSession = (mentor) => {
    setAction({
      type: 'mentor',
      title: mentor.name,
      description: `${mentor.field} • ${mentor.availability}. Session request saved locally for follow-up.`,
      cta: data.ui.bookSession,
      sectionId: 'mentors',
    })
  }

  const handleActionCta = () => {
    if (action?.sectionId) scrollToSection(action.sectionId)
    setAction(null)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = data.language.dir
    localStorage.setItem('language', language)
  }, [data.language.dir, language])

  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar darkMode={darkMode} languages={languages} language={language} data={data} onChangeLanguage={setLanguage} onToggleDarkMode={() => setDarkMode((v) => !v)} onStartLearning={handleStartLearning} />
      <main>
        <Hero data={data} onStartLearning={handleStartLearning} onExploreTopics={() => scrollToSection('topics')} />
        <Stats stats={data.stats} />
        <About data={data} />
        <Features data={data} />
        <LearningPaths data={data} startLearningSignal={startLearningSignal} />
        <Topics data={data} />
        <Datasets data={data} onOpenDataset={handleOpenDataset} />
        <Mentors data={data} onBookSession={handleBookSession} />
        <InteractiveWorkspace data={data} />
        <FinalCTA data={data} onStartLearning={handleStartLearning} onExploreCurriculum={() => scrollToSection('paths')} />
      </main>
      <Footer data={data} />

      {action && (
        <aside className="fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-sm rounded-3xl border border-slate-200 bg-white p-4 shadow-glow dark:border-white/10 dark:bg-slate-900" role="status" aria-live="polite">
          <div className="flex items-start gap-3">
            <span className="rounded-2xl bg-cyan-500/15 p-2 text-cyan-700 dark:text-cyan-300">
              {action.type === 'mentor' ? <CalendarCheck2 size={20} /> : <Database size={20} />}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-slate-900 dark:text-white">{action.title}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{action.description}</p>
              <Button className="mt-3 py-2" onClick={handleActionCta}>{action.cta}</Button>
            </div>
            <button type="button" onClick={() => setAction(null)} className="rounded-xl p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="Dismiss notification">
              <X size={18} />
            </button>
          </div>
        </aside>
      )}
    </div>
  )
}
