import { getProductListData } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import ProductSortMenu from '@/components/pages/products/ProductSortMenu';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const INITIAL_PAGE = 1;
  const PAGE_SIZE = 10;

  const { page } = await searchParams;
  const pageParam = Array.isArray(page) ? page[0] : page;
  const pageNumber = pageParam ? Number(pageParam) : INITIAL_PAGE;

  const initialProducts = await getProductListData({
    page: pageNumber,
    pageSize: PAGE_SIZE,
  });

  // console.log('Initial products:', initialProducts, pageNumber);

  return (
    <main>
      <ProductSortMenu />
      <ProductList initialProducts={initialProducts} page={pageNumber} />
    </main>
  );
}
