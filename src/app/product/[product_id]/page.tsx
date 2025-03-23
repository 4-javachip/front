import PerchaseBar from '@/components/pages/product-detail/PerchaseBar';
import ProductDetailSection from '@/components/pages/product-detail/ProductDetailSection';

export default function ProductDetail() {
  return (
    <main className="flex flex-col">
      <PerchaseBar />

      <ProductDetailSection />
    </main>
  );
}
