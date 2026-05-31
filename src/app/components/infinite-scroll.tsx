'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface InfiniteScrollProps {
  loadMore: () => void;
}

export default function InfiniteScroll({ loadMore }: InfiniteScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    loadMore();
  }, [isInView, loadMore]);

  return <div ref={ref}></div>;
}
