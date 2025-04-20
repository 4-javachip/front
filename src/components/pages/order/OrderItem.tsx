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
    <CommonLayout.SectionInnerPadding>
      <article className="grid grid-cols-12 items-start gap-2 pt-4">
        <div className="shrink-0 col-span-2">
          <Suspense fallback={<ItemThumbSkeleton size={size} />}>
            <CartThumbnail productUuid={orderItems.productUuid} size={size} />
          </Suspense>
        </div>

        <div className="col-span-9">
          <div className="text-sm font-pretendard font-medium text-foreground space-y-4">
            <ItemName
              id={orderItems.productUuid}
              name={orderItems.productName}
            />

            <div className="flex items-center gap-2 text-sm font-xs font-sd-gothic text-lightGray-1">
              주문 수량
              {orderItems.productName} 외 {orderItems.quantity - 1}개
            </div>

            <CartPrice
              price={orderItems.productPrice}
              salePrice={orderItems.productSalePrice}
              discountRate={orderItems.optionDiscount}
              quantity={orderItems.quantity}
            />
          </div>
        </div>
      </article>
    </CommonLayout.SectionInnerPadding>
  );
}
