import { useEffect, useState } from 'react'
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

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((v) => !v)} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Features />
        <LearningPaths />
        <Topics />
        <Datasets />
        <Mentors />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
