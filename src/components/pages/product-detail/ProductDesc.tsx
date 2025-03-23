export default function ProductDesc({ description }: { description: string }) {
  return (
    <div className="py-3">
      <p className="font-pretendard font-bold pb-10">상품 정보</p>
      <p>{description}</p>
    </div>
  );
}
