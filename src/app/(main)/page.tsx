import Footer from '@/components/layouts/footer/Footer';
import Header from '@/components/layouts/header/Header';
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
