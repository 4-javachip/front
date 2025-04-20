import PolicySection from '@/components/pages/productDetail/PolicySection';

export default function ProductDetailLayout({
  children,
  tabs,
}: {
  children: React.ReactNode;
  tabs: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      {children}
      <div className="flex flex-col gap-10">
        {tabs}
        <hr />
        <PolicySection />
      </div>
    </main>
  );
}
