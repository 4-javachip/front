import CartIcon from '@/components/ui/icons/CartIcon';

export default function CartEmpty() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center text-gray-500 px-30 py-58"
      aria-label="빈 장바구니 안내"
    >
      <CartIcon />
      <p className="text-sm font-medium text-black">장바구니가 비어있습니다.</p>
    </section>
  );
}
