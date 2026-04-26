import { cn } from '../../lib/utils'

export default function Button({ className, variant = 'default', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        variant === 'default' && 'bg-indigo-600 text-white hover:bg-indigo-500',
        variant === 'secondary' && 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
        className,
      )}
      {...props}
    />
  )
}
