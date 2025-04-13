import QuantityControl from '../../cart/QuantityControl';

export default function PurchaseItem() {
  return (
    <div className="w-full padded py-5 bg-lightGray-2 mb-4">
      <p className="text-lightGray-1 text-sm">SS 시그니처 나수 텀블러 355ml</p>
      <div className="flex flex-row justify-between pt-4">
        <QuantityControl
          quantity={1}
          onDecrease={() => {}}
          onIncrease={() => {}}
        />
        <p className="font-bold font-sd-gothic">34,000원</p>
      </div>
    </div>
  );
}
