import PerchaseBar from '@/components/pages/productDetail/PerchaseBar';
import PolicySection from '@/components/pages/productDetail/PolicySection';
import ProductDesc from '@/components/pages/productDetail/ProductDesc';
import ProductImg from '@/components/pages/productDetail/ProductImg';
import ProductInfo from '@/components/pages/productDetail/ProductInfo';
import { dummyProductDetails } from '@/data/dummyDatas';
import Link from 'next/link';

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  const product = dummyProductDetails.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <section className="font-sd-gothic text-lightGray-6 text-center py-50">
        <p className="pb-1">상품을 찾을 수 없습니다.</p>
        <Link href="/" className="underline">
          홈으로
        </Link>
      </section>
    );
  }

  return (
    <main className="flex flex-col">
      <PerchaseBar />

      <ProductImg {...product.image} />
      <div className="flex flex-col gap-10 px-6 pb-3">
        <ProductInfo {...product} />
        <ProductDesc description={product.detailDescription} />
        <PolicySection />
      </div>
    </main>
  );
}
