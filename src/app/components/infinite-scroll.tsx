'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { useScrollContainer } from './scroll-provider';

interface InfiniteScrollProps {
  loadMore: () => void;
}

export default function InfiniteScroll({ loadMore }: InfiniteScrollProps) {
  const ref = useRef(null);
  const scrollRef = useScrollContainer();
  const isInView = useInView(ref, { root: scrollRef });

  useEffect(() => {
    if (!isInView) return;

    loadMore();
  }, [isInView, loadMore]);

  return <div ref={ref}></div>;
}
