import {
  getEventDatas,
  getEventProductDatasByEventUuid,
} from '@/actions/event-service';
import { getProductNameDataByProductUuid } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import TextCarousel from '@/components/ui/carousels/TextCarousel';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';

export default async function page() {
  const eventsData = await getEventDatas();
  // console.log('eventsData: ', eventsData);
  const eventUuid = eventsData[0].eventUuid;
  const eventProducts = await getEventProductDatasByEventUuid(eventUuid);
  const content = eventProducts.content;
  console.log('content: ', content);

  const eventItems = eventsData.map((event) => ({
    id: event.eventUuid,
    name: event.name,
  }));

  const productNameDataList: ProductNameDataType[] = await Promise.all(
    content.map((item) => getProductNameDataByProductUuid(item.productUuid))
  );

  return (
    <main>
      <section className="flex flex-row container py-4.5">
        <TextCarousel items={eventItems} queryKey="category" />
      </section>
      <hr className="border-t-1 border-lightGray-6" />

      <ProductList products={productNameDataList} />
    </main>
  );
}
