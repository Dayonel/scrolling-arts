'use client';

import { useArtworkStore } from '@/lib/stores/artwork-store';

export function ScrollContainer({ children }: { children: React.ReactNode }) {
  const scrollRef = useArtworkStore((s) => s.scrollRef);
  return (
    <main ref={scrollRef} autoFocus tabIndex={-1} className="outline-none">
      {children}
    </main>
  );
}
