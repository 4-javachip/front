import PerchaseBar from '@/components/pages/product-detail/PerchaseBar';
import PolicySection from '@/components/pages/product-detail/PolicySection';
import ProductDescSection from '@/components/pages/product-detail/ProductDescSection';
import ProductImg from '@/components/pages/product-detail/ProductImg';
import ProductInfoSection from '@/components/pages/product-detail/ProductInfoSection';

export default function ProductDetail() {
  return (
    <main className="flex flex-col">
      <PerchaseBar />

      <ProductImg />
      <div className="flex flex-col gap-10 px-6 pb-3">
        <ProductInfoSection />
        <ProductDescSection />
        <PolicySection />
      </div>
    </main>
  );
}
