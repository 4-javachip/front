import ProductCarouselItem from './ProductCarouselItem';

export default function ProductCarousel() {
  return (
    <div className="flex flex-col container overflow-x-auto scrollbar gap-[30px]">
      <p className="font-inter font-semibold text-[22px]">Ways of Working</p>
      <div className="flex flex-row gap-[18px]">
        <ProductCarouselItem />
        <ProductCarouselItem />
        <ProductCarouselItem />
      </div>
    </div>
  );
}
