import { getCartDataList } from '@/actions/cart-service';
import CartEmpty from '@/components/pages/cart/CartEmpty';
import CartItemList from '@/components/pages/cart/CartItemList';
import CartNotice from '@/components/pages/cart/CartNotice';
import CartPriceSummary from '@/components/pages/cart/CartPriceSummary';
import CartShippingInfo from '@/components/pages/cart/CartShippingInfo';
import useCartHandlers from '@/components/pages/cart/useCartHandlers';

export default async function CartPage() {
  const cartData = await getCartDataList();

  return (
    <main>
      <CartShippingInfo />
      <CartItemList data={cartData} />
    </main>
  );
}
