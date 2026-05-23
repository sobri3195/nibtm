import { motion, AnimatePresence } from 'framer-motion';
export default function Modal({ open, onClose, title, children }) {
  return <AnimatePresence>{open && <motion.div className='fixed inset-0 bg-black/50 z-50 grid place-items-center p-4' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}><motion.div className='bg-white dark:bg-slate-900 rounded-2xl p-6 w-full max-w-2xl' onClick={(e)=>e.stopPropagation()} initial={{scale:.95,y:10}} animate={{scale:1,y:0}}><h3 className='text-xl font-semibold mb-4'>{title}</h3>{children}</motion.div></motion.div>}</AnimatePresence>;
}
