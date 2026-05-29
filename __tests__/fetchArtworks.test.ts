import '@testing-library/jest-dom';
import { fetchArtworks } from '@/lib/actions/fetchArtworks';
import { query } from '@/lib/graphql/client';
import { GetRandomArtworkQuery } from '@/types/__generated__/graphql';
import { ObservableQuery } from '@apollo/client';
import { GET_RANDOM_ARTWORK } from '@/lib/graphql/queries';

jest.mock('@/lib/graphql/client', () => ({
  query: jest.fn(),
}));

describe('fetchArtworks', () => {
  it('should fetch and return artworks successfully', async () => {
    const mockData: GetRandomArtworkQuery = {
      discoverArtworks: {
        __typename: 'ArtworkConnection',
        edges: [
          {
            __typename: 'ArtworkEdge',
            node: {
              __typename: 'Artwork',
              id: '1',
              title: 'Mona Lisa',
              date: '1503',
              image: {
                __typename: 'Image',
                url: 'https://example.com/mona-lisa.jpg',
              },
            },
          },
        ],
      },
    };

    jest.mocked(query).mockResolvedValueOnce({
      data: mockData,
      loading: false,
      networkStatus: 7,
      error: undefined,
    } as ReturnType<
      ObservableQuery<GetRandomArtworkQuery>['getCurrentResult']
    >);

    const result = await fetchArtworks();

    expect(jest.mocked(query)).toHaveBeenCalledWith({
      query: GET_RANDOM_ARTWORK,
      errorPolicy: 'all',
    });

    expect(result).toStrictEqual({
      artworks: [
        {
          __typename: 'Artwork',
          id: '1',
          title: 'Mona Lisa',
          date: '1503',
          image: {
            __typename: 'Image',
            url: 'https://example.com/mona-lisa.jpg',
          },
        },
      ],
      error: null,
    });
  });
});
