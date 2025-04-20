import PolicySection from '@/components/pages/productDetail/PolicySection';
import ProductDetailTabs from '@/components/pages/productDetail/ProductDetailTabs';

export default function ProductDetailLayout({
  children,
  description,
  reviews,
}: {
  children: React.ReactNode;
  description: React.ReactNode;
  reviews: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      {children}

      <div className="flex flex-col gap-10">
        <ProductDetailTabs />
        {description}
        <hr />
        {reviews}
        <hr />
        <PolicySection />
      </div>
    </main>
  );
}
