'use server';

import { getClient } from '../graphql/client';
import { GET_RANDOM_ARTWORK } from '../graphql/queries';

export async function fetchArtworks() {
  const client = getClient();

  try {
    const { data, error } = await client.query({
      query: GET_RANDOM_ARTWORK,
      errorPolicy: 'all',
    });

    if (error) {
      return {
        artworks: [],
        error: 'The gallery is currently unavailable. Please try again.',
      };
    }

    const edges = data?.discoverArtworks?.edges || [];

    const artworks = edges
      .map((edge) => edge?.node)
      .filter((node) => node != null);

    return { artworks, error: null };
  } catch {
    return {
      artworks: [],
      error: "The artworks can't be loaded right now. Please try again.",
    };
  }
}
