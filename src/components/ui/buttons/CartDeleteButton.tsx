// components/pages/cart/CartDeleteButtons.tsx

interface CartDeleteButtonsProps {
  onDeleteSelected?: () => void;
  onDeleteAll?: () => void;
}

export default function CartDeleteButtons({
  onDeleteSelected,
  onDeleteAll,
}: CartDeleteButtonsProps) {
  return (
    <div className="text-xs space-x-2 font-body font-medium">
      <button
        type="button"
        onClick={onDeleteSelected}
        className="text-green-600 font-medium"
      >
        선택 삭제
      </button>
      <span className="text-[#7E7E7E]">|</span>
      <button type="button" onClick={onDeleteAll} className="text-[#7E7E7E]">
        전체 삭제
      </button>
    </div>
  );
}
