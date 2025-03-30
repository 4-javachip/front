export default function CartNotice() {
  return (
    <section className="mt-5 p-3 text-xs text-gray-500 bg-gray-100 rounded-md leading-relaxed">
      <ul className="list-disc list-inside space-y-1">
        <li>
          장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은
          <br /> 최대 2개월간 보관됩니다.
        </li>
        <li>
          총 결제예정금액은 결제 단계에서 추가 할인 수단 적용으로 달라질 수
          있습니다.
        </li>
        <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가능할 수 있습니다.</li>
      </ul>
    </section>
  );
}
