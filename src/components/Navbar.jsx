import { useEffect, useState } from 'react'
import { Moon, Sun } from './icons'

const links = [
  ['home', 'Home'],
  ['about', 'About'],
  ['paths', 'Learning Paths'],
  ['topics', 'Topics'],
  ['datasets', 'Datasets'],
  ['mentors', 'Mentors'],
  ['dashboard', 'Dashboard'],
]

function Navbar({ darkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const nextActive = links.findLast(([id]) => {
        const el = document.getElementById(id)
        if (!el) return false
        const top = el.getBoundingClientRect().top
        return top <= 120
      })
      if (nextActive) setActive(nextActive[0])
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar glass ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="NIBM 7.0 home page">
        <img src="/logo-nibtm.svg" alt="NIBM logo" width="38" height="38" />
        <span>
          <strong>NIBM 7.0</strong>
          <small>Future BioMed Learning Hub</small>
        </span>
      </a>
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? 'show' : ''}>
        {links.map(([id, label]) => (
          <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <button className="theme-btn icon-only" onClick={onToggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
