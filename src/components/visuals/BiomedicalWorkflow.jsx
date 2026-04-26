import { FlaskConical, BrainCircuit, Stethoscope } from 'lucide-react'

const steps = [
  { title: 'Foundation', Icon: FlaskConical },
  { title: 'AI Workflow', Icon: BrainCircuit },
  { title: 'Clinical Translation', Icon: Stethoscope },
]

export default function BiomedicalWorkflow() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900/70">
      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map(({ title, Icon }, idx) => (
          <div key={title} className="relative flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white"><Icon size={18} /></div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</p>
            {idx < steps.length - 1 && <div className="absolute -right-2 top-5 hidden h-0.5 w-4 bg-slate-300 dark:bg-slate-700 sm:block" />}
          </div>
        ))}
      </div>
    </div>
  )
}
