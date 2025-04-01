'use client';

import CartEmpty from '@/components/pages/cart/CartEmpty';
import CartItemList from '@/components/pages/cart/CartItemList';
import CartNotice from '@/components/pages/cart/CartNotice';
import CartPriceSummary from '@/components/pages/cart/CartPriceSummary';
import CartShippingInfo from '@/components/pages/cart/CartShippingInfo';
import useCartHandlers from '@/components/pages/cart/useCartHandlers';

export default function CartPage() {
  const {
    cartItems,
    isAllChecked,
    toggleCheck,
    toggleAll,
    increase,
    decrease,
    deleteItem,
    deleteSelected,
    deleteAll,
  } = useCartHandlers();

  return (
    <main>
      <CartShippingInfo />
      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <CartItemList
            items={cartItems}
            onToggleCheck={toggleCheck}
            onIncrease={increase}
            onDecrease={decrease}
            onDelete={deleteItem}
            isAllChecked={isAllChecked}
            onToggleAll={toggleAll}
            onDeleteSelected={deleteSelected}
            onDeleteAll={deleteAll}
          />
          <CartPriceSummary cartitem={cartItems} />
          <CartNotice />
        </>
      )}
    </main>
  );
}
