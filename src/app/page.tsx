import { Suspense } from 'react';
import ArtworkLoader from './components/gallery/artwork-loader';
import ArtworkGallery from './components/gallery/artwork-gallery';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<ArtworkLoader />}>
        <ArtworkGallery></ArtworkGallery>
      </Suspense>
    </>
  );
}
