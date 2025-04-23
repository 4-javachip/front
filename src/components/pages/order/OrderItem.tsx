import { EnrichedOrderItemDataType } from '@/types/OrderDataType';
import { Suspense } from 'react';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import { ItemThumbSkeleton } from '@/components/ui/skeletons/ProductItemSkeleton';
import CartPrice from '@/components/ui/CartItem/CartPrice';
import ItemName from '@/components/ui/CartItem/ItemName';
import CartThumbnail from '@/components/ui/CartItem/CartThumbnail';

interface OrderItemProps {
  orderItems: EnrichedOrderItemDataType;
  size: number;
}

export default function OrderItem({ orderItems, size }: OrderItemProps) {
  return (
    <CommonLayout.SectionNoPadding>
      <article className="grid grid-cols-12 items-start gap-2 pt-4">
        <div className="col-span-5">
          {/* <Suspense fallback={<ItemThumbSkeleton size={size} />}> */}
          <CartThumbnail productUuid={orderItems.productUuid} size={size} />
          {/* </Suspense> */}
        </div>

        <div className="col-span-7 space-y-2">
          <div className="text-sm font-pretendard font-medium text-foreground space-y-4">
            <ItemName
              id={orderItems.productUuid}
              name={orderItems.productName}
            />

            <div className="flex items-center gap-2 text-sm font-xs font-sd-gothic text-lightGray-1">
              주문 수량
              {orderItems.quantity}개
            </div>
            <ul className="flex items-center justify-start gap-2 font-pretendard text-xs">
              {orderItems.optionColorName && (
                <li> {orderItems.optionColorName}</li>
              )}
              {orderItems.optionSizeName && (
                <li className="border-l pl-2 leading-3">
                  {orderItems.optionSizeName}
                </li>
              )}
            </ul>
            <CartPrice
              price={orderItems.productPrice}
              salePrice={orderItems.productSalePrice}
              discountRate={orderItems.optionDiscount}
              quantity={orderItems.quantity}
            />
          </div>
        </div>
      </article>
    </CommonLayout.SectionNoPadding>
  );
}
