import { footerColumns } from '../data/siteData'
import { sectionClassName } from '../lib/utils'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className={`${sectionClassName()} grid gap-8 md:grid-cols-2 lg:grid-cols-4`}>
        <div><h3 className="text-lg font-bold">NIBM 7.0</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Premium SaaS biomedical learning platform.</p></div>
        <div><h4 className="font-semibold">Platform</h4>{footerColumns.platform.map((item) => <p key={item} className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item}</p>)}</div>
        <div><h4 className="font-semibold">Resources</h4>{footerColumns.resources.map((item) => <p key={item} className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item}</p>)}</div>
        <div><h4 className="font-semibold">Contact</h4>{footerColumns.contact.map((item) => <p key={item} className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item}</p>)}</div>
      </div>
      <div className={`${sectionClassName()} mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800`}>© {new Date().getFullYear()} NIBM 7.0. All rights reserved.</div>
    </footer>
  )
}
