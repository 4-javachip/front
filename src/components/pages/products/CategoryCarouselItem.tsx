export default function CategoryCarouselItem({
  category,
}: {
  category: string;
}) {
  return (
    <li>
      <button
        className="font-inter text-[0.875rem] text-lightGray-1
    whitespace-nowrap cursor-pointer
    px-3.5"
        type="button"
      >
        {category}
      </button>
    </li>
  );
}
