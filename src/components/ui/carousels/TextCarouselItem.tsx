export default function TextCarouselItem({
  category: item,
  isSelected,
  onClick,
}: {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        className={`font-body text-[0.875rem] 
    whitespace-nowrap cursor-pointer px-3.5
    ${isSelected ? 'text-green font-semibold' : 'text-lightGray-1'}`}
        type="button"
        onClick={onClick}
      >
        {item}
      </button>
    </li>
  );
}
