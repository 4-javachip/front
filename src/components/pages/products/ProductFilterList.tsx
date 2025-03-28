'use client';

import { productCategories, seasonList } from '@/data/dummyDatas';
import CategoryCarousel from './CategoryCarousel';
import CategoryOptionCarousel from './CategoryOptionCarousel';
import { useSearchParams } from 'next/navigation';

export default function ProductFilterList() {
  const searchParams = useSearchParams();
  const categoryId = Number(searchParams.get('category'));

  const selectedCategory = productCategories.find(
    (category) => category.id === categoryId
  );

  return (
    <>
      <CategoryCarousel categories={productCategories} />
      {selectedCategory?.subCategory &&
        selectedCategory.subCategory.length > 0 && (
          <CategoryOptionCarousel
            items={selectedCategory.subCategory.map(({ id, name }) => ({
              id,
              name,
            }))}
            title="카테고리"
            queryKey="subCategory"
          />
        )}
      <CategoryOptionCarousel
        items={seasonList.map(({ seasonId, name }) => ({ id: seasonId, name }))}
        title="시즌"
        queryKey="season"
      />
    </>
  );
}
