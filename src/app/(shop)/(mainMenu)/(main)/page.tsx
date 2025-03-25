import BannerSlide from '@/components/ui/BannerSlide';
import ProductCarousel from '@/components/pages/main/ProductCarousel';
import { eventCarousels, mainBannerSlideData } from '@/data/dummyDatas';

export default function Home() {
  return (
    <main>
      <BannerSlide slides={mainBannerSlideData} />
      <section className="flex flex-col pl-6 py-12 gap-12">
        {eventCarousels.map((carousel) => (
          <ProductCarousel key={carousel.eventId} {...carousel} />
        ))}
      </section>
    </main>
  );
}
