'use client';

import { Artwork } from '@/app/types/artwork';
import InfiniteScroll from '../infinite-scroll';
import ArtworkSection from './artwork-section';
import { AnimatePresence, motion } from 'motion/react';
import { useScrollTracker } from '@/hooks/use-scroll-tracker';
import { useArtworkStore } from '@/lib/stores/artwork-store';
import { useEffect } from 'react';

interface ArtworkProps {
  initialArtworks: Artwork[];
}

export default function ArtworkCarousel({ initialArtworks }: ArtworkProps) {
  const { initialize, sections, currIndex, sectionProgress, loadMore } =
    useArtworkStore();

  useEffect(() => {
    initialize(initialArtworks);
  }, [initialArtworks, initialize]);

  const ref = useScrollTracker();

  return (
    <div
      ref={ref}
      style={{ '--sections': sections.length } as React.CSSProperties}
      className="relative w-full h-[calc(300svh*var(--sections))] md:h-[calc(200svh*var(--sections))]"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-start md:items-center justify-center md:pt-32">
        <motion.div
          style={{
            scaleX: sectionProgress,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            originX: 0,
            backgroundColor: 'var(--brand)',
            zIndex: 50,
          }}
        />

        <AnimatePresence>
          {sections[currIndex] && (
            <motion.div
              key={currIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-start md:items-center justify-center w-full h-full overflow-y-auto"
            >
              <ArtworkSection artworks={sections[currIndex]} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[200dvh] md:h-[50vh] pointer-events-none">
        <InfiniteScroll loadMore={loadMore} />
      </div>
    </div>
  );
}
