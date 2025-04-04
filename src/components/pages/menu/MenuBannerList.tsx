import MenuBannerItem from './MenuBannerItem';

export default function MenuBannerList() {
  return (
    <section className="bg-lightGray-3 px-6">
      <ul className="divide-y divide-gray-300">
        <MenuBannerItem
          href="/event"
          title="기획전"
          description="진행중인 기획전을 만나보세요."
        />
        <MenuBannerItem
          href="/best"
          title="베스트"
          description="스타벅스 베스트 MD 상품만 모아보세요."
        />
      </ul>
    </section>
  );
}
