// 'use client';

// import { useState } from 'react';
// // import { CartProductType } from '@/types/ResponseDataTypes';
// // import { dummyCartItems } from '@/data/dummyDatas';
// import { CartItemListType } from '@/types/CartDataType';
// import { getCartItemData } from '@/actions/cart-service';
// import { get } from 'http';

// export default function useCartHandlers() {
// const [cartItems, setCartItems] = useState<CartItemListType[]>(() =>
//   getCartItemData
// );
//   // 체크 토글
//   const toggleCheck = (productUuid: string) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.productUuid === productUuid
//           ? { ...item, checked: !item.checked }
//           : item
//       )
//     );
//   };

//   // 전체 체크 여부
//   const isAllChecked =
//     cartItems.length > 0 && cartItems.every((item) => item.checked);

//   // 전체 체크 토글
//   const toggleAll = () => {
//     const shouldCheck = !isAllChecked;
//     setCartItems((prev) =>
//       prev.map((item) => ({
//         ...item,
//         checked: shouldCheck,
//       }))
//     );
//   };

//   // 수량 증가
//   const increase = (productUuid: string) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.productOptionListUuid === productOptionListUuid
//           ? { ...item, productQuantity: item.productQuantity + 1 }
//           : item
//       )
//     );
//   };

//   // 수량 감소
//   const decrease = (productOptionListUuid: string) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.productOptionListUuid === productOptionListUuid &&
//         item.productQuantity > 1
//           ? { ...item, productQuantity: item.productQuantity - 1 }
//           : item
//       )
//     );
//   };

//   // 항목 삭제
//   const deleteItem = (productOptionListUuid: string) => {
//     setCartItems((prev) =>
//       prev.filter(
//         (item) => item.productOptionListUuid !== productOptionListUuid
//       )
//     );
//   };

//   // 선택 항목 삭제
//   const deleteSelected = () => {
//     setCartItems((prev) => prev.filter((item) => !item.checked));
//   };

//   // 전체 삭제
//   const deleteAll = () => {
//     setCartItems([]);
//   };

//   return {
//     cartItems,
//     isAllChecked,
//     toggleCheck,
//     toggleAll,
//     increase,
//     decrease,
//     deleteItem,
//     deleteSelected,
//     deleteAll,
//   };
// }
