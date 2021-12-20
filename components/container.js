import { motion } from "framer-motion";

export default function Container({ children }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      exit={{ opacity: 0 }}
      className='mx-auto relative'>
      {children}
    </motion.div>
  );
}
