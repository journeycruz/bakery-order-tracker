import { motion } from "framer-motion";

export default function Container({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      exit={{ opacity: 0 }}
      className='mx-auto relative'>
      {children}
    </motion.div>
  );
}
