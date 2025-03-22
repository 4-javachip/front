import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import MainBannerSection from '@/components/pages/main/MainBannerSection';
import MainProductSection from '@/components/pages/main/MainProductSection';

export default function Home() {
  return (
    <main>
      <Header />
      <MainBannerSection />
      <MainProductSection />
      <Footer />
    </main>
  );
}
