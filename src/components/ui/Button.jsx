import { cn } from '../../lib/utils'

const variants = {
  primary:
    'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-soft hover:from-indigo-500 hover:to-cyan-400 active:scale-[0.99]',
  secondary:
    'bg-white/70 text-slate-900 ring-1 ring-slate-300 hover:bg-white dark:bg-slate-900/70 dark:text-white dark:ring-white/15 dark:hover:bg-slate-800',
  ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80',
}

export default function Button({ className, variant = 'primary', asChild = false, ...props }) {
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
