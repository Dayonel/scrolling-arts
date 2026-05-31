import Link from 'next/link';
import { NotFoundAsset } from './assets/not-found';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8">
      <h2 className="text-3xl">Not Found</h2>
      <NotFoundAsset className="min-w-200 md:max-w-150 max-h-100 md:max-h-150" />
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  );
}
