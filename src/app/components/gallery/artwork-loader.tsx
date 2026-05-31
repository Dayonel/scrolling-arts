import { Loader } from '@/app/assets/loader';

export default function ArtworkLoader() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-8">
      <Loader className="min-w-200 md:max-w-150 max-h-100 md:max-h-150" />
      <p className="italic">Waiting for the paint to dry...</p>
    </div>
  );
}
