import { cn } from '../../lib/utils'

export default function GradientAvatar({ initials, className = '' }) {
  const seed = initials.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
  const hue = seed % 360

  return (
    <div
      aria-hidden
      className={cn('flex items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg', className)}
      style={{ background: `linear-gradient(140deg, hsl(${hue} 85% 54%), hsl(${(hue + 55) % 360} 85% 64%))` }}
    >
      {initials}
    </div>
  )
}
