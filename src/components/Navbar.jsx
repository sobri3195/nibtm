const links = [
  ['home', 'Home'],
  ['about', 'About NiBTM 7.0'],
  ['paths', 'Learning Paths'],
  ['topics', 'Topics'],
  ['datasets', 'Dataset & Big Data'],
  ['mentors', 'Tutors & Mentors'],
  ['community', 'Student Community'],
  ['research', 'Research Hub'],
  ['aiiot', 'AI & IoT Lab'],
  ['dashboard', 'Progress Dashboard'],
  ['admin', 'Admin Mini Panel'],
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">NiBTM 7.0</div>
      <nav>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
