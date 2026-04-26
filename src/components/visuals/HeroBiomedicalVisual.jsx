import { motion } from 'framer-motion'
import { Database, Sparkles, Workflow } from 'lucide-react'
import heroDashboard from '../../assets/illustrations/hero-biomedical-dashboard.svg'
import dnaNetwork from '../../assets/illustrations/dna-network.svg'
import OptimizedImage from '../ui/OptimizedImage'

export default function HeroBiomedicalVisual() {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="relative rounded-3xl border border-white/15 bg-slate-900/70 p-5 backdrop-blur-xl">
        <p className="text-sm text-cyan-200">Biomedical Intelligence Panel</p>
        <OptimizedImage src={heroDashboard} alt="Biomedical AI dashboard interface" eager className="mt-3 h-44 w-full rounded-2xl border border-white/10" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-slate-800/70 p-3">
            <p className="mb-2 flex items-center gap-2 text-xs text-cyan-200"><Sparkles size={14} />AI recommendation</p>
            <p className="text-sm font-semibold text-white">Next: Clinical NLP Pipeline</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/70 p-3">
            <p className="mb-2 flex items-center gap-2 text-xs text-cyan-200"><Database size={14} />Dataset status</p>
            <div className="h-2 rounded-full bg-slate-700"><div className="h-2 w-4/5 rounded-full bg-cyan-400" /></div>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-slate-800/70 p-3">
          <p className="mb-2 flex items-center gap-2 text-xs text-cyan-200"><Workflow size={14} />Clinical workflow</p>
          <OptimizedImage src={dnaNetwork} alt="DNA network visual" className="h-24 w-full rounded-lg" />
        </div>
      </motion.div>
    </motion.div>
  )
}
