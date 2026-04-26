import { cn } from '../../lib/utils'

export default function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200',
        className,
      )}
      {...props}
    />
  )
}
