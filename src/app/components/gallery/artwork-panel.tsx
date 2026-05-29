import { Artwork } from '@/app/types/artwork';

interface ArtworkPanelProps {
  artwork: Artwork;
  index: number;
}

export default function ArtworkPanel({ artwork }: ArtworkPanelProps) {
  return <p>{artwork.title}</p>;
}
