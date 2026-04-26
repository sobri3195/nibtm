import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Features from './components/Features'
import LearningPaths from './components/LearningPaths'
import Topics from './components/Topics'
import Datasets from './components/Datasets'
import Mentors from './components/Mentors'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <Hero />
      <Stats />
      <About />
      <Features />
      <LearningPaths />
      <Topics />
      <Datasets />
      <Mentors />
      <FinalCTA />
      <Footer />
    </main>
  )
}
