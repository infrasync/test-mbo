import { motion, MotionStyle } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
    },
  },
};

export function FadeInShow({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: MotionStyle;
}) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      style={style}
    >
      {children}
    </motion.div>
  );
}
