import CartDeleteButtons from '@/components/ui/buttons/CartDeleteButton';
import Checkbox from '@/components/ui/inputs/CheckBox';

interface CartAllCheckBarProps {
  isAllChecked: boolean;
  onToggleAll: () => void;
  onDeleteSelected?: () => void;
  onDeleteAll?: () => void;
}

export default function CartCheckBar({
  isAllChecked,
  onToggleAll,
  onDeleteSelected,
  onDeleteAll,
}: CartAllCheckBarProps) {
  return (
    <section
      className="flex justify-between items-center py-3 px-6 border-b border-gray-100"
      aria-label="장바구니 선택 바"
    >
      <div className="flex items-center gap-2 font-inter font-medium text-sm">
        <Checkbox
          checked={isAllChecked}
          onChange={onToggleAll}
          ariaLabel="전체 선택"
        />
        <span>전체 선택</span>
      </div>

      <CartDeleteButtons
        onDeleteSelected={onDeleteSelected}
        onDeleteAll={onDeleteAll}
      />
    </section>
  );
}
