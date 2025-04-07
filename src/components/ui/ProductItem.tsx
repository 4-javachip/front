'use client';
import ItemThumb from '@/components/ui/ItemThumb';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ItemPrice from './ItemPrice';
import ItemName from './ItemName';
import {
  ProductListDataType,
  ProductThumbnailDataType,
} from '@/types/ResponseDataTypes';
import { useEffect, useState } from 'react';
import { getThumbnailDatasByProductUuid } from '@/actions/product-service';

export default function ProductlItem({
  productData,
  size,
}: {
  productData: ProductListDataType;
  size: number;
}) {
  const [productItem, setProductItem] = useState({
    productName: productData.name,
    productUuid: productData.productUuid,
    thumbnailUrl: '',
    description: '',
  });

  const [thumbNailData, setThumbNailData] =
    useState<ProductThumbnailDataType>();

  useEffect(() => {
    const getThumbnail = async (): Promise<void> => {
      const data = await getThumbnailDatasByProductUuid(
        productData.productUuid
      );
      // console.log('data', data);
      const thumbnailData = data.find((item) => item.defaulted === true);
      if (thumbnailData === undefined) return;
      console.log('filter', thumbnailData);
      setProductItem({
        ...productItem,
        thumbnailUrl: thumbnailData.thumbnailUrl,
        description: thumbnailData.description,
      });
      setThumbNailData(thumbnailData);
    };
    getThumbnail();
  }, [productData]);

  return (
    <li className="flex flex-col gap-3 mb-12" style={{ maxWidth: size }}>
      {thumbNailData !== undefined && (
        <ItemThumb
          productUuid={productData.productUuid}
          thumbnail={thumbNailData}
          size={size}
        />
      )}

      <div className="flex flex-col gap-2">
        {/* <ProductLabelIcon isBest={label.isBest} isNew={label.isNew} /> */}
        <ItemName id={productData.productUuid} name={productData.name} />
      </div>

      {/* <ItemPrice
      price={price}
      salePrice={salePrice}
      discountRate={discountRate}
      /> */}
    </li>
  );
}
