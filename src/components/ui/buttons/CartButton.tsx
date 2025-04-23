import Link from 'next/link';
import CartIcon from '@/components/ui/icons/CartIcon';
import { getCartItemData } from '@/actions/cart-service';
import { useEffect, useState } from 'react';

export default async function CartButton() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const fetchCount = async () => {
  const cart = await getCartItemData();
  const total = cart.reduce((sum, item) => sum + item.productQuantity, 0);
  //     setCount(total);
  //   };
  //   fetchCount();
  // }, []);

  return (
    <Link href="/cart">
      <CartIcon size={32} cartCount={total} />
    </Link>
  );
}
