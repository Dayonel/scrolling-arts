import { useArtworkStore } from '@/lib/stores/artwork-store';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { useRef } from 'react';

export const useScrollTracker = () => {
  const ref = useRef(null);
  const { setScrollProgress, scrollRef } = useArtworkStore();

  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollRef,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', setScrollProgress);

  return ref;
};
