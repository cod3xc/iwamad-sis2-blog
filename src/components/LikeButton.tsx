import { Button } from './ui/Button';

type LikeButtonProps = {
  count: number;
  onLike: () => void;
};

export function LikeButton({ count, onLike }: LikeButtonProps) {
  return (
    <Button variant="secondary" onClick={onLike} aria-label={`Like (${count} likes)`}>
      ♥ {count}
    </Button>
  );
}
