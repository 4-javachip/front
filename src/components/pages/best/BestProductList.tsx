'use client';

import useInfiniteProductList from '@/hooks/useInfiniteProductList';
import { getProductNameDataByProductUuid } from '@/actions/product-service';
import { getProductDataType } from '@/types/RequestDataTypes';
import { getBestProductsByCategoryId } from '@/actions/best-service';

import ProductItem from '@/components/ui/products/ProductItem';
import BestRankIcon from '@/components/ui/icons/BestRankIcon';
import { CommonLoader } from '@/components/ui/loaders/CommonLoader';

export default function BestProductList({
  params,
}: {
  params?: getProductDataType;
}) {
  const { items: products, isParamsLoading } = useInfiniteProductList({
    fetchPageData: async (page, p) => {
      const categoryId = p?.categoryId as number;
      const { data: bestProductDatas } = await getBestProductsByCategoryId(
        categoryId
      );
      const productList = await Promise.all(
        bestProductDatas.map((item) =>
          getProductNameDataByProductUuid(item.productUuid)
        )
      );
      return { content: productList, hasNext: false };
    },
    params,
  });

  return (
    <section className="padded py-6 flex justify-center flex-col">
      {isParamsLoading ? (
        <CommonLoader />
      ) : products.length === 0 ? (
        <div className="h-80 pt-4 w-full flex justify-center items-center">
          <p className="text-lightGray-6">상품이 없습니다.</p>
        </div>
      ) : (
        <>
          <ul className="w-full grid grid-cols-2 gap-4 min-h-[80vh]">
            {products.map((product, index) => (
              <figure key={product.productUuid} className="relative">
                <BestRankIcon index={index + 1} />
                <ProductItem productData={product} size={800} />
              </figure>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
