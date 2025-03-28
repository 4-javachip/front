interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantityControl({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityControlProps) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md w-24 justify-between px-2">
      <button
        type="button"
        onClick={onDecrease}
        className="text-xl"
        aria-label="수량 감소"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="text-xl"
        aria-label="수량 증가"
      >
        +
      </button>
    </div>
  );
}
