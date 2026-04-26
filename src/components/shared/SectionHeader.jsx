import { sectionClassName } from '../../lib/utils'

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className={`${sectionClassName()} mb-10 lg:mb-12`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  )
}
