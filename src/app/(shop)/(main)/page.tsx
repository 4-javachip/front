import BannerSlide from '@/components/ui/carousels/BannerSlide';
import ProductCarousel from '@/components/pages/main/ProductCarousel';
import { eventCarousels } from '@/data/dummyDatas';
import { getEventBannerImageDatas } from '@/actions/event-service';

export default async function Home() {
  const { data: BannerImageDatas } = await getEventBannerImageDatas();

  return (
    <main>
      {BannerImageDatas && <BannerSlide slides={BannerImageDatas} />}
      <section className="flex flex-col pl-6 py-12 gap-12">
        {eventCarousels.map((carousel) => (
          <ProductCarousel key={carousel.eventId} {...carousel} />
        ))}
      </section>
    </main>
  );
}
