import CartDeleteButtons from '@/components/ui/buttons/CartDeleteButton';

export default function CartAllCheckBar() {
  return (
    <section className="flex justify-between items-center py-4 px-6 border-b border-lightGray-8">
      <div className="flex items-center gap-2 font-body font-medium text-sm">
        <span>전체 선택</span>
      </div>

      <CartDeleteButtons
      // onDeleteSelected={onDeleteSelected}
      // onDeleteAll={onDeleteAll}
      />
    </section>
  );
}
