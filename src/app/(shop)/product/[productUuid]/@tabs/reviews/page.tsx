import { getProductNameDataByProductUuid } from '@/actions/product-service';
import ProductDetailTabs from '@/components/pages/productDetail/ProductDetailTabs';

export default async function page({
  params,
}: {
  params: Promise<{ productUuid: string }>;
}) {
  const productUuid = (await params).productUuid;
  let product;
  try {
    product = await getProductNameDataByProductUuid(productUuid);
  } catch {
    return null;
  }

  return (
    <>
      <ProductDetailTabs tabId={productUuid}></ProductDetailTabs>
      reviews
    </>
  );
}
