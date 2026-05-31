import { Artwork } from '@/app/types/artwork';
import { memo, useState } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import { toRomanNumeral } from '@/lib/utils/roman';

interface ArtworkPanelProps {
  artwork: Artwork;
  index: number;
  isActive: boolean;
}

const jagerFont = localFont({
  src: '../../fonts/jager-regular.woff2',
  variable: '--font-jager',
});

const ArtworkPanel = ({ artwork, index, isActive }: ArtworkPanelProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isPriority = index === 0;

  return (
    <div
      className={`
        relative p-6 bg-[#f9f4f0] flex flex-col justify-between col-start-1 row-start-1 md:col-auto md:row-auto transition-all duration-300 ${jagerFont.className} font-features-['salt'_1]
  
        after:absolute after:bg-gray-200 after:left-0 after:right-0 after:bottom-0 after:h-px 
        md:after:left-0 md:after:bottom-8 md:after:w-px md:after:h-3/4 md:first:after:hidden
        
        ${isActive ? 'z-20 opacity-100 pointer-events-auto after:-z-30' : 'z-0 opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}
      `}
    >
      <div
        className={`absolute inset-0 bg-[#f9f4f0] transition-opacity duration-300 md:duration-1000 ease-in-out -z-20 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}
      />

      <Image
        src={artwork.image?.url || '/placeholder-image.png'}
        fill
        alt={artwork.title || 'placeholder'}
        className={`object-cover transition-opacity duration-300 md:duration-1000 ease-out pointer-events-none -z-10 ${imageLoaded && isActive ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        sizes="(max-width: 768px) 100vw, 300px"
        priority={isPriority}
        draggable={false}
      />

      <div
        className={`absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/60 pointer-events-none transition-opacity duration-300 md:duration-1000 -z-10 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="flex flex-col">
        <h2
          className={`text-[4rem] z-10 md:text-[2rem] leading-[0.9] uppercase line-clamp-3 break-all pt-16 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#171717]'}`}
        >
          {artwork.title}
        </h2>
        <p
          className={`font-sans text-3xl md:text-base line-clamp-2 break-all transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#171717]'}`}
        >
          {toRomanNumeral(artwork.date)}
        </p>
      </div>

      <span
        aria-hidden="true"
        className={`text-[20rem] z-10 md:text-[12rem] leading-none text-center transition-colors duration-300 select-none ${isActive ? 'text-white' : 'text-brand'}`}
      >
        {index + 1}
      </span>
    </div>
  );
};

export default memo(ArtworkPanel);
