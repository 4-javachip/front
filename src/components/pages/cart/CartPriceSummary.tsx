import { CartProductType } from '@/types/ResponseDataTypes';
import { dummyCartSummary } from '@/data/dummyDatas';

interface CartPriceSummaryProps {
  cartitem: CartProductType[];
}

export default function CartPriceSummary({ cartitem }: CartPriceSummaryProps) {
  const productTotal = cartitem.reduce(
    (total, item) => total + (item.productPrice ?? 0) * item.productQuantity,
    0
  );

  const { discount, shipping } = dummyCartSummary;
  const finalTotal = productTotal + shipping - discount;

  return (
    <section
      className="mt-6 space-y-2 text-sm px-6"
      aria-label="결제 금액 요약"
    >
      <div className="flex justify-between">
        <span>상품 금액</span>
        <span className="text-black font-medium">
          {productTotal.toLocaleString()}원
        </span>
      </div>
      <div className="flex justify-between">
        <span>할인 금액</span>
        <span>{discount.toLocaleString()}원</span>
      </div>
      <div className="flex justify-between">
        <span>배송비</span>
        <span>{shipping.toLocaleString()}원</span>
      </div>
      <div className="flex justify-between text-base font-semibold pt-8 border-t border-gray-100">
        <span>총 결제예정금액</span>
        <span className="text-black">{finalTotal.toLocaleString()}원</span>
      </div>
    </section>
  );
}
