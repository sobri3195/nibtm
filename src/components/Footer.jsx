import { Atom } from 'lucide-react'
import MoleculePattern from './visuals/MoleculePattern'

function LinkCol({ title, items }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{title}</h4>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  )
}

export default function Footer({ data }) {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950">
      <MoleculePattern className="pointer-events-none absolute right-4 top-4 h-20 w-36 text-slate-300 dark:text-slate-700" />
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10 xl:px-16">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-900 dark:text-white"><Atom size={20} className="text-cyan-500" />NiBTM 7.0</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{data.footer.description}</p>
        </div>
        <LinkCol title={data.ui.footerPlatform} items={data.footer.platform} />
        <LinkCol title={data.ui.footerResources} items={data.footer.resources} />
        <LinkCol title={data.ui.footerContact} items={data.footer.contact} />
      </div>
    </footer>
  )
}
