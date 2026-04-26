import { cn } from '../../lib/utils'

export default function Card({ className, ...props }) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all dark:border-white/10 dark:bg-slate-900/70',
        className,
      )}
      {...props}
    />
  )
}
