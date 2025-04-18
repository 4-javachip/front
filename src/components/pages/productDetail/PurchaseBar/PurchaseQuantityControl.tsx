import MinusIcon from '@/components/ui/icons/MinusIcon';
import PlusIcon from '@/components/ui/icons/PlusIcon';
import { SelectedOptionWithNames } from '@/types/storeDataTypes';
import React from 'react';

export default function PurchaseQuantityControl({
  option,
  onQuantityChange,
}: {
  option: SelectedOptionWithNames;
  onQuantityChange: (
    productOptionUuid: string,
    action: 'increase' | 'decrease'
  ) => void;
}) {
  const handleDecrease = () => {
    onQuantityChange(option.productOptionUuid, 'decrease');
  };

  const handleIncrease = () => {
    onQuantityChange(option.productOptionUuid, 'increase');
  };
  return (
    <>
      <button
        type="button"
        disabled={option.quantity <= 1}
        name="decrease"
        onClick={handleDecrease}
        className={`flex justify-center items-center 
            ${option.quantity === 1 ? 'opacity-40' : 'cursor-pointer'}`}
      >
        <MinusIcon />
      </button>
      <p className="font-body font-semibold w-10 text-center">
        {option.quantity}
      </p>

      <button
        type="button"
        name="increase"
        onClick={handleIncrease}
        className="flex justify-center items-center cursor-pointer"
      >
        <PlusIcon />
      </button>
    </>
  );
}
