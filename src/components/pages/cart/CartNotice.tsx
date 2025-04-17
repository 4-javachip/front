export default function CartNotice() {
  return (
    <section className="pb-25 px-6">
      <ul className="list-disc list-outside space-y-1 mt-5 pl-7 p-3 text-xs text-lightGray-6 bg-lightGray-2 rounded-md leading-relaxed">
        <li>
          장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
          보관됩니다.
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
