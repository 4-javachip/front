export default function CartPrice({
  price,
  salePrice,
  discountRate,
}: {
  price: number;
  salePrice?: number;
  discountRate?: number;
}) {
  return (
    <div>
      {salePrice && discountRate !== 0 ? (
        <>
          <p className="font-body text-xs text-lightGray-6 line-through">
            {price.toLocaleString()}원
          </p>
          <p className="font-body font-sm font-semibold">
            {salePrice.toLocaleString()}원
          </p>
          {/* <p className="absolute bottom-0 right-0 font-sd-gothic text-green font-bold">
            {discountRate}%
          </p> */}
        </>
      ) : (
        <p className="font-sd-gothic font-bold">{price.toLocaleString()}원</p>
      )}
    </div>
  );
}
