import HeaderTop from '@/components/layouts/header/HeaderTop';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderTop />
      <div className="pt-15">{children}</div>
    </>
  );
}
