import { motion  } from "framer-motion"

const AnimatedElement = ({ children, delay = 0 }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: delay }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
      >
        {children}
      </motion.div>
    );
  };

  export default AnimatedElement;