import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Animation = ({ type, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView]);

  if (type === '1')
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    );
  else if (type === '2')
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    );
  else if (type === '3')
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    );
};

export default Animation;
