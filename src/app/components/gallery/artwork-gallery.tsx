import { fetchArtworks } from '@/lib/actions/fetchArtworks';
import ArtworkCarousel from './artwork-carousel';
import ArtworkError from './artwork-error';

export default async function ArtworkGallery() {
  const { artworks, error } = await fetchArtworks();

  if (error) return <ArtworkError error={error} />;

  return <ArtworkCarousel artworks={artworks}></ArtworkCarousel>;
}
