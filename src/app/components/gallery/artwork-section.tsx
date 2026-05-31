import { Artwork } from '@/app/types/artwork';
import ArtworkPanel from './artwork-panel';
import { ARTWORKS_PER_SECTION } from '@/lib/constants';
import ArtworkBackground from './artwork-background';
import { AnimatePresence } from 'motion/react';

interface ArtworkSectionProps {
  artworks: Artwork[];
  sectionProgress: number;
}

export default function ArtworkSection({
  artworks,
  sectionProgress,
}: ArtworkSectionProps) {
  const activeIndex = Math.min(
    artworks.length - 1,
    Math.floor(sectionProgress * artworks.length),
  );

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
