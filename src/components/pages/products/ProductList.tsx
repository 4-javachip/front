'use client';

import ProductItem from '../../ui/productItem/ProductItem';
import Loader from '@/components/ui/loader';
import useInfiniteProductList from '@/hooks/useInfiniteProductList';
import { getProductListData } from '@/actions/product-service';
import { getProductDataType } from '@/types/RequestDataTypes';
import { PAGE_SIZE } from '@/constants/constants';

export default function ProductList({
  params,
}: {
  params?: getProductDataType;
}) {
  const {
    loaderRef,
    items: products,
    isLoading,
    isParamsLoading,
    hasMore,
  } = useInfiniteProductList({
    fetchPageData: async (page, p) => {
      const res = await getProductListData({
        pageSize: PAGE_SIZE,
        page,
        categoryId: p?.categoryId,
        sortType: p?.sortType,
        keyword: p?.keyword,
        subCategoryId: p?.subCategoryId,
        seasonId: p?.seasonId,
      });
      if (!res.success)
        return {
          content: [],
          hasNext: false,
        };

      return { content: res.data!.content, hasNext: res.data!.hasNext };
    },
    params,
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
// import React, { useEffect, useRef, useState } from 'react';
// import { getProductListData } from '@/actions/product-service';
// import Loader from '@/components/ui/loader';
// import { useSearchParams, useRouter } from 'next/navigation';
// import { getProductDataType } from '@/types/RequestDataTypes';

// export default function ProductList({
//   params,
// }: {
//   params?: getProductDataType;
// }) {
//   // const searchParams = useSearchParams();
//   const router = useRouter();

//   const pageSize = 10;
//   const loaderRef = useRef<HTMLDivElement | null>(null);

//   // const initialPage = Number(searchParams.get('page')) || 1;

//   const [page, setPage] = useState(1);
//   const [products, setProducts] = useState<ProductNameDataType[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isParamsLoading, setIsParamsLoading] = useState(true);
//   const [hasMore, setHasMore] = useState(true);
//   console.log('page: ', page, 'hasmore: ', hasMore, 'isLoading: ', isLoading);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsParamsLoading(true);
//       setIsLoading(false);
//       setPage(1);

//       const res = await getProductListData({
//         pageSize,
//         page: 1,
//         categoryId: params?.categoryId,
//         sortType: params?.sortType,
//         keyword: params?.keyword,
//         subCategoryId: params?.subCategoryId,
//         seasonId: params?.seasonId,
//       });

//       setProducts(res.content);
//       setHasMore(res.hasNext);
//       setIsParamsLoading(false);
//     };

//     fetchData();
//   }, [params]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);

//       const res = await getProductListData({
//         pageSize,
//         page,
//         categoryId: params?.categoryId,
//         sortType: params?.sortType,
//         keyword: params?.keyword,
//         subCategoryId: params?.subCategoryId,
//         seasonId: params?.seasonId,
//       });
//       console.log(res);

//       setProducts((prev) => {
//         const newItems = res.content.filter(
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
//           // router.push(`/products?page=${nextPage}`, { scroll: false });
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
