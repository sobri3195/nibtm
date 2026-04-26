import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../data/siteData'
import Button from './ui/Button'
import { cn } from '../lib/utils'

export default function Navbar({ darkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-5 py-4 sm:px-6 lg:px-10 xl:px-16">
        <a href="#" className="text-xl font-black tracking-tight text-slate-900 dark:text-white">NIBM 7.0</a>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-full px-4 py-2 text-[15px] font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white',
                idx === 0 && 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white',
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleDarkMode}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button className="hidden lg:inline-flex">Start Learning</Button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 dark:border-white/10 dark:text-slate-100 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200/70 px-5 py-4 dark:border-white/10 lg:hidden">
          <div className="mx-auto max-w-[1440px] space-y-2 sm:px-1">
            {navLinks.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {item.label}
              </a>
            ))}
            <Button className="w-full">Start Learning</Button>
          </div>
        </div>
      )}
    </header>
  )
}
