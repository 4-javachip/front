'use client';
import { deleteAllCartItem, deleteCartItem } from '@/actions/cart-service';

interface CartDeleteButtonsProps {
  selectedCartUuids: string[];
}

export default function CartDeleteButtons({
  selectedCartUuids,
}: CartDeleteButtonsProps) {
  const onDeleteSelected = async () => {
    console.log('선택된 항목 삭제:', selectedCartUuids);

    await Promise.all(selectedCartUuids.map((uuid) => deleteCartItem(uuid)));
  };
  const onDeleteAll = async () => {
    console.log('All items deleted');
    await deleteAllCartItem();
  };
  return (
    <div className="text-xs space-x-2 font-body font-medium px-6">
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
