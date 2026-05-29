import { GetRandomArtworkQuery } from '@/types/__generated__/graphql';
import { gql, TypedDocumentNode } from '@apollo/client';

export const ARTWORK_FIELDS_FRAGMENT = gql`
  fragment ArtworkFields on Artwork {
    id
    title
    date
    image {
      url
    }
  }
`;

export const GET_RANDOM_ARTWORK: TypedDocumentNode<GetRandomArtworkQuery> = gql`
  query GetRandomArtwork {
    discoverArtworks(limit: 4) {
      edges {
        node {
          ...ArtworkFields
        }
      }
    }
  }

  ${ARTWORK_FIELDS_FRAGMENT}
`;
