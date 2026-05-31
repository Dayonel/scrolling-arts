import { Suspense } from 'react';
import ArtworkLoader from './components/gallery/artwork-loader';
import ArtworkGallery from './components/gallery/artwork-gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scrolling Arts',
  description: 'Infinite scroll artwork gallery with curated pieces.',
};

export default async function Home() {
  return (
    <>
      <Suspense fallback={<ArtworkLoader />}>
        <ArtworkGallery></ArtworkGallery>
      </Suspense>
    </>
  );
}
