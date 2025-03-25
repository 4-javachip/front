import PerchaseBar from '@/components/pages/productDetail/PerchaseBar';
import PolicySection from '@/components/pages/productDetail/PolicySection';
import ProductDesc from '@/components/pages/productDetail/ProductDesc';
import ProductImg from '@/components/pages/productDetail/ProductImg';
import ProductInfo from '@/components/pages/productDetail/ProductInfo';
import { dummyProductDetail } from '@/data/dummyDatas';

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productName: string }>;
}) {
  const name = decodeURIComponent((await params).productName);
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
