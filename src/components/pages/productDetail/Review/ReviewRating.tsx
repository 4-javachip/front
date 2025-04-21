import StarIcon from '@/components/ui/icons/StarIcon';

export default function ReviewRating({
  rating,
  size = 16,
  color = 'text-yellow-400',
}: {
  rating: number;
  size?: number;
  color?: string;
}) {
  return (
    <div className="flex gap-0.5 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? color : 'text-gray-300'}>
          <StarIcon size={size} />
        </span>
      ))}
    </div>
  );
}
