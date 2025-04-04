import Footer from '@/components/layouts/footer/Footer';
import HeaderTop from '@/components/layouts/header/HeaderTop';
import { SidebarContextProvider } from '@/context/SideBarContext';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarContextProvider>
        <HeaderTop />
        <div className="pt-14">{children}</div>
      </SidebarContextProvider>
      <Footer />
    </>
  );
}
