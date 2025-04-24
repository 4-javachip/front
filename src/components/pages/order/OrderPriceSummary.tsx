interface OrderPriceSummaryProps {
  totalPrice: number;
  totalOriginPrice: number;
  className?: string;
}

export default function OrderPriceSummary({
  totalPrice,
  totalOriginPrice,

  className = '',
}: OrderPriceSummaryProps) {
  const discountTotal = totalOriginPrice - totalPrice;
  return (
    <section
      className={`font-body font-semibold mt-6 space-y-2 px-6 ${className}`}
    >
      <ul className="flex justify-between">
        <li>상품 금액 </li>
        <li className="text-black">{totalOriginPrice.toLocaleString()}원</li>
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
