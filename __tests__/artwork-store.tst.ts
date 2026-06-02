import '@testing-library/jest-dom';
import { useArtworkStore } from '@/lib/stores/artwork-store';
import { Artwork } from '@/app/types/artwork';
import { fetchArtworks } from '@/lib/actions/fetchArtworks';

jest.mock('@/lib/actions/fetchArtworks', () => ({
  fetchArtworks: jest.fn(),
}));
const mockFetchArtworks = fetchArtworks as jest.MockedFunction<
  typeof fetchArtworks
>;

const makeArtwork = (id: string): Artwork => ({
  __typename: 'Artwork',
  id,
  title: null,
  date: null,
  image: null,
});

describe('useArtworkStore', () => {
  beforeEach(() => {
    useArtworkStore.setState({
      artworks: [],
      sections: [],
      currIndex: 0,
      activeIndex: 0,
      sectionProgress: 0,
      isLoading: false,
    });
  });

  it('initializes store', () => {
    const initial = [makeArtwork('1'), makeArtwork('2')];

    useArtworkStore.getState().initialize(initial);

    const state = useArtworkStore.getState();

    expect(state.artworks).toHaveLength(2);
    expect(state.sections.length).toBeGreaterThan(0);
  });

  it('loadMore appends and rebuilds sections', async () => {
    mockFetchArtworks.mockResolvedValue({
      artworks: [makeArtwork('3'), makeArtwork('4')],
      error: null,
    });

    useArtworkStore.setState({
      artworks: [makeArtwork('1')],
    });

    await useArtworkStore.getState().loadMore();

    const state = useArtworkStore.getState();

    expect(state.isLoading).toBe(false);
    expect(state.artworks.length).toBe(3);
    expect(state.sections.length).toBeGreaterThan(0);
  });

  it('setScrollProgress computes section, progress and activeIndex', () => {
    useArtworkStore.setState({
      sections: [[makeArtwork('1'), makeArtwork('2'), makeArtwork('3')]],
    });

    useArtworkStore.getState().setScrollProgress(0.99);

    const state = useArtworkStore.getState();

    expect(state.currIndex).toBe(0);
    expect(state.sectionProgress).toBeCloseTo(0.99);
    expect(state.activeIndex).toBe(2);
  });
});
