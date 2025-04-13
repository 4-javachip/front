import ShippingAddressHeader from '@/components/pages/ShippingAddress/ShippingAddressHeader';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ShippingAddressHeader />
      <div className="pt-15">{children}</div>
    </>
  );
}
