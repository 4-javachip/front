'use client';

import { useState } from 'react';
import { CartProductType } from '@/types/ResponseDataTypes';
import { dummyCartItems } from '@/data/dummyDatas';

export default function useCartHandlers() {
  const [cartItems, setCartItems] = useState<CartProductType[]>(
    dummyCartItems ?? []
  );

  const toggleCheck = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const isAllChecked =
    cartItems.length > 0 && cartItems.every((item) => item.checked);

  const toggleAll = () => {
    const shouldCheck = !isAllChecked;

    setCartItems((prev) =>
      prev.map((item) => ({
        ...item,
        checked: shouldCheck, // 전체 true 또는 false 로 바꿔줌
      }))
    );
  };
  const increase = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, productQuantity: item.productQuantity + 1 }
          : item
      )
    );
  };

  const decrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.productQuantity > 1
          ? { ...item, productQuantity: item.productQuantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteSelected = () => {
    setCartItems((prev) => prev.filter((item) => !item.checked));
  };

  const deleteAll = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    isAllChecked,
    toggleCheck,
    toggleAll,
    increase,
    decrease,
    deleteItem,
    deleteSelected,
    deleteAll,
  };
}
