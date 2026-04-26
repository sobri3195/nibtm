import { motion } from 'framer-motion'
import OptimizedImage from '../ui/OptimizedImage'

export default function FloatingImageCard({ image, alt, title, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl ${className}`}
    >
      <OptimizedImage src={image} alt={alt} className="h-28 w-full" />
      <p className="px-4 py-3 text-sm text-slate-100">{title}</p>
    </motion.div>
  )
}
