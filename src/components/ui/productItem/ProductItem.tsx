'use client';
import ItemThumb from '@/components/ui/productItem/ItemThumb';
import ProductLabelIcon from '@/components/ui/icons/ProductLabelIcon';
import ItemPrice from './ItemPrice';
import ItemName from './ItemName';

import { useEffect, useState } from 'react';
import {
  getProductOptionDatasByProductUuid,
  getThumbnailDatasByProductUuid,
} from '@/actions/product-service';
import {
  ProductListDataType,
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';

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
    stock: 0,
    price: 0,
    discountRate: 0,
    totalPrice: 0,
  });
  const [thumbNailData, setThumbNailData] =
    useState<ProductThumbnailDataType>();
  const [optionData, setOptionData] = useState<ProductOptionType>();

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
    const getOption = async (): Promise<void> => {
      // const data = await getProductOptionDatasByProductUuid(
      //   productData.productUuid
      // );
      // if (data === undefined) return;
      // console.log(data);
      // setOptionData(data);
    };
    getThumbnail();
    getOption();
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
