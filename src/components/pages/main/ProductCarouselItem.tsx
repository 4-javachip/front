export default function ProductCarouselItem() {
  return (
    <div className="flex flex-col gap-3">
      {/* 썸네일 */}
      <div className="w-[140px] h-[140px] bg-lightGray-4 rounded-sm"></div>
      {/* 상품명 */}
      <p className="font-sd-gothic-medium">SS 핑크 탱크 텀블러 503ml</p>
      {/* 가격 */}
      <p className="font-sd-gothic-medium font-bold">35,000원</p>
    </div>
  );
}
