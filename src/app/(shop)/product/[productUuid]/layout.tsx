import PurchaseBar from '@/components/pages/productDetail/PurchaseBar/PurchaseBar';

export default function ProductDetailLayout({
  children,
  tabs,
}: {
  children: React.ReactNode;
  tabs: React.ReactNode;
}) {
  return (
    <>
      {tabs}
      {children}
    </>
  );
}
