import { AnimatePresence, motion } from 'framer-motion';
export default function Toast({ message }) { return <AnimatePresence>{message && <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} exit={{opacity:0}} className='fixed bottom-4 right-4 bg-cyan-600 text-white rounded-xl px-4 py-2 z-50'>{message}</motion.div>}</AnimatePresence>; }
