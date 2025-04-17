import MinusIcon from '@/components/ui/icons/MinusIcon';
import PlusIcon from '@/components/ui/icons/PlusIcon';
import React from 'react';

export default function PurchaseQuantityControl({
  quantity,
}: {
  quantity: number;
}) {
  return (
    <>
      <button
        type="button"
        // disabled={quantity <= 1}
        name="decrease"
        // onClick={() => handleQuantityChange('decrease')}
        className={`flex justify-center items-center cursor-pointer
            ${quantity === 1 && 'opacity-40'}`}
      >
        <MinusIcon />
      </button>
      <p className="font-body font-semibold w-10 text-center">{quantity}</p>

      <button
        type="button"
        name="increase"
        // onClick={() => handleQuantityChange('increase')}
        className="flex justify-center items-center cursor-pointer"
      >
        <PlusIcon />
      </button>
    </>
  );
}
