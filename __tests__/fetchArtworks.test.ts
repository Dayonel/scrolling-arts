import '@testing-library/jest-dom';
import { fetchArtworks } from '@/lib/actions/fetchArtworks';
import { GetRandomArtworkQuery } from '@/types/__generated__/graphql';
import { ObservableQuery } from '@apollo/client';
import { GET_RANDOM_ARTWORK } from '@/lib/graphql/queries';

const mockQuery = jest.fn();
jest.mock('@/lib/graphql/client', () => ({
  getClient: jest.fn(() => ({ query: mockQuery })),
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

    mockQuery.mockResolvedValueOnce({
      data: mockData,
      loading: false,
      networkStatus: 7,
      error: undefined,
    } as ReturnType<
      ObservableQuery<GetRandomArtworkQuery>['getCurrentResult']
    >);

    const result = await fetchArtworks();

    expect(mockQuery).toHaveBeenCalledWith({
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
