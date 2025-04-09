import Image from 'next/image';
import React from 'react';
import ProductList from '../products/ProductList';
import { EventDataType } from '@/types/EventResponseDataType';
import { getEventProductDatasByEventUuid } from '@/actions/event-service';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import { getProductNameDataByProductUuid } from '@/actions/product-service';

export default async function EventSection({
  eventsData,
}: {
  eventsData: EventDataType;
}) {
  const eventUuid = eventsData.eventUuid;
  const eventProducts = await getEventProductDatasByEventUuid(eventUuid);
  const content = eventProducts.content;
  // console.log(content);
  const productNameDataList: ProductNameDataType[] = await Promise.all(
    content.map((item) => getProductNameDataByProductUuid(item.productUuid))
  );

  return (
    <>
      <Image
        src={eventsData.imageUrl}
        alt={eventsData.description}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
      />
      {/* 기획전 유의사항 */}
      <ProductList products={productNameDataList} />
    </>
  );
}
