export default function ItemPrice({
  price,
  salePrice,
  discountRate,
}: {
  price: number;
  salePrice?: number;
  discountRate?: number;
}) {
  return (
    <div className="relative">
      {salePrice && discountRate !== 0 ? (
        <>
          <p className="font-sd-gothic text-lightGray-6 line-through">
            {price.toLocaleString()}원
          </p>
          <p className="font-sd-gothic font-bold">
            {salePrice.toLocaleString()}원
          </p>
          <p className="absolute bottom-0 right-0 font-sd-gothic text-green font-bold">
            {discountRate}%
          </p>
        </>
      ) : (
        <p className="font-sd-gothic font-bold">{price.toLocaleString()}원</p>
      )}
    </div>
  );
}
