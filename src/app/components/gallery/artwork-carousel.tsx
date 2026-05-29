import { Artwork } from '@/app/types/artwork';
import ArtworkPanel from './artwork-panel';

interface ArtworkProps {
  artworks: Artwork[];
}

export default function ArtworkCarousel({ artworks }: ArtworkProps) {
  return (
    <>
      {artworks.map((art, index) => (
        <ArtworkPanel key={art.id} artwork={art} index={index}></ArtworkPanel>
      ))}
    </>
  );
}
