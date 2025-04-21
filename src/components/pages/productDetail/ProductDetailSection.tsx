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
import PurchaseBar from './PurchaseBar/PurchaseBar';

export default async function ProductDetailSection({
  product,
}: {
  product: ProductNameDataType;
}) {
  let thumbnails = [] as ProductThumbnailDataType[];
  let options = [] as ProductOptionType[];

  try {
    thumbnails = await getThumbnailDatasByProductUuid(product.productUuid);
    options = await getOptionDatasByProductUuid(product.productUuid);
  } catch (error) {
    console.log('데이터 페칭 에러');
  }

  const option = options[0];

  if (thumbnails.length === 0) {
    thumbnails = [
      {
        id: -1,
        productUuid: product.productUuid,
        thumbnailUrl: '/images/no-image-icon.jpg',
        description: 'No image available',
        defaulted: false,
      },
    ];
  }

  return (
    <>
      <PurchaseBar options={options} productNameData={product} />
      <ProductImg thumbnails={thumbnails} />
      <div className="flex flex-col gap-10">
        <ProductInfo
          productUuid={product.productUuid}
          name={product.name}
          price={option.price}
          totalPrice={option.totalPrice}
          discountRate={option.discountRate}
          best={product.best}
          new={product.new}
        />
        <hr />
      </div>
    </>
  );
}
