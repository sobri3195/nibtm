import { useState } from 'react'

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

  return (
    <header className="navbar glass" aria-label="Main navigation">
      <a className="brand" href="#home">NIBM 7.0</a>
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
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <button className="theme-btn" onClick={onToggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
