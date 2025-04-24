import Link from 'next/link';
import CartIcon from '@/components/ui/icons/CartIcon';
import { getCartItemData } from '@/actions/cart-service';

export default async function CartButton() {
  const cart = await getCartItemData();
  const total = cart.reduce((sum, item) => sum + item.productQuantity, 0);

  return (
    <Link href="/cart">
      <CartIcon size={32} cartCount={total} />
    </Link>
  );
}
