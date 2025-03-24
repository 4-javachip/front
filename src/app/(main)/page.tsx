import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import BannerSlide from '@/components/pages/main/BannerSlide';
import ProductCarousel from '@/components/pages/main/ProductCarousel';
import { eventCarousels, mainBannerSlideData } from '@/data/dummyDatas';

export default function Home() {
  return (
    <main>
      <Header />

      <BannerSlide slides={mainBannerSlideData} />
      <section className="flex flex-col pl-6 py-[50px] gap-[50px]">
        {eventCarousels.map((carousel) => (
          <ProductCarousel key={carousel.eventId} {...carousel} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
