'use client';

import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext<React.RefObject<HTMLElement | null>>({
  current: null,
});

export function useScrollContainer() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef(null);

  return (
    <ScrollContext.Provider value={scrollRef}>
      <main ref={scrollRef}>{children}</main>
    </ScrollContext.Provider>
  );
}
