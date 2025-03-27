'use client';

import { ProductCategoryType } from '@/types/ResponseDataTypes';
import TextCarousel from '@/components/ui/carousels/TextCarousel';

export default function CategoryCarousel({
  categories,
}: {
  categories: ProductCategoryType[];
}) {
  return (
    <>
      <section className="flex flex-row container py-4.5">
        <TextCarousel items={categories} queryKey="category" />
      </section>
      <hr className="border-t-1 border-lightGray-6" />
    </>
  );
}
