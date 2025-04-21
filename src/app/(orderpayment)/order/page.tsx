import { getOrderItem } from '@/actions/order-service';
import {
  getProductNameDataByProductUuid,
  getProductOptionDataByProductOptionUuid,
} from '@/actions/product-service';
import {
  getShippingAddressDatabyUuid,
  getShippingAddressList,
} from '@/actions/shipping-address-service';
import OrderList from '@/components/pages/order/OrderList';
import OrderNotice from '@/components/pages/order/OrderNotice';
import OrderShippingInfo from '@/components/pages/order/OrderShippingInfo';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ selected?: string }>;
}) {
  'use server';

  const orderItems = await getOrderItem();

  const enrichedOrderItems = await Promise.all(
    orderItems.map(async (item) => {
      const [product, option] = await Promise.all([
        getProductNameDataByProductUuid(item.productUuid),
        getProductOptionDataByProductOptionUuid(item.productOptionUuid),
      ]);

      return {
        productUuid: item.productUuid,
        productName: product.name,
        productPrice: option.price,
        productSalePrice: option.totalPrice,
        cartUuid: item.cartUuid,
        quantity: item.productQuantity,
        optionUuid: item.productOptionUuid,
        optionSizeId: option.sizeOptionId,
        optionColorId: option.colorOptionId,
        optionDiscount: option.discountRate,
        isChecked: item.checked,
        orderName: `${product.name} 외 ${item.productQuantity - 1}개`,
        totalPurchasePrice: option.totalPrice * item.productQuantity,
        totalOriginPrice: option.price * item.productQuantity,
      };
    })
  );

  const params = await searchParams;
  const selectedUuid = params.selected;

  let defaultedShippingAddress;
  if (selectedUuid) {
    defaultedShippingAddress = await getShippingAddressDatabyUuid(selectedUuid);
  } else {
    const addressList = await getShippingAddressList();
    const defaultAddress = addressList.find((a) => a.defaulted);
    if (defaultAddress) {
      defaultedShippingAddress = await getShippingAddressDatabyUuid(
        defaultAddress.shippingAddressUuid
      );
    }
  }

  return (
    <main>
      <OrderShippingInfo defaultAddress={defaultedShippingAddress} />
      <OrderList
        orderItems={enrichedOrderItems}
        shippingAddressUuid={
          defaultedShippingAddress?.shippingAddressUuid ?? ''
        }
      />
      <OrderNotice />
    </main>
  );
}
