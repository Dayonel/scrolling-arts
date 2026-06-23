import { Artwork } from '@/app/types/artwork';
import { memo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface ArtworkBackgroundProps {
  artwork: Artwork;
}

const ArtworkBackground = memo(({ artwork }: ArtworkBackgroundProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 -z-30 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Image
        src={artwork.image?.url || '/placeholder-image.png'}
        fill
        alt={artwork.title || 'placeholder'}
        role="presentation"
        className="object-cover"
        unoptimized
        priority
        draggable={false}
        onLoad={() => setImageLoaded(true)}
      />
    </motion.div>
  );
});

ArtworkBackground.displayName = 'ArtworkBackground';

export default ArtworkBackground;
