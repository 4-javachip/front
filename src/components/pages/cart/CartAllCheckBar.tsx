import CartDeleteButtons from '@/components/ui/buttons/CartDeleteButton';
import Checkbox from '@/components/ui/inputs/CheckBox';

interface CartAllCheckBarProps {
  isAllChecked: boolean;
  onToggleAll: () => void;
  onDeleteSelected?: () => void;
  onDeleteAll?: () => void;
}

export default function CartAllCheckBar({
  isAllChecked,
  onToggleAll,
  onDeleteSelected,
  onDeleteAll,
}: CartAllCheckBarProps) {
  return (
    <section className="flex justify-between items-center py-4 px-6 border-b border-lightGray-8">
      <div className="flex items-center gap-2 font-body font-medium text-sm">
        <Checkbox checked={isAllChecked} onChange={onToggleAll} />
        <span>전체 선택</span>
      </div>

      <CartDeleteButtons
        onDeleteSelected={onDeleteSelected}
        onDeleteAll={onDeleteAll}
      />
    </section>
  );
}
