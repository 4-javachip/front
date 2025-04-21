import { getProductNameDataByProductUuid } from '@/actions/product-service';
import { getWishProducts } from '@/actions/wishlist-service';
import ProductItem from '@/components/ui/products/ProductItem';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';
import React from 'react';

export default async function WishListPage() {
  const wishlistProducts = await getWishProducts();

  const productNameList: ProductNameDataType[] = await Promise.all(
    wishlistProducts.map(async ({ productUuid }) => {
      const productData = await getProductNameDataByProductUuid(productUuid);
      return { ...productData, productUuid };
    })
  );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">찜한 상품 목록</h1>
      <ul className="w-full grid grid-cols-2 gap-4 min-h-[80vh]">
        {productNameList.map((product, i) => (
          <div key={i} className="text-sm text-gray-700">
            <ProductItem productData={product} size={800} />
          </div>
        ))}
      </ul>
    </main>
  );
}
