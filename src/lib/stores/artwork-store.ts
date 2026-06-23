import { Artwork } from '@/app/types/artwork';
import { ARTWORKS_PER_SECTION } from '../constants';
import { create } from 'zustand';
import { fetchArtworks } from '../actions/fetchArtworks';
import { createRef, RefObject } from 'react';

interface ArtworkState {
  artworks: Artwork[];
  sections: Artwork[][];
  currIndex: number;
  activeIndex: number;
  sectionProgress: number;
  isLoading: boolean;
  setScrollProgress: (scrollProgress: number) => void;
  loadMore: () => Promise<void>;
  initialize: (initial: Artwork[]) => void;
  scrollRef: RefObject<HTMLDivElement | null>;
}

function buildSections(artworks: Artwork[]): Artwork[][] {
  const chunks: Artwork[][] = [];
  for (let i = 0; i < artworks.length; i += ARTWORKS_PER_SECTION) {
    chunks.push(artworks.slice(i, i + ARTWORKS_PER_SECTION));
  }
  return chunks;
}

export const useArtworkStore = create<ArtworkState>((set, get) => ({
  artworks: [],
  sections: [],
  currIndex: 0,
  activeIndex: 0,
  sectionProgress: 0,
  isLoading: false,
  scrollRef: createRef<HTMLDivElement>(),

  initialize: (initial: Artwork[]) => {
    if (get().artworks.length > 0) return;

    set({
      artworks: initial,
      sections: buildSections(initial),
    });
  },

  loadMore: async () => {
    if (get().isLoading) return;

    set({ isLoading: true });

    try {
      const { artworks: newArtworks } = await fetchArtworks();

      const artworks = [...get().artworks, ...newArtworks];

      set({ artworks, sections: buildSections(artworks), isLoading: false });
    } catch {
      set({ isLoading: false });
    }
  },

  setScrollProgress: (v: number) => {
    const { sections } = get();
    if (!sections.length) return;

    const global = v * sections.length;
    const index = Math.min(Math.floor(global), sections.length - 1);
    const progress = global - index;

    const section = sections[index] || [];
    const activeIndex = Math.min(
      section.length - 1,
      Math.floor(progress * section.length),
    );

    set({ currIndex: index, sectionProgress: progress, activeIndex });
  },
}));
