import CartItem from '@/components/ui/CartItem/CartItem';
import { CartItemType } from '@/types/CartDataType';
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
  return (
    <ul>
      {cartItemList.map((item) => (
        <CartItem
          key={`${item.productUuid}-${item.productOptionUuid}`}
          data={item}
          size={140}
        />
      ))}
      <CartPriceSummary cartItemPriceList={cartoption} />
      <CartPurchaseBar
        cartItemPriceList={cartoption}
        cartItemList={cartItemList}
      />
    </ul>
  );
}
