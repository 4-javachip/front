import { CartProductType } from '@/types/ResponseDataTypes';

interface CartPriceSummaryProps {
  cartitem: CartProductType[];
}

export default function CartPriceSummary({ cartitem }: CartPriceSummaryProps) {
  // 총 상품 금액 (할인 전)
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

  const shipping = 3000;
  const finalTotal = productTotal + shipping - discountTotal;

  return (
    <section className="font-body font-semibold mt-6 space-y-2  px-6">
      <ul className="flex justify-between">
        <li>상품 금액</li>
        <li className="text-black ">{productTotal.toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between">
        <li>할인 금액</li>
        <li>-{Math.floor(discountTotal).toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between">
        <li>배송비</li>
        <li>{shipping.toLocaleString()}원</li>
      </ul>
      <ul className="flex justify-between text-xl  pt-5">
        <li>총 결제예정금액</li>
        <li className="text-black">
          {Math.floor(finalTotal).toLocaleString()}원
        </li>
      </ul>
    </section>
  );
}
