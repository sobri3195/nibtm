import { Atom } from 'lucide-react'
import { footer } from '../data/siteData'
import MoleculePattern from './visuals/MoleculePattern'

function LinkCol({ title, items }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{title}</h4>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950">
      <MoleculePattern className="pointer-events-none absolute right-4 top-4 h-20 w-36 text-slate-300 dark:text-slate-700" />
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10 xl:px-16">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-900 dark:text-white"><Atom size={20} className="text-cyan-500" />NIBM 7.0</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Premium biomedical learning platform for data, AI, and clinical translation.</p>
        </div>
        <LinkCol title="Platform" items={footer.platform} />
        <LinkCol title="Resources" items={footer.resources} />
        <LinkCol title="Contact" items={footer.contact} />
      </div>
    </footer>
  )
}
