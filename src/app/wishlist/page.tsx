import { getProductNameDataByProductUuid } from '@/actions/product-service';
import { getWishProducts } from '@/actions/wishlist-service';
import EmptySection from '@/components/layouts/EmptySection';
import ProductItem from '@/components/ui/products/ProductItem';
import { ProductNameDataType } from '@/types/ProductResponseDataTypes';

export default async function WishListPage() {
  const wishlistProducts = await getWishProducts();

  if (!wishlistProducts || wishlistProducts.length === 0) {
    return (
      <EmptySection
        title="찜한 상품이 없습니다."
        description="마음에 드는 상품을 찜해보세요!"
      />
    );
  }

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
