import { ProductDescriptionType } from '@/types/ProductResponseDataTypes';

export default function ProductDesc({
  detailDescription,
}: ProductDescriptionType) {
  return (
    <section className="py-3">
      <h2 className="font-pretendard font-bold pb-10">상품 정보</h2>
      <p>{detailDescription}</p>
    </section>
  );
}
