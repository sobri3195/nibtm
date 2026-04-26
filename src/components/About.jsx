import { motion } from 'framer-motion'
import { aboutCards } from '../data/siteData'
import BiomedicalWorkflow from './visuals/BiomedicalWorkflow'
import FloatingImageCard from './visuals/FloatingImageCard'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-16 dark:bg-slate-900 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-10 xl:px-16">
        <div>
          <SectionHeader
            badge="About NIBM 7.0"
            title="From foundation to clinical translation in one connected learning system."
            description="Build scientific confidence first, operationalize AI workflows second, and deliver clinically meaningful impact third."
          />
          <BiomedicalWorkflow />
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          {aboutCards.map((card) => (
            <FloatingImageCard key={card.title} image={card.image} alt={`${card.title} biomedical illustration`} title={`${card.title} — ${card.description}`} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
