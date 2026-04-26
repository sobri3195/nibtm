import { cn } from '../../lib/utils'

export default function Card({ className, ...props }) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
      {...props}
    />
  )
}
