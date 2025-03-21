import ProductCarouselItem from './ProductCarouselItem';

export default function ProductCarousel() {
  return (
    <div className="flex flex-col container gap-[30px]">
      <p className="font-inter font-semibold text-[22px]">Ways of Working</p>
      <div
        className="flex flex-row gap-[18px] overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        <ProductCarouselItem isOnSale={true} />
        <ProductCarouselItem isOnSale={false} />
        <ProductCarouselItem isOnSale={true} />
      </div>
    </div>
  );
}
