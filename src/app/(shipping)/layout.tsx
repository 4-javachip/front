import AddShippingAddressHeader from '@/components/pages/ShippingAddress/AddShippingAddressHeader';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AddShippingAddressHeader />
      {children}
    </>
  );
}
