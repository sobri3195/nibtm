import { motion } from 'framer-motion'
import Badge from './ui/Badge'

export default function SectionHeader({ badge, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="mb-10 space-y-4"
    >
      {badge && <Badge className="bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-200">{badge}</Badge>}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {description && <p className="max-w-3xl text-slate-600 dark:text-slate-300">{description}</p>}
    </motion.div>
  )
}
