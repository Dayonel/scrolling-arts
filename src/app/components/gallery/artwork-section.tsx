import { Artwork } from '@/app/types/artwork';
import ArtworkPanel from './artwork-panel';
import { ARTWORKS_PER_SECTION } from '@/lib/constants';
import ArtworkBackground from './artwork-background';
import { AnimatePresence } from 'motion/react';
import { useArtworkStore } from '@/lib/stores/artwork-store';

interface ArtworkSectionProps {
  artworks: Artwork[];
}

export default function ArtworkSection({ artworks }: ArtworkSectionProps) {
  const activeIndex = useArtworkStore((s) => s.activeIndex);

  return (
    <section>
      <AnimatePresence>
        {artworks[activeIndex] && (
          <ArtworkBackground
            key={activeIndex}
            artwork={artworks[activeIndex]}
          />
        )}
      </AnimatePresence>

      <div
        style={{ '--cols': ARTWORKS_PER_SECTION } as React.CSSProperties}
        className="grid grid-cols-1 md:grid-cols-[repeat(var(--cols),12rem)] grid-rows-1 justify-start h-svh md:h-[calc(100svh-16rem)] overflow-x-auto w-fit max-w-3xl mx-auto"
      >
        {artworks.map((art, index) => (
          <ArtworkPanel
            key={index}
            artwork={art}
            index={index}
            isActive={index === activeIndex}
          ></ArtworkPanel>
        ))}
      </div>
    </section>
  );
}
