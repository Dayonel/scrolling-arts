'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { useArtworkStore } from '@/lib/stores/artwork-store';

export default function InfiniteScroll() {
  const ref = useRef(null);
  const { loadMore, scrollRef } = useArtworkStore();
  const isInView = useInView(ref, { root: scrollRef });

  useEffect(() => {
    if (!isInView) return;

    loadMore();
  }, [isInView, loadMore]);

  return <div ref={ref}></div>;
}
