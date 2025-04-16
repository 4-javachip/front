export default function CartPrice({
  price,
  salePrice,
  discountRate,
  quantity,
}: {
  price: number;
  salePrice?: number;
  discountRate?: number;
  quantity: number;
}) {
  return (
    <div>
      {salePrice && discountRate !== 0 ? (
        <>
          <p className="font-body text-xs text-lightGray-6 line-through">
            {(price * quantity).toLocaleString()}원
          </p>
          <p className="font-body font-sm font-semibold">
            {(salePrice * quantity).toLocaleString()}원
          </p>
          {/* <p className="absolute bottom-0 right-0 font-sd-gothic text-green font-bold">
            {discountRate}%
          </p> */}
        </>
      ) : (
        <p className="font-sd-gothic font-bold">
          {(price * quantity).toLocaleString()}원
        </p>
      )}
    </div>
  );
}
