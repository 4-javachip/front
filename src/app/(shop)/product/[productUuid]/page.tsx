import { getProductNameDataByProductUuid } from '@/actions/product-service';
import ProductDetailSection from '@/components/pages/productDetail/ProductDetailSection';
import ProductNotFound from '@/components/pages/productDetail/ProductNotFound';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productUuid: string }>;
}) {
  const productUuid = (await params).productUuid;
  let product;
  try {
    product = await getProductNameDataByProductUuid(productUuid);
  } catch {
    return <ProductNotFound />;
  }

  return (
    <main className="flex flex-col">
      <ProductDetailSection product={product} />
    </main>
  );
}
