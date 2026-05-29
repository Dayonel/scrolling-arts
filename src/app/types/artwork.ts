import { fetchArtworks } from '@/lib/actions/fetchArtworks';

type FetchArtworks = Awaited<ReturnType<typeof fetchArtworks>>;
export type Artwork = NonNullable<FetchArtworks['artworks'][number]>;
