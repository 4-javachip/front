import Footer from '@/components/layouts/footer/Footer';
import HeaderTop from '@/components/layouts/header/HeaderTop';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';

export default function notFoundPage() {
  return (
    <>
      <HeaderTop />
      <NotFoundLayout
        message="페이지를 찾을 수 없습니다."
        linkText="홈으로"
        linkHref="/"
      />
      <Footer />
    </>
  );
}
