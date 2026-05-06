import { useEffect, useMemo, useState } from 'react'
import About from './components/About'
import Datasets from './components/Datasets'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LearningPaths from './components/LearningPaths'
import Mentors from './components/Mentors'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Topics from './components/Topics'
import { defaultLanguage, getSiteData, languages } from './data/siteData'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || defaultLanguage)
  const data = useMemo(() => getSiteData(language), [language])

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
      <Navbar darkMode={darkMode} languages={languages} language={language} data={data} onChangeLanguage={setLanguage} onToggleDarkMode={() => setDarkMode((v) => !v)} />
      <main>
        <Hero data={data} />
        <Stats stats={data.stats} />
        <About data={data} />
        <Features data={data} />
        <LearningPaths data={data} />
        <Topics data={data} />
        <Datasets data={data} />
        <Mentors data={data} />
        <FinalCTA data={data} />
      </main>
      <Footer data={data} />
    </div>
  )
}
