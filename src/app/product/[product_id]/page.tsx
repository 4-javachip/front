import PerchaseBar from '@/components/pages/product-detail/PerchaseBar';
import PolicySection from '@/components/pages/product-detail/PolicySection';
import ProductDesc from '@/components/pages/product-detail/ProductDesc';
import ProductImg from '@/components/pages/product-detail/ProductImg';
import ProductInfo from '@/components/pages/product-detail/ProductInfo';
import { dummyProductDetail } from '@/data/dummyDatas';

export default function ProductDetail() {
  return (
    <main className="flex flex-col">
      <PerchaseBar />

      <article>
        <ProductImg {...dummyProductDetail.image} />
        <div className="flex flex-col gap-10 px-6 pb-3">
          <ProductInfo {...dummyProductDetail} />
          <ProductDesc description={dummyProductDetail.detailDescription} />
          <PolicySection />
        </div>
      </article>
    </main>
  );
}
