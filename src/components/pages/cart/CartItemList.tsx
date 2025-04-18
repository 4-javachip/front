import CartItem from '@/components/ui/CartItem/CartItem';
import { ItemThumbSkeleton } from '@/components/ui/skeletons/ProductItemSkeleton';
import { CartItemType } from '@/types/CartDataType';
import { Suspense } from 'react';
import { getProductOptionDataByProductOptionUuid } from '@/actions/product-service';
import CartPriceSummary from './CartPriceSummary';
import CartPurchaseBar from './CartPurchaseBar';

interface CartItemListProps {
  cartItemList: CartItemType[];
  checked: boolean;
}
export default async function CartItemList({
  cartItemList,
}: CartItemListProps) {
  const selectedItems = cartItemList.filter((item) => item.checked);

  const cartoption: {
    productPrice: number;
    productSalePrice: number;
  }[] = await Promise.all(
    selectedItems.map(async (item) => {
      const data = await getProductOptionDataByProductOptionUuid(
        item.productOptionUuid
      );

      return {
        productSalePrice: data.totalPrice * item.productQuantity,
        productPrice: data.price * item.productQuantity,
      };
    })
  );
  console.log('cartoption', cartoption);
  console.log('장바구니 아이템', cartItemList);
  return (
    <ul>
      {cartItemList.map((item) => (
        <Suspense
          key={item.productUuid}
          fallback={<ItemThumbSkeleton size={800} />}
        >
          <CartItem data={item} size={80} />
        </Suspense>
      ))}
      <CartPriceSummary cartItemPriceList={cartoption} />
      <CartPurchaseBar
        cartItemPriceList={cartoption}
        cartItemList={cartItemList}
      />
    </ul>
  );
}
