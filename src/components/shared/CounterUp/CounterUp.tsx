"use client"

import { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterUpProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}

const CounterUp: React.FC<CounterUpProps> = ({ from, to, duration = 2, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: [0, 1],
        x: [0, 0],
        transition: { duration: 0.5 }
      });

      let start = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = (currentTime - start) / 1000;
        if (elapsed < duration) {
          const progress = Math.min(elapsed / duration, 1);
          const currentCount = Math.floor(progress * (to - from) + from);
          setCount(currentCount);
          requestAnimationFrame(updateCount);
        } else {
          setCount(to);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [controls, from, to, duration, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0 }} className={className}>
      {count}
    </motion.div>
  );
};

export default CounterUp;
