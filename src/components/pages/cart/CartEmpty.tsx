import CartIcon from '@/components/ui/icons/CartIcon';

export default function CartEmpty() {
  return (
    <section className="flex flex-col items-center justify-center px-30 py-58">
      <CartIcon />
      <p className="text-sm font-body font-medium text-foreground">
        장바구니가 비어있습니다.
      </p>
    </section>
  );
}
