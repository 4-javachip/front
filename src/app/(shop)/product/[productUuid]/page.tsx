import { getProductNameDataByProductUuid } from '@/actions/product-service';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import ProductDetailSection from '@/components/pages/productDetail/ProductDetailSection';

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
    return (
      <NotFoundLayout
        message="상품을 찾을 수 없습니다."
        linkText="홈으로"
        linkHref="/"
      />
    );
  }

  return (
    <main className="flex flex-col">
      <ProductDetailSection product={product} />
    </main>
  );
}
