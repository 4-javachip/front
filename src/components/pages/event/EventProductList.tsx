'use client';

import ProductItem from '../../ui/productItem/ProductItem';
import Loader from '@/components/ui/loader';
import useInfiniteProductList from '@/hooks/useInfiniteProductList';
import { getEventProductDatasByEventUuid } from '@/actions/event-service';
import { getProductNameDataByProductUuid } from '@/actions/product-service';

export default function EventProductList({ eventUuid }: { eventUuid: string }) {
  const {
    loaderRef,
    items: products,
    isLoading,
    isParamsLoading,
    hasMore,
  } = useInfiniteProductList({
    params: eventUuid,
    fetchPageData: async (page, eventUuid) => {
      const { data: res } = await getEventProductDatasByEventUuid({
        eventUuid,
        page,
      });
      const productList = await Promise.all(
        res.content.map((item) =>
          getProductNameDataByProductUuid(item.productUuid)
        )
      );
      return { content: productList, hasNext: res.hasNext };
    },
  });

  return (
    <section className="padded py-6 flex justify-center flex-col">
      {isParamsLoading ? (
        <div className="h-80 pt-4 w-full flex justify-center items-center">
          <Loader size="10" />
        </div>
      ) : products.length === 0 ? (
        <div className="h-80 pt-4 w-full flex justify-center items-center">
          <p className="text-lightGray-6">상품이 없습니다.</p>
        </div>
      ) : (
        <>
          <ul className="w-full grid grid-cols-2 gap-4 min-h-[80vh]">
            {products.map((product) => (
              <ProductItem
                key={product.productUuid}
                productData={product}
                size={800}
              />
            ))}
          </ul>
          {!isLoading && hasMore && <div ref={loaderRef} className="h-20" />}
          {isLoading && (
            <div className="h-10 pt-4 w-full flex justify-center">
              <Loader size="10" />
            </div>
          )}
        </>
      )}
    </section>
  );
}

// import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
// import ProductlItem from '../../ui/productItem/ProductItem';
// import { useEffect, useRef, useState } from 'react';
// import { getProductNameDataByProductUuid } from '@/actions/product-service';
// import Loader from '@/components/ui/loader';
// import { useRouter } from 'next/navigation';
// import { getEventProductDatasByEventUuid } from '@/actions/event-service';

// export default function EventProductList({ eventUuid }: { eventUuid: string }) {
//   const router = useRouter();
//   const loaderRef = useRef<HTMLDivElement | null>(null);

//   const [page, setPage] = useState(1);
//   const [products, setProducts] = useState<ProductNameDataType[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isParamsLoading, setIsParamsLoading] = useState(true);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsParamsLoading(true);
//       setIsLoading(false);
//       setPage(1);

//       const { data: res } = await getEventProductDatasByEventUuid({
//         eventUuid,
//         page,
//       });

//       const productNameDataList: ProductNameDataType[] = await Promise.all(
//         res.content.map((item) =>
//           getProductNameDataByProductUuid(item.productUuid)
//         )
//       );

//       setProducts(productNameDataList);
//       setHasMore(res.hasNext);
//       setIsParamsLoading(false);
//     };

//     fetchData();
//   }, [eventUuid]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       const { data: res } = await getEventProductDatasByEventUuid({
//         eventUuid,
//         page,
//       });
//       const productNameDataList: ProductNameDataType[] = await Promise.all(
//         res.content.map((item) =>
//           getProductNameDataByProductUuid(item.productUuid)
//         )
//       );
//       setProducts((prev) => {
//         const newItems = productNameDataList.filter(
//           (item) => !prev.some((p) => p.productUuid === item.productUuid)
//         );
//         return [...prev, ...newItems];
//       });
//       setHasMore(res.hasNext);
//       setIsLoading(false);
//     };

//     fetchData();
//   }, [page]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting && !isLoading && hasMore) {
//           const nextPage = page + 1;
//           setPage(nextPage);
//         }
//       },
//       { threshold: 1 }
//     );

//     const current = loaderRef.current;
//     if (current) observer.observe(current);
//     return () => {
//       if (current) observer.unobserve(current);
//     };
//   }, [loaderRef, isLoading, hasMore, page, router]);

//   return (
//     <section className="padded py-6 flex justify-center flex-col">
//       {isParamsLoading ? (
//         <div className="h-80 pt-4 w-full flex justify-center items-center">
//           <Loader size="10" />
//         </div>
//       ) : products.length === 0 && page === 1 ? (
//         <div className="h-80 pt-4 w-full flex justify-center items-center">
//           <p className="text-lightGray-6">상품이 없습니다.</p>
//         </div>
//       ) : (
//         <>
//           <ul className="w-full grid grid-cols-2 gap-4 min-h-[80vh]">
//             {products.map((product) => (
//               <ProductlItem
//                 key={product.productUuid}
//                 productData={product}
//                 size={800}
//               />
//             ))}
//           </ul>
//           {!isLoading && hasMore && (
//             <div
//               ref={loaderRef}
//               className="flex justify-center items-center h-20"
//             ></div>
//           )}
//           {isLoading && (
//             <div className="h-10 pt-4 w-full flex justify-center">
//               <Loader size="10" />
//             </div>
//           )}
//         </>
//       )}
//     </section>
//   );
// }
