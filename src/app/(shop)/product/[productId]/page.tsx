import PolicySection from '@/components/pages/productDetail/PolicySection';
import ProductDesc from '@/components/pages/productDetail/ProductDesc';
import ProductImg from '@/components/pages/productDetail/ProductImg';
import ProductInfo from '@/components/pages/productDetail/ProductInfo';
import ProductNotFound from '@/components/pages/productDetail/ProductNotFound';
import { dummyProductDetails } from '@/data/dummyDatas';

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
    return <ProductNotFound />;
  }

  return (
    <main className="flex flex-col">
      <ProductImg {...product.image} />
      <div className="flex flex-col gap-10 padded">
        <ProductInfo {...product} />
        <ProductDesc description={product.detailDescription} />
        <PolicySection />
      </div>
    </main>
  );
}
