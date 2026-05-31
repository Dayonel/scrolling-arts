'use client';

import { Error } from '@/app/assets/error';

interface ArtworkErrorProps {
  error: string;
}

export default function ArtworkError({ error }: ArtworkErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8">
      <Error className="min-w-200 md:max-w-150 max-h-100 md:max-h-150" />
      <p className="text-center leading-none">{error}</p>
    </div>
  );
}
