import { getDescriptionDataByProductUuid } from '@/actions/product-service';
import ProductDesc from '@/components/pages/productDetail/ProductDesc';
import ProductDetailTabs from '@/components/pages/productDetail/ProductDetailTabs';
import { ProductDescriptionType } from '@/types/ProductResponseDataTypes';

export default async function page({
  params,
}: {
  params: Promise<{ productUuid: string }>;
}) {
  const productUuid = (await params).productUuid;
  let description = {
    productUuid: '',
    description: '',
    detailDescription: '',
  } as ProductDescriptionType;
  try {
    description = await getDescriptionDataByProductUuid(productUuid);
  } catch {
    return null;
  }

  return (
    <>
      <ProductDetailTabs tabId={productUuid}></ProductDetailTabs>
      <ProductDesc {...description} />
    </>
  );
}
