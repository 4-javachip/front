import { CommonLayout } from '@/components/layouts/CommonLayout';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CommonLayout.SectionInnerPadding className="pt-32">
        {children}
      </CommonLayout.SectionInnerPadding>
    </>
  );
}
