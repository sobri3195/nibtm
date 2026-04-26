import { footer } from '../data/siteData'

function LinkCol({ title, items }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{title}</h4>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-slate-950">
      <div className="max-w-[1440px] mx-auto grid gap-8 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10 xl:px-16">
        <div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">NIBM 7.0</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Premium biomedical learning platform for data, AI, and clinical translation.</p>
        </div>
        <LinkCol title="Platform" items={footer.platform} />
        <LinkCol title="Resources" items={footer.resources} />
        <LinkCol title="Contact" items={footer.contact} />
      </div>
    </footer>
  )
}
