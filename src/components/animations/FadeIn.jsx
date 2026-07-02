import { motion } from "framer-motion";

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;