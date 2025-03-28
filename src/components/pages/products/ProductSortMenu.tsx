'use client';
import DropDownModal from '@/components/ui/dropdown/DropDownModal';
import { Suspense } from 'react';

export default function ProductSortMenu() {
  return (
    <section className="padded pt-4 flex justify-end">
      <Suspense fallback={<div></div>}>
        <DropDownModal />
      </Suspense>
    </section>
  );
}