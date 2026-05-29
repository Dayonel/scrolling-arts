interface ArtworkErrorProps {
  error: string;
}

export default function ArtworkError({ error }: ArtworkErrorProps) {
  return <p>{error}</p>;
}
