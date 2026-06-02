import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ARTWORKS_PER_SECTION } from '@/lib/constants';
import ArtworkSection from '@/app/components/gallery/artwork-section';
import ArtworkCarousel from '@/app/components/gallery/artwork-carousel';
import { useArtworkStore } from '@/lib/stores/artwork-store';
import { Artwork } from '@/app/types/artwork';

const mockArtworks: Artwork[] = Array.from(
  { length: ARTWORKS_PER_SECTION },
  (_, i) => ({
    __typename: 'Artwork' as const,
    id: `artwork-${i}`,
    title: `Artwork ${i}`,
    date: `200${i}`,
    image: { __typename: 'Image' as const, url: `/image-${i}.jpg` },
  }),
);

const mockState = {
  sections: [mockArtworks],
  currIndex: 0,
  activeIndex: 0,
  sectionProgress: 0,
  initialize: jest.fn(),
};

jest.mock('@/lib/stores/artwork-store', () => ({ useArtworkStore: jest.fn() }));

jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...p }: React.ComponentProps<'div'>) => (
      <div {...p}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useMotionValueEvent: jest.fn(),
  useScroll: () => ({ scrollYProgress: { on: jest.fn() } }),
  useInView: () => false,
}));

jest.mock('next/image', () => {
  const MockImage = (props: Record<string, unknown>) => {
    const { src, alt, fill, priority, ...rest } = props;
    void fill;
    void priority;
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src as string} alt={alt as string} {...rest} />;
  };
  MockImage.displayName = 'Image';
  return MockImage;
});

describe('Artwork Gallery integration', () => {
  beforeEach(() => {
    (useArtworkStore as unknown as jest.Mock).mockImplementation(
      (selector?: (s: typeof mockState) => unknown) =>
        typeof selector === 'function' ? selector(mockState) : mockState,
    );
  });

  it('gallery passes initial artworks to carousel', () => {
    render(<ArtworkCarousel initialArtworks={mockArtworks} />);
    expect(screen.getAllByText(/Artwork \d/).length).toBeGreaterThan(0);
  });

  it('section renders exactly ARTWORKS_PER_SECTION items', () => {
    render(<ArtworkSection artworks={mockArtworks} />);
    expect(screen.getAllByText(/Artwork \d/)).toHaveLength(
      ARTWORKS_PER_SECTION,
    );
  });

  it('each artwork panel is drawn', () => {
    render(<ArtworkSection artworks={mockArtworks} />);
    mockArtworks.forEach(({ title }) =>
      expect(screen.getByText(title!)).toBeInTheDocument(),
    );
  });
});
