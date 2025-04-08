import { getProductNameDataByProductUuid } from '@/actions/product-service';
import ProductDetailSection from '@/components/pages/productDetail/ProductDetailSection';
import ProductNotFound from '@/components/pages/productDetail/ProductNotFound';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productUuid: string }>;
}) {
  const productUuid = (await params).productUuid;
  const product = await getProductNameDataByProductUuid(productUuid);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <main className="flex flex-col">
      <ProductDetailSection product={product} />
    </main>
  );
}
