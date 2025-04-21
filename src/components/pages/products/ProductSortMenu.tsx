'use client';

import SmallDropDownModal from '@/components/ui/dropdown/SmallDropDownModal';
import { productSortOptions } from '@/data/initialDatas';
import { Suspense } from 'react';

export default function ProductSortMenu() {
  return (
    <section className="padded pt-4 flex justify-end">
      <Suspense fallback={<div></div>}>
        <SmallDropDownModal sortOptions={productSortOptions} />
      </Suspense>
    </section>
  );
}
