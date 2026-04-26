import { cn } from '../../lib/utils'

export default function OptimizedImage({ src, alt, className, eager = false, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('object-cover', className)}
      {...props}
    />
  )
}
