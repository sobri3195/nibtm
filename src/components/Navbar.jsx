import { useState } from 'react'
import { Globe2, Menu, Moon, Sun, X } from 'lucide-react'
import Button from './ui/Button'
import { cn } from '../lib/utils'

export default function Navbar({ darkMode, languages, language, data, onChangeLanguage, onToggleDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-5 py-4 sm:px-6 lg:px-10 xl:px-16">
        <a href="#" className="text-xl font-black tracking-tight text-slate-900 dark:text-white">NIBM 7.0</a>

        <div className="hidden items-center gap-2 lg:flex">
          {data.navLinks.map((item, idx) => (
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
          <label className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 sm:flex">
            <Globe2 size={16} className="text-cyan-500" />
            <span className="sr-only">{data.ui.languageLabel}</span>
            <select value={language} onChange={(event) => onChangeLanguage(event.target.value)} className="bg-transparent font-medium outline-none">
              {languages.map((item) => <option key={item.code} value={item.code}>{item.nativeName}</option>)}
            </select>
          </label>
          <button
            aria-label={data.ui.toggleDarkMode}
            onClick={onToggleDarkMode}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button className="hidden lg:inline-flex">{data.ui.startLearning}</Button>
          <button
            aria-label={data.ui.openMenu}
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
            <label className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 sm:hidden">
              <Globe2 size={16} className="text-cyan-500" />
              <select aria-label={data.ui.languageLabel} value={language} onChange={(event) => onChangeLanguage(event.target.value)} className="w-full bg-transparent font-medium outline-none">
                {languages.map((item) => <option key={item.code} value={item.code}>{item.nativeName}</option>)}
              </select>
            </label>
            {data.navLinks.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {item.label}
              </a>
            ))}
            <Button className="w-full">{data.ui.startLearning}</Button>
          </div>
        </div>
      )}
    </header>
  )
}
