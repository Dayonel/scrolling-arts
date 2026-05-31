'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { useScrollContainer } from './scroll-provider';
import { useArtworkStore } from '@/lib/stores/artwork-store';

export default function InfiniteScroll() {
  const ref = useRef(null);
  const scrollRef = useScrollContainer();
  const isInView = useInView(ref, { root: scrollRef });
  const { loadMore } = useArtworkStore();

  useEffect(() => {
    if (!isInView) return;

    loadMore();
  }, [isInView, loadMore]);

  return <div ref={ref}></div>;
}
