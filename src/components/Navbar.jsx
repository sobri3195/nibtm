import { useEffect, useState } from 'react'
import { navLinks } from '../data/siteData'
import { sectionClassName } from '../lib/utils'

export default function Navbar({ darkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-40% 0px -50% 0px' },
    )
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/75 backdrop-blur-xl dark:bg-slate-950/75">
      <div className={`${sectionClassName()} flex h-20 items-center justify-between gap-4`}>
        <a href="#" className="text-lg font-black tracking-tight">NIBM <span className="text-indigo-600">7.0</span></a>
        <button className="rounded-lg border px-3 py-2 lg:hidden" onClick={() => setOpen((v) => !v)}>☰</button>
        <nav className={`${open ? 'flex' : 'hidden'} absolute left-5 right-5 top-20 flex-col gap-2 rounded-2xl border bg-white p-4 lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 dark:bg-slate-900`}>
          {navLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`rounded-full px-4 py-2 text-sm font-medium ${active === item.id ? 'bg-indigo-50 text-indigo-700 dark:bg-slate-800 dark:text-cyan-300' : 'text-slate-700 dark:text-slate-300'}`}>
              {item.label}
            </a>
          ))}
          <button onClick={onToggleDarkMode} className="rounded-full border px-4 py-2 text-sm">{darkMode ? 'Light' : 'Dark'}</button>
        </nav>
      </div>
    </header>
  )
}
