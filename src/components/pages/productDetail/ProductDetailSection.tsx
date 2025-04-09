import {
  ProductDescriptionType,
  ProductNameDataType,
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';
import PolicySection from './PolicySection';
import ProductDesc from './ProductDesc';
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';
import {
  getDescriptionDataByProductUuid,
  getOptionDatasByProductUuid,
  getThumbnailDatasByProductUuid,
} from '@/actions/product-service';

export default async function ProductDetailSection({
  product,
}: {
  product: ProductNameDataType;
}) {
  let thumbnails = [] as ProductThumbnailDataType[];
  let options = [] as ProductOptionType[];
  let description = {
    productUuid: '',
    description: '',
    detailDescription: '',
  } as ProductDescriptionType;

  try {
    thumbnails = await getThumbnailDatasByProductUuid(product.productUuid);
    options = await getOptionDatasByProductUuid(product.productUuid);
    description = await getDescriptionDataByProductUuid(product.productUuid);
  } catch (error) {
    console.log('데이터 페칭 에러');
  }
  const option = options[0];

  return (
    <>
      <ProductImg thumbnails={thumbnails} />
      <div className="flex flex-col gap-10 padded">
        <ProductInfo
          name={product.name}
          price={option.price}
          totalPrice={option.totalPrice}
          discountRate={option.discountRate}
          description={description.description}
          best={product.best}
          new={product.new}
        />
        <ProductDesc {...description} />
        <PolicySection />
      </div>
    </>
  );
}
