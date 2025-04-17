import { CartItemPriceData } from '@/types/CartDataType';

interface CartPriceSummaryProps {
  cartItemPriceList: CartItemPriceData[];
  className?: string;
}

export default function CartPriceSummary({
  cartItemPriceList,

  className = '',
}: CartPriceSummaryProps) {
  if (!cartItemPriceList || !Array.isArray(cartItemPriceList)) {
    return null; // 또는 로딩 상태
  }
  const totalPrice = cartItemPriceList.reduce((sum, item) => {
    return sum + item.productSalePrice;
  }, 0);

  const productPrice = cartItemPriceList.reduce((sum, item) => {
    return sum + item.productPrice;
  }, 0);

  const discountTotal = cartItemPriceList.reduce((sum, item) => {
    return sum + (item.productPrice - item.productSalePrice);
  }, 0);
  return (
    <section
      className={`font-body font-semibold mt-6 space-y-2 px-6 ${className}`}
    >
      <ul className="flex justify-between">
        <li>상품 금액 </li>
        <li className="text-black">{productPrice.toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between">
        <li>할인 금액</li>
        <li> {Math.floor(discountTotal).toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between text-xl pt-5">
        <li>총 결제 금액 </li>
        <li className="text-black">
          {Math.floor(totalPrice).toLocaleString()}원
        </li>
      </ul>
    </section>
  );
}
