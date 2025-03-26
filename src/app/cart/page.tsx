'use client';

import CartAllCheckBar from '@/components/pages/cart/CartAllCheckBar';
import CartEmpty from '@/components/pages/cart/CartEmpty';
import CartHeader from '@/components/pages/cart/CartHeader';
import CartItemList from '@/components/pages/cart/CartItemList';
import CartNotice from '@/components/pages/cart/CartNotice';
import CartPriceSummary from '@/components/pages/cart/CartPriceSummary';
import CartShippingInfo from '@/components/pages/cart/CartShippingInfo';
import useCartHandlers from '@/components/pages/cart/useCartHandlers';
import PerchaseBar from '@/components/pages/productDetail/PerchaseBar';

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
      <CartHeader />
      <CartShippingInfo />
      <CartAllCheckBar
        isAllChecked={isAllChecked}
        onToggleAll={toggleAll}
        onDeleteSelected={deleteSelected}
        onDeleteAll={deleteAll}
      />
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
          />
          <CartPriceSummary cartitem={cartItems} />
          <CartNotice />
          <PerchaseBar />
        </>
      )}
    </main>
  );
}
