import Link from 'next/link';
import CartIcon from '@/components/ui/icons/CartIcon';

interface Props {
  cartCount: number;
}

export default function CartButton({ cartCount }: Props) {
  return (
    <Link href="/cart">
      <CartIcon size={32} cartCount={5} />
    </Link>
  );
}
