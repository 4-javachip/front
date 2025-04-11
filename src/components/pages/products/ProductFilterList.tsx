import CategoryCarousel from './CategoryCarousel';
import CategoryOptionCarousel from './CategoryOptionCarousel';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import { getSubCategoriesByCategoryid } from '@/actions/category-service';

export default async function ProductFilterList({
  categoryItems,
  selectedCategory,
}: {
  categoryItems: {
    id: number;
    name: string;
  }[];
  selectedCategory?: CategoryMenuType;
}) {
  const subCategories = selectedCategory
    ? await getSubCategoriesByCategoryid(selectedCategory.id)
    : [];

  return (
    <>
      <CategoryCarousel categories={categoryItems} />
      {subCategories && (
        <CategoryOptionCarousel
          items={subCategories.map(({ id, name }) => ({
            id,
            name,
          }))}
          title="카테고리"
          type="subCategory"
        />
      )}
      {/* <CategoryOptionCarousel
        items={seasonList.map(({ seasonId, name }) => ({ id: seasonId, name }))}
        title="시즌"
        queryKey="season"
      /> */}
    </>
  );
}
