import { getProductListData } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: Promise<{ page: string }> };
}) {
  const INITIAL_PAGE = 1;
  const PAGE_SIZE = 10;

  const initialProducts = await getProductListData({
    page: INITIAL_PAGE,
    pageSize: PAGE_SIZE,
  });

  const page = searchParams.page || INITIAL_PAGE;
  const pageNumber = Number(page);

  return (
    <main>
      <ProductSortMenu />
      <ProductList
        page={pageNumber}
        initialProducts={initialProducts.content}
        initialHasNext={initialProducts.hasNext}
        pageSize={PAGE_SIZE}
      />
    </main>
  );
}
