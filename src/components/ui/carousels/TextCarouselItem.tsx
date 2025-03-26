export default function TextCarouselItem({
  category: item,
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
        {item}
      </button>
    </li>
  );
}
