import StarIcon from '@/components/ui/icons/StarIcon';

export default function ReviewRatingInput({
  rating,
  setRating,
  size = 16,
  color = 'text-yellow-400',
}: {
  name?: string;
  rating: number;
  setRating: (newRating: number) => void;
  size?: number;
  color?: string;
}) {
  return (
    <div className="flex gap-0.5 text-sm cursor-pointer">
      <input type="hidden" name="ratingInput" value={rating} />
      {Array.from({ length: 5 }).map((_, i) => {
        const starIndex = i + 1;
        return (
          <span
            key={i}
            onClick={() => setRating(starIndex)}
            className={starIndex <= rating ? color : 'text-gray-300'}
          >
            <StarIcon size={size} />
          </span>
        );
      })}
    </div>
  );
}
