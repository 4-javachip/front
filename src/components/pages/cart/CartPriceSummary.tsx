import { CartProductType } from '@/types/ResponseDataTypes';

interface CartPriceSummaryProps {
  cartitem: CartProductType[];
  labelProductTotal?: string;
  labelDiscountTotal?: string;
  labelFinalTotal?: string;
  className?: string;
  shippingFee?: number;
}

export default function CartPriceSummary({
  cartitem,
  labelProductTotal = '상품 금액',
  labelDiscountTotal = '할인 금액',
  labelFinalTotal = '총 결제예정금액',
  className = '',
}: CartPriceSummaryProps) {
  const productTotal = cartitem.reduce(
    (total, item) => total + (item.productPrice ?? 0) * item.productQuantity,
    0
  );

  // 총 할인 금액
  const discountTotal = cartitem.reduce((total, item) => {
    const price = item.productPrice ?? 0;
    const quantity = item.productQuantity ?? 1;
    const discountRate = item.discountRate ?? 0;
    const itemDiscount = price * quantity * (discountRate / 100);
    return total + itemDiscount;
  }, 0);

  const finalTotal = productTotal - discountTotal;

  return (
    <section
      className={`font-body font-semibold mt-6 space-y-2 px-6 ${className}`}
    >
      <ul className="flex justify-between">
        <li>{labelProductTotal}</li>
        <li className="text-black">{productTotal.toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between">
        <li>{labelDiscountTotal}</li>
        <li>-{Math.floor(discountTotal).toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between text-xl pt-5">
        <li>{labelFinalTotal}</li>
        <li className="text-black">
          {Math.floor(finalTotal).toLocaleString()}원
        </li>
      </ul>
    </section>
  );
}
