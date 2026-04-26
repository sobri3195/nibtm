export default function DatasetMiniChart({ values = [28, 40, 35, 60, 52, 74], line = [20, 45, 38, 60, 54, 80] }) {
  return (
    <div className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-slate-900/70">
      <div className="mb-2 flex items-end gap-1.5">
        {values.map((v, i) => <span key={i} className="w-2 rounded bg-cyan-400/80" style={{ height: `${v}%` }} />)}
      </div>
      <svg viewBox="0 0 120 30" className="h-7 w-full text-indigo-400">
        <polyline points={line.map((v, i) => `${i * 24},${30 - v / 4}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
