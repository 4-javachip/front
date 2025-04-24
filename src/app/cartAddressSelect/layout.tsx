import CartAddressListHeader from '@/components/ui/CartSelectAddressList/CartAddressListHeader';

export default function addressSelectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartAddressListHeader />
      <div className="pt-15"> {children}</div>
    </>
  );
}
