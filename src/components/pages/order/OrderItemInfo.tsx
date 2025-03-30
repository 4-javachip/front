import { CartProductType } from '@/types/ResponseDataTypes';

export default function OrderItemInfo({ item }: { item: CartProductType }) {
  const discountRate = item.discountRate ?? 0;
  const hasDiscount = discountRate > 0;
  const discountedPrice = Math.floor(
    item.productPrice * (1 - discountRate / 100)
  );

  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm font-medium text-black">{item.productName}</p>
      <p className="text-sm text-gray-600 mt-1">
        주문수량 : {item.productQuantity}개
      </p>
      {hasDiscount ? (
        <p className="text-base font-semibold text-black mt-1">
          {discountedPrice.toLocaleString()}원
          <span className="ml-2 text-gray-400 line-through text-sm font-normal">
            {item.productPrice.toLocaleString()}원
          </span>
        </p>
      ) : (
        <p className="text-base font-semibold text-black mt-1">
          {item.productPrice.toLocaleString()}원
        </p>
      )}
    </div>
  );
}
